import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["el", "en"],
  defaultLocale: "el",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

export function getLocalePath(path: string, locale: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === routing.defaultLocale) {
    return normalized;
  }
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function getLanguageAlternates(path: string): Record<string, string> {
  return Object.fromEntries(
    routing.locales.map((l) => [l, getLocalePath(path, l)]),
  );
}
