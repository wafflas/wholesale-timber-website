import { notFound } from "next/navigation";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Golos_Text } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const SUPPORTED_LOCALES = ["el", "en"] as const;

const golosText = Golos_Text({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-golos-text",
  display: "swap",
});

const fontHero = localFont({
  src: "../../../public/fonts/PostNoBillsJaffna-SemiBold.ttf",
  weight: "600",
  variable: "--font-hero",
  display: "swap",
});

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
  const normalizedLocale = locale === "en" ? "en" : "el";

  return (
    <html lang={locale} className={`${golosText.variable} ${fontHero.variable}`}>
      <body className="font-golos-text antialiased text-foreground bg-background">
        <NavBar />
        <div className="flex min-h-dvh flex-col">
          {children}
          <Footer locale={normalizedLocale} />
        </div>
      </body>
    </html>
  );
}

