import React, { useState } from 'react';

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

const MemberShipPlane = ({ isDiscountApplied }) => {
    const [plusDuration, setPlusDuration] = useState('4 Years');
    const [ultraDuration, setUltraDuration] = useState('4 Years');

    const durationData = {
        '2 Years': {
            plusPrice: '8,999',
            plusOriginal: '14,999',
            plusDiscount: '40% OFF',
            ultraPrice: '9,999',
            ultraOriginal: '18,999',
            ultraDiscount: '47% OFF'
        },
        '3 Years': {
            plusPrice: '10,999',
            plusOriginal: '17,999',
            plusDiscount: '38% OFF',
            ultraPrice: '11,999',
            ultraOriginal: '21,999',
            ultraDiscount: '45% OFF'
        },
        '4 Years': {
            plusPrice: '12,499',
            plusOriginal: '19,999',
            plusDiscount: '38% OFF',
            ultraPrice: '13,499',
            ultraOriginal: '24,999',
            ultraDiscount: '46% OFF'
        }
    };

    const discountedData = {
        '2 Years': {
            plusPrice: '4,499',
            plusOriginal: '8,999',
            plusDiscount: '50% COUPON APPLIED',
            ultraPrice: '4,999',
            ultraOriginal: '9,999',
            ultraDiscount: '50% COUPON APPLIED'
        },
        '3 Years': {
            plusPrice: '5,499',
            plusOriginal: '10,999',
            plusDiscount: '50% COUPON APPLIED',
            ultraPrice: '5,999',
            ultraOriginal: '11,999',
            ultraDiscount: '50% COUPON APPLIED'
        },
        '4 Years': {
            plusPrice: '6,249',
            plusOriginal: '12,499',
            plusDiscount: '50% COUPON APPLIED',
            ultraPrice: '6,749',
            ultraOriginal: '13,499',
            ultraDiscount: '50% COUPON APPLIED'
        }
    };

    const activeData = isDiscountApplied ? discountedData : durationData;
    const currentPlus = activeData[plusDuration];
    const currentUltra = activeData[ultraDuration];

    return (
        <section className="member-ship">
            <div id="member-ship-content">
                {isDiscountApplied && (
                    <div className="discount-applied-banner">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}>
                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                            <line x1="7" y1="7" x2="7.01" y2="7"></line>
                        </svg>
                        <strong>FUTURE50 Coupon Applied!</strong> Extra 50% OFF Discount Unlocked on All Plans
                    </div>
                )}
                <p className="paragraph-strike">THE STRIKE MEMBERSHIP</p>
                <h2 className="membership">
                    Membership
                    <br />
                    <span className="plans">Plans</span>
                </h2>
                <p className="thought-strike">
                    One focused investment in your engineering career.
                    <br />
                    <span id="Every-course-para">Every course. Present and future. Pay once, learn forever.</span>
                </p>
            </div>

            <div className="plan-cards">
                {/* STRIKE PLUS CARD */}
                <div className="plan-card strike-plus-card">
                    <div className="card-banner-wrapper">
                        <img src="/images/strike-plus-banner.png" alt="Strike Plus" className="card-banner-img" />
                    </div>

                    <div className="card-body">
                        <span className="plan-sub-label">MEMBERSHIP PLAN</span>
                        <h3 className="plan-title">Strike Plus</h3>
                        <p className="plan-desc">All existing Strike courses with access for your selected duration.</p>

                        <div className="duration-section">
                            <span className="duration-label">SELECT DURATION</span>
                            <div className="duration-pills">
                                <button
                                    className={`duration-pill ${plusDuration === '2 Years' ? 'active' : ''}`}
                                    onClick={() => setPlusDuration('2 Years')}
                                >
                                    2 Years
                                </button>
                                <button
                                    className={`duration-pill ${plusDuration === '3 Years' ? 'active' : ''}`}
                                    onClick={() => setPlusDuration('3 Years')}
                                >
                                    3 Years
                                </button>
                                <button
                                    className={`duration-pill ${plusDuration === '4 Years' ? 'active' : ''}`}
                                    onClick={() => setPlusDuration('4 Years')}
                                >
                                    4 Years <span className="pill-badge">Popular</span>
                                </button>
                            </div>
                        </div>

                        <div className="price-section">
                            <div className="price-main">
                                <span className="currency-symbol">₹</span>
                                <span className="price-amount">{currentPlus.plusPrice}</span>
                                <span className="original-price">₹{currentPlus.plusOriginal}</span>
                                <span className="discount-tag">{currentPlus.plusDiscount}</span>
                                <span className="popular-tag">Popular</span>
                            </div>
                            <p className="duration-note">{plusDuration} · one-time · no renewals</p>
                        </div>

                        <ul className="features-list">
                            <li><i className="fa-regular fa-circle-check check-icon"></i> All current courses included</li>
                            <li><i className="fa-regular fa-circle-check check-icon"></i> HD recordings</li>
                            <li><i className="fa-regular fa-circle-check check-icon"></i> Live class access during plan</li>
                            <li><i className="fa-regular fa-circle-check check-icon"></i> Notes</li>
                            <li><i className="fa-regular fa-circle-check check-icon"></i> Resume Review</li>
                            <li><i className="fa-regular fa-circle-check check-icon"></i> Certificates</li>
                            <li><i className="fa-regular fa-circle-check check-icon"></i> System Design Platform</li>
                            <li><i className="fa-regular fa-circle-check check-icon"></i> DSA Platform</li>
                            <li><i className="fa-regular fa-circle-check check-icon"></i> Coder Arena Platform</li>
                        </ul>

                        <button className="plan-action-btn btn-strike-plus">
                            Get Strike Plus <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

                {/* STRIKE ULTRA CARD */}
                <div className="plan-card strike-ultra-card">
                    <div className="card-banner-wrapper">
                        <img src="/images/strike-ultra-banner.png" alt="Strike Ultra" className="card-banner-img" />
                        <div className="banner-best-value-badge">
                            <BestValueSparkleIcon size={16} />
                            <span>BEST VALUE</span>
                        </div>
                    </div>

                    <div className="card-body">
                        <span className="plan-sub-label ultra-sub-label">MEMBERSHIP PLAN</span>
                        <h3 className="plan-title">Strike Ultra</h3>
                        <p className="plan-desc">This plan includes all existing courses, plus upcoming courses for your selected duration.</p>

                        <div className="duration-section">
                            <span className="duration-label ultra-label">SELECT DURATION</span>
                            <div className="duration-pills">
                                <button
                                    className={`duration-pill ultra-pill ${ultraDuration === '2 Years' ? 'active' : ''}`}
                                    onClick={() => setUltraDuration('2 Years')}
                                >
                                    2 Years
                                </button>
                                <button
                                    className={`duration-pill ultra-pill ${ultraDuration === '3 Years' ? 'active' : ''}`}
                                    onClick={() => setUltraDuration('3 Years')}
                                >
                                    3 Years
                                </button>
                                <button
                                    className={`duration-pill ultra-pill ${ultraDuration === '4 Years' ? 'active' : ''}`}
                                    onClick={() => setUltraDuration('4 Years')}
                                >
                                    4 Years <span className="pill-badge ultra-badge">Best Value</span>
                                </button>
                            </div>
                        </div>

                        <div className="price-section">
                            <div className="price-main">
                                <span className="currency-symbol ultra-currency">₹</span>
                                <span className="price-amount">{currentUltra.ultraPrice}</span>
                                <span className="original-price">₹{currentUltra.ultraOriginal}</span>
                                <span className="discount-tag ultra-discount-tag">{currentUltra.ultraDiscount}</span>
                                <span className="popular-tag ultra-popular-tag">
                                    <BestValueSparkleIcon size={14} style={{ marginRight: '5px', verticalAlign: '-1px' }} />
                                    Best Value
                                </span>
                            </div>
                            <p className="duration-note">{ultraDuration} · one-time · no renewals</p>
                        </div>

                        <ul className="features-list ultra-features">
                            <li><i className="fa-solid fa-circle-check check-icon ultra-check"></i> <strong>Everything in Strike Plus</strong></li>
                            <li><i className="fa-regular fa-circle-check check-icon ultra-check"></i> Upcoming batches included</li>
                            <li><i className="fa-regular fa-circle-check check-icon ultra-check"></i> Coder Arena Platform</li>
                            <li><i className="fa-regular fa-circle-check check-icon ultra-check"></i> Certificates</li>
                            <li><i className="fa-regular fa-circle-check check-icon ultra-check"></i> Resume Review</li>
                            <li><i className="fa-regular fa-circle-check check-icon ultra-check"></i> Notes</li>
                            <li><i className="fa-regular fa-circle-check check-icon ultra-check"></i> System Design Platform</li>
                            <li><i className="fa-regular fa-circle-check check-icon ultra-check"></i> DSA platform</li>
                        </ul>

                        <button className="plan-action-btn btn-strike-ultra">
                            Get Strike Ultra <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            <p className="membership-footer-note">Prices inclusive of GST · One-time payment · No renewals</p>
        </section>
    );
};

export default MemberShipPlane;