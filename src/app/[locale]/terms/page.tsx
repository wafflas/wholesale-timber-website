import { setRequestLocale, getTranslations } from "next-intl/server";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("TermsPage");

  return (
    <main className="mx-auto max-w-3xl px-5 py-24 sm:px-6 md:py-32">
      <h1 className="font-hero text-3xl tracking-hero text-white sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-6 text-sm leading-relaxed text-white/60">
        {t("body")}
      </p>
    </main>
  );
}
