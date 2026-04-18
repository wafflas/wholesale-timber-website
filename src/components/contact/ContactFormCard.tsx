import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/contact/ContactForm";

export default async function ContactFormCard() {
  const t = await getTranslations("ContactPage");

  return (
    <div className="rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgb(0,0,0,0.04)] sm:p-6 lg:col-span-2">
      <h2 className="text-[1.05rem] font-semibold text-[#2b2623]">
        {t("formTitle")}
      </h2>
      <p className="mt-1.5 text-[0.82rem] leading-relaxed text-[#2b2623]/50">
        {t("formSubtitle")}
      </p>
      <ContactForm />
    </div>
  );
}
