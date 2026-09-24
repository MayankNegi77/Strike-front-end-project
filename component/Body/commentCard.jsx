import React from "react";

const commentsData = [
  {
    id: 1,
    comment:
      "Ye platform bahut achha hai. ye sbse best hai bignner ke liye maine DSA + genAi course liya tha jismai maine bahut kuch sikha hai or aj m khus ke model bna pa rha hu , DSA itni strong ho gyi h ki OA clear kr dera hu.",
    courseName: "DSA + GenAI Combo",
    targetSelector: ".offer-section",
    type: "ai",
    rating: 5.0,
  },
  {
    id: 2,
    comment:
      "Hey i am from chennai this platform is very helpful for my future jaurny. The promise of our mentor is not a fake. they stand on the promise and give more time to us that how much they promise us.",
    courseName: "Strike Ultra",
    targetSelector: ".strike-ultra-card",
    type: "ultra",
    rating: 4.5,
  },
  {
    id: 3,
    comment:
      "Ye platform bahut achha hai. Maine DSA + GenAI course liya tha aur honestly meri problem solving kaafi improve ho gayi. Ab OA questions pehle se kaafi jaldi solve kar leta hu.",
    courseName: "DSA + GenAI Combo",
    targetSelector: ".offer-section",
    type: "ai",
    rating: 5.0,
  },
  {
    id: 4,
    comment:
      "Hey, I am from Chennai. This platform has been very helpful in my learning journey. The mentors are supportive and genuinely spend extra time to help students.",
    courseName: "Strike Plus",
    targetSelector: ".strike-plus-card",
    type: "plus",
    rating: 4.5,
  },
  {
    id: 5,
    comment:
      "Maine kaafi courses try kiye the, but yaha jo roadmap mila usne meri preparation ko proper direction di. Content beginner-friendly hai.",
    courseName: "Strike Ultra",
    targetSelector: ".strike-ultra-card",
    type: "ultra",
    rating: 5.0,
  },
  {
    id: 6,
    comment:
      "The structured learning path is what I liked the most. Everything is organized from basics to advanced topics.",
    courseName: "Thunder: 100 Days",
    targetSelector: ".offer-section",
    type: "thunder",
    rating: 5.0,
  },
  {
    id: 7,
    comment:
      "Pehle mujhe graphs aur DP se bahut darr lagta tha. Ab contests me in topics ke questions attempt kar leta hu with confidence.",
    courseName: "DSA + GenAI Combo",
    targetSelector: ".offer-section",
    type: "ai",
    rating: 4.5,
  },
  {
    id: 8,
    comment:
      "I cleared my first internship OA after completing the DSA modules here. The practice problems were very close to actual assessments.",
    courseName: "DSA + GenAI Combo",
    targetSelector: ".offer-section",
    type: "ai",
    rating: 5.0,
  },
  {
    id: 9,
    comment:
      "Mentors sirf videos nahi dete, they actually guide you whenever you get stuck. That's what makes the difference.",
    courseName: "Strike Plus",
    targetSelector: ".strike-plus-card",
    type: "plus",
    rating: 4.5,
  },
  {
    id: 10,
    comment:
      "Yaar sabse best cheez mujhe community lagi. Doubts kaafi jaldi solve ho jate hain aur motivation bhi milta rehta hai.",
    courseName: "Strike Ultra",
    targetSelector: ".strike-ultra-card",
    type: "ultra",
    rating: 5.0,
  },
  {
    id: 11,
    comment:
      "The GenAI content is practical and project-based. I was able to build my own AI-powered application after completing the course.",
    courseName: "DSA + GenAI Combo",
    targetSelector: ".offer-section",
    type: "ai",
    rating: 5.0,
  },
  {
    id: 12,
    comment:
      "Mujhe laga tha coding mere bas ki baat nahi hai, but the teaching style here made concepts much easier to understand.",
    courseName: "Thunder: 100 Days",
    targetSelector: ".offer-section",
    type: "thunder",
    rating: 4.5,
  },
  {
    id: 13,
    comment:
      "The mock interviews were extremely useful. They helped me understand what companies actually expect from candidates.",
    courseName: "Strike Ultra",
    targetSelector: ".strike-ultra-card",
    type: "ultra",
    rating: 5.0,
  },
  {
    id: 14,
    comment:
      "Maine yaha se Web Development course join kiya tha. Ab React projects confidently bana leta hu aur portfolio bhi ready hai.",
    courseName: "Full Stack Web Dev",
    targetSelector: ".offer-section",
    type: "web",
    rating: 5.0,
  },
  {
    id: 15,
    comment:
      "The best thing is consistency. Every week there are tasks and challenges that keep you on track.",
    courseName: "Thunder: 100 Days",
    targetSelector: ".offer-section",
    type: "thunder",
    rating: 4.5,
  },
  {
    id: 16,
    comment:
      "Placement preparation ke liye ye platform kaafi helpful raha. Resume reviews aur interview guidance dono useful the.",
    courseName: "Strike Plus",
    targetSelector: ".strike-plus-card",
    type: "plus",
    rating: 5.0,
  },
  {
    id: 17,
    comment:
      "I improved my LeetCode rating significantly after following the DSA roadmap provided here.",
    courseName: "DSA + GenAI Combo",
    targetSelector: ".offer-section",
    type: "ai",
    rating: 4.5,
  },
  {
    id: 18,
    comment:
      "Pehle random YouTube videos dekhkar confuse ho jata tha. Yaha ek proper sequence mila jisse learning easy ho gayi.",
    courseName: "Thunder: 100 Days",
    targetSelector: ".offer-section",
    type: "thunder",
    rating: 5.0,
  },
  {
    id: 19,
    comment:
      "The mentors explain concepts with real-world examples, which makes even difficult topics easy to remember.",
    courseName: "Strike Ultra",
    targetSelector: ".strike-ultra-card",
    type: "ultra",
    rating: 5.0,
  },
  {
    id: 20,
    comment:
      "Honestly, the value provided here is much better than many expensive courses available online.",
    courseName: "Strike Plus",
    targetSelector: ".strike-plus-card",
    type: "plus",
    rating: 4.5,
  },
  {
    id: 21,
    comment:
      "Maine DevOps track follow kiya aur deployment, Docker, CI/CD jaise concepts finally samajh aaye in a practical way.",
    courseName: "DevOps Track",
    targetSelector: ".offer-section",
    type: "devops",
    rating: 5.0,
  },
  {
    id: 22,
    comment:
      "Agar aap beginner ho ya placement ki preparation kar rahe ho, then this platform can definitely help you build strong fundamentals.",
    courseName: "Strike Ultra",
    targetSelector: ".strike-ultra-card",
    type: "ultra",
    rating: 4.5,
  },
];

// Star Rating Component (Yellow 4 Full + 1 Half for 4.5, 5 Full for 5.0)
const StarRating = ({ rating }) => {
  const isFourHalf = rating === 4.5;
  return (
    <div className="comment-rating-box">
      <span className="comment-rating-label">Rating</span>
      <div className="comment-stars-group">
        {[1, 2, 3, 4].map((s) => (
          <svg
            key={s}
            viewBox="0 0 24 24"
            width="13"
            height="13"
            fill="#eab308"
            stroke="#eab308"
            strokeWidth="1"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}

        {isFourHalf ? (
          <svg viewBox="0 0 24 24" width="13" height="13" stroke="#eab308" strokeWidth="1">
            <defs>
              <linearGradient id={`halfYellow-${rating}`}>
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="50%" stopColor="#27272a" />
              </linearGradient>
            </defs>
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              fill={`url(#halfYellow-${rating})`}
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            width="13"
            height="13"
            fill="#eab308"
            stroke="#eab308"
            strokeWidth="1"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        )}
      </div>
    </div>
  );
};

// Course Icon Component for Button Side
const CourseIcon = ({ type }) => {
  switch (type) {
    case "ai":
      return (
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "ultra":
      return (
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="#eab308"
          strokeWidth="2.2"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    case "plus":
      return (
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      );
    case "thunder":
      return (
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="#eab308"
          stroke="#eab308"
          strokeWidth="1"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "devops":
      return (
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      );
    case "web":
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
};

const Card = () => {
  // Seamless loop marquee array
  const doubleComments = [...commentsData, ...commentsData];

  const handleExploreCourse = (targetSelector) => {
    const el =
      document.querySelector(targetSelector) ||
      document.querySelector(".member-ship") ||
      document.querySelector(".offer-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="comment-section-container">
      <div className="comment-section-header">
        <h2 id="heading-comment-section">Real Stories</h2>
      </div>

      {/* Marquee Track Container (No border, only floating cards) */}
      <div className="comment-marquee-wrapper">
        <div className="comment-marquee-track">
          {doubleComments.map((item, idx) => (
            <div key={idx} className="comment-single-card">
              <div className="comment-card-top">
                <div className="comment-top-row">
                  <StarRating rating={item.rating} />
                  <span className="comment-quote-mark">“</span>
                </div>
                <p className="comment-text-content">{item.comment}</p>
              </div>

              {/* Bottom Action Group: Course Badge + Logo + Explore Course Button */}
              <div className="comment-card-footer-row">
                <div className="comment-course-info">
                  <span className="comment-course-icon">
                    <CourseIcon type={item.type} />
                  </span>
                  <span className="comment-course-name">{item.courseName}</span>
                </div>

                <button
                  type="button"
                  className="comment-explore-btn"
                  onClick={() => handleExploreCourse(item.targetSelector)}
                  title={`Explore ${item.courseName}`}
                >
                  <span>Explore Course</span>
                  <span className="btn-arrow">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;