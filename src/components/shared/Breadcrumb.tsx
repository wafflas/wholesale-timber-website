import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-[0.6rem] md:text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#2b2623]/40"
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;

        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {i > 0 && (
              <ChevronRight className="size-3" strokeWidth={2} aria-hidden />
            )}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#2b2623]/70">{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
