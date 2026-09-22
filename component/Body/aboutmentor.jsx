import React, { useState } from "react";

const mentorsData = [
  {
    id: 1,
    name: "Rohit Negi",
    role: "Founder & Lead Instructor",
    image: "/mentor/ChatGPT Image Sep 22, 2026, 08_19_27 PM.png",
    imagePosition: "center top",
    bio: "Heartfelt Problem Solver, Instructor, and Visionary Leader. Got Highest Placement in India of 2 Cr +. Post Graduate from IIT G, GATE-CSE'20 AIR - 202",
    badges: ["Ex-@Uber", "IIT Graduate", "2 Cr+ Package"],
    tag: "Founder & Lead Instructor",
  },
  {
    id: 2,
    name: "Aditya Tandon",
    role: "Co-Founder & Senior Instructor",
    image: "/mentor/ChatGPT Image Sep 22, 2026, 08_35_01 PM.png",
    imagePosition: "center top",
    bio: "Senior Software Engineer passionate about scalable systems and elegant algorithms. Dedicated mentor committed to teaching, learning, and inspiring future developers.",
    badges: ["Ex-Ola | Currently @Oxyzo", "IIT Guwahati", "Ex-Ola"],
    tag: "Co-Founder & Senior Instructor",
  },
];

const MentorCard = ({ mentor }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = (e) => {
    e.stopPropagation();
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={`mentor-card-wrapper ${isFlipped ? "flipped" : ""}`}
      onClick={toggleFlip}
    >
      <div className="mentor-card-inner">
        {/* FRONT SIDE (Mentor Photo View) */}
        <div className="mentor-card-front">
          <div className="mentor-photo-container">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="mentor-photo-img"
              style={{ objectPosition: mentor.imagePosition }}
            />
            <div className="mentor-front-badge">{mentor.tag}</div>
            <div className="mentor-front-overlay">
              <h3 className="mentor-front-name">{mentor.name}</h3>
              <p className="mentor-front-role">{mentor.role}</p>
              <div className="mentor-front-pills">
                {mentor.badges.map((badge, idx) => (
                  <span key={idx} className="mentor-front-pill">
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mentor-flip-hint">Hover / Click to View Bio ↻</div>
            </div>
          </div>
        </div>

        {/* BACK SIDE (About Mentor - Matching exact design) */}
        <div className="mentor-card-back">
          <div className="mentor-back-content">
            <h2 className="mentor-back-name">{mentor.name}</h2>
            <h4 className="mentor-back-role">{mentor.role}</h4>

            <p className="mentor-back-bio">{mentor.bio}</p>

            <div className="mentor-pills-row">
              {mentor.badges.map((badge, idx) => (
                <span key={idx} className="mentor-pill">
                  {badge}
                </span>
              ))}
            </div>

            <div className="mentor-back-buttons">
              <button
                className="start-learning-btn"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Starting learning path with ${mentor.name}`);
                }}
              >
                Start Learning
              </button>
              <button
                className="know-more-btn"
                type="button"
                onClick={toggleFlip}
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutMentor = () => {
  return (
    <section className="about-mentor-section">
      <div className="about-mentor-header">
        <h1 id="heading-about-mentor">Meet Our Mentors</h1>
        <p id="para-about-mentor">
          Learn directly from industry veterans who have built systems at scale
          and cracked top global placements.
        </p>
      </div>

      <div className="mentors-container">
        {mentorsData.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </section>
  );
};

export default AboutMentor;
