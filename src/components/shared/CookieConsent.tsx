"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useRouter } from "next/navigation";
import { Cookie } from "lucide-react";

type ConsentValue = "accepted" | "rejected";

function isReducedMotionPreferred() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

interface CookieConsentProps {
  hasChoice: boolean;
}

export function CookieConsent({ hasChoice }: CookieConsentProps) {
  const t = useTranslations("CookieConsent");
  const locale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(() => !hasChoice);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const privacyHref = useMemo(() => "/privacy", []);

  useEffect(() => {
    if (hasChoice) setIsOpen(false);
  }, [hasChoice]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || !isOpen) return;

    if (isReducedMotionPreferred()) {
      gsap.set(el, { opacity: 1, y: 0, clearProps: "transform" });
      return;
    }

    gsap.fromTo(
      el,
      { opacity: 0, y: 42 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.25 },
    );
  }, [isOpen]);

  function closeWithAnimation(onComplete: () => void) {
    const el = rootRef.current;
    if (!el || isReducedMotionPreferred()) {
      onComplete();
      return;
    }

    gsap.to(el, {
      opacity: 0,
      y: 24,
      duration: 0.45,
      ease: "power2.in",
      onComplete,
    });
  }

  function handleChoice(value: ConsentValue) {
    if (isSubmitting) return;
    setIsSubmitting(true);

    fetch("/api/cookie-consent", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ value }),
    })
      .then(() => router.refresh())
      .catch(() => {})
      .finally(() => {
      closeWithAnimation(() => {
        setIsOpen(false);
        setIsSubmitting(false);
      });
      });
  }

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 z-[5000] w-full">
      <div
        ref={rootRef}
        className="border-t border-white/10 bg-[#151311] shadow-[0_-14px_30px_-18px_rgba(0,0,0,0.75)] backdrop-blur"
        role="region"
        aria-label={t("ariaLabel")}
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex w-full flex-1 items-start gap-3 md:items-center">
              <div className="hidden text-primary md:block" aria-hidden="true">
                <Cookie className="size-5" strokeWidth={1.75} />
              </div>
              <p className="text-[0.82rem] leading-snug text-white/75">
                <span className="font-semibold uppercase tracking-[0.2em] text-primary">
                  {t("eyebrow")}
                </span>
                <span className="ml-2">{t("body")}</span>
                <Link
                  href={privacyHref}
                  locale={locale}
                  className="ml-2 font-semibold underline underline-offset-4 hover:text-white focus-visible:outline-none"
                >
                  {t("learnMore")}
                </Link>
              </p>
            </div>

            <div className="flex w-full items-center gap-2 md:w-auto">
              <button
                type="button"
                onClick={() => handleChoice("rejected")}
                disabled={isSubmitting}
                className="w-full flex-1 rounded-lg border border-white/15 bg-transparent px-3 py-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white/85 transition-colors hover:bg-white/10 active:bg-white/15 disabled:opacity-50 md:w-auto md:flex-none"
              >
                {t("reject")}
              </button>
              <button
                type="button"
                onClick={() => handleChoice("accepted")}
                disabled={isSubmitting}
                className="w-full flex-1 rounded-lg bg-primary px-3 py-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90 active:opacity-80 disabled:opacity-50 md:w-auto md:flex-none"
              >
                {t("accept")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

