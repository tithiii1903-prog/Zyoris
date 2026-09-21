"use client";

import React, { useEffect, useRef } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { initAllAnimations } from "@/animations";

export default function DemoPage() {
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
        <section className="section_home1_hero">
          <div className="padding-global padding-section-medium">
            <div className="container-default">
              <div
                animate="load-hero-stagger"
                data-animate="load-hero-stagger"
                className="max-width-large align-center text-align-center"
              >
                <div animate="load-hero-1" data-animate="load-hero-1" className="text-style-badge is-badge">
                  <div>Product Demo</div>
                </div>
                <div className="spacer-xsmall"></div>
                <h1 animate="load-hero-title" data-animate="load-hero-title">
                  Experience Deploya in Action
                </h1>
                <div className="spacer-small"></div>
                <div
                  animate="load-hero-2"
                  data-animate="load-hero-2"
                  className="text-size-large text-style-muted"
                >
                  Watch our interactive walkthrough to see how top-performing SaaS teams save 20+ hours a week with automated workflows.
                </div>
              </div>

              <div className="spacer-large"></div>

              <div className="max-width-xlarge align-center">
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", border: "1px solid #e6e6e6" }}>
                  <iframe
                    src="https://www.youtube.com/embed/-yXdPqm7zC0?autoplay=0"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title="Deploya Product Demo"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
