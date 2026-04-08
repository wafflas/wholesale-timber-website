export const SUPPORTED_LOCALES = ["el", "en"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export function normalizeLocale(value?: string | null): Locale {
  if (value === "en") return "en";
  return "el";
}

