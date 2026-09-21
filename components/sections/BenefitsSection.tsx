import React from "react";

export const BenefitsSection: React.FC = () => {
  return (
    <section id="how" className="section_home1_benefits">
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
                <div>How it works</div>
              </div>
              <div className="spacer-xxsmall"></div>
              <div className="spacer-tiny"></div>
              <div className="max-width-medium align-center">
                <h2 animate="title" data-animate="title">
                  Three steps. Complete clarity.
                </h2>
              </div>
              <div className="spacer-tiny"></div>
              <div className="spacer-xxsmall"></div>
              <div
                animate="fade-up-2"
                data-animate="fade-up-2"
                className="text-size-medium text-style-muted"
              >
                All in one platform, with no duplication and no back-and-forth.
              </div>
            </div>
          </div>

          <div className="spacer-medium"></div>

          {/* Benefits Grid with card stagger */}
          <div
            animate="card-stagger"
            data-animate="card-stagger"
            className="home1_benefits_list"
          >
            {/* Step 1 */}
            <div className="benefits_item">
              <div className="benefits_item-img-wrap">
                <img
                  src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69de86ef9ab0f04ba18d520d_Benefits1.avif"
                  loading="lazy"
                  alt="Your team enters data"
                  className="benefits_item-img"
                />
              </div>
              <div className="benefits_item-text-wrap">
                <div className="benefits_item-text">
                  <div className="text-size-small text-weight-normal">
                    01. Your team enters data
                  </div>
                  <div className="text-size-small text-weight-normal text-style-muted">
                    Sales logs leads, HR manages people, Finance tracks invoices
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="benefits_item">
              <div className="benefits_item-img-wrap">
                <img
                  src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69de86ef6077db79fa0ac633_Benefits2.avif"
                  loading="lazy"
                  alt="Zyoris connects the dots"
                  className="benefits_item-img"
                />
              </div>
              <div className="benefits_item-text-wrap">
                <div className="benefits_item-text">
                  <div className="text-size-small text-weight-normal">
                    02. Zyoris connects dots
                  </div>
                  <div className="text-size-small text-weight-normal text-style-muted">
                    Organises automatically, finds patterns, generates AI insights
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div
              id="w-node-_1d1e2bd0-a5c5-eec7-bb2b-35df95b7b745-34458c3d"
              className="quote_box2"
            >
              <div className="quote_box2-cotent">
                <img
                  src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69de8ad6b99be8a74d052a40_qoute-icon.svg"
                  loading="lazy"
                  alt="quote icon"
                  className="quote_box2-bg-img"
                />
                <div className="heading-style-h6">
                  03. You make faster decisions — See your pipeline, team performance, and revenue forecast live. Every decision backed by real data, in real time.
                </div>
              </div>
              <div className="quote_box2-author">
                <div className="quote_box2-author-text">
                  <div className="text-size-small text-weight-normal">
                    Puneet Kumar
                  </div>
                  <div className="text-size-small text-weight-normal text-style-muted">
                    Founder &amp; CEO, Zyoris
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69de7b26ac00db7a4605b96e_People3.avif"
                  loading="lazy"
                  sizes="(max-width: 2048px) 100vw, 2048px"
                  alt="Puneet Kumar"
                  className="quote_box2-author-img"
                />
              </div>
            </div>
          </div>

          <div className="spacer-xxsmall"></div>

          {/* 4 Feature Badges with card stagger */}
          <div
            animate="card-stagger"
            data-animate="card-stagger"
            className="home1_benefits_card-list"
          >
            <div className="home1_benefits_card">
              <div className="icon-wrap">
                <img
                  src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69b13cad49372c03e4084502_b1e819b5081563cf11f2358bbfec4399_Effect-filter.svg"
                  loading="lazy"
                  alt=""
                  className="icon-height-medium"
                />
              </div>
              <div className="text-size-small text-weight-normal">Sales &amp; CRM</div>
            </div>

            <div className="home1_benefits_card">
              <div className="icon-wrap">
                <img
                  src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69de8d414e79b87834391767_Document-board-2.svg"
                  loading="lazy"
                  alt=""
                  className="icon-height-medium"
                />
              </div>
              <div className="text-size-small text-weight-normal">Finance</div>
            </div>

            <div className="home1_benefits_card">
              <div className="icon-wrap">
                <img
                  src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69de8d4195d900694875d580_2-users-2.svg"
                  loading="lazy"
                  alt=""
                  className="icon-height-medium"
                />
              </div>
              <div className="text-size-small text-weight-normal">HR &amp; People</div>
            </div>

            <div className="home1_benefits_card">
              <div className="icon-wrap">
                <img
                  src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69de8d41921ac402d300c675_Docuemnt-2-lines.svg"
                  loading="lazy"
                  alt=""
                  className="icon-height-medium"
                />
              </div>
              <div className="text-size-small text-weight-normal">AI Insights</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
