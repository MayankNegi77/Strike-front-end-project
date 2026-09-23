import React, { useState, useEffect } from "react";

export default function TorchBoyWidget({ onApplyDiscount }) {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isLightActive, setIsLightActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [copied, setCopied] = useState(false);

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
