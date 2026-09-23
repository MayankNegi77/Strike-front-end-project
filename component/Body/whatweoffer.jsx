import { useState, useEffect, useRef } from "react";

const coursesData = [
  {
    id: 1,
    title: "Thunder: 100 Days of Code",
    image: "/images/photos/WhatsApp Image 2026-09-22 at 6.14.30 PM (1).jpeg",
    subtitle: "Web Development + System Design + Security + DevOps",
    liveBadge: true,
    duration: "100 Days",
    level: "Beginner to Advanced",
    modules: "16 Modules",
    techStack: "Web Development + System Design + Security + DevOps",
  },
  {
    id: 2,
    title: "DevOps: From Foundations to Production",
    image: "/images/photos/WhatsApp Image 2026-09-22 at 6.14.30 PM.jpeg",
    subtitle: "Linux + CI/CD + Docker + Kubernetes + Terraform + Cloud",
    liveBadge: true,
    duration: "8 weeks",
    level: "Beginner to Advanced",
    modules: "12 Modules",
    techStack: "Linux + CI/CD + Docker + Kubernetes + Terraform + Cloud",
  },
  {
    id: 3,
    title: "DSA + GenAI Combo",
    image: "/images/photos/WhatsApp Image 2026-09-22 at 6.14.29 PM.jpeg",
    subtitle: "Logic • Problems • Intelligence",
    popularBadge: "POPULAR",
    hoursBadge: "100+ Hours",
    liveBadge: true,
    duration: "4 months",
    level: "Beginner to Advanced",
    modules: "14 Modules",
    techStack: "Complete tech stack with DSA and AI",
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    image: "/images/photos/WhatsApp Image 2026-09-22 at 6.14.29 PM (1).jpeg",
    subtitle: "Build • Create • Deploy",
    liveBadge: true,
    duration: "4 months",
    level: "Beginner to Advanced",
    modules: "10 Modules",
    techStack: "HTML5 + CSS3 + JS + React + Node.js",
  },
];

const CourseCard = ({ course }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!isFlipped) return;

    const handleOutsideClick = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setIsFlipped(false);
      }
    };

    const timer = setTimeout(() => {
      window.addEventListener("click", handleOutsideClick);
      window.addEventListener("touchstart", handleOutsideClick, { passive: true });
    }, 10);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isFlipped]);

  const handleCardClick = (e) => {
    if (!isFlipped) {
      // Front side: ONLY flip when clicking Explore Course button
      if (e.target.closest(".explore-btn")) {
        setIsFlipped(true);
      }
    } else {
      // Back side: Unflip when clicking anywhere EXCEPT Read More button
      if (e.target.closest(".read-more-btn")) {
        return;
      }
      setIsFlipped(false);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`course-card-wrapper ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="course-card-inner">
        {/* FRONT SIDE (Banner image view) */}
        <div className="course-card-front">
          <div className="card-banner-container">
            <img
              src={course.image}
              alt={course.title}
              className="card-banner-img"
            />
            <div className="card-badge-container">
              {course.liveBadge && (
                <span className="live-badge">
                  <span className="live-dot"></span> LIVE
                </span>
              )}
              {course.popularBadge && (
                <span className="popular-badge">{course.popularBadge}</span>
              )}
              {course.hoursBadge && (
                <span className="hours-badge">{course.hoursBadge}</span>
              )}
            </div>
          </div>
          <div className="card-front-content">
            <h3 className="card-front-title">{course.title}</h3>
            <p className="card-front-subtitle">{course.subtitle}</p>
            <div className="card-front-footer">
              <span className="duration-pill">
                <span className="clock-icon">⏱</span> {course.duration}
              </span>
              <button className="explore-btn" type="button">
                Explore Course &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* BACK SIDE (Flipped view - styled identical to card 2 in reference image) */}
        <div className="course-card-back">
          <div className="card-badge-container">
            {course.liveBadge && (
              <span className="live-badge">
                <span className="live-dot"></span> LIVE
              </span>
            )}
          </div>

          <div className="card-back-header">
            <h3 className="card-back-title">{course.title}</h3>
            <p className="card-back-tech">{course.techStack}</p>
          </div>

          <div className="card-back-details">
            <div className="detail-item">
              <span className="detail-icon">⏱</span>
              <span>{course.duration}</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">🎯</span>
              <span>{course.level}</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📚</span>
              <span>{course.modules}</span>
            </div>
          </div>

          <div className="card-back-footer">
            <p className="card-back-summary">{course.subtitle}</p>
            <div className="card-back-actions">
              <span className="duration-pill">
                <span className="clock-icon">⏱</span> {course.duration}
              </span>
              <button className="read-more-btn" type="button">
                Read More &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
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