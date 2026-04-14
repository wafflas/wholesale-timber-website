"use client";

import { createContext, use, useState } from "react";

interface ProductFilterContextValue {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const ProductFilterContext = createContext<ProductFilterContextValue | null>(null);

export function ProductFilterProvider({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <ProductFilterContext value={{ activeCategory, setActiveCategory }}>
      {children}
    </ProductFilterContext>
  );
}

export function useProductFilter() {
  const ctx = use(ProductFilterContext);
  if (!ctx) throw new Error("useProductFilter must be used within ProductFilterProvider");
  return ctx;
}
