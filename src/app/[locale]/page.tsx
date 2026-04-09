import { setRequestLocale } from "next-intl/server";
import { LandingPage } from "@/components/LandingPage";

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="relative flex min-h-[100dvh] flex-col">
      <LandingPage />
    </main>
  );
}
