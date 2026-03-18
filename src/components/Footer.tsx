import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2a2520] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="flex flex-col space-y-5 lg:col-span-1">
            <Logo variant="light" />
            <p className="text-sm text-white/60 leading-relaxed">
              Αξιοπιστία στις εισαγωγές και εξαγωγές ξυλείας. Κορυφαία προϊόντα
              για επαγγελματίες, από όλο τον κόσμο.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="pb-4 text-sm font-bold tracking-wider uppercase text-[#AC8D5B] font-[family-name:var(--font-heading)]">
              Προϊόντα
            </h3>
            <ul className="space-y-3">
              {[
                "Birch Plywood",
                "Okoume",
                "Poplar",
                "Blockboard",
                "OSB",
                "PET MDF",
              ].map((product) => (
                <li key={product}>
                  <Link
                    href="/products"
                    className="text-sm text-white/60 hover:text-[#AC8D5B] transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="pb-4 text-sm font-bold tracking-wider uppercase text-[#AC8D5B] font-[family-name:var(--font-heading)]">
              Πλοήγηση
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Αρχική", href: "/" },
                { label: "Η Εταιρεία", href: "/#about" },
                { label: "Υπηρεσίες", href: "/services" },
                { label: "Προϊόντα", href: "/products" },
                { label: "Επικοινωνία", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#AC8D5B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="pb-4 text-sm font-bold tracking-wider uppercase text-[#AC8D5B] font-[family-name:var(--font-heading)]">
              Επικοινωνία
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-[#AC8D5B] shrink-0" />
                <div>
                  <a
                    href="tel:+306932262910"
                    className="text-sm text-white/60 hover:text-[#AC8D5B] transition-colors block"
                  >
                    6932 262 910
                  </a>
                  <a
                    href="tel:+302108000365"
                    className="text-sm text-white/60 hover:text-[#AC8D5B] transition-colors block"
                  >
                    210 800 0365
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-[#AC8D5B] shrink-0" />
                <span className="text-sm text-white/60">
                  Φιλαδελφείας 7,
                  <br />
                  Νέα Ερυθραία, Αθήνα
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 text-[#AC8D5B] shrink-0" />
                <span className="text-sm text-white/60">
                  Δευτέρα - Παρασκευή
                  <br />
                  9:00 πμ - 5:00 μμ
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-[#AC8D5B] shrink-0" />
                <a
                  href="mailto:info@bestply.gr"
                  className="text-sm text-white/60 hover:text-[#AC8D5B] transition-colors"
                >
                  info@bestply.gr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} BEST PLY I.K.E. Με επιφύλαξη παντός
          δικαιώματος.
        </div>
      </div>
    </footer>
  );
}
