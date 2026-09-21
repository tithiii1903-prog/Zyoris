import React from "react";
import { Button } from "../buttons/Button";

export const PricingSection: React.FC = () => {
  return (
    <section
      animate="scroll-section-color"
      data-animate="scroll-section-color"
      className="section_home1_pricing"
    >
      <div className="padding-global padding-section-medium">
        <div className="container-default">
          {/* Header */}
          <div className="header is-centered">
            <div className="max-width-large">
              <div
                animate="fade-up-1"
                data-animate="fade-up-1"
                className="text-style-badge is-badge"
              >
                <div>Pricing</div>
              </div>
              <div className="spacer-xsmall"></div>
              <h2 animate="title" data-animate="title">
                Simple, Unified Pricing for Smarter Workflows
              </h2>
              <div className="spacer-tiny"></div>
              <div className="spacer-xxsmall"></div>
              <div className="max-width-medium align-center">
                <div
                  animate="fade-up-2"
                  data-animate="fade-up-2"
                  className="text-size-medium text-style-muted"
                >
                  Choose the plan that fits your team’s needs
                </div>
              </div>
              <div className="spacer-medium"></div>
            </div>
          </div>

          {/* Pricing List with card stagger */}
          <div className="w-dyn-list">
            <div
              animate="card-stagger"
              data-animate="card-stagger"
              role="list"
              className="pricing_list w-dyn-items"
            >
              {/* Pro Tier */}
              <div role="listitem" className="w-dyn-item">
                <div className="pricing_card">
                  <div className="pricing_card-content">
                    <div className="pricing_card-header">
                      <img
                        src="https://cdn.prod.website-files.com/69b13cad49372c03e40843dd/69b151a4499d85afec243a3b_plan1.png"
                        loading="lazy"
                        alt=""
                        className="icon-1x1-xxlarge"
                      />
                      <div className="pricing_card-header-text">
                        <h3 className="heading-style-h4">Pro</h3>
                        <div className="text-size-small">
                          For startups and small teams ready to get organized and sell smarter
                        </div>
                      </div>
                    </div>
                    <div className="pricing-price">
                      <div className="heading-style-h1">$50</div>
                      <div className="text-size-small">per month</div>
                    </div>
                    <div className="w-richtext">
                      <ul role="list">
                        <li>Customizable deal pipelines</li>
                        <li>Email tracking &amp; activity timeline</li>
                        <li>Task reminders and follow-ups</li>
                        <li>Basic reports and dashboards</li>
                      </ul>
                    </div>
                  </div>
                  <Button href="/plans/pro" variant="secondary">
                    Get in Touch
                  </Button>
                </div>
              </div>

              {/* Enterprise Tier */}
              <div role="listitem" className="w-dyn-item">
                <div className="pricing_card">
                  <div className="pricing_card-content">
                    <div className="pricing_card-header">
                      <img
                        src="https://cdn.prod.website-files.com/69b13cad49372c03e40843dd/69b151df973277b4a0a84353_plan3.png"
                        loading="lazy"
                        alt=""
                        className="icon-1x1-xxlarge"
                      />
                      <div className="pricing_card-header-text">
                        <h3 className="heading-style-h4">Enterprise</h3>
                        <div className="text-size-small">
                          End-to-end solution for large teams ready to unify operations and accelerate growth
                        </div>
                      </div>
                    </div>
                    <div className="pricing-price">
                      <div className="heading-style-h1">$150</div>
                      <div className="text-size-small">per month</div>
                    </div>
                    <div className="w-richtext">
                      <ul role="list">
                        <li>Everything in Premium</li>
                        <li>SSO &amp; SOC 2 compliance</li>
                        <li>Dedicated account manager</li>
                        <li>Custom roles &amp; security policies</li>
                      </ul>
                    </div>
                  </div>
                  <Button href="/plans/enterprise" variant="secondary">
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer-medium"></div>

          {/* Explore All Plans Button */}
          <div className="flex-center">
            <Button
              href="/pricing"
              variant="alternative"
              className="fade-up-2"
            >
              Explore All Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
