import Image from "next/image";
import { MessageCircle, PhoneCall } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

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

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-4 text-center lg:max-w-4xl lg:px-8">
        <h2
          id="contact-section-heading"
          className="font-golos-text text-[clamp(1.65rem,4.5vw,2.75rem)] font-semibold leading-tight tracking-hero text-white lg:text-5xl xl:text-6xl"
        >
          <span className="text-white">{t("headingBefore")}</span>
          <span className="text-primary">{t("headingAccent")}</span>
          <span className="text-white">{t("headingAfter")}</span>
        </h2>

        <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/80 sm:text-base lg:mt-8 lg:max-w-2xl lg:text-lg xl:text-xl">
          {t("subtitle")}
        </p>
        <div className="mt-auto flex w-full max-w-md flex-col space-y-20 self-center pt-10 sm:pt-12 lg:max-w-none lg:space-y-0">
          <div className="flex flex-col gap-3 items-center mt-10 w-full lg:flex-row lg:justify-center lg:gap-5 lg:flex-wrap">
            <Link
              href={primaryPhone.href}
              className="flex w-full items-center gap-2 justify-center rounded-xl bg-primary py-4 text-center text-sm font-bold tracking-wide text-white transition-opacity hover:opacity-90 active:opacity-80 lg:w-auto lg:min-w-[220px] lg:px-8 lg:py-5 lg:text-base"
              aria-label={`${t("phoneAria")} ${primaryPhone.display}`}
            >
              <PhoneCall className="size-5 shrink-0" aria-hidden="true" />
              {primaryPhone.display}
            </Link>

            <Link
              href="/contact"
              className="flex w-full items-center justify-center rounded-xl border border-white bg-transparent py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10 active:bg-white/15 lg:w-auto lg:min-w-[220px] lg:px-8 lg:py-5 lg:text-base"
              aria-label={t("contactCta")}
            >
              {t("contactCta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
