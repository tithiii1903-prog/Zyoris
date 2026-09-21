import React, { useRef, useState } from "react";
import { Button } from "../buttons/Button";

export const ShowcaseSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const highlightItems = [
    {
      title: "Smart Automations",
      icon: "https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69b13cad49372c03e4084502_b1e819b5081563cf11f2358bbfec4399_Effect-filter.svg",
    },
    {
      title: "Team Collaboration",
      icon: "https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69b13cad49372c03e4084503_icon2.svg",
    },
    {
      title: "Enterprise Security",
      icon: "https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69b13cad49372c03e40844d1_icon4.svg",
    },
    {
      title: "Live Analytics",
      icon: "https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69b13cad49372c03e40844fa_icon3.svg",
    },
  ];

  return (
    <section className="section_home1_feature">
      <div className="padding-global padding-section-medium">
        <div className="container-default">
          <div id="features-1" className="feature_card">
            {/* Feature Content Left */}
            <div className="feature_content">
              <div className="feature_content-top">
                <div
                  animate="fade-up-1"
                  data-animate="fade-up-1"
                  className="text-style-badge is-badge"
                >
                  <div>Why This Price?</div>
                </div>
                <div className="spacer-xsmall"></div>
                <h2 animate="title" data-animate="title">
                  You Get 10x More. You Pay 3x Less.
                </h2>
                <div className="spacer-xxsmall"></div>
                <div
                  animate="fade-up-2"
                  data-animate="fade-up-2"
                  className="text-size-medium text-style-muted"
                >
                  Here&apos;s the honest breakdown of what you&apos;re actually getting — and why the price is more than fair. Replace CRM (₹3K+) + HR (₹2K+) + Finance (₹2K+) + Analytics (₹1.5K+) + Call Centre (₹2K+) = ₹12K+ per user/month. Zyoris gives you all of this starting at ₹4,500.
                </div>
                <div className="spacer-small"></div>
                <div
                  animate="fade-up-2"
                  data-animate="fade-up-2"
                  className="button-group"
                >
                  <Button href="/#pricing" variant="primary">
                    View Pricing Plans
                  </Button>
                  <Button href="/#contact" variant="secondary">
                    Talk to Us
                  </Button>
                </div>
              </div>

              {/* Feature Labels / Metric stats */}
              <div
                animate="fade-up-2"
                data-animate="fade-up-2"
                className="feature_labels"
              >
                <div className="feature_label">
                  <div className="text-xl font-bold text-blue-400">₹12K+</div>
                  <div className="text-size-small text-weight-light">
                    Monthly cost if tools bought separately
                  </div>
                </div>
                <div className="feature_label">
                  <div className="text-xl font-bold text-blue-400">3×</div>
                  <div className="text-size-small text-weight-light">
                    Cheaper than Salesforce
                  </div>
                </div>
                <div className="feature_label">
                  <div className="text-xl font-bold text-blue-400">40%</div>
                  <div className="text-size-small text-weight-light">
                    Team time saved on data work
                  </div>
                </div>
                <div className="feature_label">
                  <div className="text-xl font-bold text-blue-400">Week 1</div>
                  <div className="text-size-small text-weight-light">
                    Positive ROI for teams
                  </div>
                </div>
                <div className="feature_label">
                  <img
                    src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69b13cad49372c03e40844d1_icon4.svg"
                    loading="lazy"
                    alt=""
                    className="icon-height-medium"
                  />
                  <div className="text-size-small text-weight-light">
                    Enterprise Security
                  </div>
                </div>
                <div className="feature_label">
                  <img
                    src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69e757c7304900c284610cea_Swap-horizontal.svg"
                    loading="lazy"
                    alt=""
                    className="icon-height-medium"
                  />
                  <div className="text-size-small text-weight-light">
                    Seamless Integrations
                  </div>
                </div>
              </div>
            </div>

            {/* Video Preview Right */}
            <div
              animate="fade-up-3"
              data-animate="fade-up-3"
              className="feature_card_img-wrap"
            >
              <div className="background-video w-background-video w-background-video-atom">
                <video
                  ref={videoRef}
                  id="da14b6d6-124b-394c-f3ff-991b1cdc6a88-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    backgroundImage:
                      'url("https://cdn.prod.website-files.com/69b13cad49372c03e40843d9%2F69e8c874b2904bb420774015_video1_poster.0000000.jpg")',
                    objectFit: "cover",
                  }}
                >
                  <source
                    src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9%2F69e8c874b2904bb420774015_video1_mp4.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9%2F69e8c874b2904bb420774015_video1_webm.webm"
                    type="video/webm"
                  />
                </video>
                <div aria-live="polite">
                  <button
                    type="button"
                    aria-controls="da14b6d6-124b-394c-f3ff-991b1cdc6a88-video"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    className="w-backgroundvideo-backgroundvideoplaypausebutton play-ontop w-background-video--control"
                    onClick={toggleVideo}
                  >
                    <span className="play-state" style={{ display: isPlaying ? "none" : "inline-block" }}>
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69dfba5565772296451f867c_Play.svg"
                        alt="Play video"
                        className="play-image"
                      />
                    </span>
                    <span className="pause-state" style={{ display: isPlaying ? "inline-block" : "none" }}>
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69dfba5549155ef5eebddab9_Pause.svg"
                        alt="Pause video"
                        className="pause-image"
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div className="feature_card_result">
                <div className="heading-style-h2">27%</div>
                <div className="text-size-medium">faster sales cycles</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Marquee Wrap */}
      <div className="padding-global">
        <div className="container-default">
          <div
            animate="fade-up-2"
            data-animate="fade-up-2"
            className="highlights_marquee-wrap"
          >
            <div className="highlights_marquee">
              {/* 3 identical groups for seamless loop */}
              {[1, 2, 3].map((grp) => (
                <div key={`highlights-grp-${grp}`} className="highlights_marquee-group">
                  {highlightItems.map((item, idx) => (
                    <div key={`item-${grp}-${idx}`} className="highlights_marquee-item">
                      <img
                        loading="lazy"
                        src={item.icon}
                        alt=""
                        className="icon-height-medium"
                      />
                      <div className="heading-style-h4">{item.title}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <img
              src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69de96a482c71e6084231559_Background5.avif"
              loading="lazy"
              sizes="100vw"
              srcSet="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69de96a482c71e6084231559_Background5-p-500.avif 500w, https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69de96a482c71e6084231559_Background5.avif 900w"
              alt="Deploya – AI &amp; SaaS Webflow Template"
              className="highlights_marquee-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
