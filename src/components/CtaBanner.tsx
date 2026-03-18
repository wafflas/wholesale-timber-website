"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CtaBanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#AC8D5B] py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />

      <div className="cta-content relative z-10 mx-auto max-w-7xl px-6 flex flex-col items-center justify-between text-center md:flex-row md:text-left gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white md:text-3xl font-[family-name:var(--font-heading)]">
            Καλέστε μας για οποιαδήποτε πληροφορία
          </h2>
          <p className="mt-2 text-white/80 text-lg">
            Είμαστε στη διάθεσή σας για παραγγελίες χονδρικής και διευκρινίσεις.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <a
            href="tel:+306932262910"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-sm font-bold tracking-wider text-[#AC8D5B] transition-transform hover:scale-105 shadow-xl shadow-black/10 font-[family-name:var(--font-heading)]"
          >
            <PhoneCall className="h-5 w-5" />
            6932 262 910
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-8 py-4 text-sm font-bold tracking-wider text-white transition-colors hover:bg-white hover:text-[#AC8D5B] hover:border-white font-[family-name:var(--font-heading)]"
          >
            ΕΠΙΚΟΙΝΩΝΙΑ
          </Link>
        </div>
      </div>
    </section>
  );
}
