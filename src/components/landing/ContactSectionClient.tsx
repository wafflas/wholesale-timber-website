"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PhoneCall } from "lucide-react";
import { useRef } from "react";
import { Link } from "@/i18n/navigation";

gsap.registerPlugin(ScrollTrigger);

export interface ContactSectionClientProps {
  headingBefore: string;
  headingAccent: string;
  headingAfter: string;
  subtitle: string;
  phoneDisplay: string;
  phoneHref: string;
  phoneAria: string;
  contactCta: string;
}

function addTypewriterSegment(
  timeline: gsap.core.Timeline,
  element: HTMLElement,
  text: string,
  charsPerSecond: number,
) {
  const state = { length: 0 };
  timeline.to(
    state,
    {
      length: text.length,
      duration: Math.max(text.length / charsPerSecond, 0.08),
      ease: "none",
      onUpdate: () => {
        const n = Math.round(state.length);
        element.textContent = text.slice(0, n);
      },
    },
    ">",
  );
}

export function ContactSectionClient({
  headingBefore,
  headingAccent,
  headingAfter,
  subtitle,
  phoneDisplay,
  phoneHref,
  phoneAria,
  contactCta,
}: ContactSectionClientProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const beforeRef = useRef<HTMLSpanElement | null>(null);
  const accentRef = useRef<HTMLSpanElement | null>(null);
  const afterRef = useRef<HTMLSpanElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const primaryRef = useRef<HTMLAnchorElement | null>(null);
  const secondaryRef = useRef<HTMLAnchorElement | null>(null);

  const headingForAria = `${headingBefore}${headingAccent}${headingAfter}`;

  useGSAP(
    () => {
      const root = rootRef.current;
      const beforeEl = beforeRef.current;
      const accentEl = accentRef.current;
      const afterEl = afterRef.current;
      const subtitleEl = subtitleRef.current;
      const primaryEl = primaryRef.current;
      const secondaryEl = secondaryRef.current;

      if (
        !root ||
        !beforeEl ||
        !accentEl ||
        !afterEl ||
        !subtitleEl ||
        !primaryEl ||
        !secondaryEl
      ) {
        return;
      }

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) {
        beforeEl.textContent = headingBefore;
        accentEl.textContent = headingAccent;
        afterEl.textContent = headingAfter;
        gsap.set([subtitleEl, primaryEl, secondaryEl], {
          opacity: 1,
          y: 0,
          scale: 1,
          clearProps: "transform",
        });
        return;
      }

      beforeEl.textContent = "";
      accentEl.textContent = "";
      afterEl.textContent = "";

      gsap.set(subtitleEl, { opacity: 0, y: 18 });
      gsap.set(primaryEl, { opacity: 0, scale: 0.88 });
      gsap.set(secondaryEl, { opacity: 0, y: 14 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 78%",
          once: true,
        },
      });

      const cps = 22;
      addTypewriterSegment(tl, beforeEl, headingBefore, cps);
      addTypewriterSegment(tl, accentEl, headingAccent, cps);
      addTypewriterSegment(tl, afterEl, headingAfter, cps);

      tl.to(
        subtitleEl,
        { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
        ">-0.05",
      );

      tl.to(
        primaryEl,
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.55)" },
        ">-0.12",
      );

      tl.to(
        secondaryEl,
        { opacity: 1, y: 0, duration: 0.48, ease: "power2.out" },
        ">-0.18",
      );
    },
    {
      scope: rootRef,
      dependencies: [
        headingBefore,
        headingAccent,
        headingAfter,
        subtitle,
        phoneDisplay,
        phoneHref,
        phoneAria,
        contactCta,
      ],
    },
  );

  return (
    <div
      ref={rootRef}
      className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-4 text-center lg:max-w-4xl lg:px-8"
    >
      <h2
        id="contact-section-heading"
        className="font-golos-text text-[clamp(1.65rem,4.5vw,2.75rem)] font-semibold leading-tight tracking-hero text-white lg:text-5xl xl:text-6xl"
        aria-label={headingForAria}
      >
        <span ref={beforeRef} className="text-white" aria-hidden="true" />
        <span ref={accentRef} className="text-primary" aria-hidden="true" />
        <span ref={afterRef} className="text-white" aria-hidden="true" />
      </h2>

      <p
        ref={subtitleRef}
        className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/80 sm:text-base lg:mt-8 lg:max-w-2xl lg:text-lg xl:text-xl"
      >
        {subtitle}
      </p>
      <div className="mt-auto flex w-full max-w-md flex-col space-y-20 self-center pt-10 sm:pt-12 lg:max-w-none lg:space-y-0">
        <div className="mt-10 flex w-full flex-col items-center gap-3 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-5">
          <Link
            ref={primaryRef}
            href={phoneHref}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-center text-sm font-bold tracking-wide text-white transition-opacity hover:opacity-90 active:opacity-80 lg:w-auto lg:min-w-[220px] lg:px-8 lg:py-5 lg:text-base"
            aria-label={`${phoneAria} ${phoneDisplay}`}
          >
            <PhoneCall className="size-5 shrink-0" aria-hidden="true" />
            {phoneDisplay}
          </Link>

          <Link
            ref={secondaryRef}
            href="/contact"
            className="flex w-full items-center justify-center rounded-lg border border-white bg-transparent py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10 active:bg-white/15 lg:w-auto lg:min-w-[220px] lg:px-8 lg:py-5 lg:text-base"
            aria-label={contactCta}
          >
            {contactCta}
          </Link>
        </div>
      </div>
    </div>
  );
}
