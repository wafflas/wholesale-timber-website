"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { SteppedEase } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const TAGLINES = [
  "Κορυφαία Ξυλεία.",
  "Διεθνής Αξιοπιστία.",
  "Συνέπεια σε κάθε Παράδοση.",
  "Δέσμευση στην Απόλυτη Ποιότητα.",
] as const;

const TAGLINES_EN = [
  "Premium timber.",
  "Trusted worldwide.",
  "Reliable on every delivery.",
  "Committed to absolute quality.",
] as const;

const PAUSE_AFTER_LINE_S = 3;
const BASE_DURATION_S = 3.25;
const REF_CHAR_COUNT = 37;

interface LandingTaglinesTypewriterProps {
  className?: string;
  locale?: "el" | "en";
}

export function LandingTaglinesTypewriter({
  className,
  locale = "el",
}: LandingTaglinesTypewriterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);
  const nextLineDelayRef = useRef<gsap.core.Tween | null>(null);
  const [lineIndex, setLineIndex] = useState(0);

  useGSAP(
    () => {
      const clip = clipRef.current;
      const inner = innerRef.current;
      if (!clip || !inner) return;

      const activeTaglines = locale === "en" ? TAGLINES_EN : TAGLINES;
      const text = activeTaglines[lineIndex];
      const steps = Math.max(text.length, 1);
      const fullWidth = inner.offsetWidth;
      const duration = Math.min(
        5,
        Math.max(1, (steps / REF_CHAR_COUNT) * BASE_DURATION_S),
      );

      nextLineDelayRef.current?.kill();
      nextLineDelayRef.current = null;
      gsap.killTweensOf(clip);
      gsap.set(clip, {
        width: 0,
        borderRightWidth: 2,
        borderRightStyle: "solid",
        borderRightColor: "rgba(255,255,255,0.75)",
      });

      const cursorTween = gsap.fromTo(
        clip,
        { borderRightColor: "rgba(255,255,255,0.75)" },
        {
          borderRightColor: "rgba(255,255,255,0)",
          duration: 0.35,
          repeat: -1,
          yoyo: true,
          ease: SteppedEase.config(2),
        },
      );

      gsap.to(clip, {
        width: fullWidth,
        duration,
        ease: SteppedEase.config(steps),
        onComplete: () => {
          cursorTween.kill();
          gsap.set(clip, { borderRightColor: "rgba(255,255,255,0)" });
          nextLineDelayRef.current?.kill();
          nextLineDelayRef.current = gsap.delayedCall(
            PAUSE_AFTER_LINE_S,
            () => {
              nextLineDelayRef.current = null;
              setLineIndex((i) => (i + 1) % activeTaglines.length);
            },
          );
        },
      });

      return () => {
        nextLineDelayRef.current?.kill();
        nextLineDelayRef.current = null;
        gsap.killTweensOf(clip);
      };
    },
    { dependencies: [lineIndex, locale], scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={className}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="flex min-h-[1.625rem] items-start justify-start">
        <div
          ref={clipRef}
          className="box-border inline-block max-w-full overflow-hidden whitespace-nowrap border-r-2 border-transparent align-top"
          style={{ width: 0 }}
        >
          <span
            ref={innerRef}
            className="inline-block whitespace-nowrap pr-4"
            key={lineIndex}
          >
            {(locale === "en" ? TAGLINES_EN : TAGLINES)[lineIndex]}
          </span>
        </div>
      </div>
    </div>
  );
}
