import React, { useState } from "react";

export const TestimonialsSection: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <>
      <section id="why" className="section_home1_testimonials">
        <div className="padding-global padding-section-medium">
          <div className="container-default">
            {/* Header */}
            <div className="header is-centered">
              <div className="max-width-large">
                <div className="text-style-badge is-badge">
                  <div>Why Zyoris</div>
                </div>
                <div className="spacer-xsmall"></div>
                <h2 animate="title" data-animate="title">
                  Built for India. Not adapted for it.
                </h2>
                <div className="spacer-tiny"></div>
                <div className="spacer-xxsmall"></div>
                <div
                  animate="fade-up-2"
                  data-animate="fade-up-2"
                  className="text-size-medium text-style-muted"
                >
                  India&apos;s SMBs deserve enterprise-grade intelligence without enterprise complexity or Western pricing.
                </div>
                <div className="spacer-medium"></div>
              </div>
            </div>

            {/* Testimonials List with card-stagger */}
            <div
              animate="card-stagger"
              data-animate="card-stagger"
              className="home1_testimonials_list"
            >
              {/* Card 1 */}
              <div className="home1_testimonials-card is-1">
                <div className="home1_testimonials-author">
                  <div>
                    <div className="text-size-medium font-bold text-white">Salesforce is too expensive</div>
                    <div className="text-size-small text-style-muted">
                      Cost Advantage
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="home1_testimonials_content">
                  <div className="text-size-small">
                    At Rs 12,500 or more per user per month, Indian SMBs simply cannot afford it. Zyoris gives you more at a fraction of the cost, starting at ₹4,500 with zero surprise fees.
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="home1_testimonials-card is-2">
                <div className="home1_testimonials-author">
                  <div>
                    <div className="text-size-medium font-bold text-white">Zoho is too complex</div>
                    <div className="text-size-small text-style-muted">
                      Simplicity &amp; Adoption
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="home1_testimonials_content">
                  <div className="text-size-small">
                    45 separate apps that nobody uses properly. Teams get confused, adoption fails, and you end up using 5% of what you paid for. Zyoris is one unified platform, clean and simple.
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div
                id="w-node-_320464c3-5288-24b1-e3dd-d55082f99f80-82f99f53"
                className="home1_testimonials-card is-3"
              >
                <div className="home1_testimonials-author">
                  <div>
                    <div className="text-size-medium font-bold text-white">Designed for Indian teams</div>
                    <div className="text-size-small text-style-muted">
                      Local Workflows
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="home1_testimonials_content">
                  <div className="text-size-small">
                    Built around how Indian businesses actually work. Not translated from a US product that does not understand your GST, multi-tiered hierarchy, and field-sales realities.
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="home1_testimonials-card is-4">
                <div className="home1_testimonials-author">
                  <div>
                    <div className="text-size-medium font-bold text-white">Grows with you</div>
                    <div className="text-size-small text-style-muted">
                      Unified Expansion
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="home1_testimonials_content">
                  <div className="text-size-small">
                    Start with CRM. Add HR. Add Finance. One platform that expands as your company does, with no migrations, zero data silos, and no duplicate data entry.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Lightbox Modal */}
      {videoModalOpen && (
        <div
          className="w-lightbox-backdrop"
          style={{ opacity: 1 }}
          onClick={() => setVideoModalOpen(false)}
        >
          <div className="w-lightbox-container">
            <div
              className="w-lightbox-content"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  position: "relative",
                  width: "90vw",
                  maxWidth: "940px",
                  aspectRatio: "16/9",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/-yXdPqm7zC0?autoplay=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="Testimonial Video"
                />
              </div>
              <button
                type="button"
                className="w-lightbox-control w-lightbox-close"
                onClick={() => setVideoModalOpen(false)}
                aria-label="Close video"
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
      )}

      <div className="divider"></div>
    </>
  );
};
