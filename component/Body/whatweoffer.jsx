// Path: component/Body/whatweoffer.jsx
// Purpose: Interactive courses showcase section matching the exact 5-card layout, typography, and hover animations.
// Used by: App.jsx (Body)

import { useState } from "react";

// Clean SVG Icons
const ClockIcon = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const CapIcon = ({ size = 15 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
  </svg>
);

const BookIcon = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const UserIcon = ({ size = 13 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const coursesData = [
  {
    id: 1,
    title: "Thunder: 100 Days of Code",
    image: "/images/photos/WhatsApp Image 2026-09-22 at 6.14.30 PM (1).png",
    subtitle: "Web Development + System Design + Security + DevOps",
    description: "Web Development + System Design + Security + DevOps",
    liveBadge: true,
    duration: "100 Days",
    prerequisite: "HTML and CSS",
    hours: "100+ Hours",
  },
  {
    id: 2,
    title: "DevOps: From Foundations to Production",
    image: "/images/photos/WhatsApp Image 2026-09-22 at 6.14.30 PM.png",
    subtitle: "Linux + CI/CD + Docker + Kubernetes + Terraform + Cloud",
    description: "Linux + CI/CD + Docker + Kubernetes + Terraform + Cloud",
    liveBadge: true,
    duration: "8 weeks",
    prerequisite: "Basics of Linux & Networking",
    hours: "80+ Hours",
  },
  {
    id: 3,
    title: "DSA + GenAI Combo",
    image: "/images/photos/WhatsApp Image 2026-09-22 at 6.14.29 PM.jpeg",
    subtitle: "Logic • Problems • Intelligence",
    description: "Complete tech stack with DSA and AI",
    liveBadge: true,
    duration: "4 months",
    prerequisite: "Basic Programming Knowledge",
    hours: "100+ Hours",
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    image: "/images/photos/WhatsApp Image 2026-09-22 at 6.14.29 PM (1).jpeg",
    subtitle: "Build • Create • Deploy",
    description: "HTML5 + CSS3 + JS + React + Node.js",
    liveBadge: true,
    duration: "4 months",
    prerequisite: "HTML, CSS & JS Basics",
    hours: "90+ Hours",
  },
];

const CourseCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`course-card-wrapper ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
    >
      {/* Top Section with 180° 3D Flip on Hover */}
      <div className="card-top-section">
        <div className="card-top-flipper">
          {/* FRONT FACE (Course Banner View) */}
          <div className="card-flipper-front">
            <img
              src={course.image}
              alt={course.title}
              className="card-banner-img"
              loading="lazy"
            />
            {course.liveBadge && (
              <div className="card-live-badge">
                <span className="live-dot" /> LIVE
              </div>
            )}
          </div>

          {/* BACK FACE (180° Flipped Details View) */}
          <div className="card-flipper-back">
            <div className="card-live-badge">
              <span className="live-dot" /> LIVE
            </div>
            <h3 className="card-hover-title">{course.title}</h3>
            <p className="card-hover-subtitle">{course.subtitle}</p>

            <div className="card-hover-details-list">
              <div className="hover-detail-item">
                <ClockIcon size={14} />
                <span>{course.duration}</span>
              </div>
              <div className="hover-detail-item">
                <CapIcon size={14} />
                <span>Prerequisite: {course.prerequisite}</span>
              </div>
              <div className="hover-detail-item">
                <BookIcon size={14} />
                <span>{course.hours}</span>
              </div>
            </div>

            <div className="hover-divider-line" />
          </div>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="card-bottom-section">
        <p className="card-desc-text">{course.description}</p>

        <div className="card-meta-row">
          <span className="meta-pill duration-pill">
            <ClockIcon size={13} />
            <span>{course.duration}</span>
          </span>
          <span className="meta-pill icon-only-pill" title="Mentorship Included">
            <UserIcon size={13} />
          </span>
        </div>

        {/* Bottom CTA with smooth text transition */}
        <div className="card-cta-wrapper">
          <span className="card-cta-explore">Explore Course &rarr;</span>
          <span className="card-cta-readmore">Read More &rarr;</span>
        </div>
      </div>

      {/* Warm Amber Bottom Ambient Glow */}
      <div className="card-ambient-glow" />
    </div>
  );
};

const Whatweoffer = () => {
  return (
    <section className="offer-section">
      <div className="what-we-offer-container">
        <h1 id="heading-what-we-offer">What We Offer</h1>
        <p id="para-of-offer">
          Explore our comprehensive courses designed to elevate your skills
        </p>
      </div>

      <div className="course-content">
        <div className="course-cards-grid">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whatweoffer;