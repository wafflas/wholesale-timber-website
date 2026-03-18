"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const featuredProducts = [
  {
    name: "Birch Plywood",
    nameGr: "Κόντρα Πλακέ Σημύδας",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=450&fit=crop",
    description:
      "Υψηλής ποιότητας κόντρα πλακέ σημύδας για επαγγελματική χρήση.",
  },
  {
    name: "Okoume",
    nameGr: "Οκουμέ",
    image:
      "https://images.unsplash.com/photo-1611735341450-0d0f8c16fceb?w=600&h=450&fit=crop",
    description: "Ελαφρύ τροπικό ξύλο ιδανικό για ναυπηγική και επιπλοποιία.",
  },
  {
    name: "OSB",
    nameGr: "OSB Πάνελ",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&h=450&fit=crop",
    description: "Oriented Strand Board για κατασκευές και δομικές εφαρμογές.",
  },
];

export default function ProductsTeaser() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".product-teaser-card", {
        scrollTrigger: {
          trigger: ".products-teaser-grid",
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-wider text-[#AC8D5B] uppercase mb-4 font-[family-name:var(--font-heading)]">
            Τα Προϊόντα μας
          </span>
          <h2 className="text-3xl font-bold text-[#333333] md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]">
            Κορυφαία Ποιότητα Ξυλείας
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#333333]/60">
            Προσφέρουμε μια ολοκληρωμένη γκάμα προϊόντων ξυλείας για κάθε
            επαγγελματική ανάγκη.
          </p>
        </div>

        <div className="products-teaser-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <div
              key={product.name}
              className="product-teaser-card group overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#333333] font-[family-name:var(--font-heading)]">
                  {product.name}
                </h3>
                <p className="text-sm text-[#AC8D5B] font-semibold mt-1">
                  {product.nameGr}
                </p>
                <p className="mt-3 text-sm text-[#333333]/60 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-lg bg-[#AC8D5B] px-8 py-4 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:bg-[#9a7c4e] hover:shadow-lg hover:shadow-[#AC8D5B]/25 font-[family-name:var(--font-heading)]"
          >
            Δείτε Όλα τα Προϊόντα
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
        </div>
      </div>
    </section>
  );
}
