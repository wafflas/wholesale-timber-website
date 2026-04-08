"use client";

import { useRef } from "react";
import { useParams } from "next/navigation";

export default function ContactPage() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "en" ? "en" : "el";
  const pageRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={pageRef} className="py-16 md:py-24">
      <main className="mx-auto max-w-3xl px-5 sm:px-6">
        <h1 className="font-hero text-3xl tracking-hero text-white sm:text-4xl">
          {locale === "en" ? "Contact" : "Επικοινωνία"}
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-white/60">
          {locale === "en" ? "Content in progress." : "Περιεχόμενο σε εξέλιξη."}
        </p>
      </main>
    </div>
  );
}

