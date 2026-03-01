import Image from "next/image";

const badgeColor: Record<string, string> = {
  Σκληρό: "bg-amber-100 text-amber-800",
  Μαλακό: "bg-emerald-100 text-emerald-800",
  Εξωτικό: "bg-purple-100 text-purple-800",
  Κόντρα: "bg-sky-100 text-sky-800",
};

interface ProductCardProps {
  name: string;
  image: string;
  type: string;
  origin: string;
}

export default function ProductCard({
  name,
  image,
  type,
  origin,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold font-[--font-heading] ${badgeColor[type] ?? "bg-gray-100 text-gray-800"}`}
        >
          {type}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold font-[--font-heading] text-card-foreground">
          {name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">Καταγωγή: {origin}</p>
        <button className="mt-4 w-full rounded-lg border-2 border-primary bg-transparent py-2.5 text-sm font-bold font-[--font-heading] text-primary transition-all hover:bg-primary hover:text-primary-foreground">
          Αίτηση Προσφοράς
        </button>
      </div>
    </div>
  );
}
