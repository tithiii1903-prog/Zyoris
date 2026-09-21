"use client";

import React, { useEffect, useRef } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Button } from "@/components/buttons/Button";
import { initAllAnimations } from "@/animations";

export default function AboutPage() {
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
          <div className="padding-global padding-section-large">
            <div className="container-default">
              <div
                animate="load-hero-stagger"
                data-animate="load-hero-stagger"
                className="max-width-large align-center text-align-center"
              >
                <div animate="load-hero-1" data-animate="load-hero-1" className="text-style-badge is-badge">
                  <div>About Deploya</div>
                </div>
                <div className="spacer-xsmall"></div>
                <h1 animate="load-hero-title" data-animate="load-hero-title">
                  Built to Make SaaS Teams Unstoppable
                </h1>
                <div className="spacer-small"></div>
                <div
                  animate="load-hero-2"
                  data-animate="load-hero-2"
                  className="text-size-large text-style-muted"
                >
                  We are creating the next-generation operating system for modern software companies. Centralize tools, automate tedious pipelines, and scale without friction.
                </div>
                <div className="spacer-medium"></div>
                <div animate="load-hero-3" data-animate="load-hero-3" className="button-group align-center">
                  <Button href="/contact-v1" variant="primary">
                    Join Our Mission
                  </Button>
                  <Button href="/pricing" variant="secondary">
                    View Plans
                  </Button>
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
