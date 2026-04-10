import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import localFont from "next/font/local";
import { Golos_Text } from "next/font/google";
import { routing, type Locale } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroller } from "@/components/layout/SmoothScroller";
import "../globals.css";

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

export const viewport: Viewport = {
  viewportFit: "cover",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://bestply.gr";

  return {
    title: t("title"),
    description: t("description"),
    manifest: "/favicon_io/site.webmanifest",
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${baseUrl}/${l}`]),
      ),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${golosText.variable} ${fontHero.variable}`}
    >
      <body className="font-golos-text antialiased text-foreground bg-background">
        <NextIntlClientProvider>
          <SmoothScroller>
            <NavBar />
            <div className="flex min-h-dvh w-full min-w-0 flex-col">
              {children}
              <Footer />
            </div>
          </SmoothScroller>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
