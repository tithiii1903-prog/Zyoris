"use client";

import React, { useState, useEffect } from "react";
import {
  Clock,
  LayoutDashboard,
  Sparkles,
  ShieldCheck,
  Building2,
  Link2,
} from "lucide-react";

export const FeaturesSection: React.FC = () => {
  const featureItems = [
    {
      id: "feature-lead-management",
      title: "Lead Management",
      desc: "Track every lead with full lifecycle history. AI scores each deal so your team always knows where to focus first.",
      icon: Clock,
    },
    {
      id: "feature-dashboards",
      title: "Role-Based Dashboards",
      desc: "CEO, CFO, Sales Head - everyone gets their own live view. No more chasing people for updates or digging through spreadsheets.",
      icon: LayoutDashboard,
    },
    {
      id: "feature-ai-recommends",
      title: "AI That Recommends",
      desc: '"Call this deal now." "This lead is going cold." Zyoris does not just show data. It tells you what action to take, right now.',
      icon: Sparkles,
    },
    {
      id: "feature-security",
      title: "Enterprise Security",
      desc: "Complete data isolation, JWT auth, full audit trail, and role-based permissions. Production-grade security from day one.",
      icon: ShieldCheck,
    },
    {
      id: "feature-multi-tenant",
      title: "Multi-Tenant Architecture",
      desc: "Every company's data is completely isolated. Your data stays yours, private, secure, and always in your control.",
      icon: Building2,
    },
    {
      id: "feature-one-login",
      title: "One Login, Everything",
      desc: "CRM, HR, Finance - all in one place, one account. No tool-switching, no copy-pasting data between systems.",
      icon: Link2,
    },
  ];

  const [activeId, setActiveId] = useState(featureItems[0].id);

  // Scrollspy to highlight active heading on the left as right cards are scrolled
  useEffect(() => {
    const handleScroll = () => {
      const viewportTarget = window.innerHeight * 0.42;
      let currentActive = featureItems[0].id;
      let minDistance = Infinity;

      featureItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const distance = Math.abs(cardCenter - viewportTarget);
          if (distance < minDistance) {
            minDistance = distance;
            currentActive = item.id;
          }
        }
      });

      setActiveId(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCard = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -130;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <section
      id="features"
      animate="scroll-section-color"
      data-animate="scroll-section-color"
      className="section_home1_features"
    >
      <div className="padding-global padding-section-medium">
        <div className="container-default">
          <div className="home1_features_wrap">
            {/* Left Nav Sticky Area with 6 headings */}
            <div className="home1_features_left">
              <div className="max-width-small">
                <div
                  animate="fade-up-1"
                  data-animate="fade-up-1"
                  className="text-style-badge is-badge"
                >
                  <div>What&apos;s inside</div>
                </div>
                <div className="spacer-small"></div>
                <h2 animate="title" data-animate="title">
                  Everything your team needs. Nothing they don&apos;t.
                </h2>
                <div className="spacer-tiny"></div>
                <div className="spacer-xxsmall"></div>
                <div
                  animate="fade-up-2"
                  data-animate="fade-up-2"
                  className="text-size-small text-style-muted"
                >
                  Stop paying for 5 to 10 disconnected tools. Zyoris replaces them all, with AI intelligence built in from day one.
                </div>
              </div>

              {/* 6 Left Headings / Nav Items */}
              <div className="home1_features_nav w-full">
                {featureItems.map((item, index) => {
                  const isActive = activeId === item.id;
                  const isLast = index === featureItems.length - 1;

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToCard(item.id, e)}
                      className={`home1_features_link w-inline-block transition-all duration-200 cursor-pointer ${
                        isActive ? "is-active opacity-100" : "opacity-45 hover:opacity-75"
                      }`}
                    >
                      <div className="home1_features_link-decor flex flex-col items-center">
                        <div
                          className={`home1_features_link-dot rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-[#0D47A1] scale-125 ring-4 ring-blue-100"
                              : "bg-[#0A1E3F]/40"
                          }`}
                          style={{ width: "8px", height: "8px" }}
                        ></div>
                        {!isLast && (
                          <div
                            className={`home1_features_link-line transition-colors duration-300 ${
                              isActive ? "bg-blue-300" : "bg-blue-100"
                            }`}
                            style={{ width: "1px", minHeight: "44px" }}
                          ></div>
                        )}
                      </div>
                      <div className="home1_features_text pb-4">
                        <div
                          className={`text-base transition-colors duration-200 ${
                            isActive
                              ? "font-semibold text-[#0A1E3F]"
                              : "font-normal text-[#0A1E3F]/80"
                          }`}
                        >
                          {item.title}
                        </div>
                        <div className="text-xs text-[#0A1E3F]/70 line-clamp-2 mt-0.5 leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Features Cards List: 6 small cards, no huge images */}
            <div className="home1_features_list flex flex-col gap-6">
              {featureItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeId === item.id;

                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className={`p-6 sm:p-8 rounded-2xl bg-white/95 border transition-all duration-300 shadow-sm ${
                      isActive
                        ? "border-[#2979FF]/50 ring-2 ring-[#2979FF]/15 shadow-md -translate-y-0.5"
                        : "border-[#D5E3F7]/80 hover:border-blue-300 hover:shadow-md"
                    }`}
                  >
                    {/* Icon Badge */}
                    <div className="w-11 h-11 rounded-xl bg-[#EEF4FE] border border-[#D0E2FB] text-[#0D47A1] flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    {/* Heading */}
                    <h3
                      className="text-xl sm:text-2xl font-semibold text-[#0A1E3F] mb-2.5 font-heading tracking-tight"
                      style={{ fontFamily: "var(--fonts--heading, 'Didact Gothic', sans-serif)" }}
                    >
                      {item.title}
                    </h3>

                    {/* Two lines description */}
                    <p className="text-sm sm:text-base text-[#334E68] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
