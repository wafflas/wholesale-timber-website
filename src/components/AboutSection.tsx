"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "./Logo";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-fade", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="about" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="about-fade mx-auto flex justify-center mb-8">
          <Logo variant="dark" />
        </div>

        <h2 className="about-fade text-3xl font-bold text-[#333333] mb-8 font-[family-name:var(--font-heading)]">
          Η εταιρεία BEST PLY I.K.E.
        </h2>

        <div className="about-fade space-y-6 text-[#333333]/80 leading-relaxed max-w-3xl mx-auto text-left md:text-center">
          <p>
            Η <strong>BEST PLY I.K.E.</strong>, υπό τη διεύθυνση του{" "}
            <strong>Παντελή Καραγιάννη</strong>, δραστηριοποιείται αποκλειστικά
            στον τομέα εισαγωγής και εξαγωγής ξυλείας και βιομηχανικών παραγώγων
            από όλο τον κόσμο.
          </p>
          <p>
            Με στέρεες βάσεις από το παρελθόν και σταθερές συνεργασίες σε Ασία,
            Αφρική και Ευρώπη (Κίνα, Αίγυπτος, κ.α.), η εταιρεία μας αποτελεί
            σταθερά στο χώρο του ξυλεμπορίου πανελλαδικά. Αντικείμενό μας είναι
            οι πωλήσεις χονδρικής (B2B) σε επαγγελματίες του κλάδου,
            εξασφαλίζοντας αδιάλειπτη τροφοδοσία με ανταγωνιστικές τιμές.
          </p>
          <p>
            Διαθέτουμε πλήρη και ευρεία γκάμα εμπορευμάτων — Birch Plywood,
            Okoume, Μελαμίνες, OSB, PET MDF και Blockboard — εξασφαλίζοντας
            επιτυχημένες και σταθερές συνεργασίες με τους πελάτες μας
            πανελλαδικά.
          </p>
        </div>
      </div>
    </section>
  );
}
