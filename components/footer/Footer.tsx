import React from "react";
import Link from "next/link";
import { Button } from "../buttons/Button";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <div className="container-default">
          <div className="footer-box">
            {/* Footer Banners */}
            <div className="footer_banners">
              <div className="footer_buy">
                <div className="heading-style-h4 text-color-alternate">
                  India&apos;s first Intelligent Business Operating System. One platform for Sales &amp; CRM, HR, Finance, and AI Insights.
                </div>
                <Button
                  href="/#contact"
                  variant="alternative"
                >
                  Get Early Access
                </Button>
              </div>
              <img
                src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69b149cd30d806fb9080784b_Footer%20Image.avif"
                loading="lazy"
                id="w-node-bc5ae0a8-201c-b37e-a7a3-645cbf5c5544-17f08d4d"
                sizes="100vw"
                alt="Zyoris – India's AI Business OS"
                srcSet="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69b149cd30d806fb9080784b_Footer%20Image-p-500.avif 500w, https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69b149cd30d806fb9080784b_Footer%20Image-p-800.avif 800w, https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69b149cd30d806fb9080784b_Footer%20Image.avif 1294w"
                className="footer_image"
              />
            </div>

            <div className="spacer-large"></div>

            {/* Footer Nav Box */}
            <div className="footer_nav_box">
              <div className="footer_info-column">
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
                <div className="text-size-tiny text-[#0A1E3F]/60">
                  Founded by <a href="https://www.linkedin.com/in/puneetmunjal7" target="_blank" rel="noopener noreferrer" className="underline text-[#0D47A1]">Puneet Kumar</a> (Founder &amp; CEO).
                </div>
                <div className="footer_socials mt-3">
                  <a href="https://www.linkedin.com/in/puneetmunjal7" target="_blank" rel="noopener noreferrer" className="social-link w-inline-block" aria-label="LinkedIn">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69b13cad49372c03e40843fa_linkedin.svg"
                      alt="linkedin"
                      className="social-link-image"
                    />
                  </a>
                  <a href="https://github.com/puneetmunjal7" target="_blank" rel="noopener noreferrer" className="social-link w-inline-block" aria-label="GitHub">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69b13cad49372c03e40843fb_twitter.svg"
                      alt="github"
                      className="social-link-image"
                    />
                  </a>
                </div>
              </div>

              {/* Navigation Columns */}
              <nav className="footer_nav">
                <div className="footer_nav-column">
                  <div className="text-style-badge">Platform</div>
                  <div className="footer_nav-list">
                    <Link href="/#features" className="footer_nav-link">
                      Sales &amp; CRM
                    </Link>
                    <Link href="/#features" className="footer_nav-link">
                      HR &amp; People
                    </Link>
                    <Link href="/#features" className="footer_nav-link">
                      Finance &amp; Invoicing
                    </Link>
                    <Link href="/#features" className="footer_nav-link">
                      AI Insights
                    </Link>
                    <Link href="/#features" className="footer_nav-link">
                      Call Centre
                    </Link>
                  </div>
                </div>

                <div className="footer_nav-column">
                  <div className="text-style-badge">Product</div>
                  <div className="footer_nav-list">
                    <Link href="/#features" className="footer_nav-link">
                      What&apos;s inside
                    </Link>
                    <Link href="/#how" className="footer_nav-link">
                      How it works
                    </Link>
                    <Link href="/#pricing" className="footer_nav-link">
                      Pricing Plans
                    </Link>
                    <Link href="/#comparison" className="footer_nav-link">
                      Feature Comparison
                    </Link>
                    <Link href="/#why" className="footer_nav-link">
                      Why Zyoris
                    </Link>
                    <Link href="/#faq" className="footer_nav-link">
                      FAQ
                    </Link>
                  </div>
                </div>

                <div className="footer_nav-column">
                  <div className="text-style-badge">Company</div>
                  <div className="footer_nav-list">
                    <Link href="https://zyoris.com/" target="_blank" className="footer_nav-link">
                      About Zyoris
                    </Link>
                    <a href="https://www.linkedin.com/in/puneetmunjal7" target="_blank" rel="noopener noreferrer" className="footer_nav-link">
                      Puneet Kumar (Founder &amp; CEO)
                    </a>
                    <Link href="/#contact" className="footer_nav-link">
                      Get in Touch
                    </Link>
                    <Link href="/#contact" className="footer_nav-link">
                      Request Early Access
                    </Link>
                  </div>
                </div>

                <div className="footer_nav-column">
                  <div className="text-style-badge">Security</div>
                  <div className="footer_nav-list">
                    <span className="footer_nav-link text-white/60">
                      Multi-Tenant Isolation
                    </span>
                    <span className="footer_nav-link text-white/60">
                      JWT Authentication
                    </span>
                    <span className="footer_nav-link text-white/60">
                      Full Audit Logging
                    </span>
                    <span className="footer_nav-link text-white/60">
                      India GST-Ready
                    </span>
                  </div>
                </div>
              </nav>
            </div>

            <div className="spacer-large"></div>
            <div className="divider"></div>
            <div className="spacer-xsmall"></div>
            <div className="text-size-tiny">
              This is a legal disclaimer for website footers. It should begin with a statement confirming the company’s official registration, including a placeholder for the location and a sample registration number—for instance, “Incorporated in [Location], USA (Reg. No. YY-123456).” The disclaimer should also include a note about the company’s regulatory authorization, referencing a relevant oversight body and legislation. You may use placeholders like “Licensed by the [State Regulatory Authority] under the [Relevant State Act] (License No. YY-123456).”
            </div>
          </div>
        </div>
    </footer>
  );
};
