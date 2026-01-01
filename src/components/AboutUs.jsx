import { FaRocket, FaUsers, FaGraduationCap } from "react-icons/fa6";

const timeline = [
  {
    year: "2025",
    title: "The Idea Was Born",
    desc: "We identified the need for structured mentoring for JEE & NEET aspirants.",
  },
  {
    year: "2026",
    title: "Platform Launched",
    desc: "Started mentoring students with personalized study tracking and guidance.",
  },
  {
    year: "2027",
    title: "1000+ Students Mentored",
    desc: "Helped aspirants improve consistency, confidence, and exam readiness.",
  },
  {
    year: "2028",
    title: "AI-Driven Monitoring",
    desc: "Introduced smart insights to track performance and growth patterns.",
  },
];

function AboutUs() {
  return (
    <section id="about" className="bg-[#1d1f1e] py-24 min-h-screen scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-semibold text-white">
            Who We Are
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A student-first mentoring platform built to guide JEE and NEET
            aspirants with clarity, consistency, and confidence.
          </p>
        </div>

        {/* Mission */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Our Mission",
              desc: "To make high-quality mentoring accessible and affordable for every JEE & NEET student.",
              icon: <FaRocket />,
            },
            {
              title: "Our Vision",
              desc: "To empower students with smart guidance, continuous monitoring, and emotional support.",
              icon: <FaGraduationCap />,
            },
            {
              title: "Our Values",
              desc: "Discipline, honesty, student-centric learning, and long-term success.",
              icon: <FaUsers />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-[#293231] rounded-2xl p-8
                         hover:scale-[1.04] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#004D43]
                              flex items-center justify-center
                              text-green-300 text-2xl mb-6
                              group-hover:bg-green-500 group-hover:text-black transition">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Founders */}
        <div className="mb-24">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-10 text-center">
            Meet the Founders
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: "Founder Name",
                role: "Co-Founder & Mentor",
                bio: "An educator passionate about guiding students through competitive exams with structured mentoring.",
              },
              {
                name: "Co-Founder Name",
                role: "Co-Founder & Strategist",
                bio: "Focused on building scalable learning systems and student progress tracking.",
              },
            ].map((founder, i) => (
              <div
                key={i}
                className="bg-[#293231] rounded-2xl p-8
                           hover:scale-[1.03] transition-all duration-300"
              >
                <h4 className="text-xl text-white font-semibold">
                  {founder.name}
                </h4>
                <p className="text-green-400 text-sm mb-3">
                  {founder.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Inspiration */}
        <div className="text-center mb-20">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Our Journey
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Born from real student struggles, our journey began with a simple
            goal — to replace confusion with clarity and fear with confidence
            for competitive exam aspirants.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto px-4">

  {/* Center Line */}
  <div className="absolute left-1/2 top-0 h-full w-px bg-zinc-700 -translate-x-1/2 hidden md:block"></div>

  <div className="space-y-12">
    {timeline.map((item, i) => (
      <div
        key={i}
        className={`relative flex 
          ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"} 
          justify-center`}
      >
        {/* Dot */}
        <span className="absolute left-1/2 top-6 w-3 h-3 bg-green-400 rounded-full 
                         -translate-x-1/2 hidden md:block"></span>

        {/* Card */}
        <div
          className="bg-[#293231] rounded-xl p-6 
                     w-full md:w-[45%]
                     hover:scale-[1.03] transition
                     shadow-lg"
        >
          <p className="text-green-400 font-semibold mb-1">
            {item.year}
          </p>
          <h4 className="text-white font-medium mb-2">
            {item.title}
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
      </div>


      </div>
    </section>
  );
}

export default AboutUs;
