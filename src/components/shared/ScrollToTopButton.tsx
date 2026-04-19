"use client";

import { useEffect, useMemo, useState } from "react";
import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollToTopButtonProps {
  ariaLabel: string;
  className?: string;
  thresholdPx?: number;
}

function getIsMotionReduced() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export function ScrollToTopButton({
  ariaLabel,
  className,
  thresholdPx = 320,
}: ScrollToTopButtonProps) {
  const lenis = useLenis();
  const [isVisible, setIsVisible] = useState(false);

  const isMotionReduced = useMemo(() => getIsMotionReduced(), []);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > thresholdPx);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [thresholdPx]);

  const goToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: isMotionReduced });
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: isMotionReduced ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={goToTop}
      className={cn(
        "fixed bottom-6 right-6 z-[60] inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-neutral-900/85 text-white shadow-lg shadow-black/15 backdrop-blur transition will-change-transform hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F7]",
        "motion-safe:duration-200 motion-safe:ease-out",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
        className,
      )}
    >
      <ArrowUp className="size-5" strokeWidth={2} aria-hidden="true" />
    </button>
  );
}

