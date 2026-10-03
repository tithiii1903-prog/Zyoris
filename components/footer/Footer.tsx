import React from "react";
import Link from "next/link";
import { Linkedin, Instagram, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="footer bg-[#F8FAFC] border-t border-[#C2D4EE]/70">
      <div className="container-default px-4 sm:px-6 lg:px-8">
        <div className="py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 lg:gap-8">
          {/* Brand & Confidentiality */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 lg:gap-8 text-center sm:text-left">
            <Link href="/" className="nav-brand w-nav-brand flex items-center gap-2">
              <div className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-[#0A1E3F]">
                <img
                  src="/logo.jpeg"
                  alt="Zyoris logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
                />
                <span className="text-[#0A1E3F] font-semibold lowercase tracking-wide text-xl" style={{ letterSpacing: "0.04em" }}>zyoris</span>
              </div>
            </Link>
            <div className="text-size-tiny text-[#0A1E3F]/70">
              © 2026 Zyoris. Confidential. India&apos;s Intelligent Business OS.
            </div>
          </div>

          {/* Social Media & Contact Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/puneetmunjal7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[#E8F1FC] border border-[#D4E2F5] text-[#4A74AF] hover:text-[#0D47A1] hover:bg-[#D9E8FA] hover:border-[#2979FF]/40 transition-all duration-200 shadow-sm"
            >
              <Linkedin className="w-4 h-4 md:w-[18px] md:h-[18px]" />
            </a>
            <a
              href="https://instagram.com/zyoris"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[#E8F1FC] border border-[#D4E2F5] text-[#4A74AF] hover:text-[#0D47A1] hover:bg-[#D9E8FA] hover:border-[#2979FF]/40 transition-all duration-200 shadow-sm"
            >
              <Instagram className="w-4 h-4 md:w-[18px] md:h-[18px]" />
            </a>
            <a
              href="mailto:contact@zyoris.com"
              aria-label="Email"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[#E8F1FC] border border-[#D4E2F5] text-[#4A74AF] hover:text-[#0D47A1] hover:bg-[#D9E8FA] hover:border-[#2979FF]/40 transition-all duration-200 shadow-sm"
            >
              <Mail className="w-4 h-4 md:w-[18px] md:h-[18px]" />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 md:gap-8 text-sm md:text-base font-normal text-[#0A1E3F]/80">
            <Link
              href="/about"
              className="hover:text-[#2979FF] transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href="/#careers"
              className="hover:text-[#2979FF] transition-colors duration-200"
            >
              Careers
            </Link>
            <Link
              href="/#privacy"
              className="hover:text-[#2979FF] transition-colors duration-200"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

