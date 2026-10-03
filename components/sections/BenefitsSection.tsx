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

          {/* 3 Step Cards Grid */}
          <div
            animate="card-stagger"
            data-animate="card-stagger"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12 text-left"
          >
            {/* Item 1 */}
            <div className="deploya-card p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 hover:border-[#2979FF] border border-[#D5E3F7]/80 rounded-2xl bg-white cursor-pointer group">
              <div>
                <div className="text-xs text-blue-500 font-semibold uppercase tracking-wider mb-2 group-hover:text-[#2979FF] transition-colors">
                  01
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-2 tracking-tight">
                  Your team enters data
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-normal">
                  Sales logs leads, HR manages people, Finance tracks invoices. All in one platform, with no duplication and no back-and-forth.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="deploya-card p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 hover:border-[#2979FF] border border-[#D5E3F7]/80 rounded-2xl bg-white cursor-pointer group">
              <div>
                <div className="text-xs text-indigo-500 font-semibold uppercase tracking-wider mb-2 group-hover:text-[#2979FF] transition-colors">
                  02
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-2 tracking-tight">
                  Zyoris connects the dots
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-normal">
                  The system organises everything automatically, finds patterns across teams, and generates AI insights without you lifting a finger.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="deploya-card p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 hover:border-[#2979FF] border border-[#D5E3F7]/80 rounded-2xl bg-white cursor-pointer group">
              <div>
                <div className="text-xs text-indigo-500 font-semibold uppercase tracking-wider mb-2 group-hover:text-[#2979FF] transition-colors">
                  03
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-2 tracking-tight">
                  You make faster decisions
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-normal">
                  See your pipeline, team performance, and revenue forecast live. Every decision backed by real data, in real time.
                </p>
              </div>
            </div>
          </div>

          <div className="spacer-xxsmall"></div>

          
        </div>
      </div>
    </section>
  );
};
