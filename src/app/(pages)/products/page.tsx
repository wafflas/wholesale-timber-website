"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const products = [
  // Κόντρα Πλακέ (Plywood)
  {
    name: "Birch Plywood",
    nameGr: "Κόντρα Πλακέ Σημύδας",
    image: "/category_plywood_1773695464864.png",
    type: "Κόντρα Πλακέ",
    description:
      "Πρώτης ποιότητας κόντρα πλακέ σημύδας για κατασκευές, επιπλοποιία και εσωτερική διακόσμηση.",
  },
  {
    name: "Pine Plywood",
    nameGr: "Κόντρα Πλακέ Πεύκου",
    image: "/category_plywood_1773695464864.png",
    type: "Κόντρα Πλακέ",
    description:
      "Οικονομικό και ανθεκτικό κόντρα πλακέ πεύκου, ιδανικό για δομικές εφαρμογές και επενδύσεις.",
  },
  {
    name: "Marine Plywood",
    nameGr: "Θαλάσσης (Marine)",
    image: "/category_plywood_1773695464864.png",
    type: "Κόντρα Πλακέ",
    description:
      "Ειδικά επεξεργασμένο κόντρα πλακέ με εξαιρετική αντοχή στην υγρασία. Ιδανικό για εξωτερική χρήση.",
  },

  // MDF & Μελαμίνες
  {
    name: "PET MDF",
    nameGr: "PET MDF Πάνελ",
    image: "/category_mdf_1773695477475.png",
    type: "MDF",
    description:
      "Μεσαίας πυκνότητας ινοσανίδα με επικάλυψη PET για αισθητικές εφαρμογές υψηλής ανθεκτικότητας.",
  },
  {
    name: "Raw MDF",
    nameGr: "Γυμνό MDF",
    image: "/category_mdf_1773695477475.png",
    type: "MDF",
    description:
      "Γυμνές πλάκες MDF για ευέλικτες εφαρμογές βαφής και επένδυσης στην επιπλοποιία.",
  },
  {
    name: "Melamine White Mat",
    nameGr: "Λευκή Μελαμίνη Ματ",
    image: "/category_mdf_1773695477475.png",
    type: "MDF",
    description:
      "Η κλασική λευκή μελαμίνη για κουζίνες, ντουλάπες και γενικές κατασκευές επίπλων.",
  },
  {
    name: "Melamine Oak",
    nameGr: "Μελαμίνη Δρυς",
    image: "/category_mdf_1773695477475.png",
    type: "MDF",
    description:
      "Μελαμίνη με υφή και όψη ξύλου δρυός, προσφέροντας ζεστό και φυσικό αποτέλεσμα.",
  },

  // Blockboard
  {
    name: "Blockboard Poplar",
    nameGr: "Μπλόκμπορντ Λεύκας",
    image: "/category_blockboard_1773695507126.png",
    type: "Πάνελ",
    description:
      "Ελαφρύ σύνθετο πάνελ με πυρήνα λεύκας, υψηλής αντοχής για πόρτες και ραφιέρες.",
  },
  {
    name: "Blockboard Fir",
    nameGr: "Μπλόκμπορντ Έλατου",
    image: "/category_blockboard_1773695507126.png",
    type: "Πάνελ",
    description:
      "Στιβαρό πάνελ με πυρήνα έλατου, παρέχοντας εξαιρετική σταθερότητα στις κατασκευές.",
  },

  // OSB
  {
    name: "OSB 3",
    nameGr: "OSB Πάνελ Τύπου 3",
    image: "/category_osb_1773695491952.png",
    type: "Δομικό Πάνελ",
    description:
      "Oriented Strand Board κατάλληλο για δομικές κατασκευές σε περιβάλλοντα με αυξημένη υγρασία.",
  },

  // Ξυλεία (Lumber/Timber)
  {
    name: "Okoume",
    nameGr: "Οκουμέ",
    image: "/category_lumber_1773695520006.png",
    type: "Τροπικό Ξύλο",
    description:
      "Ελαφρύ τροπικό ξύλο, ιδανικό για ναυπηγική, επιπλοποιία και ξυλουργικές εφαρμογές.",
  },
  {
    name: "Poplar",
    nameGr: "Λεύκα",
    image: "/category_lumber_1773695520006.png",
    type: "Μαλακό Ξύλο",
    description:
      "Οικονομική και ευέλικτη λύση ξυλείας για πάνελ, συσκευασίες και ελαφριές κατασκευές.",
  },
  {
    name: "Swedish Pine",
    nameGr: "Σουηδικό Πεύκο",
    image: "/category_lumber_1773695520006.png",
    type: "Μαλακό Ξύλο",
    description:
      "Εισαγόμενη ξυλεία πεύκου από τη Σουηδία, εξαιρετικής ποιότητας για εμφανείς κατασκευές.",
  },
  {
    name: "Beech Wood",
    nameGr: "Οξιά",
    image: "/category_lumber_1773695520006.png",
    type: "Σκληρό Ξύλο",
    description:
      "Σκληρή ξυλεία οξιάς, βαριά και ανθεκτική, η κορυφαία επιλογή για σκελετούς επίπλων και σκαλοπάτια.",
  },
];

const badgeColor: Record<string, string> = {
  "Κόντρα Πλακέ": "bg-amber-100 text-amber-800",
  "Τροπικό Ξύλο": "bg-emerald-100 text-emerald-800",
  "Μαλακό Ξύλο": "bg-green-100 text-green-800",
  Πάνελ: "bg-sky-100 text-sky-800",
  "Δομικό Πάνελ": "bg-orange-100 text-orange-800",
  MDF: "bg-purple-100 text-purple-800",
};

export default function ProductsPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });
    },
    { scope: gridRef },
  );

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-wider text-[#AC8D5B] uppercase mb-4 font-[family-name:var(--font-heading)]">
            Κατάλογος Προϊόντων
          </span>
          <h1 className="text-3xl font-bold text-[#333333] md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]">
            Τα Προϊόντα μας
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#333333]/60">
            Ολοκληρωμένη γκάμα προϊόντων ξυλείας υψηλής ποιότητας για κάθε
            επαγγελματική εφαρμογή.
          </p>
        </div>

        {/* Products Grid */}
        <div ref={gridRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="product-card group overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold font-[family-name:var(--font-heading)] ${
                    badgeColor[product.type] ?? "bg-gray-100 text-gray-800"
                  }`}
                >
                  {product.type}
                </span>
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
                <button className="mt-5 w-full rounded-lg border-2 border-[#AC8D5B] bg-transparent py-3 text-sm font-bold font-[family-name:var(--font-heading)] text-[#AC8D5B] transition-all hover:bg-[#AC8D5B] hover:text-white">
                  Αίτηση Προσφοράς
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
