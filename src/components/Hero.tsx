"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 50,
            duration: 1,
          },
          "-=0.4",
        )
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.5",
        )
        .from(
          ".hero-cta",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.4",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/hero-bg.png"
        alt="Timber warehouse"
        fill
        priority
        className="object-cover"
        quality={90}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
        <span className="hero-badge inline-block rounded-full border border-[#AC8D5B]/40 bg-[#AC8D5B]/10 px-5 py-2 text-sm font-semibold tracking-wider text-[#AC8D5B] backdrop-blur-sm mb-8">
          ΕΙΣΑΓΩΓΕΣ & ΕΞΑΓΩΓΕΣ ΞΥΛΕΙΑΣ
        </span>

        <h1 className="hero-title text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-heading)]">
          BEST PLY I.K.E.
          <br />
          <span className="text-[#AC8D5B]">Αξιοπιστία</span> στις Εισαγωγές
          <br className="hidden sm:block" />& Εξαγωγές Ξυλείας
        </h1>

        <p className="hero-subtitle mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
          Κορυφαίας ποιότητας προϊόντα ξυλείας — Birch Plywood, Okoume, Poplar,
          Blockboard, OSB & PET MDF — με αξιοπιστία και επαγγελματισμό.
        </p>

        <div className="hero-cta mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-lg bg-[#AC8D5B] px-8 py-4 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:bg-[#9a7c4e] hover:shadow-lg hover:shadow-[#AC8D5B]/25 font-[family-name:var(--font-heading)]"
          >
            Δείτε τα Προϊόντα μας
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:border-white hover:bg-white/10 font-[family-name:var(--font-heading)]"
          >
            Επικοινωνήστε μαζί μας
          </Link>
        </div>
      </div>

      {/* Bottom gradient fade into white below */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
