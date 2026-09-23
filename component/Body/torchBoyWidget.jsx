import React, { useState, useEffect } from "react";

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
    badge: "MOST POPULAR",
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
    image: "/images/photos/WhatsApp Image 2026-09-22 at 6.14.30 PM (1).jpeg",
  },
];

export default function TorchBoyWidget({ onApplyDiscount }) {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isLightActive, setIsLightActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

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

  if (isDismissed) return null;

  const handleTorchClick = () => {
    setIsLightActive(true);
    setTimeout(() => {
      setIsModalOpen(true);
    }, 200);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsLightActive(false);
    setIsApplied(false);
  };

  const handleApplyCoupon = () => {
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
      {/* Floating Boy Character Widget (Always visible at Bottom-Right Corner) */}
      <div className="torch-boy-container">
        {/* Dismiss Widget X Button */}
        <button
          className="widget-dismiss-btn"
          onClick={(e) => {
            e.stopPropagation();
            setIsDismissed(true);
          }}
          title="Dismiss Widget"
          aria-label="Close widget"
        >
          ✕
        </button>

        {/* Thought Bubble */}
        <div className="thought-bubble" onClick={handleTorchClick}>
          <div className="thought-bubble-tail"></div>
        </div>

        {/* Character Image & Torch Click Area */}
        <div
          className={`boy-character-wrapper ${isLightActive ? "glowing" : ""}`}
          onClick={handleTorchClick}
          title="Click the Torch to Change Your Future!"
        >
          {/* Overhead glowing bulb */}
          <div className="overhead-bulb">💡</div>

          {/* Dynamically Swap Image: Torch off.png vs Torch on.png */}
          <img
            src={
              isLightActive
                ? "/boywithtourch/Torch on.png"
                : "/boywithtourch/Torch off.png"
            }
            alt="Boy with Torch"
            className="boy-character-img"
          />
        </div>
      </div>

      {/* Soft Blurred Backdrop Center Modal (Background visible under blur) */}
      {isModalOpen && (
        <div className="torch-modal-backdrop" onClick={handleCloseModal}>
          <div
            className="torch-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button className="torch-modal-close" onClick={handleCloseModal}>
              ✕
            </button>

            {!isApplied ? (
              /* --- STATE 1: COUPON & COUNTDOWN CARD --- */
              <div className="coupon-modal-content">
                <div className="coupon-badge">⚡ SPECIAL FUTURE OFFER</div>
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
                    >
                      ‹
                    </button>

                    {/* Current Active Slide Content */}
                    <div className="active-slide-content" key={activeSlide}>
                      <div className="slide-image-wrapper">
                        <img
                          src={couponSlides[activeSlide].image}
                          alt={couponSlides[activeSlide].title}
                          className="slide-img"
                        />
                        <span className="slide-badge-tag">
                          {couponSlides[activeSlide].badge}
                        </span>
                      </div>

                      <div className="slide-text-info">
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
                    >
                      ›
                    </button>
                  </div>

                  {/* Dot Indicators */}
                  <div className="slideshow-dots-row">
                    {couponSlides.map((_, idx) => (
                      <button
                        key={idx}
                        className={`slide-dot ${activeSlide === idx ? "active" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSlide(idx);
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Promo Code Box */}
                <div className="coupon-code-box">
                  <div className="coupon-code-left">
                    <span className="coupon-label">PROMO CODE</span>
                    <span className="coupon-code-text">FUTURE50</span>
                  </div>
                  <button className="copy-code-btn" onClick={handleCopyCode}>
                    {copied ? "✓ Copied!" : "Copy Code"}
                  </button>
                </div>

                {/* Deadline Countdown */}
                <div className="coupon-deadline-box">
                  <span className="deadline-label">⏳ Coupon Expires In:</span>
                  <div className="countdown-timer">
                    <span className="time-unit">{formatNumber(timeLeft.hours)}h</span>:
                    <span className="time-unit">{formatNumber(timeLeft.minutes)}m</span>:
                    <span className="time-unit">{formatNumber(timeLeft.seconds)}s</span>
                  </div>
                </div>

                {/* Apply Coupon Button */}
                <button
                  className="apply-coupon-btn"
                  type="button"
                  onClick={handleApplyCoupon}
                >
                  Apply Coupon & Proceed ➔
                </button>
              </div>
            ) : (
              /* --- STATE 2: MOTIVATIONAL MESSAGE CARD --- */
              <div className="motivation-modal-content">
                <div className="motivation-icon">💡</div>
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
                  Go To Course 🚀
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
