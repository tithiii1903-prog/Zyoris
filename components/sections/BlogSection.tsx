import React from "react";
import Link from "next/link";
import { Button } from "../buttons/Button";

export const BlogSection: React.FC = () => {
  const articles = [
    {
      title: "Why Indian SMBs are Moving Away from Salesforce & Zoho",
      desc: "With 45+ fragmented apps and enterprise US pricing, Indian teams are switching to one unified, AI-first platform built for Indian workflows.",
      category: "Market Insights",
      date: "May 2026",
      img: "https://cdn.prod.website-files.com/69b13cad49372c03e40843dd/69b14e64ffd332566d11e097_Blog6.jpg",
      srcset:
        "https://cdn.prod.website-files.com/69b13cad49372c03e40843dd/69b14e64ffd332566d11e097_Blog6-p-500.jpg 500w, https://cdn.prod.website-files.com/69b13cad49372c03e40843dd/69b14e64ffd332566d11e097_Blog6.jpg 795w",
      href: "/#features",
      cardClass: "is-1",
    },
    {
      title: "The True Cost of Disconnected Business Tools",
      desc: "How switching between CRM, HR, Finance, and messaging costs Indian businesses over 40% in lost employee productivity every single month.",
      category: "Productivity",
      date: "May 2026",
      img: "https://cdn.prod.website-files.com/69b13cad49372c03e40843dd/69b14e51e646262e3edaf77b_Blog5.jpg",
      srcset:
        "https://cdn.prod.website-files.com/69b13cad49372c03e40843dd/69b14e51e646262e3edaf77b_Blog5-p-500.jpg 500w, https://cdn.prod.website-files.com/69b13cad49372c03e40843dd/69b14e51e646262e3edaf77b_Blog5.jpg 795w",
      href: "/#how",
      cardClass: "is-2",
    },
    {
      title: "Predictive AI: Recommendations That Drive Real Revenue",
      desc: "How Zyoris scores deals, forecasts cashflow, and recommends immediate next actions without expensive enterprise add-on fees.",
      category: "AI Technology",
      date: "May 2026",
      img: "https://cdn.prod.website-files.com/69b13cad49372c03e40843dd/69b14e3f7ec563ddeae50641_Blog4.jpg",
      srcset:
        "https://cdn.prod.website-files.com/69b13cad49372c03e40843dd/69b14e3f7ec563ddeae50641_Blog4-p-500.jpg 500w, https://cdn.prod.website-files.com/69b13cad49372c03e40843dd/69b14e3f7ec563ddeae50641_Blog4.jpg 795w",
      href: "/#pricing",
      cardClass: "is-3",
    },
  ];

  return (
    <section className="section_home1_blog">
      <div className="padding-global padding-section-medium">
        <div className="container-default">
          {/* Header */}
          <div className="header">
            <div>
              <div
                animate="fade-up-1"
                data-animate="fade-up-1"
                className="text-style-badge is-badge"
              >
                <div>Updates</div>
              </div>
              <div className="spacer-xsmall"></div>
              <h2 animate="title" data-animate="title">
                Explore Product Latest Updates &amp; Insights
              </h2>
            </div>
            <Button
              href="/blog"
              variant="primary"
              className="fade-up-2"
            >
              All Updates
            </Button>
          </div>

          <div className="spacer-medium"></div>

          {/* Blog List with card stagger */}
          <div
            animate="card-stagger"
            data-animate="card-stagger"
            className="blog_list"
          >
            {articles.map((item, index) => (
              <div
                key={`blog-item-${index}`}
                className="collection-list-wrapper w-dyn-list"
              >
                <div role="list" className="blog_card-wrap w-dyn-items">
                  <div role="listitem" className="blog_card-wrap w-dyn-item">
                    <Link
                      animate="card-hover"
                      data-animate="card-hover"
                      href={item.href}
                      className={`blog_card ${item.cardClass} w-inline-block`}
                    >
                      <div className="blog_card-img-wrap">
                        <div className="overflow-hidden">
                          <img
                            card-image=""
                            data-card-image=""
                            loading="lazy"
                            alt={item.title}
                            src={item.img}
                            sizes="100vw"
                            srcSet={item.srcset}
                            className="blog_card-img"
                          />
                        </div>
                      </div>
                      <div className="divider"></div>
                      <div className="blog_card-content">
                        <div>
                          <h3 className="text-font-body text-size-small">
                            {item.title}
                          </h3>
                          <div className="text-size-small text-style-muted">
                            {item.desc}
                          </div>
                        </div>
                        <div className="label-list">
                          <div className="label is-small">
                            <div className="text-size-tiny">{item.category}</div>
                          </div>
                          <div className="label is-small">
                            <div className="text-size-tiny">{item.date}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
