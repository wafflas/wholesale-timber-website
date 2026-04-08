"use client";

import { useParams } from "next/navigation";
import { normalizeLocale, type Locale } from "@/lib/locale";

export function useLocale(): Locale {
  const params = useParams<{ locale?: string }>();
  return normalizeLocale(params?.locale);
}
