import { useState } from "react";
import {
  FaBrain,
  FaUserClock,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

const challenges = [
  {
    title: "Lack of Personalized Guidance",
    solution:
      "Every student receives a tailored study plan with continuous mentor feedback.",
    icon: <FaBrain />,
  },
  {
    title: "Irregular Study Routine",
    solution:
      "Daily monitoring, reminders, and accountability keep students consistent.",
    icon: <FaUserClock />,
  },
  {
    title: "Unclear Performance Growth",
    solution:
      "Detailed analytics provide clear insights into strengths and improvement areas.",
    icon: <FaChartLine />,
  },
  {
    title: "Stress & Low Motivation",
    solution:
      "Mentors provide emotional support and guidance to reduce burnout.",
    icon: <FaCheckCircle />,
  },
];

function ProblemSolution() {
  const [active, setActive] = useState(0);

  return (
    <section id="solutions" className="bg-[#1d1f1e] py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-semibold text-white">
            The Challenge & Our Solution
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Common problems students face — and how we solve them intelligently.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-16">

          {/* Left: Challenges */}
          <div className="md:w-1/2 space-y-6">
            {challenges.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-full text-left rounded-xl p-6 transition-all
                  ${
                    active === index
                      ? "bg-[#293231] scale-[1.02]"
                      : "bg-transparent hover:bg-[#232826]"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center
                      ${
                        active === index
                          ? "bg-green-500 text-black"
                          : "bg-[#004D43] text-green-300"
                      } transition`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-white font-medium text-lg">
                    {item.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Solution */}
          <div className="md:w-1/2">
            <div className="bg-[#293231] rounded-2xl p-10
                            transition-all duration-500">
              <p className="text-green-400 text-sm mb-2">
                Our Solution
              </p>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {challenges[active].title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {challenges[active].solution}
              </p>

              {/* Visual Indicator */}
              <div className="mt-8 flex gap-2">
                {challenges.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-all
                      ${
                        active === i
                          ? "w-10 bg-green-400"
                          : "w-4 bg-zinc-600"
                      }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProblemSolution;
