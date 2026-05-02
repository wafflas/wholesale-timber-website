import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import localFont from "next/font/local";
import { Golos_Text } from "next/font/google";
import { cookies } from "next/headers";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { routing } from "@/i18n/routing";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroller } from "@/components/layout/SmoothScroller";
import { ScrollToTopButton } from "@/components/shared/ScrollToTopButton";
import { CookieConsent } from "@/components/shared/CookieConsent";
import { GoogleAnalytics } from "@/components/shared/GoogleAnalytics";
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

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
    "http://localhost:3000";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `BEST PLY I.K.E | ${t("title")}`,
      template: "BEST PLY I.K.E | %s",
    },
    description: t("description"),
    manifest: "/favicon_io/site.webmanifest",
    alternates: {
      canonical: "./",
      languages: Object.fromEntries(routing.locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: {
        default: `BEST PLY I.K.E | ${t("title")}`,
        template: "BEST PLY I.K.E | %s",
      },
      description: t("description"),
      url: `/${locale}`,
      siteName: "BEST PLY I.K.E.",
      type: "website",
      images: [
        {
          url: "/Logo.svg",
          alt: "BEST PLY I.K.E.",
          type: "image/svg+xml",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: {
        default: `BEST PLY I.K.E | ${t("title")}`,
        template: "BEST PLY I.K.E | %s",
      },
      description: t("description"),
      images: ["/Logo.svg"],
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
  const tCommon = await getTranslations({ locale, namespace: "Common" });
  const cookieStore = await cookies();
  const consentCookie = cookieStore.get("bestply-cookie-consent")?.value;
  const hasCookieChoice = Boolean(consentCookie);
  const hasAnalyticsConsent = consentCookie === "accepted";

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
        <GoogleAnalytics hasConsent={hasAnalyticsConsent} />
        <NuqsAdapter>
          <NextIntlClientProvider>
            <SmoothScroller>
              <NavBar />
              <div className="flex min-h-dvh w-full min-w-0 flex-col">
                {children}
                <Footer />
              </div>
              <ScrollToTopButton ariaLabel={tCommon("backToTop")} />
              <CookieConsent hasChoice={hasCookieChoice} />
            </SmoothScroller>
          </NextIntlClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
