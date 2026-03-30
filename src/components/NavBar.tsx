"use client";

import { useEffect, useRef, useState } from "react";
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

  const lineTopRef = useRef<HTMLSpanElement>(null);
  const lineMidRef = useRef<HTMLSpanElement>(null);
  const lineBottomRef = useRef<HTMLSpanElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const overlayTl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

    const tl = gsap.timeline({ paused: true });

    tl.to(overlay, {
      yPercent: 0,
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.55,
      ease: "power3.out",
    });

    tl.to(
      top,
      { rotate: 45, y: 3.75, duration: 0.35, ease: "power2.inOut" },
      "<0.1",
    );
    tl.to(
      bottom,
      { rotate: -45, y: -3.75, duration: 0.35, ease: "power2.inOut" },
      "<",
    );
    tl.to(mid, { opacity: 0, duration: 0.15, ease: "power2.out" }, "<0.1");

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
      setIsOpen(true);
      overlayTl.current.play();
    }
  };

  const textColor = "text-white";
  const navBg = isScrolled ? "bg-black/20 backdrop-blur-sm" : "bg-transparent";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[4500] transition-all duration-500 ease-in-out px-6 md:px-10 py-5 flex items-center justify-between ${navBg} ${textColor}`}
      >
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center"
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

        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => {
              if (isOpen) toggleMenu();
              router.push("/products");
            }}
            aria-label="Search / Products"
            className="rounded-md p-1.5 transition-opacity hover:opacity-80 focus:outline-none"
          >
            <Search className="size-6" strokeWidth={1.75} />
          </button>

          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex items-center gap-3 focus:outline-none group"
          >
            <div className="relative w-9 h-[12px]">
              <span
                ref={lineTopRef}
                className="absolute top-0 left-0 block h-[1.5px] w-full bg-current origin-center"
              />
              <span
                ref={lineMidRef}
                className="absolute top-1/2 left-0 block h-[1.5px] w-full -translate-y-1/2 bg-current origin-center"
              />
              <span
                ref={lineBottomRef}
                className="absolute bottom-0 left-0 block h-[1.5px] w-full bg-current origin-center"
              />
            </div>
          </button>
        </div>
      </nav>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-[4000] bg-secondary flex flex-col px-8 md:px-14 pt-28 pb-12 overflow-y-auto opacity-0"
        aria-hidden={!isOpen}
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
              href="mailto:info@bestply.gr"
              className="font-golos-text text-[0.7rem] tracking-[0.12em] uppercase text-primary/60 hover:text-primary transition-colors"
            >
              info@bestply.gr
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

