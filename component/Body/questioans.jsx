import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What programming languages can I learn on the platform?",
    answer:
      "You can learn C++, Java, Python, JavaScript, and TypeScript along with HTML, CSS, React, and modern full-stack web technologies.",
  },
  {
    id: 2,
    question: "What will I learn in the DSA + Gen AI course?",
    answer:
      "You will master Data Structures & Algorithms from basics to advanced levels alongside building autonomous Gen AI agents, LLM integrations, and real-world projects.",
  },
  {
    id: 3,
    question: "Do I need prior coding experience to join DSA + Gen AI course?",
    answer:
      "No prior coding experience is required! The course starts from absolute fundamentals and gradually progresses to advanced problem solving.",
  },
  {
    id: 4,
    question: "How is Gen AI integrated with DSA in this course?",
    answer:
      "We combine core problem-solving logic with modern Generative AI capabilities, teaching you how to use AI tools for code optimization, system design, and building intelligent applications.",
  },
  {
    id: 5,
    question: "Will this course help me crack product-based company interviews?",
    answer:
      "Yes! The curriculum is tailored specifically for Tier-1 product-based company interviews, covering DSA, System Design, Mock Interviews, and Resume Reviews.",
  },
  {
    id: 6,
    question: "How long does it take to complete the DSA + Gen AI course?",
    answer:
      "The course is structured to be completed in 4 months with dedicated practice problems, live sessions, and mentor support.",
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h1 id="heading-faq">Your Questions, Answered</h1>
        <p id="para-faq">
          Get instant answers to most common questions about Strike.
        </p>
      </div>

      <div className="faq-accordion-container">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.id}
              className={`faq-item ${isOpen ? "open" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question-row">
                <h3 className="faq-question-text">{faq.question}</h3>
                <span className="faq-icon">{isOpen ? "−" : "+"}</span>
              </div>
              <div className="faq-answer-wrapper">
                <p className="faq-answer-text">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Questions;
