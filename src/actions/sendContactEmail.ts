"use server";

import { Resend } from "resend";
import { z } from "zod";

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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return { success: false, error: "Email service is not configured." };
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "bestplyike@gmail.com";
  const from =
    process.env.RESEND_FROM_EMAIL ??
    "BEST PLY Contact <onboarding@resend.dev>";

  const { name, email, phone, message } = parsed.data;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
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
  } catch (err) {
    console.error("sendContactEmail failed:", err);
    return { success: false, error: "Failed to send email." };
  }
}
