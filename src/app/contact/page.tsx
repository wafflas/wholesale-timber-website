"use client";

import { useRef } from "react";

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={pageRef} className="py-16 md:py-24">
      {/* Contact — content to be added */}
    </div>
  );
}
