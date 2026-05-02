"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useRouter } from "next/navigation";

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
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.6 },
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
    <div className="fixed inset-x-0 bottom-4 z-[5000] flex justify-center px-4 md:bottom-8">
      <div
        ref={rootRef}
        className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#151311] p-5 shadow-2xl backdrop-blur md:p-6"
        role="dialog"
        aria-live="polite"
        aria-label={t("ariaLabel")}
      >
        <div className="flex flex-col gap-4 md:gap-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {t("eyebrow")}
            </p>
            <p className="text-sm leading-relaxed text-white/80 md:text-[0.95rem]">
              {t("body")}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-4">
            <Link
              href={privacyHref}
              locale={locale}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75 underline-offset-4 hover:text-white hover:underline focus-visible:outline-none"
            >
              {t("learnMore")}
            </Link>

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <button
                type="button"
                onClick={() => handleChoice("rejected")}
                disabled={isSubmitting}
                className="rounded-lg border border-white/15 bg-transparent px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white/85 transition-colors hover:bg-white/10 active:bg-white/15 disabled:opacity-50"
              >
                {t("reject")}
              </button>
              <button
                type="button"
                onClick={() => handleChoice("accepted")}
                disabled={isSubmitting}
                className="rounded-lg bg-primary px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90 active:opacity-80 disabled:opacity-50"
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

