"use client";

import { useProductFilter } from "./ProductFilterContext";

interface Category {
  key: string;
  label: string;
}

interface ProductTabBarProps {
  categories: Category[];
  allLabel: string;
}

export function ProductTabBar({ categories, allLabel }: ProductTabBarProps) {
  const { activeCategory, setActiveCategory } = useProductFilter();

  const tabs = [{ key: "all", label: allLabel }, ...categories];

  return (
    <div className="fixed left-0 right-0 top-[84px] z-40 bg-white/95 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)] backdrop-blur-sm md:top-[80px]">
      <div className="mx-auto max-w-3xl overflow-x-auto px-2 py-3 sm:px-6 lg:max-w-5xl lg:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex w-max gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveCategory(tab.key)}
              className={`shrink-0 rounded-full px-4 py-2.5 text-[0.65rem] font-semibold uppercase tracking-wider transition-colors sm:px-5 sm:text-xs ${
                activeCategory === tab.key
                  ? "bg-[#2b2623] text-white"
                  : "bg-[#ebe8e4] text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
