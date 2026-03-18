"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    name: "MDF & Μελαμίνες",
    image: "/category_mdf_1773695477475.png",
    count: 146,
    colSpan: "col-span-1 border-r border-b md:border-b-0",
  },
  {
    name: "Κόντρα Πλακέ",
    image: "/category_plywood_1773695464864.png",
    count: 7,
    colSpan: "col-span-1 border-b md:border-r md:border-b-0",
  },
  {
    name: "OSB",
    image: "/category_osb_1773695491952.png",
    count: 1,
    colSpan: "col-span-1 border-r border-b",
  },
  {
    name: "Blockboard",
    image: "/category_blockboard_1773695507126.png",
    count: 4,
    colSpan: "col-span-1 border-b md:border-r",
  },
  {
    name: "Ξυλεία & Πάνελ",
    image: "/category_lumber_1773695520006.png",
    count: 12,
    colSpan:
      "col-span-1 border-r sm:col-span-2 md:col-span-1 md:border-r-0 lg:col-span-1",
  },
];

export default function ProductCategories() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".cat-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {categories.map((cat, index) => (
            <Link
              href="/products"
              key={cat.name}
              className={`cat-item group relative block w-full bg-white p-6 transition-colors hover:bg-gray-50 ${cat.colSpan} ${
                index === categories.length - 1 ? "border-r-0 border-b-0" : ""
              }`}
            >
              <div className="mb-6 relative aspect-video w-full overflow-hidden rounded-xl">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-[#333333] font-[family-name:var(--font-heading)] group-hover:text-[#AC8D5B] transition-colors text-center">
                {cat.name}{" "}
                <span className="text-gray-400 font-normal">({cat.count})</span>
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
