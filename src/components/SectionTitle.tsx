export interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <h2
      className={[
        "font-golos-text text-3xl font-black sm:text-4xl lg:text-5xl xl:text-6xl",
        className ?? "text-white",
      ].join(" ")}
    >
      {title}
    </h2>
  );
}
