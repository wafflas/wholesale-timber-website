"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Search } from "lucide-react";

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
  }, [location]);

  const links = [
    { href: "/", label: "Αρχική" },
    { href: "/products", label: "Προϊόντα" },
    { href: "/contact", label: "Επικοινωνία" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-xl border-b border-border/50 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="relative z-50 mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center justify-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-heading text-sm font-medium tracking-wide transition-colors  hover:text-primary focus:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
                    isActive(link.href) ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Search + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="relative hidden md:flex items-center">
            <div
              className={`flex items-center overflow-hidden rounded-full border border-border bg-muted/50 transition-all duration-300 ${
                searchOpen ? "w-56" : "w-10"
              }`}
            >
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="flex h-10 w-10 shrink-0 items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Search className="h-4 w-4" />
              </button>
              <input
                ref={searchRef}
                type="text"
                placeholder="Search products..."
                className="h-10 w-full bg-transparent pr-4 text-sm text-foreground outline-none placeholder:text-muted-foreground font-body"
                onBlur={() => setSearchOpen(false)}
              />
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center text-foreground md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-16">
          <div className="flex h-full flex-col">
            <ul className="flex flex-col items-center justify-center gap-4 py-8 bg-background">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-heading text-sm font-medium tracking-wide transition-colors  hover:text-primary focus:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-foreground/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
