"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "../buttons/Button";
import "../../styles/deploya.css"
export const Navbar: React.FC = () => {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setPagesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="nav-content">
      <div className="container w-container">
        <div className="nav-wrapper">
          {/* Logo */}
          <Link
            id="w-node-_90194ca1-81d8-1b85-2f41-dfea0faac993-0faac98e"
            href="/"
            aria-current="page"
            className="nav-brand w-nav-brand w--current flex items-center gap-2"
          >
            <div className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-white">
              <img
                src="/logo.jpeg"
                alt="Zyoris logo"
                width={36}
                height={36}
                className="w-9 h-9 rounded-lg object-cover flex-shrink-0"
              />
              <span style={{ letterSpacing: "2%" , "fontFamily": "Didact Gothic","fontWeight": 400,"fontStyle": "Normal","fontSize": 28,"lineHeight": "100%", "color": "black"}}> Zyoris</span>
            
            </div>
          </Link>

          {/* Nav Right */}
          <div className="nav-right">
            <div className="nav-menu-wrapper">
              <nav
                role="navigation"
                className={`nav-menu w-nav-menu ${
                  mobileMenuOpen ? "w--nav-menu-open" : ""
                }`}
                style={
                  mobileMenuOpen
                    ? {                        display: "block",
                        position: "fixed",
                        top: "5.1rem",
                        left: 0,
                        right: 0,
                        backgroundColor: "#ffffff",
                        height: "calc(100vh - 5.1rem)",
                        overflowY: "auto",
                        padding: "2rem 1.5rem",
                        zIndex: 9999,
                      }
                    : undefined
                }
              >
                <Link href="/#features" className="nav-link w-nav-link">
                  Features
                </Link>
                <Link href="/#how" className="nav-link w-nav-link">
                  How it works
                </Link>
                <Link href="/#pricing" className="nav-link w-nav-link">
                  Pricing
                </Link>

                

                <Link href="/#contact" className="nav-link w-nav-link">
                  Contact
                </Link>

                {/* Mobile Drawer Buttons */}
                <div className="nav-links-buttons">
                  <Button
                    href="/#contact"
                    variant="primary"
                  >
                    Get Early Access
                  </Button>
                </div>
              </nav>
            </div>

            {/* Desktop Nav Right Buttons */}
            <div className="nav-buttons">
              <div className="nav-info-dropdown w-dropdown">
                <div className="nav-info-dropdown-toggle hide-tablet w-dropdown-toggle">
                  <Button
                    href="/#contact"
                    variant="primary"
                  >
                    Get Early Access
                  </Button>
                </div>
              </div>

              {/* Hamburger Button */}
              <div
                className={`nav-menu-button w-nav-button ${
                  mobileMenuOpen ? "w--open" : ""
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                role="button"
                tabIndex={0}
                aria-label="Toggle Navigation Menu"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69b13cad49372c03e4084538_menu.svg"
                  alt=""
                  className="nav-menu-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
