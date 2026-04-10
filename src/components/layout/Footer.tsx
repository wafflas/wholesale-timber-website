"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const PRODUCT_LINKS = [
  { label: "Birch Plywood", href: "/products" },
  { label: "Poplar", href: "/products" },
  { label: "Blockboard", href: "/products" },
  { label: "OSB", href: "/products" },
  { label: "PET MDF", href: "/products" },
] as const;

const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "company", href: "/company" },
  { key: "products", href: "/products" },
  { key: "contact", href: "/contact" },
] as const;

const footerLinkClass =
  "text-[#d1d1d1]/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2b2623]";

export function Footer() {
  const tNav = useTranslations("Navigation");
  const tFooter = useTranslations("Footer");

  return (
    <footer className="bg-[#2b2623] text-[#d1d1d1]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:py-16 lg:px-8 lg:py-20 xl:max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2b2623]"
            >
              <Image
                src="/Logo.svg"
                alt="BEST PLY I.K.E."
                width={88}
                height={36}
                className="h-9 w-auto lg:h-11"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#d1d1d1]/85 lg:text-base lg:leading-relaxed">
              {tFooter("description")}
            </p>
          </div>

          <nav
            aria-labelledby="footer-products-heading"
            className="lg:col-span-2"
          >
            <h2
              id="footer-products-heading"
              className="text-xs font-bold uppercase tracking-[0.2em] text-primary"
            >
              {tFooter("products")}
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {PRODUCT_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-nav-heading" className="lg:col-span-2">
            <h2
              id="footer-nav-heading"
              className="text-xs font-bold uppercase tracking-[0.2em] text-primary"
            >
              {tFooter("navigation")}
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClass}>
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {tFooter("contact")}
            </h2>
            <ul className="mt-5 space-y-5 text-sm">
              <li>
                <div className="flex gap-3">
                  <Phone
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+306932262910"
                      className={`${footerLinkClass} w-fit`}
                    >
                      6932 262 910
                    </a>
                    <a
                      href="tel:+306943619220"
                      className={`${footerLinkClass} w-fit`}
                    >
                      6943 619 220
                    </a>
                    <a
                      href="tel:+306944567317"
                      className={`${footerLinkClass} w-fit`}
                    >
                      6944 567 317
                    </a>
                    <a
                      href="tel:+302108000365"
                      className={`${footerLinkClass} w-fit`}
                    >
                      210 800 0365
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Φιλαδελφείας+7,+Νέα+Ερυθραία,+Αθήνα"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${footerLinkClass} max-w-xs leading-relaxed`}
                  >
                    {tFooter("address")}
                  </a>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <Clock
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="leading-relaxed">{tFooter("hours")}</span>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <Mail
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <a
                    href="mailto:bestplyike@gmail.com"
                    className={`${footerLinkClass} w-fit`}
                  >
                    bestplyike@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/20 pt-8">
          <p className="text-center text-xs text-[#d1d1d1]/70">
            © {new Date().getFullYear()} BEST PLY I.K.E. {tFooter("rights")}
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
            <li>
              <Link href="/privacy" className={footerLinkClass}>
                {tFooter("privacy")}
              </Link>
            </li>
            <li>
              <Link href="/terms" className={footerLinkClass}>
                {tFooter("terms")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
