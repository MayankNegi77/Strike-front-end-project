import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-header">
        <h1 id="heading-why-choose-us">Why Choose Us</h1>
        <p id="para-why-choose-us">
          Learn smarter with modern tools, guided mentors, and a platform built
          to help you grow your skills faster, setting a new benchmark for
          modern coding excellence.
        </p>
      </div>

      <div className="why-choose-us-grid">
        {/* Top Row: Interview Preparation & AI Support */}
        <div className="bento-row bento-row-top">
          {/* Card 1: Interview Preparation */}
          <div className="bento-card interview-card">
            <div className="card-text-content">
              <h3 className="bento-title">
                Inter<span className="bold-white">view</span> Preparation
              </h3>
              <p className="bento-desc">
                Learn faster with hands-on tracks and mentor feedback.
              </p>
            </div>
            <div className="bento-illustration interview-illustration">
              <img
                src="/images/Interview Preparation.jpg"
                alt="Interview Preparation"
                className="bento-media interview-img"
              />
            </div>
          </div>

          {/* Card 2: AI Support */}
          <div className="bento-card ai-card">
            <div className="card-header-center">
              <h3 className="bento-title center-text">AI Support</h3>
            </div>
            <div className="bento-illustration ai-illustration">
              <video
                src="/animation/AI Support.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="bento-media ai-video"
              />
            </div>
          </div>
        </div>

        {/* Bottom Row: Projects Based Learning & Track Your Progress */}
        <div className="bento-row bento-row-bottom">
          {/* Card 3: Projects Based Learning */}
          <div className="bento-card projects-card">
            <div className="card-header-center">
              <h3 className="bento-title center-text">
                <span className="bold-white">Projects</span> Based Learning
              </h3>
            </div>
            <div className="bento-illustration projects-illustration">
              <video
                src="/animation/Project based learning.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="bento-media projects-video"
              />
            </div>
          </div>

          {/* Card 4: Track Your Progress */}
          <div className="bento-card progress-card">
            <div className="progress-card-header">
              <div className="progress-header-left">
                <h3 className="bento-title">Track Your Progress</h3>
                <span className="subtitle-green">Grow With Strike</span>
              </div>
              <div className="live-tracking-pill">
                <span className="live-green-dot"></span> Live Progress Tracking
              </div>
            </div>

            <div className="progress-chart-container">
              <svg
                viewBox="0 0 500 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="chart-svg"
              >
                <defs>
                  <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0.0" />
                  </linearGradient>
                  <filter id="greenGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Grid Lines & Labels */}
                <text x="10" y="18" fill="#475569" fontSize="9" fontFamily="sans-serif">100%</text>
                <line x1="40" y1="14" x2="490" y2="14" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />

                <text x="10" y="48" fill="#475569" fontSize="9" fontFamily="sans-serif">75%</text>
                <line x1="40" y1="44" x2="490" y2="44" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />

                <text x="10" y="78" fill="#475569" fontSize="9" fontFamily="sans-serif">50%</text>
                <line x1="40" y1="74" x2="490" y2="74" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />

                <text x="10" y="108" fill="#475569" fontSize="9" fontFamily="sans-serif">25%</text>
                <line x1="40" y1="104" x2="490" y2="104" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />

                {/* Gradient Area under Line */}
                <path
                  d="M 50 110 Q 110 105 170 85 T 290 55 T 410 30 L 470 15 L 470 120 L 50 120 Z"
                  fill="url(#chartGrad)"
                />

                {/* Main Line Graph */}
                <path
                  d="M 50 110 L 110 104 L 170 85 L 230 70 L 290 55 L 350 40 L 410 30 L 470 15"
                  stroke="#22c55e"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#greenGlow)"
                />

                {/* Data Node Dots */}
                <circle cx="50" cy="110" r="3.5" fill="#ffffff" stroke="#22c55e" strokeWidth="2" />
                <circle cx="110" cy="104" r="3.5" fill="#ffffff" stroke="#22c55e" strokeWidth="2" />
                <circle cx="170" cy="85" r="3.5" fill="#ffffff" stroke="#22c55e" strokeWidth="2" />
                <circle cx="230" cy="70" r="3.5" fill="#ffffff" stroke="#22c55e" strokeWidth="2" />
                <circle cx="290" cy="55" r="3.5" fill="#ffffff" stroke="#22c55e" strokeWidth="2" />
                <circle cx="350" cy="40" r="3.5" fill="#ffffff" stroke="#22c55e" strokeWidth="2" />
                <circle cx="410" cy="30" r="3.5" fill="#ffffff" stroke="#22c55e" strokeWidth="2" />
                <circle cx="470" cy="15" r="6" fill="#4ade80" filter="url(#greenGlow)" />
              </svg>

              {/* Bottom Bar Chart Pills & Days */}
              <div className="days-bars-row">
                <div className="day-col">
                  <div className="bar-track">
                    <div className="bar-capsule bar-mon"></div>
                  </div>
                  <span className="day-label">Mon</span>
                </div>
                <div className="day-col">
                  <div className="bar-track">
                    <div className="bar-capsule bar-tue"></div>
                  </div>
                  <span className="day-label">Tue</span>
                </div>
                <div className="day-col">
                  <div className="bar-track">
                    <div className="bar-capsule bar-wed"></div>
                  </div>
                  <span className="day-label">Wed</span>
                </div>
                <div className="day-col">
                  <div className="bar-track">
                    <div className="bar-capsule bar-thu"></div>
                  </div>
                  <span className="day-label">Thu</span>
                </div>
                <div className="day-col">
                  <div className="bar-track">
                    <div className="bar-capsule bar-fri"></div>
                  </div>
                  <span className="day-label">Fri</span>
                </div>
                <div className="day-col">
                  <div className="bar-track">
                    <div className="bar-capsule bar-sat"></div>
                  </div>
                  <span className="day-label">Sat</span>
                </div>
                <div className="day-col">
                  <div className="bar-track">
                    <div className="bar-capsule bar-sun"></div>
                  </div>
                  <span className="day-label">Sun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
