"use client";

import { useTranslations } from "next-intl";
import { useProductFilter } from "./ProductFilterContext";

interface ProductToolbarProps {
  products: { typeKey: string }[];
}

export function ProductToolbar({
  products,
}: ProductToolbarProps) {
  const { activeCategory } = useProductFilter();
  const t = useTranslations("ProductsPage");

  const count =
    activeCategory === "all"
      ? products.length
      : products.filter((p) => p.typeKey === activeCategory).length;

  return (
    <div className="mt-8 flex items-center justify-end border-b border-neutral-300 pb-3">
      <p className="text-sm font-medium text-neutral-800">
        {t("productsCountLabel", { count })}
      </p>
    </div>
  );
}
