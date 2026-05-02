import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";
//import BestPicks from "@/components/landing/BestPicks";
import Company from "@/components/landing/Company";
import ContactSection from "@/components/landing/ContactSection";
import PartnersSection from "@/components/landing/PartnersSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    alternates: {
      canonical: "./",
      languages: {
        el: "/el",
        en: "/en",
      },
    },
    openGraph: {
      url: `/${locale}`,
    },
  };
}

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
      {/* <BestPicks /> */}
      <Company />
      <PartnersSection />
      <ContactSection />
    </main>
  );
}
