"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scissors, Hammer, PackageCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".service-fade", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="py-16 md:py-24" ref={containerRef}>
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="service-fade text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-wider text-[#AC8D5B] uppercase mb-4 font-[family-name:var(--font-heading)]">
            Τι Προσφέρουμε
          </span>
          <h1 className="text-3xl font-bold text-[#333333] md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]">
            Υπηρεσίες
          </h1>
        </div>

        {/* Text Content */}
        <div className="px-4 py-8 md:p-12 bg-white rounded-3xl shadow-sm border border-gray-100">
          <div className="service-fade prose prose-lg prose-[#333333] max-w-none">
            <p className="text-xl leading-relaxed text-[#333333]/80 mb-8 font-medium">
              Στην εταιρεία <strong>BEST PLY I.K.E.</strong>, αντιλαμβανόμαστε
              τις ολοένα αυξανόμενες ανάγκες σας και κινούμαστε, πάντοτε, με
              γνώμονα την ικανοποίησή τους!
            </p>

            <p className="text-[#333333]/70 mb-6">
              Αναλύουμε τη ζήτησή σας και προσπαθούμε να κατανοήσουμε, πλήρως,
              τις ιδιαιτερότητες και τις απαιτήσεις της παραγγελίας σας.
            </p>

            <p className="text-[#333333]/70 mb-6">
              Χρησιμοποιώντας προγράμματα βέλτιστης κοπής, υπολογίζουμε ποιο
              υλικό ταιριάζει στις δικές σας ανάγκες, το επιλέγουμε μέσα από την
              ευρεία γκάμα διαστάσεων που διαθέτουμε και, έτσι, εξασφαλίζουμε
              την ολοκλήρωση των παραγγελιών σας, με το μικρότερο δυνατό κόστος!
            </p>

            <p className="text-[#333333]/70">
              Αξιοποιώντας τα κατάλληλα μηχανήματα, όπως τεμαχιστικές ακριβείας
              και μηχανή συγκόλλησης περιθωρίων (PVC) τελευταίας τεχνολογίας,
              σας παραδίδουμε τα πάνελ και τις μελαμίνες σας τεμαχισμένες σε
              διαστάσεις της επιλογής σας και κολλημένες περιμετρικά, έτοιμες
              για συναρμολόγηση.
            </p>
          </div>

          <hr className="service-fade my-12 border-gray-100" />

          {/* Icon Highlights Grid */}
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="service-fade text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#AC8D5B]/10 text-[#AC8D5B] mb-4">
                <Scissors className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-[#333333] font-[family-name:var(--font-heading)] mb-2">
                Βέλτιστη Κοπή
              </h3>
              <p className="text-sm text-[#333333]/60">
                Τεμαχιστικές μηχανές ακριβείας για ελαχιστοποίηση της χασούρας.
              </p>
            </div>

            <div className="service-fade text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#AC8D5B]/10 text-[#AC8D5B] mb-4">
                <Hammer className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-[#333333] font-[family-name:var(--font-heading)] mb-2">
                Συγκόλληση PVC
              </h3>
              <p className="text-sm text-[#333333]/60">
                Κόλληση περιθωρίων τελευταίας τεχνολογίας με άψογο φινίρισμα.
              </p>
            </div>

            <div className="service-fade text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#AC8D5B]/10 text-[#AC8D5B] mb-4">
                <PackageCheck className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-[#333333] font-[family-name:var(--font-heading)] mb-2">
                Έτοιμα για Μοντάρισμα
              </h3>
              <p className="text-sm text-[#333333]/60">
                Παράδοση έτοιμων τεμαχίων για άμεση συναρμολόγηση.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
