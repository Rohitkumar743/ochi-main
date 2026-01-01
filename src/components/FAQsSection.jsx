import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqs = [
  {
    question: "What is this platform for JEE and NEET students?",
    answer:
      "This platform is a smart mentoring and monitoring system designed for JEE and NEET aspirants. It helps students track their preparation, identify weak areas, and get personalized guidance throughout their journey.",
  },
  {
    question: "How does mentoring work on this platform?",
    answer:
      "Students receive structured mentoring through performance analysis, study plans, regular feedback, and doubt resolution. Mentors guide students based on their test performance and learning progress.",
  },
  {
    question: "Can parents track student progress?",
    answer:
      "Yes, parents can view performance reports, attendance, test results, and improvement trends through a dedicated monitoring dashboard.",
  },
  {
    question: "Is this platform suitable for both beginners and repeaters?",
    answer:
      "Absolutely. The platform supports beginners as well as repeaters by customizing learning paths based on the student’s current preparation level.",
  },
  {
    question: "What is included in the Free plan?",
    answer:
      "The Free plan provides access to basic study materials, limited practice questions, and performance tracking tools to get started.",
  },
  {
    question: "What additional benefits does the Premium plan offer?",
    answer:
      "Premium students get unlimited practice tests, advanced analytics, one-on-one mentoring, personalized study schedules, and priority support.",
  },
  {
    question: "Does the platform support JEE Main, JEE Advanced, and NEET?",
    answer:
      "Yes, the platform covers JEE Main, JEE Advanced, and NEET syllabi with exam-oriented content and test patterns.",
  },
  {
    question: "Can I use this platform on mobile?",
    answer:
      "Yes, the platform is fully responsive and works smoothly on mobile phones, tablets, and desktops.",
  },
];

function FAQsSection() {
  // ✅ first FAQ open by default
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#1d1f1e] py-20  mt-2">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl text-white font-semibold">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-400">
            Answers to common queries about JEE & NEET mentoring.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#293231] rounded-xl border border-zinc-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="text-white font-medium">
                  {faq.question}
                </span>
                <span className="text-green-400">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              <div
                className={`px-6 transition-all duration-300 overflow-hidden
                ${
                  activeIndex === index
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQsSection;
