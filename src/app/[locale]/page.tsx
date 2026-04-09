import { setRequestLocale } from "next-intl/server";
import { LandingPage } from "@/components/LandingPage";
import BestPicks from "@/components/BestPicks";
import Company from "@/components/Company";
import ContactSection from "@/components/ContactSection";
import PartnersSection from "@/components/PartnersSection";

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="relative flex min-h-[100dvh] w-full min-w-0 flex-col overflow-x-hidden">
      <LandingPage />
      <BestPicks />
      <Company />
      <PartnersSection />
      <ContactSection />
    </main>
  );
}
