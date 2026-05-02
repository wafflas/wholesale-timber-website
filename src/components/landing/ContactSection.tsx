import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ContactSectionClient } from "./ContactSectionClient";

const primaryPhone = { display: "6932 262 910", href: "tel:+306932262910" };

export default async function ContactSection() {
  const t = await getTranslations("ContactSection");

  return (
    <section
      className="relative isolate flex min-h-[min(72vh,560px)] items-center justify-center overflow-hidden py-20 sm:py-24 lg:min-h-[min(80vh,700px)] lg:py-32"
      aria-labelledby="contact-section-heading"
    >
      <Image
        src="/contactBackground.png"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority={false}
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <ContactSectionClient
        headingBefore={t("headingBefore")}
        headingAccent={t("headingAccent")}
        headingAfter={t("headingAfter")}
        subtitle={t("subtitle")}
        phoneDisplay={primaryPhone.display}
        phoneHref={primaryPhone.href}
        phoneAria={t("phoneAria")}
        contactCta={t("contactCta")}
      />
    </section>
  );
}
