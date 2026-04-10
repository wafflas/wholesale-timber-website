"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(1),
});

interface ActionResult {
  success: boolean;
  error?: string;
}

export async function sendContactEmail(
  data: z.infer<typeof contactSchema>,
): Promise<ActionResult> {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: "Invalid form data." };
  }

  const { name, email, phone, message } = parsed.data;

  const { error } = await resend.emails.send({
    from: "BEST PLY Contact <onboarding@resend.dev>",
    to: "giannikakisgiwrgos@gmail.com", //testing email to change it later
    replyTo: email,
    subject: `New enquiry from ${name}`,
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <hr />
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Failed to send email." };
  }

  return { success: true };
}
