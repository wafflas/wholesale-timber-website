export interface Product {
  slug: string;
  name: string;
  nameGr: string;
  subtitleEn: string;
  subtitleGr: string;
  image: string;
  typeEn: string;
  typeGr: string;
  descriptionEn: string;
  descriptionGr: string;
  dimensions: string[];
  thicknesses: string[];
}

export const PRODUCTS: Product[] = [
  // ─── ΚΟΝΤΡΑ ΠΛΑΚΕ ────────────────────────────────────────────────────────────
  {
    slug: "birch-plywood",
    name: "Birch Plywood",
    nameGr: "ΚΟΝΤΡΑ ΠΛΑΚΕ ΣΗΜΥΔΑ",
    subtitleEn: "High-Grade Birch",
    subtitleGr: "Σημύδα Υψηλής Ποιότητας",
    image: "/products/kontra-plake-simida.webp",
    typeEn: "Plywood",
    typeGr: "Κόντρα Πλακέ",
    descriptionEn:
      "High-quality birch plywood with excellent bending and moisture resistance. Ideal for furniture manufacturing, construction, flooring, toy manufacturing, musical instruments, and a wide range of woodworking applications.",
    descriptionGr:
      "Κόντρα πλακέ σημύδας υψηλής ποιότητας με εξαιρετική αντοχή στην κάμψη και στην υγρασία. Ιδανικό για κατασκευή επίπλων, κατασκευές, πατώματα, κατασκευή παιχνιδιών, μουσικά όργανα και ευρύ φάσμα ξυλουργικών εφαρμογών.",
    dimensions: ["2500×1250", "3050×1525", "1525×1525"],
    thicknesses: ["3", "4", "6", "9", "12", "15", "18", "21", "24", "30", "40"],
  },
  {
    slug: "pine-plywood",
    name: "Pine Plywood",
    nameGr: "ΚΟΝΤΡΑ ΠΛΑΚΕ ΠΕΥΚΟ",
    subtitleEn: "Pine",
    subtitleGr: "Πεύκο",
    image: "/products/kontra-plake-pefko.webp",
    typeEn: "Plywood",
    typeGr: "Κόντρα Πλακέ",
    descriptionEn:
      "Durable Siberian pine plywood with high resistance to moisture and bending. Suitable for furniture, shipbuilding, construction, flooring, shelving, and veneering applications.",
    descriptionGr:
      "Ανθεκτικό κόντρα πλακέ πεύκου Σιβηρίας με υψηλή αντοχή στην υγρασία και στην κάμψη. Κατάλληλο για έπιπλα, ναυπηγική, κατασκευές, πατώματα, ράφια και επενδύσεις.",
    dimensions: ["2500×1250"],
    thicknesses: ["4", "8", "10", "12", "15", "18", "20"],
  },
  {
    slug: "chinese-plywood",
    name: "China Plywood",
    nameGr: "ΚΟΝΤΡΑ ΠΛΑΚΕ ΚΙΝΑΣ",
    subtitleEn: "Bitangor Surface",
    subtitleGr: "Επιφάνεια Bitangor",
    image: "/products/kontra-plake-kinas.webp",
    typeEn: "Plywood",
    typeGr: "Κόντρα Πλακέ",
    descriptionEn:
      "Cross-grain laminated plywood with Bitangor surface, offering excellent resistance to moisture and bending. Suitable for furniture, construction, partitions, flooring, shelving, and veneering.",
    descriptionGr:
      "Κόντρα πλακέ από σταυρωτά στρώματα καπλαμά με επιφάνεια Bitangor, με εξαιρετική αντοχή στην υγρασία και στην κάμψη. Κατάλληλο για έπιπλα, κατασκευές, διαχωριστικά, πατώματα, ράφια και επενδύσεις.",
    dimensions: ["2500×1250", "3050×1525", "1525×1525"],
    thicknesses: ["3", "4", "6", "9", "12", "15", "18", "21", "24", "30", "40"],
  },
  {
    slug: "film-birch",
    name: "Birch Film Faced Plywood",
    nameGr: "ΦΙΛΜ ΣΗΜΥΔΑ",
    subtitleEn: "Phenolic Film Faced",
    subtitleGr: "Φαινολική Επικάλυψη",
    image: "/products/film-simida.webp",
    typeEn: "Plywood",
    typeGr: "Κόντρα Πλακέ",
    descriptionEn:
      "Premium film-faced birch plywood with phenolic resin coating. Designed for heavy-duty use in concrete formwork and construction applications.",
    descriptionGr:
      "Κόντρα πλακέ σημύδας με φιλμ φαινολικής ρητίνης. Σχεδιασμένο για έντονη χρήση σε καλούπια σκυροδέματος και κατασκευαστικές εφαρμογές.",
    dimensions: ["2500×1250", "3050×1525"],
    thicknesses: ["18", "21"],
  },
  {
    slug: "film-welde",
    name: "Film Welde Plywood",
    nameGr: "FILM WELDE",
    subtitleEn: "Austrian Specification",
    subtitleGr: "Αυστριακές Προδιαγραφές",
    image: "/products/film-welde.webp",
    typeEn: "Plywood",
    typeGr: "Κόντρα Πλακέ",
    descriptionEn:
      "Film-faced plywood produced to Austrian Welde specifications. High-quality surface coating ideal for concrete formwork and construction.",
    descriptionGr:
      "Κόντρα πλακέ με φιλμ κατά τις αυστριακές προδιαγραφές Welde. Υψηλής ποιότητας επικάλυψη, ιδανικό για καλούπια σκυροδέματος και κατασκευές.",
    dimensions: ["2500×1250"],
    thicknesses: ["18", "20"],
  },
  {
    slug: "film-chinese",
    name: "China Film Faced Plywood",
    nameGr: "ΦΙΛΜ ΚΙΝΑΣ",
    subtitleEn: "Film Faced",
    subtitleGr: "Φιλμ Επικάλυψη",
    image: "/products/film-kinas.webp",
    typeEn: "Plywood",
    typeGr: "Κόντρα Πλακέ",
    descriptionEn:
      "Film-faced Chinese plywood with durable phenolic coating. Suitable for concrete formwork and construction applications.",
    descriptionGr:
      "Κινέζικο κόντρα πλακέ με ανθεκτική επικάλυψη φιλμ φαινολικής ρητίνης. Κατάλληλο για καλούπια σκυροδέματος και κατασκευές.",
    dimensions: ["2500×1250", "3050×1525"],
    thicknesses: ["18", "21"],
  },
  {
    slug: "fw-birch",
    name: "F/W Birch",
    nameGr: "F/W ΣΗΜΥΔΑ",
    subtitleEn: "Anti-Slip Film",
    subtitleGr: "Αντιολισθητικό Φιλμ",
    image: "/products/fw-simida.webp",
    typeEn: "Plywood",
    typeGr: "Κόντρα Πλακέ",
    descriptionEn:
      "Anti-slip film-faced birch plywood designed for truck bed flooring, scaffolding, and platforms requiring non-slip surfaces.",
    descriptionGr:
      "Κόντρα πλακέ σημύδας με αντιολισθητικό φιλμ, σχεδιασμένο για πατώματα φορτηγών, σκαλωσιές και πλατφόρμες.",
    dimensions: ["2500×1250", "3050×1525"],
    thicknesses: ["18", "21"],
  },

  // ─── MDF ─────────────────────────────────────────────────────────────────────
  {
    slug: "mdf-raw",
    name: "Bare MDF",
    nameGr: "MDF ΓΥΜΝΟ",
    subtitleEn: "Bare MDF Panels",
    subtitleGr: "Γυμνές Πλάκες MDF",
    image: "/products/mdf-gymno.webp",
    typeEn: "MDF",
    typeGr: "MDF",
    descriptionEn:
      "Raw MDF boards produced from wood fibres bonded with synthetic resins, offering a flawless surface with excellent stability and superior mechanical properties. Suitable for furniture manufacturing, veneering, painting, and general woodworking.",
    descriptionGr:
      "Γυμνές πλάκες MDF παραγόμενες από ίνες ξύλου συγκολλημένες με συνθετικές ρητίνες, με άψογη επιφάνεια, εξαιρετική σταθερότητα και ανώτερες μηχανικές ιδιότητες. Κατάλληλο για κατασκευή επίπλων, επένδυση, βαφή και ξυλουργικές εφαρμογές.",
    dimensions: ["2800×1220"],
    thicknesses: ["18"],
  },

  // ─── OSB ─────────────────────────────────────────────────────────────────────
  {
    slug: "osb-3",
    name: "OSB 3",
    nameGr: "OSB 3",
    subtitleEn: "Structural Grade",
    subtitleGr: "Δομικής Χρήσης",
    image: "/products/osb-3.webp",
    typeEn: "OSB",
    typeGr: "OSB",
    descriptionEn:
      "Oriented Strand Board type 3, manufactured by compressing oriented wood strands with adhesive substances. Suitable for roofing, flooring, wall construction, packaging, furniture, and interior decoration.",
    descriptionGr:
      "Oriented Strand Board τύπου 3, κατασκευασμένο από προσανατολισμένα ρινίσματα ξύλου με συγκολλητικές ουσίες. Κατάλληλο για στέγες, πατώματα, τοιχοποιία, συσκευασία, έπιπλα και εσωτερική διακόσμηση.",
    dimensions: ["2500×1250"],
    thicknesses: ["9", "11", "15", "18"],
  },

  // ─── BLOCKBOARD ──────────────────────────────────────────────────────────────
  {
    slug: "blockboard",
    name: "Blockboard",
    nameGr: "Blockboard",
    subtitleEn: "44mm Structural Panel",
    subtitleGr: "Δομικό Πάνελ 44mm",
    image: "/products/blockboard.webp",
    typeEn: "Blockboard",
    typeGr: "Blockboard",
    descriptionEn:
      "Solid blockboard panels with excellent structural stability and high load-bearing capacity. Suitable for construction applications, doors, and heavy-duty woodworking.",
    descriptionGr:
      "Σύνθετες πλάκες blockboard με εξαιρετική δομική σταθερότητα και υψηλή φέρουσα ικανότητα. Κατάλληλες για κατασκευές, πόρτες και ξυλουργικές εφαρμογές.",
    dimensions: ["1220×2250"],
    thicknesses: ["44"],
  },
];
