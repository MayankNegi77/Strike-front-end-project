import React from "react";

const companyLogos = [
  {
    id: "oracle",
    name: "ORACLE",
    svg: (
      <svg viewBox="0 0 160 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="company-logo-svg">
        <text x="0" y="24" fill="#00d2ff" fontSize="22" fontFamily="'Audiowide', sans-serif" letterSpacing="4">ORACLE</text>
      </svg>
    )
  },
  {
    id: "google",
    name: "Google",
    svg: (
      <svg viewBox="0 0 120 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="company-logo-svg">
        <text x="0" y="26" fontSize="26" fontWeight="bold" fontFamily="sans-serif">
          <tspan fill="#4285F4">G</tspan>
          <tspan fill="#EA4335">o</tspan>
          <tspan fill="#FBBC05">o</tspan>
          <tspan fill="#4285F4">g</tspan>
          <tspan fill="#34A853">l</tspan>
          <tspan fill="#EA4335">e</tspan>
        </text>
      </svg>
    )
  },
  {
    id: "facebook",
    name: "Facebook",
    svg: (
      <svg viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="company-logo-svg">
        <circle cx="16" cy="16" r="14" fill="#1877F2" />
        <path d="M19 16.5H16.5V25H13V16.5H11.5V13.5H13V11.8C13 9.8 14 8.5 16.5 8.5H19V11.5H17.2C16.2 11.5 16 11.8 16 12.6V13.5H19L19 16.5Z" fill="#FFFFFF" />
        <text x="36" y="22" fill="#FFFFFF" fontSize="18" fontWeight="bold" fontFamily="sans-serif">facebook</text>
      </svg>
    )
  },
  {
    id: "amazon",
    name: "Amazon",
    svg: (
      <svg viewBox="0 0 130 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="company-logo-svg">
        <text x="0" y="22" fill="#FFFFFF" fontSize="18" fontWeight="bold" fontFamily="sans-serif">amazon.com</text>
        <path d="M10 26 C40 33 80 33 105 25" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M101 22 L108 26 L104 30" fill="#FF9900" />
      </svg>
    )
  },
  {
    id: "apple",
    name: "Apple",
    svg: (
      <svg viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="company-logo-svg">
        <path d="M22 6C23.2 4.5 24 2.5 23.7 0.5C22 0.6 20 1.6 18.8 3.1C17.8 4.3 17 6.3 17.3 8.3C19.2 8.4 21 7.4 22 6ZM23.8 9.5C20.6 9.5 18.8 11.4 16.8 11.4C14.7 11.4 12.6 9.7 9.8 9.7C6.1 9.7 2 12.3 2 18.3C2 22 3.6 26.2 5.3 28.6C6.8 30.7 8.3 32.9 10.6 32.8C12.8 32.7 13.6 31.4 16.2 31.4C18.7 31.4 19.4 32.8 21.7 32.8C24 32.8 25.4 30.8 26.8 28.7C28.5 26.3 29.2 24 29.3 23.9C29.2 23.8 25.3 22.3 25.3 17.9C25.3 14.1 28.4 12.2 28.5 12.1C26.7 9.5 23.9 9.5 23.8 9.5Z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    id: "netflix",
    name: "Netflix",
    svg: (
      <svg viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="company-logo-svg">
        <text x="0" y="24" fill="#E50914" fontSize="22" fontWeight="900" fontFamily="impact, sans-serif" letterSpacing="3">NETFLIX</text>
      </svg>
    )
  },
  {
    id: "cisco",
    name: "Cisco",
    svg: (
      <svg viewBox="0 0 110 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="company-logo-svg">
        {/* Signal Bars */}
        <line x1="12" y1="12" x2="12" y2="4" stroke="#00bceb" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" y1="14" x2="20" y2="2" stroke="#00bceb" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="28" y1="12" x2="28" y2="4" stroke="#00bceb" strokeWidth="2.5" strokeLinecap="round" />
        <text x="40" y="22" fill="#00bceb" fontSize="18" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">CISCO</text>
      </svg>
    )
  },
  {
    id: "paypal",
    name: "PayPal",
    svg: (
      <svg viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="company-logo-svg">
        <text x="0" y="24" fontSize="22" fontWeight="bold" fontStyle="italic" fontFamily="sans-serif">
          <tspan fill="#003087">Pay</tspan>
          <tspan fill="#0079C1">Pal</tspan>
        </text>
      </svg>
    )
  },
  {
    id: "microsoft",
    name: "Microsoft",
    svg: (
      <svg viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="company-logo-svg">
        <rect x="0" y="6" width="10" height="10" fill="#F25022" />
        <rect x="12" y="6" width="10" height="10" fill="#7FBA00" />
        <rect x="0" y="18" width="10" height="10" fill="#00A4EF" />
        <rect x="12" y="18" width="10" height="10" fill="#FFB900" />
        <text x="28" y="22" fill="#FFFFFF" fontSize="17" fontWeight="600" fontFamily="sans-serif">Microsoft</text>
      </svg>
    )
  },
  {
    id: "uber",
    name: "Uber",
    svg: (
      <svg viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="company-logo-svg">
        <text x="0" y="24" fill="#FFFFFF" fontSize="22" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">Uber</text>
      </svg>
    )
  }
];

const AboutCompany = () => {
  return (
    <section className="about-company-section">
      <div className="about-company-container">
        <h2 className="about-company-title">
          Get All <span className="title-bold-audiowide">Premium</span> Questions Asked In
        </h2>
        <h2 className="about-company-subtitle title-bold-audiowide">
          FAANG Companies
        </h2>
      </div>

      {/* Infinite Right-to-Left Marquee Track */}
      <div className="company-marquee-wrapper">
        <div className="company-marquee-track">
          {/* First Copy of Logos */}
          {companyLogos.map((company, index) => (
            <div key={`c1-${company.id}-${index}`} className="company-logo-item">
              {company.svg}
            </div>
          ))}

          {/* Second Duplicate Copy of Logos for Seamless Infinite Loop */}
          {companyLogos.map((company, index) => (
            <div key={`c2-${company.id}-${index}`} className="company-logo-item">
              {company.svg}
            </div>
          ))}
        </div>
      </div>

      {/* Center Go Ahead Button */}
      <div className="go-ahead-container">
        <button className="go-ahead-btn" type="button">
          Go Ahead
        </button>
      </div>
    </section>
  );
};

export default AboutCompany;
