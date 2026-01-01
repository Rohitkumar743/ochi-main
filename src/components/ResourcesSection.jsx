import { FaBookOpen, FaLightbulb, FaUsers } from "react-icons/fa6";

const resources = [
  {
    title: "Exam Preparation Blogs",
    description:
      "Expert-written blogs to guide JEE and NEET aspirants with strategies, syllabus breakdowns, and exam updates.",
    icon: <FaBookOpen />,
  },
  {
    title: "Smart Study Hacks",
    description:
      "Proven study techniques, time management tips, and productivity hacks to boost learning efficiency.",
    icon: <FaLightbulb />,
  },
  {
    title: "Parenting Tips",
    description:
      "Practical advice for parents to support, motivate, and monitor their child's preparation journey.",
    icon: <FaUsers />,
  },
];

function ResourcesSection() {
  return (
    <section className="bg-[#1d1f1e] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-semibold text-white">
            Resources for Success
          </h2>
          <p className="mt-3 text-gray-400">
            Blogs, parenting tips, and study hacks for smarter preparation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {resources.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#293231] rounded-2xl p-8
                         transition-all duration-500 ease-out
                         hover:scale-[1.06]"
            >
              {/* Glow background */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 
                           bg-gradient-to-br from-green-500/20 via-transparent to-green-400/10
                           group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl
                             bg-[#004D43] text-green-300 text-2xl mb-6
                             group-hover:scale-110 group-hover:bg-green-500
                             group-hover:text-black transition-all duration-300"
                >
                  {item.icon}
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* CTA */}
                <button
                  className="mt-6 text-green-400 text-sm flex items-center gap-2
                             group-hover:text-green-300 group-hover:gap-3 transition-all"
                >
                  Explore Resources →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResourcesSection;
