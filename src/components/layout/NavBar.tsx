"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { ProductSearchCombobox } from "@/components/layout/ProductSearchCombobox";
import gsap from "gsap";
import { useLenis } from "lenis/react";

const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "company", href: "/#company" },
  { key: "products", href: "/products" },
  { key: "contact", href: "/contact" },
] as const;

export function NavBar() {
  const pathname = usePathname();
  const tNav = useTranslations("Navigation");
  const tBar = useTranslations("NavBar");
  const lenis = useLenis();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [overlayHidden, setOverlayHidden] = useState(true);
  const lineTopRef = useRef<HTMLSpanElement>(null);
  const lineMidRef = useRef<HTMLSpanElement>(null);
  const lineBottomRef = useRef<HTMLSpanElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const seamRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const navLabelRef = useRef<HTMLParagraphElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const overlayTl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;
    const menuContent = menuContentRef.current;
    const seam = seamRef.current;
    const watermark = watermarkRef.current;
    const navLabel = navLabelRef.current;
    const footer = footerRef.current;
    const top = lineTopRef.current;
    const mid = lineMidRef.current;
    const bottom = lineBottomRef.current;
    const links = linksRef.current ? Array.from(linksRef.current.children) : [];

    if (
      !leftPanel ||
      !rightPanel ||
      !menuContent ||
      !seam ||
      !watermark ||
      !navLabel ||
      !footer ||
      !top ||
      !mid ||
      !bottom
    )
      return;

    gsap.set(leftPanel, { xPercent: -100 });
    gsap.set(rightPanel, { xPercent: 100 });
    gsap.set(menuContent, { opacity: 0 });
    gsap.set(seam, { opacity: 0, scaleY: 0.3, transformOrigin: "50% 50%" });
    gsap.set(watermark, { opacity: 0 });
    gsap.set(navLabel, { opacity: 0, y: -10 });
    gsap.set(links, { opacity: 0, y: 50, x: -20 });
    gsap.set(footer, { opacity: 0, y: 20 });
    gsap.set([top, mid, bottom], { transformOrigin: "50% 50%" });
    gsap.set(mid, { scaleX: 1 });

    const tl = gsap.timeline({ paused: true });

    const lineEase = "power3.inOut";
    const lineDuration = 0.42;
    const mergeY = 6;
    const contentStart = 0.6;

    tl.to(
      leftPanel,
      {
        xPercent: 0,
        duration: 0.65,
        ease: "power4.inOut",
      },
      0,
    );
    tl.to(
      rightPanel,
      {
        xPercent: 0,
        duration: 0.65,
        ease: "power4.inOut",
      },
      0,
    );

    tl.to(
      seam,
      {
        opacity: 1,
        scaleY: 1,
        duration: 0.3,
        ease: "power2.out",
      },
      0.3,
    );
    tl.to(
      seam,
      {
        opacity: 0,
        duration: 0.45,
        ease: "power2.inOut",
      },
      0.6,
    );

    tl.to(
      mid,
      { scaleX: 0, opacity: 0, duration: 0.22, ease: "power2.in" },
      0.06,
    );
    tl.to(
      top,
      { rotate: 45, y: mergeY, duration: lineDuration, ease: lineEase },
      0.11,
    );
    tl.to(
      bottom,
      { rotate: -45, y: -mergeY, duration: lineDuration, ease: lineEase },
      0.11,
    );

    tl.to(
      menuContent,
      {
        opacity: 1,
        duration: 0.25,
        ease: "power2.out",
      },
      contentStart,
    );

    tl.to(
      navLabel,
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
      },
      contentStart + 0.05,
    );

    tl.to(
      links,
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: "power3.out",
      },
      contentStart + 0.12,
    );

    tl.to(
      watermark,
      {
        opacity: 1,
        duration: 0.4,
        ease: "sine.out",
      },
      contentStart + 0.05,
    );

    tl.to(
      footer,
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power2.out",
      },
      contentStart + 0.3,
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
      if (lenis) lenis.start();
      document.body.style.overflow = "";
      overlayTl.current.reverse();
    } else {
      if (lenis) lenis.stop();
      document.body.style.overflow = "hidden";
      flushSync(() => setOverlayHidden(false));
      overlayTl.current.play();
    }
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isHome = pathname === "/";
  const navBg =
    isHome && !isScrolled ? "bg-transparent" : "bg-secondary backdrop-blur-sm";
  const textColor = "text-white";

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isMobile: boolean = false,
  ) => {
    if (isMobile && isOpen) {
      toggleMenu();
    }

    if (isHome) {
      if (href === "/") {
        e.preventDefault();
        lenis?.scrollTo(0, { duration: 1.2 });
      } else if (href === "/#company") {
        e.preventDefault();
        lenis?.scrollTo("#company", { duration: 1.2, offset: -80 });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[4500] transition-all duration-500 ease-in-out px-6 md:px-10 lg:px-14 py-5 flex items-center justify-between ${navBg} ${textColor}`}
      >
        <Link
          href="/"
          aria-label={tNav("home")}
          className="shrink-0 flex items-center"
          onClick={(e) => handleNavClick(e, "/", false)}
        >
          <Image
            src="/Logo.svg"
            alt="BEST PLY I.K.E."
            width={88}
            height={36}
            priority
            className="h-9 w-auto lg:h-10"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, false)}
                className={`relative px-4 py-2 font-golos-text text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:text-white group ${
                  isActive(link.href) ? "text-white" : "text-white/60"
                }`}
              >
                {tNav(link.key)}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 ease-out ${
                    isActive(link.href) ? "w-4/5" : "w-0 group-hover:w-4/5"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <ProductSearchCombobox />

          <LocaleSwitcher />

          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isOpen ? tBar("closeMenu") : tBar("openMenu")}
            aria-expanded={isOpen}
            className={`rounded-md p-1.5 flex items-center justify-center group transition-colors hover:text-white lg:hidden ${isOpen ? "text-white transition-all duration-300 ease-out" : "text-white/70 hover:text-white transition-all duration-300 ease-out"}`}
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
        className="fixed inset-0 z-[4000] overflow-hidden"
        aria-hidden={overlayHidden}
      >
        <div
          ref={leftPanelRef}
          className="absolute inset-y-0 left-0 w-1/2 bg-secondary"
        />
        <div
          ref={rightPanelRef}
          className="absolute inset-y-0 right-0 w-1/2 bg-secondary"
        />
        <div
          ref={seamRef}
          className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-primary/25"
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(172,141,91,0.06)_0%,_transparent_55%)] pointer-events-none" />

        <div
          ref={watermarkRef}
          className="pointer-events-none absolute right-2 top-1/2 z-[1] -translate-y-1/2 select-none sm:right-5 md:right-10"
        >
          <span className="font-hero text-[clamp(4rem,min(11.5rem,11.5dvh),11.5rem)] leading-[0.85] tracking-hero text-white/[0.18] [writing-mode:vertical-rl] md:text-[16rem] md:text-white/[0.045] lg:text-white/[0.025]">
            BEST PLY
          </span>
        </div>

        <div
          ref={menuContentRef}
          className="relative z-[2] flex h-full flex-col justify-between overflow-y-auto px-8 pb-10 pt-28 md:px-14"
        >
          <div>
            <p
              ref={navLabelRef}
              className="mb-6 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-primary/40"
            >
              {tNav("label")}
            </p>
            <ul ref={linksRef} className="flex flex-col">
              {NAV_LINKS.map((link, i) => (
                <li
                  key={link.href}
                  className="group border-b border-primary/10"
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, true)}
                    className="flex items-baseline gap-4 py-5 transition-colors duration-300 md:py-7"
                  >
                    <span className="font-golos-text text-[0.65rem] font-medium tabular-nums tracking-[0.2em] text-primary/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-golos-text text-[2.4rem] font-semibold leading-none text-primary transition-colors duration-300 group-hover:text-white md:text-[4rem]">
                      {tNav(link.key)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div ref={footerRef} className="pt-8">
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-primary/40">
              {tBar("contactLabel")}
            </p>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="flex flex-col gap-1.5">
                <a
                  href="tel:+306932262910"
                  className="font-golos-text text-[0.8rem] tracking-[0.04em] text-[#d1d1d1]/80 transition-colors hover:text-white"
                >
                  +30 6932 262 910
                </a>
                <a
                  href="tel:+306943619220"
                  className="font-golos-text text-[0.8rem] tracking-[0.04em] text-[#d1d1d1]/80 transition-colors hover:text-white"
                >
                  +30 6943 619 220
                </a>
                <a
                  href="tel:+306944567317"
                  className="font-golos-text text-[0.8rem] tracking-[0.04em] text-[#d1d1d1]/80 transition-colors hover:text-white"
                >
                  +30 6944 567 317
                </a>
                <a
                  href="tel:+302108000365"
                  className="font-golos-text text-[0.8rem] tracking-[0.04em] text-[#d1d1d1]/80 transition-colors hover:text-white"
                >
                  +30 210 800 0365
                </a>
                <a
                  href="mailto:bestplyike@gmail.com"
                  className="font-golos-text text-[0.8rem] tracking-[0.04em] text-[#d1d1d1]/80 transition-colors hover:text-white"
                >
                  bestplyike@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
