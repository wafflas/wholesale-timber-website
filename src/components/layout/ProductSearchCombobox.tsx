"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { useRouter } from "@/i18n/navigation";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from "@/components/ui/popover";
import { PRODUCTS, type Product } from "@/lib/products";
import { cn } from "@/lib/utils";

function filterProducts(
  products: Product[],
  query: string,
  locale: string,
): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return products.filter((p) => {
    const name = locale === "el" ? p.nameGr : p.name;
    const type = locale === "el" ? p.typeGr : p.typeEn;
    const haystack = [
      name,
      type,
      p.slug,
      p.name,
      p.nameGr,
      p.typeEn,
      p.typeGr,
      p.subtitleEn,
      p.subtitleGr,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

function getProductLabels(product: Product, locale: string) {
  const title = locale === "el" ? product.nameGr : product.name;
  const type = locale === "el" ? product.typeGr : product.typeEn;
  return { title, type };
}

export function ProductSearchCombobox() {
  const router = useRouter();
  const locale = useLocale();
  const tBar = useTranslations("NavBar");

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchRef = useRef<HTMLInputElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const popoverPanelRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => filterProducts(PRODUCTS, searchQuery, locale),
    [searchQuery, locale],
  );

  const hasQuery = searchQuery.trim().length > 0;
  const panelOpen = searchOpen && hasQuery;
  const showSuggestions = panelOpen && filtered.length > 0;
  const showEmpty = panelOpen && filtered.length === 0;

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;

    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (pillRef.current?.contains(target)) return;
      if (popoverPanelRef.current?.contains(target)) return;
      setSearchOpen(false);
    };

    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [searchOpen]);

  const goToProduct = useCallback(
    (slug: string) => {
      setSearchOpen(false);
      setSearchQuery("");
      router.push(`/products/${slug}`);
    },
    [router],
  );

  return (
    <Popover
      modal={false}
      open={panelOpen}
      onOpenChange={(next) => {
        if (!next) setSearchOpen(false);
      }}
    >
      <PopoverAnchor asChild>
        <div ref={pillRef} className="relative flex items-center">
          <div
            className={`flex shrink-0 items-center overflow-hidden rounded-full border transition-all duration-300 ease-out h-11 md:h-10 ${
              searchOpen
                ? "w-[min(14rem,calc(100dvw-6.5rem))] border-white/25 bg-white/10 backdrop-blur-sm md:w-56"
                : "w-11 border-transparent bg-transparent backdrop-blur-none md:w-10"
            }`}
          >
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setSearchOpen((o) => !o)}
              aria-expanded={searchOpen}
              aria-label={searchOpen ? tBar("closeSearch") : tBar("openSearch")}
              className="flex h-11 w-11 shrink-0 items-center justify-center text-white/70 transition-colors hover:text-white md:h-10 md:w-10"
            >
              <Search className="size-6" strokeWidth={1.75} />
            </button>
            <input
              ref={searchRef}
              type="search"
              role="combobox"
              aria-expanded={panelOpen}
              aria-controls={
                panelOpen ? "product-search-suggestions" : undefined
              }
              aria-autocomplete="list"
              tabIndex={searchOpen ? 0 : -1}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={tBar("searchPlaceholder")}
              enterKeyHint="search"
              id="navbar-product-search"
              className={cn(
                "h-11 min-w-0 flex-1 bg-transparent py-0 pl-0 pr-3 text-base text-white outline-none transition-opacity duration-300 ease-out placeholder:text-white/45 font-golos-text md:h-10 md:pr-4 md:text-sm",
                searchOpen
                  ? "opacity-100"
                  : "pointer-events-none w-0 min-w-0 opacity-0 pr-0",
              )}
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
      </PopoverAnchor>

      <PopoverContent
        align="end"
        side="bottom"
        sideOffset={8}
        collisionPadding={16}
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="w-[min(14rem,calc(100dvw-6.5rem))] md:w-56 border-white/15 bg-secondary/95 p-0 text-white shadow-lg backdrop-blur-md"
      >
        <div ref={popoverPanelRef} id="product-search-suggestions">
          <Command shouldFilter={false} className="bg-transparent">
            <CommandList className="max-h-[min(18rem,calc(100dvh-8rem))]">
              {showEmpty ? (
                <CommandEmpty className="py-6 px-2 text-sm text-white/55">
                  {tBar("searchNoResults")}
                </CommandEmpty>
              ) : null}
              {showSuggestions ? (
                <CommandGroup className="p-1 text-white [&_[cmdk-group-heading]]:text-white/45">
                  {filtered.map((product) => {
                    const { title, type } = getProductLabels(product, locale);
                    return (
                      <CommandItem
                        key={product.slug}
                        value={product.slug}
                        onSelect={() => goToProduct(product.slug)}
                        className="cursor-pointer rounded-md px-2 py-2 text-white aria-selected:bg-white/10 aria-selected:text-white data-[selected=true]:bg-white/10 data-[selected=true]:text-white"
                      >
                        <div className="flex min-w-0 flex-col gap-0.5">
                          <span className="truncate text-sm font-medium leading-tight">
                            {title}
                          </span>
                          <span className="truncate text-[0.65rem] uppercase tracking-[0.12em] text-white/45">
                            {type}
                          </span>
                        </div>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              ) : null}
            </CommandList>
          </Command>
        </div>
      </PopoverContent>
    </Popover>
  );
}
