"use client";

import { useProductFilter } from "./ProductFilterContext";

interface ProductToolbarProps {
  products: { typeKey: string }[];
  productsCountLabel: string;
}

export function ProductToolbar({
  products,
  productsCountLabel,
}: ProductToolbarProps) {
  const { activeCategory } = useProductFilter();

  const count =
    activeCategory === "all"
      ? products.length
      : products.filter((p) => p.typeKey === activeCategory).length;

  return (
    <div className="mt-8 flex items-center justify-end border-b border-neutral-300 pb-3">
      <p className="text-sm font-medium text-neutral-800">
        {count} {productsCountLabel}
      </p>
    </div>
  );
}
