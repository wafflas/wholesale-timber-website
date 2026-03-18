"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Search, PhoneCall } from "lucide-react";

const links = [
  { href: "/", label: "Αρχική" },
  { href: "/#about", label: "Η Εταιρεία" },
  { href: "/services", label: "Υπηρεσίες" },
  { href: "/products", label: "Προϊόντα" },
  { href: "/contact", label: "Επικοινωνία" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/#about") return false;
    return pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg border-b border-gray-100"
          : "bg-white/95 backdrop-blur-xl border-b border-gray-100"
      }`}
    >
      <div className="relative z-50 mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {/* Main Links */}
          <ul className="flex items-center justify-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-semibold tracking-wide transition-colors hover:text-[#AC8D5B] focus:text-[#AC8D5B] ${
                    isActive(link.href) ? "text-[#AC8D5B]" : "text-[#333333]/80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-8 w-px bg-gray-200" />

          {/* Contact Info Block */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#1a1a1a] text-[#1a1a1a]">
              <PhoneCall className="h-5 w-5" />
            </div>
            <div className="flex flex-col justify-center leading-tight">
              <a
                href="tel:+302310770742"
                className="text-[1.1rem] font-bold text-[#1a1a1a] hover:text-[#AC8D5B] transition-colors font-[family-name:var(--font-heading)]"
              >
                2310 770 742
              </a>
              <a
                href="mailto:info@michalisli-wood.gr"
                className="text-sm font-medium text-[#1a1a1a]/80 hover:text-[#AC8D5B] transition-colors"
              >
                info@michalisli-wood.gr
              </a>
            </div>
          </div>

          <div className="h-8 w-px bg-gray-200" />

          {/* Search Button */}
          <div className="relative flex items-center">
            <div
              className={`flex items-center overflow-hidden rounded-full border border-gray-200 bg-gray-50 transition-all duration-300 ${
                searchOpen ? "w-48" : "w-10 border-transparent bg-transparent"
              }`}
            >
              <button
                onClick={() => {
                  setSearchOpen(!searchOpen);
                  if (!searchOpen)
                    setTimeout(() => searchRef.current?.focus(), 100);
                }}
                className={`flex h-10 w-10 shrink-0 items-center justify-center transition-colors ${
                  searchOpen
                    ? "text-[#AC8D5B]"
                    : "text-[#1a1a1a] hover:text-[#AC8D5B]"
                }`}
              >
                <Search className="h-5 w-5" />
              </button>
              <input
                ref={searchRef}
                type="text"
                placeholder="Αναζήτηση..."
                className="h-10 w-full bg-transparent pr-4 text-sm text-[#333333] outline-none placeholder:text-gray-400"
                onBlur={() => {
                  if (!searchRef.current?.value) setSearchOpen(false);
                }}
              />
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex h-10 w-10 items-center justify-center text-[#1a1a1a]"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center text-[#1a1a1a]"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-20">
          <div className="flex h-full flex-col">
            <ul className="flex flex-col items-center justify-center gap-4 py-8 bg-white border-b border-gray-100">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-semibold tracking-wide transition-colors hover:text-[#AC8D5B] focus:text-[#AC8D5B] ${
                      isActive(link.href)
                        ? "text-[#AC8D5B]"
                        : "text-[#333333]/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center justify-center gap-4 py-8 bg-white">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#1a1a1a] text-[#1a1a1a]">
                <PhoneCall className="h-6 w-6" />
              </div>
              <a
                href="tel:+302310770742"
                className="text-xl font-bold text-[#1a1a1a] font-[family-name:var(--font-heading)]"
              >
                2310 770 742
              </a>
              <a
                href="mailto:info@michalisli-wood.gr"
                className="text-base font-medium text-[#1a1a1a]/80"
              >
                info@michalisli-wood.gr
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
