import Link from "next/link";
import Image from "next/image";

export function LandingPage() {
  return (
    <>
      <section className="relative h-screen min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden">
       
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
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />

      <div className="relative z-10 flex flex-1 flex-col px-5 pb-10 pt-24 sm:px-6 sm:pt-28">
        <div className="mt-8 flex flex-1 flex-col">
          <p className="text-center text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white">
            ΑΠΟ ΤΟ 1987 — ΑΘΗΝΑ
          </p>

          <div className="mt-8 flex flex-col items-center">
            <h1 className="font-hero text-center text-[clamp(3.75rem,18vw,5.5rem)] font-semibold leading-[0.92] tracking-hero text-white">
              <span className="block">BEST</span>
              <span className="block">PLY</span>
            </h1>
          </div>

          <div className="mx-auto mt-10 max-w-[17.5rem] space-y-3 text-left text-base font-medium leading-relaxed text-white">
            <p>Κορυφαία Ξυλεία.</p>
            <p>Διεθνής Αξιοπιστία.</p>
            <p>Συνέπεια σε κάθε Παράδοση.</p>
            <p>Δέσμευση στην Απόλυτη Ποιότητα.</p>
          </div>

          <div className="mt-auto flex w-full max-w-md flex-col gap-3 self-center pt-12">
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
      </section>
    </>
  );
}

