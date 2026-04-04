import Link from "next/link";
import Image from "next/image";
import { LandingTaglinesTypewriter } from "@/components/LandingTaglinesTypewriter";

export function LandingPage() {
  return (
    <>
      <section className="relative flex h-screen min-h-[100dvh] w-full flex-col overflow-hidden">
        <div className="absolute inset-0 -z-10">
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

        <div className="relative z-20 flex min-h-0 w-full min-w-0 flex-col pt-24 sm:pt-28">
          <div className="px-5 pt-6 sm:px-6">
            <p className="text-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/50">
              ΑΠΟ ΤΟ 2021 — ΑΘΗΝΑ
            </p>
          </div>

          <h1 className="font-hero relative mt-6 w-full min-w-0 min-h-[240px] shrink-0 font-semibold leading-[0.9] tracking-hero sm:mt-8 sm:min-h-[280px] md:min-h-[320px] lg:min-h-[min(36dvh,400px)] xl:min-h-[min(40dvh,460px)] 2xl:min-h-[min(42dvh,520px)]">
            <span className="absolute start-8 top-0 text-[140px] text-white/65 sm:text-[9.5rem] md:text-[11rem] lg:text-[13rem] xl:text-[15rem] 2xl:text-[min(17rem,14vw)]">
              BEST
            </span>
            <span className="absolute end-8 bottom-0 text-[140px] text-white/65 sm:text-[9.5rem] md:text-[11rem] lg:text-[13rem] xl:text-[15rem] 2xl:text-[min(17rem,14vw)]">
              PLY
            </span>
          </h1>

          <div className="flex min-h-0 flex-1 flex-col px-5 pb-10 sm:px-6">
            <div className="mt-auto flex w-full max-w-md flex-col space-y-20 self-center pt-10 sm:pt-12">
                <LandingTaglinesTypewriter className="mt-8 max-w-[22rem] items-start justify-start text-left text-[1.25rem] font-bold opacity-80 leading-relaxed text-white sm:mt-10" />
               <div className="flex flex-col gap-3">
                 <Link
                  href="/products"
                  className="flex w-full items-center justify-center rounded-xl bg-primary py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90 active:opacity-80"
                >
                  ΔΕΙΤΕ ΤΑ ΠΡΟΪΟΝΤΑ ΜΑΣ →
                </Link>

                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-xl border border-white bg-transparent py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10 active:bg-white/15"
                >
                  ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ
                </Link>
               </div>
               
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
