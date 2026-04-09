"use client";

import { useLocale, useTranslations } from "next-intl";

const allProducts = [
  {
    name: "Birch Plywood Premium",
    nameGr: "Κόντρα Πλακέ Σημύδας A/B",
    image: "/category_plywood_1773695464864.png",
    typeEn: "Plywood",
    typeGr: "Κόντρα Πλακέ",
    descriptionEn: "Premium birch plywood for demanding builds and interiors.",
    descriptionGr:
      "Πρώτης ποιότητας κόντρα πλακέ σημύδας για απαιτητικές κατασκευές.",
  },
  {
    name: "Pine Plywood Standard",
    nameGr: "Κόντρα Πλακέ Πεύκου",
    image: "/category_plywood_1773695464864.png",
    typeEn: "Plywood",
    typeGr: "Κόντρα Πλακέ",
    descriptionEn: "Cost-effective pine plywood for structural applications.",
    descriptionGr:
      "Οικονομικό κόντρα πλακέ πεύκου, ιδανικό για δομικές εφαρμογές.",
  },
  {
    name: "Marine Plywood Okoume",
    nameGr: "Θαλάσσης Okoume",
    image: "/category_plywood_1773695464864.png",
    typeEn: "Plywood",
    typeGr: "Κόντρα Πλακέ",
    descriptionEn:
      "Excellent moisture resistance with Okoume veneer. Ideal for outdoor use.",
    descriptionGr:
      "Εξαιρετική αντοχή στην υγρασία, καπλαμάς Okoume. Ιδανικό για εξωτερική χρήση.",
  },
  {
    name: "Birch Plywood BB/CP",
    nameGr: "Κόντρα Πλακέ Σημύδας BB/CP",
    image: "/category_plywood_1773695464864.png",
    typeEn: "Plywood",
    typeGr: "Κόντρα Πλακέ",
    descriptionEn: "Mid-grade birch for industrial use and cladding.",
    descriptionGr:
      "Σημύδα ενδιάμεσης ποιότητας για βιομηχανική χρήση και επενδύσεις.",
  },
  {
    name: "Film Faced Plywood",
    nameGr: "Μπετοφόρμ Φιλμ",
    image: "/category_plywood_1773695464864.png",
    typeEn: "Plywood",
    typeGr: "Κόντρα Πλακέ",
    descriptionEn:
      "Phenolic film-faced plywood suitable for concrete formwork.",
    descriptionGr:
      "Κόντρα πλακέ με φιλμ φαινολικής ρητίνης, κατάλληλο για καλούπια σκυροδέματος.",
  },
  {
    name: "Anti-slip Plywood",
    nameGr: "Αντιολισθητικό Κόντρα Πλακέ",
    image: "/category_plywood_1773695464864.png",
    typeEn: "Plywood",
    typeGr: "Κόντρα Πλακέ",
    descriptionEn:
      "Anti-slip surface for truck flooring, scaffolding, and platforms.",
    descriptionGr:
      "Ειδική αντιολισθητική επιφάνεια για πατώματα φορτηγών και σκαλωσιές.",
  },
  {
    name: "PET MDF SuperMat",
    nameGr: "PET MDF Ματ",
    image: "/category_mdf_1773695477475.png",
    typeEn: "MDF",
    typeGr: "MDF",
    descriptionEn:
      "PET-laminated MDF with ultra-matte, anti-fingerprint finish.",
    descriptionGr:
      "Μεσαίας πυκνότητας ινοσανίδα με επικάλυψη PET, απόλυτο ματ φινίρισμα, anti-fingerprint.",
  },
  {
    name: "PET MDF HighGloss",
    nameGr: "PET MDF Γυαλιστερό",
    image: "/category_mdf_1773695477475.png",
    typeEn: "MDF",
    typeGr: "MDF",
    descriptionEn:
      "High-gloss PET MDF—ideal for modern kitchens and cabinetry.",
    descriptionGr:
      "Ινοσανίδα με εντυπωσιακό γυαλιστερό PET, ιδανικό για μοντέρνες κουζίνες.",
  },
  {
    name: "Raw MDF Standard",
    nameGr: "Γυμνό MDF 18mm",
    image: "/category_mdf_1773695477475.png",
    typeEn: "MDF",
    typeGr: "MDF",
    descriptionEn: "Raw MDF boards for painting, veneering, and general use.",
    descriptionGr:
      "Γυμνές πλάκες MDF για ευέλικτες εφαρμογές βαφής και επένδυσης.",
  },
  {
    name: "Raw MDF Moisture Res.",
    nameGr: "Ανθυγρό MDF",
    image: "/category_mdf_1773695477475.png",
    typeEn: "MDF",
    typeGr: "MDF",
    descriptionEn:
      "Moisture-resistant MDF (green core), ideal for bathrooms and humid areas.",
    descriptionGr:
      "Πράσινο MDF υψηλής αντοχής στην υγρασία, ιδανικό για μπάνια.",
  },
  {
    name: "Melamine White Premium",
    nameGr: "Λευκή Μελαμίνη Premium",
    image: "/category_mdf_1773695477475.png",
    typeEn: "MDF",
    typeGr: "MDF",
    descriptionEn: "Premium white melamine board for kitchens and wardrobes.",
    descriptionGr:
      "Λευκή μελαμίνη κορυφαίας ποιότητας για κουζίνες και ντουλάπες.",
  },
  {
    name: "Melamine Oak Classic",
    nameGr: "Μελαμίνη Δρυς",
    image: "/category_mdf_1773695477475.png",
    typeEn: "MDF",
    typeGr: "MDF",
    descriptionEn: "Textured melamine with a realistic rustic oak look.",
    descriptionGr: "Μελαμίνη με υφή και ρεαλιστική όψη ξύλου ρουστίκ δρυός.",
  },
  {
    name: "Melamine Anthracite",
    nameGr: "Μελαμίνη Ανθρακί",
    image: "/category_mdf_1773695477475.png",
    typeEn: "MDF",
    typeGr: "MDF",
    descriptionEn: "Modern anthracite melamine for minimal designs.",
    descriptionGr:
      "Σύγχρονη επιλογή σε ανθρακί απόχρωση για minimal κατασκευές.",
  },
  {
    name: "Blockboard Poplar 18mm",
    nameGr: "Μπλόκμπορντ Λεύκας 18mm",
    image: "/category_blockboard_1773695507126.png",
    typeEn: "Panel",
    typeGr: "Πάνελ",
    descriptionEn:
      "Lightweight poplar-core blockboard with excellent stability for doors.",
    descriptionGr:
      "Ελαφρύ σύνθετο πάνελ με πυρήνα λεύκας, υψηλής αντοχής για πόρτες.",
  },
  {
    name: "Blockboard Fir 22mm",
    nameGr: "Μπλόκμπορντ Έλατου 22mm",
    image: "/category_blockboard_1773695507126.png",
    typeEn: "Panel",
    typeGr: "Πάνελ",
    descriptionEn: "Solid fir-core blockboard offering outstanding stability.",
    descriptionGr:
      "Στιβαρό πάνελ με πυρήνα έλατου, παρέχοντας εξαιρετική σταθερότητα.",
  },
  {
    name: "Veneered Blockboard Oak",
    nameGr: "Μπλόκμπορντ Επενδεδυμένο Δρυς",
    image: "/category_blockboard_1773695507126.png",
    typeEn: "Panel",
    typeGr: "Πάνελ",
    descriptionEn: "Poplar core with natural oak veneer, ready for finishing.",
    descriptionGr:
      "Πυρήνας λεύκας με φυσικό καπλαμά δρυός, έτοιμο για λούστρο.",
  },
  {
    name: "OSB 3 11mm",
    nameGr: "OSB 3 11mm",
    image: "/category_osb_1773695491952.png",
    typeEn: "Structural Panel",
    typeGr: "Δομικό Πάνελ",
    descriptionEn: "11mm OSB/3 for roofing and wall construction.",
    descriptionGr:
      "Oriented Strand Board πάχους 11mm για στέγες και τοιχοποιία.",
  },
  {
    name: "OSB 3 15mm",
    nameGr: "OSB 3 15mm",
    image: "/category_osb_1773695491952.png",
    typeEn: "Structural Panel",
    typeGr: "Δομικό Πάνελ",
    descriptionEn:
      "Reinforced 15mm OSB/3 for demanding structural applications.",
    descriptionGr:
      "Ενισχυμένο OSB πάχους 15mm για δομικές κατασκευές αυξημένων απαιτήσεων.",
  },
  {
    name: "OSB 3 22mm T&G",
    nameGr: "OSB 3 22mm με πατούρα",
    image: "/category_osb_1773695491952.png",
    typeEn: "Structural Panel",
    typeGr: "Δομικό Πάνελ",
    descriptionEn: "Tongue & groove OSB—ideal for flooring.",
    descriptionGr: "OSB με σύστημα click/πατούρα, ιδανικό για πατώματα.",
  },
  {
    name: "Okoume Lumber",
    nameGr: "Μαδέρια Οκουμέ",
    image: "/category_lumber_1773695520006.png",
    typeEn: "Tropical Timber",
    typeGr: "Τροπικό Ξύλο",
    descriptionEn:
      "Lightweight tropical timber—ideal for marine and woodworking uses.",
    descriptionGr:
      "Ελαφρύ τροπικό ξύλο, ιδανικό για ναυπηγική και ξυλουργικές εφαρμογές.",
  },
  {
    name: "Poplar Planks",
    nameGr: "Ταύλες Λεύκας",
    image: "/category_lumber_1773695520006.png",
    typeEn: "Softwood",
    typeGr: "Μαλακό Ξύλο",
    descriptionEn:
      "Cost-effective and versatile timber for frames and upholstery work.",
    descriptionGr:
      "Οικονομική και ευέλικτη λύση ξυλείας για σκελετούς σαλονιών.",
  },
  {
    name: "Swedish Pine Unedged",
    nameGr: "Σουηδικό Πεύκο Φαρδύ",
    image: "/category_lumber_1773695520006.png",
    typeEn: "Softwood",
    typeGr: "Μαλακό Ξύλο",
    descriptionEn: "Imported Swedish pine timber of excellent quality.",
    descriptionGr:
      "Εισαγόμενη ξυλεία πεύκου από τη Σουηδία, άριστης ποιότητας.",
  },
  {
    name: "Beech Wood Steamed",
    nameGr: "Οξιά Φουρνιστή",
    image: "/category_lumber_1773695520006.png",
    typeEn: "Hardwood",
    typeGr: "Σκληρό Ξύλο",
    descriptionEn: "Steamed beech—dense and durable for stairs and furniture.",
    descriptionGr:
      "Φουρνιστή ξυλεία οξιάς, βαριά και ανθεκτική για σκαλοπάτια και έπιπλα.",
  },
  {
    name: "Oak Lumber Prime",
    nameGr: "Δρυς Ευρώπης Prime",
    image: "/category_lumber_1773695520006.png",
    typeEn: "Hardwood",
    typeGr: "Σκληρό Ξύλο",
    descriptionEn:
      "Selected prime European oak for premium-grade constructions.",
    descriptionGr:
      "Επιλεγμένη ξυλεία δρυός εξαιρετικής ποιότητας για πολυτελείς κατασκευές.",
  },
];

export default function ProductsPage() {
  const t = useTranslations("ProductsPage");
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <div className="bg-[#FAF9F7] min-h-screen overflow-hidden selection:bg-[#AC8D5B] selection:text-white">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6 lg:px-8">
        <h1 className="font-golos-text text-3xl tracking-hero text-[#2b2623] sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#2b2623]/70">
          {t("body")}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allProducts.map((p) => (
            <div
              key={`${p.name}-${p.nameGr}`}
              className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#AC8D5B]">
                    {isEn ? p.typeEn : p.typeGr}
                  </p>
                  <h2 className="mt-2 text-base font-semibold text-[#2b2623]">
                    {isEn ? p.name : p.nameGr}
                  </h2>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#2b2623]/70">
                {isEn ? p.descriptionEn : p.descriptionGr}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
