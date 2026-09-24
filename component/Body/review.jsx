import React from "react";

const reviewsRow1 = [
  {
    id: 1,
    name: "Gopal Kumar Jha",
    review:
      "Completed Nexus MERN in 8-9 months. Rohit Bhaiya taught not just 'what' but 'why' behind everything. My consistency broke many times, but I finally made it!",
  },
  {
    id: 2,
    name: "Adheli Priyanka",
    review:
      "Nexus builds from basics with in-depth explanations. Daily homework, live classes, and project contests with rewards kept me motivated throughout my learning journey.",
  },
  {
    id: 3,
    name: "Alok",
    review:
      "The live classes, HD recordings, and daily practice problems made learning smooth. Real-world projects prepared me for actual development work in the industry.",
  },
  {
    id: 4,
    name: "Aryan Verma",
    review:
      "Best decision I made was joining Nexus. The First Principles teaching helped me understand concepts deeply, not just memorize solutions like other courses.",
  },
  {
    id: 5,
    name: "Shree",
    review:
      "From zero coding knowledge to building full-stack projects, Nexus transformed my career. The mentorship and doubt support made all the difference in my journey.",
  },
  {
    id: 6,
    name: "Navlesh Kumar",
    review:
      "Rohit Sir's First Principles transformed how I build apps. From beginner to advanced, everything was taught perfectly and boosted my confidence as a developer.",
  },
];

const reviewsRow2 = [
  {
    id: 7,
    name: "Raju Arya",
    review:
      "The live classes, HD recordings, and daily practice problems made learning smooth. Real-world projects prepared me for actual development work in the industry.",
  },
  {
    id: 8,
    name: "Aryan Verma",
    review:
      "Best decision I made was joining Nexus. The First Principles teaching helped me understand concepts deeply, not just memorize solutions like other courses.",
  },
  {
    id: 9,
    name: "Priyanshu",
    review:
      "From zero coding knowledge to building full-stack projects, Nexus transformed my career. The mentorship and doubt support made all the difference in my journey.",
  },
  {
    id: 10,
    name: "Mehul Prajapati",
    review:
      "The way complex topics like System Design and Blockchain are taught in Nexus is unmatched. I built 5+ projects that directly helped me crack multiple interviews.",
  },
  {
    id: 11,
    name: "Sonu",
    review:
      "Nexus gave me everything I needed - MERN Stack, DSA, System Design, all in one place. The community support and regular contests pushed me beyond my limits.",
  },
  {
    id: 12,
    name: "Sumit Kumar",
    review:
      "Completed Nexus MERN in 8-9 months. Rohit Bhaiya taught not just 'what' but 'why' behind everything. My consistency broke many times, but I finally made it!",
  },
];

const ReviewCard = ({ name, review }) => (
  <div className="review-card">
    <h4 className="review-user-name">{name}</h4>
    <p className="review-text">"{review}"</p>
  </div>
);

const Review = () => {
  return (
    <section className="review-section">
      <div className="review-header">
        <div className="review-star-badge">
          <span className="star-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </span>
          REVIEWS
        </div>
        <h1 id="heading-review">Trusted by Visionaries</h1>
        <p id="para-review">
          Hear from real users who achieved success with our automation
        </p>
      </div>

      {/* Row 1 Infinite Right-to-Left Marquee Track */}
      <div className="review-marquee-wrapper">
        <div className="review-marquee-track track-row1">
          {reviewsRow1.map((item) => (
            <ReviewCard key={`r1-orig-${item.id}`} name={item.name} review={item.review} />
          ))}
          {/* Duplicate set for infinite loop */}
          {reviewsRow1.map((item) => (
            <ReviewCard key={`r1-dup-${item.id}`} name={item.name} review={item.review} />
          ))}
        </div>
      </div>

      {/* Row 2 Infinite Right-to-Left Marquee Track */}
      <div className="review-marquee-wrapper margin-top-row">
        <div className="review-marquee-track track-row2">
          {reviewsRow2.map((item) => (
            <ReviewCard key={`r2-orig-${item.id}`} name={item.name} review={item.review} />
          ))}
          {/* Duplicate set for infinite loop */}
          {reviewsRow2.map((item) => (
            <ReviewCard key={`r2-dup-${item.id}`} name={item.name} review={item.review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
