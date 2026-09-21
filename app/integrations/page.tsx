"use client";

import React, { useEffect, useRef } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { BannerCTASection } from "@/components/sections/BannerCTASection";
import { initAllAnimations } from "@/animations";

export default function IntegrationsPage() {
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
        <IntegrationsSection />
        <BannerCTASection />
      </main>
      <Footer />
    </div>
  );
}
