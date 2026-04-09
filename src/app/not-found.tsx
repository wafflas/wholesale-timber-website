"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

const copy = {
  el: {
    title: "Η σελίδα δεν βρέθηκε",
    body: "Η σελίδα που αναζητάτε ενδέχεται να έχει αφαιρεθεί, να έχει μετονομαστεί ή να μην είναι προσωρινά διαθέσιμη.",
    home: "Επιστροφή στην Αρχική",
  },
  en: {
    title: "Page not found",
    body: "The page you're looking for may have been removed, renamed, or is temporarily unavailable.",
    home: "Back to home",
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

  return (
    <html lang={locale}>
      <body className="font-sans antialiased text-white bg-[#0a0a0a]">
        <div className="flex min-h-[100dvh] flex-col items-center justify-center px-4 text-center">
          <h1 className="text-6xl font-bold tracking-tight">404</h1>
          <p className="mt-4 text-2xl font-semibold">{t.title}</p>
          <p className="mt-2 text-base text-neutral-400 max-w-md">{t.body}</p>
          <Link
            href={`/${locale}`}
            className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-neutral-100 px-6 font-semibold text-neutral-900 transition-colors hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
          >
            {t.home}
          </Link>
        </div>
      </body>
    </html>
  );
}
