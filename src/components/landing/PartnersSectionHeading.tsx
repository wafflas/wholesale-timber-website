"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export interface PartnersSectionHeadingProps {
  title: string;
  subtitle: string;
}

export function PartnersSectionHeading({
  title,
  subtitle,
}: PartnersSectionHeadingProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const titleSpanRef = useRef<HTMLSpanElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const headingEl = headingRef.current;
      const titleSpanEl = titleSpanRef.current;
      const subtitleEl = subtitleRef.current;

      if (!root || !headingEl || !titleSpanEl || !subtitleEl) return;

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

      if (prefersReduced) {
        gsap.set([headingEl, subtitleEl], {
          opacity: 1,
          y: 0,
          clearProps: "transform",
        });
        return;
      }

      gsap.set([headingEl, subtitleEl], { opacity: 0, y: 18 });
      gsap.set(titleSpanEl, { backgroundPosition: "-120% 50%" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 82%",
          once: true,
        },
      });

      tl.to(headingEl, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });

      tl.to(
        titleSpanEl,
        {
          backgroundPosition: "220% 50%",
          duration: 0.75,
          ease: "power3.out",
        },
        "<0.06",
      );

      tl.to(
        subtitleEl,
        { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
        "<0.18",
      );
    },
    { scope: rootRef, dependencies: [title, subtitle] },
  );

  return (
    <div ref={rootRef} className="px-4 text-center">
      <h2
        ref={headingRef}
        className="font-golos-text text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
      >
        <span
          ref={titleSpanRef}
          className="bg-[length:300%_100%] bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #B8904E 0%, #D9B97A 22%, #FFF4D0 28%, #D9B97A 34%, #B8904E 52%, #D9B97A 74%, #FFF4D0 80%, #D9B97A 86%, #B8904E 100%)",
            backgroundPosition: "-120% 50%",
          }}
        >
          {title}
        </span>
      </h2>
      <p
        ref={subtitleRef}
        className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#9CA3AF] sm:text-base lg:mt-6 lg:max-w-2xl lg:text-lg"
      >
        {subtitle}
      </p>
    </div>
  );
}

