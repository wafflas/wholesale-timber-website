interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div>
      <h1 className="mt-5 font-golos-text text-[1.75rem] font-semibold tracking-tight text-[#2b2623] sm:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2.5 max-w-lg text-[0.85rem] leading-relaxed text-[#2b2623]/55">
          {subtitle}
        </p>
      )}
    </div>
  );
}
