import React from "react";
import { Lottie } from "lottie-react";
import conversationAnimation from "../../public/animation/Conversation.lottie/animations/12345.json";

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
        {/* Card 1: Interview Preparation */}
        <div className="bento-card interview-card">
          <div className="card-text-content">
            <h3 className="bento-title">
              Interview <span className="title-highlight">Preparation</span>
            </h3>
            <p className="bento-desc">
              Learn faster with hands-on tracks and mentor feedback.
            </p>
          </div>
          <div className="bento-illustration interview-illustration">
            <svg
              viewBox="0 0 240 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="illustration-svg"
            >
              {/* Desk */}
              <path
                d="M30 110H210V113H30V110Z"
                fill="#ffffff"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
              {/* Desk Legs */}
              <line x1="45" y1="113" x2="45" y2="135" stroke="#ffffff" strokeWidth="2" />
              <line x1="195" y1="113" x2="195" y2="135" stroke="#ffffff" strokeWidth="2" />

              {/* Interviewer */}
              <circle cx="90" cy="48" r="11" stroke="#ffffff" strokeWidth="2" fill="none" />
              <path d="M80 46 Q90 40 100 46" stroke="#ffffff" strokeWidth="2" fill="none" />
              <path d="M74 78 C74 65, 106 65, 106 78 V110 H74 Z" stroke="#ffffff" strokeWidth="2" fill="none" />
              <path d="M85 68 L90 80 L95 68" stroke="#ffffff" strokeWidth="1.5" />
              <line x1="90" y1="80" x2="90" y2="98" stroke="#ffffff" strokeWidth="1.5" />

              {/* Laptop */}
              <path d="M102 96 L118 96 L124 110 L96 110 Z" stroke="#ffffff" strokeWidth="1.5" fill="#000000" />
              <path d="M104 84 H122 V96 H104 Z" stroke="#ffffff" strokeWidth="1.5" fill="#000000" />

              {/* Candidate */}
              <circle cx="150" cy="56" r="11" stroke="#ffffff" strokeWidth="2" fill="none" />
              <path d="M132 90 C132 75, 168 75, 168 90 V110 H132 Z" stroke="#ffffff" strokeWidth="2" fill="none" />
              <path d="M128 82 H172 V135 H128 Z" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
            </svg>
          </div>
        </div>

        {/* Card 2: AI Support */}
        <div className="bento-card ai-card">
          <div className="card-header-center">
            <h3 className="bento-title center-text">AI Support</h3>
          </div>
          <div className="bento-illustration ai-illustration">
            <svg
              viewBox="0 0 180 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="robot-svg"
            >
              <defs>
                <linearGradient id="robotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7dd3fc" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
                <linearGradient id="darkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Antenna */}
              <line x1="90" y1="20" x2="90" y2="38" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="90" cy="16" r="6" fill="#38bdf8" filter="url(#glow)" />

              {/* Head Outer */}
              <rect x="45" y="38" width="90" height="66" rx="30" fill="url(#robotGrad)" stroke="#bae6fd" strokeWidth="2" />

              {/* Face Screen */}
              <rect x="58" y="50" width="64" height="42" rx="18" fill="url(#darkGrad)" />

              {/* Happy Glowing Eyes */}
              <path d="M70 68 Q78 58 86 68" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" fill="none" filter="url(#glow)" />
              <path d="M94 68 Q102 58 110 68" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" fill="none" filter="url(#glow)" />

              {/* Body */}
              <path d="M58 112 C58 105, 122 105, 122 112 L118 145 C118 152, 62 152, 62 145 Z" fill="url(#robotGrad)" stroke="#bae6fd" strokeWidth="1.5" />

              {/* Chest Panel */}
              <rect x="74" y="118" width="32" height="18" rx="6" fill="url(#darkGrad)" />
              <circle cx="90" cy="127" r="3.5" fill="#38bdf8" />
            </svg>
          </div>
        </div>

        {/* Card 3: Projects Based Learning (Updated Project-Focused Illustration) */}
        <div className="bento-card projects-card">
          <div className="card-header-center">
            <h3 className="bento-title center-text">
              <span className="bold-white">Projects</span> Based Learning
            </h3>
          </div>
          <div className="bento-illustration projects-illustration">
            <Lottie
              src={conversationAnimation}
              autoplay
              loop
              style={{ width: "100%", height: 200, maxWidth: 280 }}
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
                <div className="bar-capsule bar-mon"></div>
                <span className="day-label">Mon</span>
              </div>
              <div className="day-col">
                <div className="bar-capsule bar-tue"></div>
                <span className="day-label">Tue</span>
              </div>
              <div className="day-col">
                <div className="bar-capsule bar-wed"></div>
                <span className="day-label">Wed</span>
              </div>
              <div className="day-col">
                <div className="bar-capsule bar-thu"></div>
                <span className="day-label">Thu</span>
              </div>
              <div className="day-col">
                <div className="bar-capsule bar-fri"></div>
                <span className="day-label">Fri</span>
              </div>
              <div className="day-col">
                <div className="bar-capsule bar-sat"></div>
                <span className="day-label">Sat</span>
              </div>
              <div className="day-col">
                <div className="bar-capsule bar-sun"></div>
                <span className="day-label">Sun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
