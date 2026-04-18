"use client";

import { createContext, use, useState } from "react";

interface ProductFilterContextValue {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const ProductFilterContext = createContext<ProductFilterContextValue | null>(null);

export function ProductFilterProvider({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  function handleSetCategory(category: string) {
    setActiveCategory(category);
    setCurrentPage(1);
  }

  return (
    <ProductFilterContext value={{ activeCategory, setActiveCategory: handleSetCategory, currentPage, setCurrentPage }}>
      {children}
    </ProductFilterContext>
  );
}

export function useProductFilter() {
  const ctx = use(ProductFilterContext);
  if (!ctx) throw new Error("useProductFilter must be used within ProductFilterProvider");
  return ctx;
}
