import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const SUPPORTED_LOCALES = ["el", "en"] as const;

const LOCALE_TO_METADATA: Record<string, Metadata> = {
  el: {
    title: "BEST PLY I.K.E. | Εισαγωγές & Εξαγωγές Ξυλείας",
    description:
      "BEST PLY I.K.E. — Αξιοπιστία στις εισαγωγές και εξαγωγές ξυλείας. Birch Plywood, Okoume, Poplar, Blockboard, OSB, PET MDF.",
    manifest: "/favicon_io/site.webmanifest",
  },
  en: {
    title: "BEST PLY I.K.E. | Timber Imports & Exports",
    description:
      "BEST PLY I.K.E. — Reliable timber imports & exports. Birch plywood, Okoume, Poplar, Blockboard, OSB, PET MDF.",
    manifest: "/favicon_io/site.webmanifest",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return LOCALE_TO_METADATA[locale] ?? LOCALE_TO_METADATA.el;
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!SUPPORTED_LOCALES.includes(locale as (typeof SUPPORTED_LOCALES)[number])) notFound();

  return (
    <>
      <NavBar />
      <div className="flex min-h-dvh flex-col">
        {children}
        <Footer />
      </div>
    </>
  );
}
