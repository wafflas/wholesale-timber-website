"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { SmoothScroller } from "@/components/SmoothScroller";
import { Golos_Text } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import enMessages from "../../messages/en.json";
import elMessages from "../../messages/el.json";

const golosText = Golos_Text({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-golos-text",
  display: "swap",
});

const fontHero = localFont({
  src: "../../public/fonts/PostNoBillsJaffna-SemiBold.ttf",
  weight: "600",
  variable: "--font-hero",
  display: "swap",
});

const copy = {
  el: {
    title: "Η σελίδα δεν βρέθηκε",
    body: "Η σελίδα που αναζητάτε ενδέχεται να έχει αφαιρεθεί, να έχει μετονομαστεί ή να μην είναι προσωρινά διαθέσιμη.",
    home: "ΕΠΙΣΤΡΟΦΗ ΣΤΗΝ ΑΡΧΙΚΗ",
  },
  en: {
    title: "Page not found",
    body: "The page you're looking for may have been removed, renamed, or is temporarily unavailable.",
    home: "BACK TO HOME",
  },
} as const;

export default function NotFound() {
  const pathname = usePathname() ?? "";
  const segment = pathname.split("/").filter(Boolean)[0];
  const locale =
    segment && routing.locales.includes(segment as (typeof routing.locales)[number])
      ? (segment as keyof typeof copy)
      : routing.defaultLocale;
      
  const t = copy[locale];
  const messages = locale === "el" ? elMessages : enMessages;

  return (
    <html lang={locale} className={`${golosText.variable} ${fontHero.variable}`}>
      <body className="font-golos-text antialiased text-foreground bg-background flex flex-col min-h-dvh">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SmoothScroller>
            <NavBar />
            <div className="flex flex-1 flex-col">
              <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center">
                 <h1 className="font-hero text-[8rem] leading-none text-primary/30 md:text-[12rem] lg:text-[15rem]">404</h1>
                 <p className="mt-6 text-2xl font-bold tracking-wide text-white md:text-3xl">{t.title}</p>
                 <p className="mt-4 text-sm text-[#d1d1d1]/70 max-w-md mx-auto md:text-base leading-relaxed">{t.body}</p>
                 <Link
                   href={`/${locale}`}
                   className="mt-10 inline-flex h-14 items-center justify-center rounded-xl bg-primary px-10 text-sm font-bold tracking-[0.15em] text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(172,141,91,0.2)] active:scale-[0.98]"
                 >
                   {t.home}
                 </Link>
              </main>
              <Footer />
            </div>
          </SmoothScroller>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
