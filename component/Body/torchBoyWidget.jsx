import React, { useState, useEffect } from "react";

// Clean SVG Icon Logos replacing emojis
const LightbulbIcon = ({ size = 20, color = "#eab308" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
    <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z"></path>
  </svg>
);

const FlameIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z" />
  </svg>
);

const renderThoughtBadgeIcon = (icon) => {
  switch (icon) {
    case "flame":
      return <FlameIcon size={12} />;
    case "bolt":
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "bulb":
      return <LightbulbIcon size={12} color="currentColor" />;
    case "rocket":
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    default:
      return null;
  }
};

const BoltIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const HourglassIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}>
    <path d="M5 22h14"></path>
    <path d="M5 2h14"></path>
    <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
    <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
  </svg>
);

const RocketIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '6px' }}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
  </svg>
);

const CheckIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const ChevronLeftIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const ArrowRightIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '6px' }}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const CloseIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const BestValueSparkleIcon = ({ size = 16, style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
  >
    {/* Main 4-pointed hollow star */}
    <path
      d="M12 3.5 C12 7.5 8 12 3.5 12 C8 12 12 16.5 12 20.5 C12 16.5 16 12 20.5 12 C16 12 12 7.5 12 3.5 Z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Small top-right 4-point sparkle */}
    <path
      d="M20.5 3 C20.5 4.2 19.6 5 18.5 5 C19.6 5 20.5 5.8 20.5 7 C20.5 5.8 21.4 5 22.5 5 C21.4 5 20.5 4.2 20.5 3 Z"
      fill="currentColor"
    />
    {/* Small bottom-left solid circle */}
    <circle cx="5" cy="18.5" r="1.8" fill="currentColor" />
  </svg>
);

const couponSlides = [
  {
    id: 1,
    badge: "MEMBERSHIP PLAN",
    title: "Strike Plus Membership",
    description: "Access all current DSA, System Design & Dev Courses",
    originalPrice: "₹12,499",
    discountPrice: "₹6,249",
    savings: "Save ₹6,250",
    image: "/images/strike-plus-banner.png",
  },
  {
    id: 2,
    badge: "BEST VALUE",
    title: "Strike Ultra Membership",
    description: "Includes all current + all upcoming future course batches",
    originalPrice: "₹13,499",
    discountPrice: "₹6,749",
    savings: "Save ₹6,750",
    image: "/images/strike-ultra-banner.png",
  },
  {
    id: 3,
    badge: "COMBO COURSE",
    title: "DSA + GenAI Combo",
    description: "Master Data Structures, Algorithms & Generative AI",
    originalPrice: "₹14,999",
    discountPrice: "₹7,499",
    savings: "Save ₹7,500",
    image: "/images/photos/WhatsApp Image 2026-09-22 at 6.14.29 PM.jpeg",
  },
  {
    id: 4,
    badge: "FULL BOOTCAMP",
    title: "Thunder: 100 Days of Code",
    description: "Web Dev + System Design + Security + DevOps",
    originalPrice: "₹12,999",
    discountPrice: "₹6,499",
    savings: "Save ₹6,500",
    image: "/images/photos/WhatsApp Image 2026-09-22 at 6.14.30 PM (1).png",
  },
];

// Motivational thoughts rotating above the character when torch is OFF (No emojis, clean vector logos)
const MOTIVATIONAL_THOUGHTS = [
  {
    id: 1,
    badgeText: "50% OFF TODAY",
    icon: "flame",
    badgeType: "hot",
    thought: "Thinking of cracking MAANG? Start DSA & Gen AI today!",
    subtext: "100 days from now you'll wish you started today.",
    cta: "Claim 50% Discount",
  },
  {
    id: 2,
    badgeText: "CAREER ROADMAP",
    icon: "bolt",
    badgeType: "electric",
    thought: "Your dream tech package is one consistent effort away!",
    subtext: "Learn from Rohit Negi: 1000+ alumni placed in top tech giants.",
    cta: "Explore Batches",
  },
  {
    id: 3,
    badgeText: "LIMITED DEAL",
    icon: "bulb",
    badgeType: "offer",
    thought: "Use coupon FUTURE50 to save flat ₹7,500 on Ultra Membership!",
    subtext: "All current + upcoming batches included.",
    cta: "Unlock Coupon Code",
  },
  {
    id: 4,
    badgeText: "BELIEVE & BUILD",
    icon: "rocket",
    badgeType: "motivate",
    thought: "Stop doubting your potential. Master System Design & Web Dev!",
    subtext: "Interactive code playgrounds & live mentor guidance.",
    cta: "Get Started Now",
  },
];

export default function TorchBoyWidget({ onApplyDiscount }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalHovered, setIsModalHovered] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Thought bubble rotation state when torch is off
  const [activeThoughtIdx, setActiveThoughtIdx] = useState(0);
  const [thoughtFading, setThoughtFading] = useState(false);
  const [isThoughtHovered, setIsThoughtHovered] = useState(false);

  // Open the person with torch off after 2 seconds of the webpage loading fully
  useEffect(() => {
    let timer = null;
    const triggerOpen = () => {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    };

    if (document.readyState === 'complete') {
      triggerOpen();
    } else {
      window.addEventListener('load', triggerOpen, { once: true });
    }

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('load', triggerOpen);
    };
  }, []);

  // References to avoid stale closure issues in timers
  const isPinnedRef = React.useRef(isPinned);
  const isHoveredRef = React.useRef(isHovered);
  const isModalHoveredRef = React.useRef(isModalHovered);
  const closeTimerRef = React.useRef(null);

  useEffect(() => {
    isPinnedRef.current = isPinned;
  }, [isPinned]);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    isModalHoveredRef.current = isModalHovered;
  }, [isModalHovered]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const justClosedRef = React.useRef(false);

  // Torch is on only when the modal is open AND active (hovered or pinned)
  const isTorchOn = isModalOpen && (isPinned || isHovered || isModalHovered);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 24, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate slideshow every 3.5 seconds
  useEffect(() => {
    if (!isModalOpen || isApplied) return;
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % couponSlides.length);
    }, 3500);
    return () => clearInterval(slideTimer);
  }, [isModalOpen, isApplied]);

  // Rotate motivational thoughts at a comfortable reading pace (8.5 seconds) when torch is OFF
  // Automatically pauses rotation when hovered so users can read with ease
  useEffect(() => {
    if (isModalOpen || isDismissed || isThoughtHovered) return;
    const thoughtTimer = setInterval(() => {
      setThoughtFading(true);
      setTimeout(() => {
        setActiveThoughtIdx((prev) => (prev + 1) % MOTIVATIONAL_THOUGHTS.length);
        setThoughtFading(false);
      }, 350);
    }, 8500);
    return () => clearInterval(thoughtTimer);
  }, [isModalOpen, isDismissed, isThoughtHovered]);

  if (!isVisible || isDismissed) return null;

  // Hover over the boy: turn torch on and open offer popup preview
  const handleBoyMouseEnter = () => {
    if (justClosedRef.current) return;
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsHovered(true);
    setIsModalOpen(true);
  };

  // Leave hover on the boy: close offer unless pinned or mouse moved to modal
  const handleBoyMouseLeave = () => {
    setIsHovered(false);
    if (!isPinnedRef.current) {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
      closeTimerRef.current = setTimeout(() => {
        if (!isModalHoveredRef.current && !isPinnedRef.current && !isHoveredRef.current) {
          setIsModalOpen(false);
        }
      }, 300);
    }
  };

  // Click the boy: lock/pin the offer so it does NOT hide after hover ends
  const handleBoyClick = (e) => {
    e.stopPropagation();
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (isPinned) {
      // Toggle closed if already pinned
      handleCloseModal(e);
    } else {
      // Pin open so offer stays visible even after user stops hovering
      setIsPinned(true);
      setIsModalOpen(true);
    }
  };

  // Mouse enters modal card
  const handleModalMouseEnter = () => {
    setIsModalHovered(true);
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  // Mouse leaves modal card
  const handleModalMouseLeave = () => {
    setIsModalHovered(false);
    if (!isPinnedRef.current) {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
      closeTimerRef.current = setTimeout(() => {
        if (!isHoveredRef.current && !isPinnedRef.current) {
          setIsModalOpen(false);
        }
      }, 300);
    }
  };

  const handleCloseModal = (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    justClosedRef.current = true;
    setTimeout(() => {
      justClosedRef.current = false;
    }, 400);

    setIsPinned(false);
    setIsHovered(false);
    setIsModalHovered(false);
    isPinnedRef.current = false;
    isHoveredRef.current = false;
    isModalHoveredRef.current = false;
    setIsModalOpen(false);
    setIsApplied(false);
  };

  const handleApplyCoupon = () => {
    setIsPinned(true);
    setIsApplied(true);
    if (onApplyDiscount) {
      onApplyDiscount();
    }
  };

  const handleGoToCourse = () => {
    handleCloseModal();
    const el = document.querySelector(".member-ship");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("FUTURE50");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrevSlide = (e) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev === 0 ? couponSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = (e) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev + 1) % couponSlides.length);
  };

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <>
      {/* Floating Boy Character Widget (Opens after 3s of page load at Bottom-Right Corner) */}
      <div className={`torch-boy-container ${isVisible ? "boy-appeared" : ""}`}>
        {/* Dismiss Widget Button */}
        <button
          className="widget-dismiss-btn"
          onClick={(e) => {
            e.stopPropagation();
            setIsDismissed(true);
          }}
          title="Dismiss Widget"
          aria-label="Close widget"
        >
          <CloseIcon size={12} />
        </button>

        {/* Animated Thought Bubble (Emerges and pops up through his brain) */}
        {!isModalOpen && (
          <div
            className="thought-bubble-container brain-popup"
            onMouseEnter={() => setIsThoughtHovered(true)}
            onMouseLeave={() => setIsThoughtHovered(false)}
            onClick={handleBoyClick}
            title="Click to unlock 50% course discount offers!"
          >
            {/* Brain Sparkle / Idea Origin Point on head */}
            <div className="brain-origin-point">
              <span className="brain-pulse-ring"></span>
            </div>

            {/* Thought Connecting Dots Trail bubbling out of his brain */}
            <div className="thought-trail-dots">
              <span className="dot dot-1"></span>
              <span className="dot dot-2"></span>
              <span className="dot dot-3"></span>
            </div>

            {/* Main Thought Cloud Card */}
            <div className={`thought-cloud-card ${thoughtFading ? "thought-brain-dip" : "thought-brain-pop"}`}>
              <div className="thought-header">
                <span className={`thought-badge ${MOTIVATIONAL_THOUGHTS[activeThoughtIdx].badgeType}`}>
                  {renderThoughtBadgeIcon(MOTIVATIONAL_THOUGHTS[activeThoughtIdx].icon)}
                  <span>{MOTIVATIONAL_THOUGHTS[activeThoughtIdx].badgeText}</span>
                </span>
                <span className="thought-hint-label">Thinking...</span>
              </div>

              <p className="thought-main-text">
                "{MOTIVATIONAL_THOUGHTS[activeThoughtIdx].thought}"
              </p>

              <p className="thought-subtext">
                {MOTIVATIONAL_THOUGHTS[activeThoughtIdx].subtext}
              </p>

              <div className="thought-cta-row">
                <span className="thought-cta-chip">
                  <span>{MOTIVATIONAL_THOUGHTS[activeThoughtIdx].cta}</span>
                  <ArrowRightIcon size={12} />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Character Image & Torch Area (Hover converts to Torch On & opens offer, Click pins open) */}
        <div
          className={`boy-character-wrapper ${isTorchOn ? "torch-on" : "torch-off"}`}
          onMouseEnter={handleBoyMouseEnter}
          onMouseLeave={handleBoyMouseLeave}
          onClick={handleBoyClick}
          title={isPinned ? "Offer pinned (Click to close)" : "Click image to unlock 50% OFF offers!"}
        >
          {/* Overhead bulb - only shown when torch is ON (yellow glow), gray bulb removed when torch is OFF */}
          {isTorchOn && (
            <div className="overhead-bulb active">
              <LightbulbIcon size={28} color="#facc15" />
            </div>
          )}

          {/* Dynamically Swap Image: Torch off.png vs Torch on.png with larger size on Torch on */}
          <img
            src={
              isTorchOn
                ? "/boywithtourch/Torch on.png"
                : "/boywithtourch/Torch off.png"
            }
            alt={isTorchOn ? "Boy with Torch On" : "Boy with Torch Off"}
            className={`boy-character-img ${isTorchOn ? "torch-on-img" : "torch-off-img"}`}
          />
        </div>
      </div>

      {/* Soft Blurred Backdrop Center Modal (Background visible under blur) */}
      {isModalOpen && (
        <div
          className={`torch-modal-backdrop ${isPinned ? "pinned" : "preview"}`}
          onClick={(e) => {
            e.stopPropagation();
            handleCloseModal(e);
          }}
        >
          <div
            className="torch-modal-card"
            onClick={(e) => {
              e.stopPropagation();
              // Don't pin if the user clicked the close button
              if (e.target && e.target.closest && e.target.closest(".torch-modal-close")) {
                return;
              }
              setIsPinned(true);
            }}
            onMouseEnter={handleModalMouseEnter}
            onMouseLeave={handleModalMouseLeave}
          >
            {/* Modal Close Button */}
            <button
              className="torch-modal-close"
              onClick={(e) => {
                e.stopPropagation();
                handleCloseModal(e);
              }}
              title="Close Modal"
              aria-label="Close modal"
            >
              <CloseIcon size={16} />
            </button>

            {!isApplied ? (
              /* --- STATE 1: COUPON & COUNTDOWN CARD --- */
              <div className="coupon-modal-content">
                <div className="coupon-badge">
                  <BoltIcon size={16} /> SPECIAL FUTURE OFFER
                </div>
                <h2 className="coupon-title">Unlock Your Tech Career Future</h2>
                <p className="coupon-subtitle">
                  Get instant <strong>50% OFF</strong> on all DSA, System Design & Gen AI courses.
                </p>

                {/* Standard Monochrome Interactive Discount Slideshow */}
                <div className="coupon-slideshow-container">
                  <div className="slideshow-header">
                    <span className="slideshow-subheading">UNLOCKED DISCOUNTS ON APPLY:</span>
                    <span className="slideshow-counter">
                      {activeSlide + 1} / {couponSlides.length}
                    </span>
                  </div>

                  <div className="slideshow-card-frame">
                    {/* Navigation Arrow Left */}
                    <button
                      className="slide-nav-btn prev-btn"
                      type="button"
                      onClick={handlePrevSlide}
                      title="Previous Discount"
                      aria-label="Previous Discount"
                    >
                      <ChevronLeftIcon size={20} />
                    </button>

                    {/* Current Active Slide Content */}
                    <div className="active-slide-content" key={activeSlide}>
                      <div className="slide-image-wrapper">
                        <img
                          src={couponSlides[activeSlide].image}
                          alt={couponSlides[activeSlide].title}
                          className="slide-img"
                        />
                      </div>

                      <div className="slide-text-info">
                        <div className="slide-meta-badge-row">
                          <span className={`slide-badge-tag ${couponSlides[activeSlide].id === 2 ? 'ultra-slide-badge' : ''}`}>
                            {couponSlides[activeSlide].id === 2 && (
                              <BestValueSparkleIcon size={12} style={{ marginRight: '5px', verticalAlign: '-1px' }} />
                            )}
                            {couponSlides[activeSlide].badge}
                          </span>
                        </div>
                        <h4 className="slide-title">{couponSlides[activeSlide].title}</h4>
                        <p className="slide-desc">{couponSlides[activeSlide].description}</p>

                        <div className="slide-price-row">
                          <div className="slide-prices">
                            <span className="slide-orig-price">{couponSlides[activeSlide].originalPrice}</span>
                            <span className="slide-disc-price">{couponSlides[activeSlide].discountPrice}</span>
                          </div>
                          <span className="slide-save-pill">
                            {couponSlides[activeSlide].savings} (50% OFF)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Arrow Right */}
                    <button
                      className="slide-nav-btn next-btn"
                      type="button"
                      onClick={handleNextSlide}
                      title="Next Discount"
                      aria-label="Next Discount"
                    >
                      <ChevronRightIcon size={20} />
                    </button>
                  </div>

                  {/* Dot Indicators */}
                  <div className="slideshow-dots-row">
                    {couponSlides.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`slide-dot ${activeSlide === idx ? "active" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSlide(idx);
                        }}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Promo Code & Deadline Countdown Action Row */}
                <div className="coupon-action-row">
                  <div className="coupon-code-box">
                    <div className="coupon-code-left">
                      <span className="coupon-label">PROMO CODE</span>
                      <span className="coupon-code-text">FUTURE50</span>
                    </div>
                    <button className="copy-code-btn" onClick={handleCopyCode} type="button">
                      {copied ? (
                        <>
                          <CheckIcon size={14} /> Copied!
                        </>
                      ) : (
                        "Copy Code"
                      )}
                    </button>
                  </div>

                  <div className="coupon-deadline-box">
                    <span className="deadline-label">
                      <HourglassIcon size={15} /> Coupon Expires In:
                    </span>
                    <div className="countdown-timer">
                      <span className="time-unit">{formatNumber(timeLeft.hours)}h</span>:
                      <span className="time-unit">{formatNumber(timeLeft.minutes)}m</span>:
                      <span className="time-unit">{formatNumber(timeLeft.seconds)}s</span>
                    </div>
                  </div>
                </div>

                {/* Apply Coupon Button */}
                <button
                  className="apply-coupon-btn"
                  type="button"
                  onClick={handleApplyCoupon}
                >
                  Apply Coupon & Proceed <ArrowRightIcon size={18} />
                </button>
              </div>
            ) : (
              /* --- STATE 2: MOTIVATIONAL MESSAGE CARD --- */
              <div className="motivation-modal-content">
                <div className="motivation-icon">
                  <LightbulbIcon size={46} />
                </div>
                <h2 className="motivation-title">Believe On Your Decision</h2>

                <div className="motivation-quote-box">
                  <p className="motivation-quote-text">
                    "Believe on your decision, do not listen to the suggestions of others.
                    Your life is in your hand, not in others. Please move forward and make
                    your future with your decision."
                  </p>
                </div>

                {/* Go To Course Button -> Scrolls to Membership Plans with 50% discount prices */}
                <button
                  className="motivation-action-btn"
                  type="button"
                  onClick={handleGoToCourse}
                >
                  Go To Course <RocketIcon size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
