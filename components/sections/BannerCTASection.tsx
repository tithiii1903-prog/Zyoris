import React, { useRef, useState } from "react";
import { Button } from "../buttons/Button";

export const BannerCTASection: React.FC = () => {
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

  return (
    <section className="section_home1_banner">
      <div className="background-video w-background-video w-background-video-atom">
        <video
          ref={videoRef}
          id="806e7a24-3b92-d55f-e300-76702ced1834-video"
          autoPlay
          loop
          muted
          playsInline
          style={{
            backgroundImage:
              'url("https://cdn.prod.website-files.com/69b13cad49372c03e40843d9%2F69df7d65e2727153564df353_u4716226838__--ar_7758_--bs_2_--motion_high_--video_1_103b4125-6dbf-4027-911c-97b44df65f41_1_poster.0000000.jpg")',
            objectFit: "cover",
          }}
        >
          <source
            src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9%2F69df7d65e2727153564df353_u4716226838__--ar_7758_--bs_2_--motion_high_--video_1_103b4125-6dbf-4027-911c-97b44df65f41_1_mp4.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9%2F69df7d65e2727153564df353_u4716226838__--ar_7758_--bs_2_--motion_high_--video_1_103b4125-6dbf-4027-911c-97b44df65f41_1_webm.webm"
            type="video/webm"
          />
        </video>
        <div aria-live="polite">
          <button
            type="button"
            className="w-backgroundvideo-backgroundvideoplaypausebutton play-ontop w-background-video--control"
            onClick={toggleVideo}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            <span
              className="play-state is-black"
              style={{ display: isPlaying ? "none" : "inline-block" }}
            >
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69dfb94916c1a334d7680a8c_d96e26192b0ec5c437214e072eaa1c49_Play-black.svg"
                alt="Play video"
                className="play-image"
              />
            </span>
            <span
              className="pause-state is-black"
              style={{ display: isPlaying ? "inline-block" : "none" }}
            >
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/69b13cad49372c03e40843d9/69dfbbe6a96af17e5c0e63d5_Pause-black.svg"
                alt="Pause video"
                className="pause-image"
              />
            </span>
          </button>
        </div>
      </div>

      <div className="section_home1_layer"></div>

      <div className="padding-global">
        <div className="container-default">
          <div className="home1_banner_wrap">
            <div className="home1_banner_content">
              <div
                animate="fade-up-1"
                data-animate="fade-up-1"
                className="text-style-badge is-badge"
              >
                <div>Get Early Access</div>
              </div>
              <div className="spacer-xsmall"></div>
              <h2 animate="title" data-animate="title">
                Start Your Zyoris Journey
              </h2>
              <div className="spacer-xsmall"></div>
              <div className="max-width-small">
                <div
                  animate="fade-up-2"
                  data-animate="fade-up-2"
                  className="text-size-medium"
                >
                  We&apos;re onboarding our first companies. Join the waitlist and be first to run your business on Zyoris. Early customers lock in their rates permanently.
                </div>
              </div>
            </div>

            <div
              id="contact"
              animate="fade-up-3"
              data-animate="fade-up-3"
              className="w-full max-w-xl mx-auto my-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Details received — our team will reach out within 24 hours.");
                }}
                className="space-y-4 text-left"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1 font-semibold">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1 font-semibold">Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Technologies"
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1 font-semibold">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.in"
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1 font-semibold">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1 font-semibold">Team Size</label>
                  <select className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/15 text-white focus:outline-none focus:border-blue-500 text-sm">
                    <option value="1-10">1–10 people</option>
                    <option value="11-50">11–50 people</option>
                    <option value="51-200">51–200 people</option>
                    <option value="200+">200+ people</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1 font-semibold">What are you looking for?</label>
                  <input
                    type="text"
                    placeholder="e.g. CRM + HR integration, AI recommendations..."
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                <Button variant="primary" className="w-full py-3 text-center font-medium">
                  Request Early Access →
                </Button>

                <div className="text-center text-xs text-white/60 pt-2">
                  🔒 Your information is private and will never be shared with third parties.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
