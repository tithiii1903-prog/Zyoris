"use client";

import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Button } from "@/components/buttons/Button";
import { initAllAnimations } from "@/animations";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const cleanup = initAllAnimations(containerRef.current);
    return () => cleanup();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                className="max-width-medium align-center text-align-center"
              >
                <div animate="load-hero-1" data-animate="load-hero-1" className="text-style-badge is-badge">
                  <div>Contact Us</div>
                </div>
                <div className="spacer-xsmall"></div>
                <h1 animate="load-hero-title" data-animate="load-hero-title">
                  Let’s Talk About Scaling Your Operations
                </h1>
                <div className="spacer-small"></div>
                <div
                  animate="load-hero-2"
                  data-animate="load-hero-2"
                  className="text-size-medium text-style-muted"
                >
                  Have questions about plans, integrations, or custom enterprise solutions? Reach out to our team directly.
                </div>
              </div>

              <div className="spacer-large"></div>

              <div className="max-width-medium align-center">
                {submitted ? (
                  <div className="text-align-center" style={{ padding: "3rem", background: "#f2f2f2", borderRadius: "0px" }}>
                    <h3 className="heading-style-h3">Thank you!</h3>
                    <p className="text-size-medium text-style-muted" style={{ marginTop: "1rem" }}>
                      Your message has been received. Our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="w-form">
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <div>
                        <label htmlFor="name" className="text-size-small text-weight-medium">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          placeholder="Your name"
                          className="w-input"
                          style={{ padding: "0.875rem 1rem", width: "100%" }}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-size-small text-weight-medium">Work Email</label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="you@company.com"
                          className="w-input"
                          style={{ padding: "0.875rem 1rem", width: "100%" }}
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="text-size-small text-weight-medium">Message</label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          placeholder="How can we help?"
                          className="w-input"
                          style={{ padding: "0.875rem 1rem", width: "100%" }}
                        ></textarea>
                      </div>
                      <div className="spacer-xsmall"></div>
                      <Button variant="primary" onClick={() => {}}>
                        Send Message
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
