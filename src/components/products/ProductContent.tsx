"use client";

import { useProductFilter } from "./ProductFilterContext";
import { ProductCard } from "./ProductCard";

interface PreparedProduct {
  title: string;
  subtitle: string;
  image: string;
  typeLabel: string;
  typeKey: string;
}

interface ProductContentProps {
  products: PreparedProduct[];
}

export function ProductContent({ products }: ProductContentProps) {
  const { activeCategory } = useProductFilter();

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.typeKey === activeCategory);

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
      {filtered.map((p) => (
        <ProductCard
          key={p.title}
          title={p.title}
          subtitle={p.subtitle}
          image={p.image}
          typeLabel={p.typeLabel}
        />
      ))}
    </div>
  );
}
