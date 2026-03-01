import React from "react";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    name: "Oak",
    image: "/assets/products/oak.png",
    type: "Σκληρό",
    origin: "Ηνωμένες Πολιτείες",
  },
  {
    name: "Cherry",
    image: "/assets/products/cherry.png",
    type: "Σκληρό",
    origin: "Ηνωμένες Πολιτείες",
  },
  {
    name: "Pine",
    image: "/assets/products/oak.png",
    type: "Μαλακό",
    origin: "Σκανδιναβία",
  },
  {
    name: "Teak",
    image: "/assets/products/cherry.png",
    type: "Εξωτικό",
    origin: "Νοτιοανατολική Ασία",
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto p-10">
      <h1> Προϊόντα</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
}
