import React, { useState } from "react";
import { Button } from "../buttons/Button";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Why is Salesforce so much more expensive?",
    answer:
      "Salesforce was built for Fortune 500 US companies. You are paying for global infrastructure, a US sales team, and enterprise compliance features you simply do not need. Zyoris strips out everything Indian SMBs do not use and passes those savings directly to you.",
  },
  {
    question: "Zoho is cheaper — why not just use that?",
    answer:
      "Zoho One has 45+ separate products. Nobody uses them all. Teams get confused, adoption fails, and you end up using 5% of what you paid for. Zyoris is one unified platform — clean, simple, and built so your team will actually use it from day one.",
  },
  {
    question: "Zyoris is new — isn't that a risk?",
    answer:
      "The foundation is already built — security, multi-tenancy, AI, dashboards, all live and production-grade. We are onboarding our first companies with special locked-in pricing and personal onboarding from the founders. Early customers get direct product influence and rates that will never be available again.",
  },
  {
    question: "Will the price increase later?",
    answer:
      "Early customers get their rates locked in permanently. The first 50 companies who join will always pay their onboarding price. As the platform matures and more features are added, prices for new customers will rise — but yours will not.",
  },
  {
    question: "What modules are included in Zyoris?",
    answer:
      "Zyoris is India's Intelligent Business OS covering Sales & CRM, HR & People, Finance & Invoicing, AI Insights, and Call Centre in one integrated account with zero tool-switching.",
  },
  {
    question: "Is our business data secure and isolated?",
    answer:
      "Yes. Every company's data is completely isolated through multi-tenant architecture, JWT auth, role-based access controls, and full audit logging. Your data stays yours, private, and always in your control.",
  },
];

export const FAQSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"product" | "support" | "payments">("product");
  const [openIndexes, setOpenIndexes] = useState<{ [key: string]: boolean }>({});
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const toggleFAQ = (tab: string, idx: number) => {
    const key = `${tab}-${idx}`;
    setOpenIndexes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <section id="faq" className="section_home1_faq">
        <div className="padding-global padding-section-medium">
          <div className="container-default">
            <div className="faq_grid">
              {/* FAQ Left Info */}
              <div className="faq_left">
                <div>
                  <div
                    animate="fade-up-1"
                    data-animate="fade-up-1"
                    className="text-style-badge is-badge"
                  >
                    <div>Still Not Sure?</div>
                  </div>
                  <div className="spacer-xsmall"></div>
                  <h2 animate="title" data-animate="title">
                    Common Questions, Honest Answers.
                  </h2>
                  <div className="spacer-xxsmall"></div>
                  <div className="spacer-tiny"></div>
                  <div animate="fade-up-2" data-animate="fade-up-2">
                    Everything you need to know about Zyoris, pricing, and how we compare.
                  </div>
                </div>

                {/* FAQ Promo Card with Video Button */}
                <div
                  animate="fade-up-2"
                  data-animate="fade-up-2"
                  className="home1_faq_banner"
                >
                  <div className="home1_faq_left">
                    <div className="background-video w-background-video w-background-video-atom">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          backgroundImage:
                            'url("https://cdn.prod.website-files.com/69b13cad49372c03e40843d9%2F69df74da9436254f3cbaac0c_video4_poster.0000000.jpg")',
                          objectFit: "cover",
                        }}
                      >
                        <source
                          src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9%2F69df74da9436254f3cbaac0c_video4_mp4.mp4"
                          type="video/mp4"
                        />
                        <source
                          src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9%2F69df74da9436254f3cbaac0c_video4_webm.webm"
                          type="video/webm"
                        />
                      </video>
                      <div aria-live="polite">
                        <button
                          type="button"
                          className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button w-background-video--control"
                          onClick={() => setVideoModalOpen(true)}
                          aria-label="Play video"
                        >
                          <span className="play-state">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69dfba5565772296451f867c_Play.svg"
                              alt="Play video"
                              className="play-image"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setVideoModalOpen(true)}
                      className="home1_faq_lightbox w-inline-block"
                      style={{ background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
                    >
                      <div className="home3_benefits_paly">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69df743bec412fcd24672a7c_880c6d3c94113cb6cdd24b54f2eb4108_play.svg"
                          alt=""
                          className="icon-1x1-small"
                        />
                        <div className="text-size-medium">Watch Demo</div>
                      </div>
                    </button>
                  </div>

                  <div className="home1_faq_copy">
                    <div className="avatars">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69de7b25f6acd92136074544_People6.avif"
                        alt=""
                        className="avatars_img is-first"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69de7b26ac00db7a4605b96e_People3.avif"
                        alt=""
                        className="avatars_img"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69de7b25a1540c120ae5b8f5_People8.avif"
                        alt=""
                        className="avatars_img"
                      />
                    </div>
                    <div className="spacer-xxsmall"></div>
                    <div className="spacer-tiny"></div>
                    <div className="text-size-medium">Have more questions?</div>
                    <div className="text-size-medium text-style-muted">
                      Contact our support team
                    </div>
                    <div className="spacer-small"></div>
                    <Button href="/contact-v1" variant="secondary">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>

              {/* FAQ Tabs & Accordions */}
              <div
                animate="fade-up-3"
                data-animate="fade-up-3"
                className="w-tabs"
              >
                {/* Tab Menu */}
                <div className="tabs-menu w-tab-menu">
                  <button
                    type="button"
                    className={`tabs-link w-inline-block w-tab-link ${
                      activeTab === "product" ? "w--current" : ""
                    }`}
                    onClick={() => setActiveTab("product")}
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69df71d6f672c244fbf6e79c_monitor.svg"
                      alt=""
                      className="icon-height-small-5"
                    />
                    <div className="text-size-small">Product</div>
                  </button>

                  <button
                    type="button"
                    className={`tabs-link w-inline-block w-tab-link ${
                      activeTab === "support" ? "w--current" : ""
                    }`}
                    onClick={() => setActiveTab("support")}
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69df71d61fc9b6cfe5d36f1b_messages-bubble.svg"
                      alt=""
                      className="icon-height-small-5"
                    />
                    <div className="text-size-small">Support</div>
                  </button>

                  <button
                    type="button"
                    className={`tabs-link w-inline-block w-tab-link ${
                      activeTab === "payments" ? "w--current" : ""
                    }`}
                    onClick={() => setActiveTab("payments")}
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69df71d62aaee89a45ffe78c_Bank-Card.svg"
                      alt=""
                      className="icon-height-small-5"
                    />
                    <div className="text-size-small">Payments</div>
                  </button>
                </div>

                {/* Tab Panes */}
                <div className="w-tab-content">
                  <div className="w-tab-pane w--tab-active">
                    <div className="faq_box">
                      {faqs.map((faq, i) => {
                        const isOpen = !!openIndexes[`${activeTab}-${i}`];
                        return (
                          <div
                            key={`${activeTab}-${i}`}
                            faq_accordion=""
                            data-faq-accordion=""
                            className="faq_accordion"
                            aria-expanded={isOpen}
                            onClick={() => toggleFAQ(activeTab, i)}
                            style={{ cursor: "pointer" }}
                          >
                            <div className="faq_question">
                              <div className="faq_question_header">
                                <div className="text-size-small text-weight-normal">
                                  {faq.question}
                                </div>
                              </div>
                              <div className="faq_action">
                                <div className="faq_action-line"></div>
                                <div
                                  className="faq_action-line is-last"
                                  style={{
                                    transform: isOpen
                                      ? "rotate(0deg)"
                                      : "rotate(-90deg)",
                                    transition: "transform 0.3s ease",
                                  }}
                                ></div>
                              </div>
                            </div>

                            <div
                              faq_answer=""
                              data-faq-answer=""
                              className="faq_answer"
                              style={{
                                display: isOpen ? "block" : "none",
                                height: isOpen ? "auto" : 0,
                                overflow: "hidden",
                                transition: "all 0.3s ease",
                              }}
                            >
                              <div className="faq_answer-content">
                                <div className="text-size-small text-style-muted">
                                  {faq.answer}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
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
                  title="Demo Video"
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
    </>
  );
};
