"use client";

import React, { useEffect, useRef } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { initAllAnimations } from "@/animations";

export default function FeaturesPage() {
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
        <FeaturesSection />
        <ShowcaseSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
}
