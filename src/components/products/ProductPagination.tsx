"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useProductFilter } from "./ProductFilterContext";

interface ProductPaginationProps {
  totalPages: number;
}

export function ProductPagination({ totalPages }: ProductPaginationProps) {
  const { currentPage, setCurrentPage } = useProductFilter();

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-10 flex items-center justify-center gap-1.5">
      <button
        type="button"
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex h-9 w-9 items-center justify-center rounded-md bg-[#ebe8e4] text-primary transition-colors hover:bg-[#dedad5] disabled:pointer-events-none disabled:opacity-30"
      >
        <ChevronLeft className="size-4" strokeWidth={2} aria-hidden />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => setCurrentPage(page)}
          aria-label={`Page ${page}`}
          aria-current={currentPage === page ? "page" : undefined}
          className={`flex h-9 w-9 items-center justify-center rounded-md font-golos-text text-sm font-semibold transition-colors ${
            currentPage === page
              ? "bg-[#2b2623] text-white"
              : "bg-[#ebe8e4] text-primary hover:bg-[#dedad5]"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex h-9 w-9 items-center justify-center rounded-md bg-[#ebe8e4] text-primary transition-colors hover:bg-[#dedad5] disabled:pointer-events-none disabled:opacity-30"
      >
        <ChevronRight className="size-4" strokeWidth={2} aria-hidden />
      </button>
    </div>
  );
}
