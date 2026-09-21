"use client";

import React, { useEffect, useRef } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { initAllAnimations } from "@/animations";

export default function PricingPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cleanup = initAllAnimations(containerRef.current);
    return () => cleanup();
  }, []);

  return (
    <div ref={containerRef} className="page-wrapper">
      <Navbar />
      <main className="main-wrapper">
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
