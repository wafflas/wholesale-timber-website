import Image from "next/image";
import { getTranslations } from "next-intl/server";
import SectionTitle from "./SectionTitle";
import { CompanyReveal } from "./CompanyReveal";
import { SITE_LOGO } from "@/lib/site";

export default async function Company() {
  const t = await getTranslations("CompanySection");

  return (
    <section id="company" className="bg-white py-8">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <CompanyReveal>
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
            <div>
              <div data-company-reveal>
                <SectionTitle
                  title={t("title")}
                  className="text-black sm:text-5xl"
                />
              </div>

              <div className="mt-8 space-y-6 text-[0.95rem] leading-relaxed text-black/65 sm:text-base lg:text-lg lg:leading-[1.85] xl:text-xl">
                <p data-company-reveal>
                  {t.rich("p1", {
                    b: (chunks) => (
                      <span className="font-semibold text-black">{chunks}</span>
                    ),
                  })}
                </p>
                <p data-company-reveal>
                  {t.rich("p2", {
                    b: (chunks) => (
                      <span className="font-semibold text-black">{chunks}</span>
                    ),
                  })}
                </p>
                <p data-company-reveal>
                  {t.rich("p3", {
                    b: (chunks) => (
                      <span className="font-semibold text-black">{chunks}</span>
                    ),
                  })}
                </p>
              </div>

              <div
                data-company-reveal
                className="mt-10 flex justify-center lg:justify-start"
              >
                <Image
                  src={SITE_LOGO}
                  alt="BEST PLY I.K.E."
                  width={240}
                  height={96}
                  className="h-auto w-[220px] sm:w-[240px] lg:w-[280px]"
                />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 items-start gap-4 sm:gap-5 lg:mt-0 lg:gap-6">
              <div
                data-company-reveal
                className="group relative w-full overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.18)] ring-1 ring-black/5 lg:rounded-2xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[3/4]">
                  <Image
                    src="/companyImage1.jpg"
                    alt="Company Image 1"
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              <div
                data-company-reveal
                className="mt-8 group relative w-full overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.18)] ring-1 ring-black/5 lg:mt-16 lg:rounded-2xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[3/4]">
                  <Image
                    src="/photo 2.webp"
                    alt={t("imageAlt2")}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </CompanyReveal>
      </div>
    </section>
  );
}
