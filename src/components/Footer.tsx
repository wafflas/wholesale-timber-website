import React from "react";
import Logo from "./Logo";
interface MenuItem {
  label: string;
  href?: string;
}

interface MenuSection {
  heading: string;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    heading: "Προϊόντα",
    items: [
      { label: "Σκληρά ξύλα", href: "/one" },
      { label: "Μαλακά ξύλα", href: "/two" },
      { label: "Κόντρα πλακέ και πάνελ", href: "/two" },
      { label: "Εξωτικά ξύλα", href: "/two" },
    ],
  },
  {
    heading: "Εταιρεία",
    items: [
      { label: "Εγκαταστάσεις", href: "/one" },
      { label: "Επικοινωνία", href: "/two" },
    ],
  },
  {
    heading: "Επικοινωνία",
    items: [
      { label: "+1 (800) 555-WOOD", href: "/one" },
      { label: "info@timberlinenexus.com", href: "/two" },
      { label: "Portland, Oregon, USA", href: "/two" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="flex flex-col space-y-5">
            <Logo />
            <p className="text-sm text-primary-foreground/70">
              Βιώσιμη ξυλεία κορυφαίας ποιότητας από όλο τον κόσμο. Μηχανική
              αριστεία σε κάθε σανίδα.
            </p>
          </div>
          <>
            {menuSections.map((section) => (
              <ul key={section.heading}>
                <li className="pb-3 text-lg font-semibold">
                  {section.heading}
                </li>
                {section.items.map((item) => (
                  <li
                    key={item.label}
                    className="text-sm text-primary-foreground/70 font-normal"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            ))}
          </>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-xs text-primary-foreground/50">
          © 2026 BEST PLY ΙΚΕ. Με επιφύλαξη παντός δικαιώματος.
        </div>
      </div>
    </footer>
  );
}
