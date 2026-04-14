"use client";

import { SlidersHorizontal } from "lucide-react";
import { useProductFilter } from "./ProductFilterContext";

interface ProductToolbarProps {
  products: { typeKey: string }[];
  productsCountLabel: string;
  filtersLabel: string;
}

export function ProductToolbar({
  products,
  productsCountLabel,
  filtersLabel,
}: ProductToolbarProps) {
  const { activeCategory } = useProductFilter();

  const count =
    activeCategory === "all"
      ? products.length
      : products.filter((p) => p.typeKey === activeCategory).length;

  return (
    <div className="mt-8 flex items-center justify-between border-b border-neutral-300 pb-3">
      <p className="text-sm font-medium text-neutral-800">
        {count} {productsCountLabel}
      </p>
      <button
        type="button"
        className="flex items-center gap-2 rounded-md border border-neutral-800 px-4 py-2 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-100"
      >
        <SlidersHorizontal className="size-4" />
        {filtersLabel}
      </button>
    </div>
  );
}
