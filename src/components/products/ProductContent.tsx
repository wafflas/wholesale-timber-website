"use client";

import { useProductFilter } from "./ProductFilterContext";
import { ProductCard } from "./ProductCard";
import { ProductPagination } from "./ProductPagination";

const ITEMS_PER_PAGE = 6;

interface PreparedProduct {
  title: string;
  subtitle: string;
  image: string;
  typeLabel: string;
  typeKey: string;
  slug: string;
}

interface ProductContentProps {
  products: PreparedProduct[];
}

export function ProductContent({ products }: ProductContentProps) {
  const { activeCategory, currentPage } = useProductFilter();

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.typeKey === activeCategory);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
        {paginated.map((p) => (
          <ProductCard
            key={p.slug}
            title={p.title}
            subtitle={p.subtitle}
            image={p.image}
            typeLabel={p.typeLabel}
            slug={p.slug}
          />
        ))}
      </div>
      <ProductPagination totalPages={totalPages} />
    </>
  );
}
