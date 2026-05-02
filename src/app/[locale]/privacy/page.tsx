import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";

interface PrivacySection {
  title: string;
  body: string[];
  bullets?: string[];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PrivacyPage" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "./",
      languages: {
        el: "/el/privacy",
        en: "/en/privacy",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}/privacy`,
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("PrivacyPage");

  const updated = t("updated");
  const intro = t("intro");
  const sections = t.raw("sections") as PrivacySection[];

  return (
    <main className="min-h-screen bg-[#FAF9F7] text-[#1b1713] selection:bg-primary selection:text-white">
      <div className="mx-auto max-w-3xl px-5 py-24 sm:px-6 md:py-32">
        <h1 className="font-hero text-3xl tracking-hero text-[#1b1713] sm:text-4xl">
        {t("title")}
        </h1>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#1b1713]/55">
          {updated}
        </p>

        <p className="mt-6 text-sm leading-relaxed text-[#1b1713]/80">
          {intro}
        </p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
          <section key={section.title} className="space-y-4">
            <h2 className="text-lg font-semibold tracking-hero text-[#1b1713] sm:text-xl">
              {section.title}
            </h2>

            <div className="space-y-3 text-sm leading-relaxed text-[#1b1713]/75">
              {section.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {section.bullets ? (
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#1b1713]/75">
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
          </section>
          ))}
        </div>
      </div>
    </main>
  );
}
