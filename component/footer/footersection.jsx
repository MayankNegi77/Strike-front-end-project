import React from 'react';

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Left Column: Brand & Description */}
        <div className="footer-brand-col">
          <a href="/" className="footer-logo">
            STRIKE
          </a>
          <p className="footer-description">
            Empowering developers with cutting-edge tools and resources.
            Powered by Coder Army, Strike is your gateway to a world of endless
            coding with guided lessons, real projects, level up your skills.
          </p>
        </div>

        {/* Right Columns: Links */}
        <div className="footer-links-grid">
          {/* Column 1: Platform */}
          <div className="footer-link-col">
            <h4 className="footer-col-title">Platform</h4>
            <ul className="footer-link-list">
              <li><a href="/">Home</a></li>
              <li><a href="/practice">Practice</a></li>
              <li><a href="/dsa-sheet">DSA Sheet</a></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="footer-link-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-link-list">
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="footer-link-col">
            <h4 className="footer-col-title">Legal</h4>
            <ul className="footer-link-list">
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Row */}
      <div className="footer-bottom-row">
        <p className="footer-copyright">
          © 2025 STRIKE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
