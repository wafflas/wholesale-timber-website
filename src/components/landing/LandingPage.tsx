"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LandingTaglinesTypewriter } from "@/components/landing/LandingTaglinesTypewriter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(useGSAP);

export function LandingPage() {
  const t = useTranslations("Landing");

  const sectionRef = useRef<HTMLElement>(null);
  const bestRef = useRef<HTMLSpanElement>(null);
  const plyRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const best = bestRef.current;
      const ply = plyRef.current;
      if (!best || !ply) return;

      gsap.set(best, { opacity: 0, x: "-110%" });
      gsap.set(ply, { opacity: 0, x: "110%" });

      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(best, {
        x: "0%",
        opacity: 0.65,
        duration: 1.2,
        ease: "back.out(1.7)",
      });

      tl.to(
        ply,
        {
          x: "0%",
          opacity: 0.65,
          duration: 1.2,
          ease: "back.out(1.7)",
        },
        "<0.15",
      );
    },
    { scope: sectionRef },
  );

  return (
    <>
      <section
        ref={sectionRef}
        className="relative flex min-h-[100svh] w-full max-w-[100%] flex-col overflow-x-hidden"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/backgroundImage.png"
            alt="BEST PLY I.K.E."
            fill
            priority
            className="object-cover object-center"
            quality={100}
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/60" />

        <div className="relative z-20 flex min-h-0 w-full min-w-0 flex-col pt-20 sm:pt-28 lg:pt-32">
          <div className="px-5 pt-4 sm:px-6 sm:pt-6 lg:px-10">
            <p className="text-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/50 lg:text-xs xl:text-sm">
              {t("eyebrow")}
            </p>
          </div>

          <h1 className="font-hero relative mx-auto mt-6 w-full max-w-[340px] sm:mt-8 sm:max-w-[420px] md:mt-10 md:max-w-[460px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[750px] aspect-[1.3] sm:aspect-[1.4] md:aspect-[1.5] lg:aspect-[1.7] shrink-0 font-semibold leading-[0.9] tracking-hero">
            <span
              ref={bestRef}
              className="absolute start-0 top-0 text-[9rem] text-white/85 sm:text-[9.5rem] md:text-[10rem] lg:text-[11.5rem] xl:text-[13rem] 2xl:text-[16rem] will-change-transform"
            >
              BEST
            </span>
            <span
              ref={plyRef}
              className="absolute end-0 bottom-0 text-[9rem] text-white/85 sm:text-[9.5rem] md:text-[10rem] lg:text-[11.5rem] xl:text-[13rem] 2xl:text-[16rem] will-change-transform"
            >
              PLY
            </span>
          </h1>

          <div className="flex min-h-0 flex-1 flex-col px-5 pb-[calc(3rem+env(safe-area-inset-bottom,0px))] sm:px-6 sm:pb-10 lg:px-10 lg:pb-12">
            <div className="mt-auto flex w-full max-w-md flex-col space-y-10 self-center pt-4 sm:space-y-12 sm:pt-6 lg:max-w-2xl lg:space-y-20 lg:pt-8">
              <div className="flex flex-col gap-3 items-center">
                <LandingTaglinesTypewriter className="mt-4 max-w-[20rem] items-center justify-center text-center text-[1.10rem] font-bold opacity-80 leading-relaxed text-white sm:mt-6 lg:max-w-[32rem] lg:text-xl xl:text-[1.5rem]" />
              </div>
              <div className="flex flex-col gap-3 items-center lg:flex-row lg:justify-center lg:gap-5 lg:pb-10">
                <Link
                  href="/products"
                  className="flex w-full items-center justify-center rounded-xl bg-primary py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90 active:opacity-80 lg:w-auto lg:min-w-[220px] lg:px-10 lg:py-5 lg:text-base whitespace-nowrap"
                >
                  {t("primaryCta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-xl border border-white bg-transparent py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10 active:bg-white/15 lg:w-auto lg:min-w-[220px] lg:px-10 lg:py-5 lg:text-base whitespace-nowrap"
                >
                  {t("secondaryCta")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
