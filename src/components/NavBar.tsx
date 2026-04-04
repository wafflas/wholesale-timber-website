"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { Search } from "lucide-react";

const NAV_LINKS = [
  { label: "ΠΡΟΪΟΝΤΑ", href: "/products" },
  { label: "ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ", href: "/contact" },
];

export function NavBar() {
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [overlayHidden, setOverlayHidden] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const lineTopRef = useRef<HTMLSpanElement>(null);
  const lineMidRef = useRef<HTMLSpanElement>(null);
  const lineBottomRef = useRef<HTMLSpanElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const overlayTl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const overlay = overlayRef.current;
    const top = lineTopRef.current;
    const mid = lineMidRef.current;
    const bottom = lineBottomRef.current;
    const links = linksRef.current
      ? Array.from(linksRef.current.children)
      : [];

    if (!overlay || !top || !mid || !bottom) return;

    gsap.set(overlay, {
      yPercent: -100,
      opacity: 0,
      pointerEvents: "none",
    });
    gsap.set(links, { opacity: 0, y: 20 });
    gsap.set([top, mid, bottom], { transformOrigin: "50% 50%" });
    gsap.set(mid, { scaleX: 1 });

    const tl = gsap.timeline({ paused: true });

    const lineEase = "power3.inOut";
    const lineDuration = 0.42;
    /** Line centers at 6 / 12 / 18px in a 24px-tall icon → meet at middle with ±6px travel. */
    const mergeY = 6;

    tl.to(overlay, {
      yPercent: 0,
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.55,
      ease: "power3.out",
    });

    tl.to(
      mid,
      { scaleX: 0, opacity: 0, duration: 0.22, ease: "power2.in" },
      "<0.06",
    );
    tl.to(
      top,
      { rotate: 45, y: mergeY, duration: lineDuration, ease: lineEase },
      "<0.05",
    );
    tl.to(
      bottom,
      { rotate: -45, y: -mergeY, duration: lineDuration, ease: lineEase },
      "<",
    );

    tl.to(
      links,
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: "power2.out" },
      "<0.1",
    );

    tl.eventCallback("onComplete", () => {
      setIsOpen(true);
    });
    tl.eventCallback("onReverseComplete", () => {
      setIsOpen(false);
      setOverlayHidden(true);
    });

    overlayTl.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  const toggleMenu = () => {
    if (!overlayTl.current) return;
    if (overlayTl.current.isActive()) return;

    if (isOpen) {
      overlayTl.current.reverse();
    } else {
      flushSync(() => setOverlayHidden(false));
      overlayTl.current.play();
    }
  };

  const textColor = "text-white";
  const navBg = isScrolled ? "bg-secondary backdrop-blur-sm" : "bg-transparent";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[4500] transition-all duration-500 ease-in-out px-6 md:px-10 py-5 flex items-center justify-between ${navBg} ${textColor}`}
      >
        <Link
          href="/"
          aria-label="Home"
          className="shrink-0 flex items-center"
        >
          <Image
            src="/Logo.svg"
            alt="BEST PLY I.K.E."
            width={88}
            height={36}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <div className="relative flex items-center">
            <div
              className={`flex shrink-0 items-center overflow-hidden rounded-full border transition-all duration-300 ease-out h-11 md:h-10 ${
                searchOpen
                  ? "w-[min(14rem,calc(100vw-6.5rem))] border-white/25 bg-white/10 backdrop-blur-sm md:w-56"
                  : "w-11 border-transparent bg-transparent backdrop-blur-none md:w-10"
              }`}
            >
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setSearchOpen((o) => !o)}
                aria-expanded={searchOpen}
                aria-label={
                  searchOpen ? "Κλείσιμο αναζήτησης" : "Άνοιγμα αναζήτησης"
                }
                className="flex h-11 w-11 shrink-0 items-center justify-center text-white/70 transition-colors hover:text-white md:h-10 md:w-10"
              >
                <Search className="size-6" strokeWidth={1.75} />
              </button>
              <input
                ref={searchRef}
                type="search"
                tabIndex={searchOpen ? 0 : -1}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Αναζήτηση προϊόντων..."
                enterKeyHint="search"
                className={`h-11 min-w-0 flex-1 bg-transparent py-0 pl-0 pr-3 text-base text-white outline-none transition-opacity duration-300 ease-out placeholder:text-white/45 font-golos-text md:h-10 md:pr-4 md:text-sm ${
                  searchOpen
                    ? "opacity-100"
                    : "pointer-events-none w-0 min-w-0 opacity-0 pr-0"
                }`}
                onBlur={() => setSearchOpen(false)}
                onKeyDown={(e) => {
                  if (e.key !== "Enter") return;
                  e.preventDefault();
                  const q = searchQuery.trim();
                  setSearchOpen(false);
                  router.push(
                    q ? `/products?q=${encodeURIComponent(q)}` : "/products",
                  );
                }}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className={`rounded-md p-1.5 flex items-center justify-center group transition-colors hover:text-white ${isOpen ? "text-white transition-all duration-300 ease-out" : "text-white/70 hover:text-white transition-all duration-300 ease-out"}`}
          >
            <div className="relative size-6 shrink-0">
              <span
                ref={lineTopRef}
                className="absolute left-0 top-[5.125px] block h-[1.75px] w-full bg-current origin-center rounded-full"
              />
              <span
                ref={lineMidRef}
                className="absolute left-0 top-1/2 block h-[1.75px] w-full -translate-y-1/2 bg-current origin-center rounded-full"
              />
              <span
                ref={lineBottomRef}
                className="absolute left-0 bottom-[5.125px] block h-[1.75px] w-full bg-current origin-center rounded-full"
              />
            </div>
          </button>
        </div>
      </nav>

      <div
        ref={overlayRef}
        hidden={overlayHidden}
        className="fixed inset-0 z-[4000] bg-secondary flex flex-col px-8 md:px-14 pt-28 pb-12 overflow-y-auto opacity-0"
        aria-hidden={overlayHidden}
      >
        <ul ref={linksRef} className="flex flex-col gap-2 flex-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => {
                  if (isOpen) toggleMenu();
                }}
                className="font-golos-text text-primary text-[2.25rem] md:text-[3.8rem] leading-none hover:opacity-50 transition-opacity duration-300 block py-2 border-b border-primary/10"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 pt-6 border-t border-primary/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <a
              href="tel:+306932262910"
              className="font-golos-text text-[0.7rem] tracking-[0.12em] uppercase text-primary/60 hover:text-primary transition-colors"
            >
              +30 6932 262 910
            </a>
            <a          
              href="mailto:bestplyike@gmail.com"
              className="font-golos-text text-[0.7rem] tracking-[0.12em] uppercase text-primary/60 hover:text-primary transition-colors"
            >
              bestplyike@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/306932262910"
              target="_blank"
              rel="noopener noreferrer"
              className="font-golos-text text-[0.6rem] tracking-[0.18em] uppercase text-primary/50 hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

