"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { Check, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("LocaleSwitcher");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    function onPointerDown(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.closest("[data-locale-switcher]")) return;
      setIsOpen(false);
    }
    window.addEventListener("pointerdown", onPointerDown, { capture: true });
    return () =>
      window.removeEventListener("pointerdown", onPointerDown, {
        capture: true,
      });
  }, [isOpen]);

  function switchLocale(nextLocale: Locale) {
    router.replace(pathname, { locale: nextLocale });
    setIsOpen(false);
  }

  return (
    <div className="relative" data-locale-switcher>
      <button
        type="button"
        aria-label={t("label")}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((o) => !o)}
        className="flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 md:h-10 md:w-10"
        title={t("label")}
      >
        <Globe className="size-5" strokeWidth={1.75} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border border-white/10 bg-secondary/95 backdrop-blur-sm shadow-2xl">
          {routing.locales.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => switchLocale(l)}
              className="flex w-full items-center justify-between px-3 py-2.5 text-sm text-white/85 hover:bg-white/10"
            >
              <span>{t(l)}</span>
              {l === locale && <Check className="size-4 text-white/70" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
