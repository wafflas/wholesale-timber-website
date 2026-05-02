"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface CompanyRevealProps {
  children: React.ReactNode;
}

export function CompanyReveal({ children }: CompanyRevealProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const rootEl = rootRef.current;
      if (!rootEl) return;

      const shouldReduceMotion =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

      const revealEls = Array.from(
        rootEl.querySelectorAll<HTMLElement>("[data-company-reveal]"),
      );

      if (!revealEls.length) return;

      if (shouldReduceMotion) {
        gsap.set(revealEls, { opacity: 1, y: 0, clearProps: "transform" });
        return;
      }

      gsap.set(revealEls, { opacity: 0, y: 14 });

      gsap.to(revealEls, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.12,
        stagger: 0.12,
        scrollTrigger: {
          trigger: rootEl,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: rootRef },
  );

  return <div ref={rootRef}>{children}</div>;
}

