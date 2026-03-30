"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

// Extended 24-item dummy data
const allProducts = [
  {
    name: "Birch Plywood Premium",
    nameGr: "Κόντρα Πλακέ Σημύδας A/B",
    image: "/category_plywood_1773695464864.png",
    type: "Κόντρα Πλακέ",
    description:
      "Πρώτης ποιότητας κόντρα πλακέ σημύδας για απαιτητικές κατασκευές.",
  },
  {
    name: "Pine Plywood Standard",
    nameGr: "Κόντρα Πλακέ Πεύκου",
    image: "/category_plywood_1773695464864.png",
    type: "Κόντρα Πλακέ",
    description:
      "Οικονομικό κόντρα πλακέ πεύκου, ιδανικό για δομικές εφαρμογές.",
  },
  {
    name: "Marine Plywood Okoume",
    nameGr: "Θαλάσσης Okoume",
    image: "/category_plywood_1773695464864.png",
    type: "Κόντρα Πλακέ",
    description:
      "Εξαιρετική αντοχή στην υγρασία, καπλαμάς Okoume. Ιδανικό για εξωτερική χρήση.",
  },
  {
    name: "Birch Plywood BB/CP",
    nameGr: "Κόντρα Πλακέ Σημύδας BB/CP",
    image: "/category_plywood_1773695464864.png",
    type: "Κόντρα Πλακέ",
    description:
      "Σημύδα ενδιάμεσης ποιότητας για βιομηχανική χρήση και επενδύσεις.",
  },
  {
    name: "Film Faced Plywood",
    nameGr: "Μπετοφόρμ Φιλμ",
    image: "/category_plywood_1773695464864.png",
    type: "Κόντρα Πλακέ",
    description:
      "Κόντρα πλακέ με φιλμ φαινολικής ρητίνης, κατάλληλο για καλούπια σκυροδέματος.",
  },
  {
    name: "Anti-slip Plywood",
    nameGr: "Αντιολισθητικό Κόντρα Πλακέ",
    image: "/category_plywood_1773695464864.png",
    type: "Κόντρα Πλακέ",
    description:
      "Ειδική αντιολισθητική επιφάνεια για πατώματα φορτηγών και σκαλωσιές.",
  },

  {
    name: "PET MDF SuperMat",
    nameGr: "PET MDF Ματ",
    image: "/category_mdf_1773695477475.png",
    type: "MDF",
    description:
      "Μεσαίας πυκνότητας ινοσανίδα με επικάλυψη PET, απόλυτο ματ φινίρισμα, anti-fingerprint.",
  },
  {
    name: "PET MDF HighGloss",
    nameGr: "PET MDF Γυαλιστερό",
    image: "/category_mdf_1773695477475.png",
    type: "MDF",
    description:
      "Ινοσανίδα με εντυπωσιακό γυαλιστερό PET, ιδανικό για μοντέρνες κουζίνες.",
  },
  {
    name: "Raw MDF Standard",
    nameGr: "Γυμνό MDF 18mm",
    image: "/category_mdf_1773695477475.png",
    type: "MDF",
    description:
      "Γυμνές πλάκες MDF για ευέλικτες εφαρμογές βαφής και επένδυσης.",
  },
  {
    name: "Raw MDF Moisture Res.",
    nameGr: "Ανθυγρό MDF",
    image: "/category_mdf_1773695477475.png",
    type: "MDF",
    description: "Πράσινο MDF υψηλής αντοχής στην υγρασία, ιδανικό για μπάνια.",
  },
  {
    name: "Melamine White Premium",
    nameGr: "Λευκή Μελαμίνη Premium",
    image: "/category_mdf_1773695477475.png",
    type: "MDF",
    description:
      "Λευκή μελαμίνη κορυφαίας ποιότητας για κουζίνες και ντουλάπες.",
  },
  {
    name: "Melamine Oak Classic",
    nameGr: "Μελαμίνη Δρυς",
    image: "/category_mdf_1773695477475.png",
    type: "MDF",
    description: "Μελαμίνη με υφή και ρεαλιστική όψη ξύλου ρουστίκ δρυός.",
  },
  {
    name: "Melamine Anthracite",
    nameGr: "Μελαμίνη Ανθρακί",
    image: "/category_mdf_1773695477475.png",
    type: "MDF",
    description: "Σύγχρονη επιλογή σε ανθρακί απόχρωση για minimal κατασκευές.",
  },

  {
    name: "Blockboard Poplar 18mm",
    nameGr: "Μπλόκμπορντ Λεύκας 18mm",
    image: "/category_blockboard_1773695507126.png",
    type: "Πάνελ",
    description:
      "Ελαφρύ σύνθετο πάνελ με πυρήνα λεύκας, υψηλής αντοχής για πόρτες.",
  },
  {
    name: "Blockboard Fir 22mm",
    nameGr: "Μπλόκμπορντ Έλατου 22mm",
    image: "/category_blockboard_1773695507126.png",
    type: "Πάνελ",
    description:
      "Στιβαρό πάνελ με πυρήνα έλατου, παρέχοντας εξαιρετική σταθερότητα.",
  },
  {
    name: "Veneered Blockboard Oak",
    nameGr: "Μπλόκμπορντ Επενδεδυμένο Δρυς",
    image: "/category_blockboard_1773695507126.png",
    type: "Πάνελ",
    description: "Πυρήνας λεύκας με φυσικό καπλαμά δρυός, έτοιμο για λούστρο.",
  },

  {
    name: "OSB 3 11mm",
    nameGr: "OSB 3 11mm",
    image: "/category_osb_1773695491952.png",
    type: "Δομικό Πάνελ",
    description: "Oriented Strand Board πάχους 11mm για στέγες και τοιχοποιία.",
  },
  {
    name: "OSB 3 15mm",
    nameGr: "OSB 3 15mm",
    image: "/category_osb_1773695491952.png",
    type: "Δομικό Πάνελ",
    description:
      "Ενισχυμένο OSB πάχους 15mm για δομικές κατασκευές αυξημένων απαιτήσεων.",
  },
  {
    name: "OSB 3 22mm T&G",
    nameGr: "OSB 3 22mm με πατούρα",
    image: "/category_osb_1773695491952.png",
    type: "Δομικό Πάνελ",
    description: "OSB με σύστημα click/πατούρα, ιδανικό για πατώματα.",
  },

  {
    name: "Okoume Lumber",
    nameGr: "Μαδέρια Οκουμέ",
    image: "/category_lumber_1773695520006.png",
    type: "Τροπικό Ξύλο",
    description:
      "Ελαφρύ τροπικό ξύλο, ιδανικό για ναυπηγική και ξυλουργικές εφαρμογές.",
  },
  {
    name: "Poplar Planks",
    nameGr: "Ταύλες Λεύκας",
    image: "/category_lumber_1773695520006.png",
    type: "Μαλακό Ξύλο",
    description: "Οικονομική και ευέλικτη λύση ξυλείας για σκελετούς σαλονιών.",
  },
  {
    name: "Swedish Pine Unedged",
    nameGr: "Σουηδικό Πεύκο Φαρδύ",
    image: "/category_lumber_1773695520006.png",
    type: "Μαλακό Ξύλο",
    description: "Εισαγόμενη ξυλεία πεύκου από τη Σουηδία, άριστης ποιότητας.",
  },
  {
    name: "Beech Wood Steamed",
    nameGr: "Οξιά Φουρνιστή",
    image: "/category_lumber_1773695520006.png",
    type: "Σκληρό Ξύλο",
    description:
      "Φουρνιστή ξυλεία οξιάς, βαριά και ανθεκτική για σκαλοπάτια και έπιπλα.",
  },
  {
    name: "Oak Lumber Prime",
    nameGr: "Δρυς Ευρώπης Prime",
    image: "/category_lumber_1773695520006.png",
    type: "Σκληρό Ξύλο",
    description:
      "Επιλεγμένη ξυλεία δρυός εξαιρετικής ποιότητας για πολυτελείς κατασκευές.",
  },
];

export default function ProductsPage() {


  return (
    <div className="bg-[#FAF9F7] min-h-screen overflow-hidden selection:bg-[#AC8D5B] selection:text-white">
    
    </div>
  );
}
