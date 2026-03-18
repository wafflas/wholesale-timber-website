"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Truck, Globe, Building2, Factory } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  {
    name: "ALPHATRANSPORT",
    role: "Αποθήκη",
    icon: Truck,
  },
  {
    name: "ARSER WOOD",
    role: "Προμηθευτής — Κίνα",
    icon: Globe,
  },
  {
    name: "Xuzhou Seeworth",
    role: "Προμηθευτής — Κίνα",
    icon: Building2,
  },
  {
    name: "ALFANNIA FACTORY",
    role: "Προμηθευτής — Αίγυπτος",
    icon: Factory,
  },
];

export default function PartnersGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".partner-logo", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-white pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="sr-only">Οι Συνεργάτες μας</h3>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => {
            const Icon = partner.icon;
            return (
              <div
                key={partner.name}
                className="partner-logo flex flex-col items-center justify-center gap-3 w-40 hover:text-[#AC8D5B] transition-colors"
                title={partner.role}
              >
                <Icon className="h-10 w-10 text-gray-400 group-hover:text-[#AC8D5B]" />
                <span className="text-sm font-bold text-center font-[family-name:var(--font-heading)] text-gray-800">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
