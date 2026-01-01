import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";

const plans = [
  {
    id: 1,
    name: "Free",
    price: "₹0",
    tag: "For Beginners",
    features: [
      "Basic learning content",
      "Limited practice questions",
      "Community support",
      "Access on mobile",
    ],
    highlight: false,
  },
  {
    id: 2,
    name: "Premium",
    price: "₹499 / month",
    tag: "Most Popular",
    features: [
      "All Free features",
      "Unlimited practice & tests",
      "AI-based performance insights",
      "1-on-1 mentor guidance",
      "Priority support",
    ],
    highlight: true,
  },
  {
    id: 3,
    name: "Pro",
    price: "₹999 / month",
    tag: "Best for Serious Learners",
    features: [
      "All Premium features",
      "Personalized study roadmap",
      "Weekly live doubt sessions",
      "Career & placement guidance",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  const middleIndex = Math.floor(plans.length / 2);
  const [active, setActive] = useState(middleIndex);

  return (
    <section id="buynow" className="bg-[#1d1f1e] py-20  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-semibold text-white">
          Affordable for Everyone
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Choose a plan that fits your learning needs. Start free and upgrade
          anytime.
        </p>

        {/* Pricing Cards */}
        <div className="relative mt-16">
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(calc(50% - ${(active + 0.5) * 300}px))`,
            }}
          >
            {plans.map((plan, index) => {
              const isActive = index === active;

              return (
                <div
                  key={plan.id}
                  onMouseEnter={() => setActive(index)}
                  className={`w-[260px] sm:w-[280px] lg:w-[300px]
                  shrink-0 rounded-2xl p-8 cursor-pointer
                  transition-all duration-500
                  ${
                    isActive
                      ? "bg-[#293231] scale-105 border border-green-400 shadow-[0_0_35px_rgba(34,197,94,0.35)]"
                      : "bg-[#252c2b] opacity-60 scale-95"
                  }`}
                >
                  {/* Plan Name */}
                  <h3 className="text-xl font-semibold text-white">
                    {plan.name}
                  </h3>
                  <p className="text-green-400 text-sm mt-1">{plan.tag}</p>

                  {/* Price */}
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-white">
                      {plan.price}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="mt-6 space-y-3 text-left">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-300 text-sm"
                      >
                        <FaCheck className="text-green-400 text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`mt-8 w-full py-3 rounded-xl font-medium transition-all
                    ${
                      isActive
                        ? "bg-green-400 text-black hover:bg-green-300"
                        : "bg-[#1d1f1e] text-green-400 border border-green-400 hover:bg-green-400 hover:text-black"
                    }`}
                  >
                    Choose your plan
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {plans.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all
                ${
                  active === i
                    ? "bg-green-400 scale-125"
                    : "bg-gray-500 opacity-40"
                }`}
            />
          ))}
        </div>

       <div className="flex items-center flex-col mt-5">
         <h1 className="text-5xl">Start Your learning Journey Today!</h1>
         <div className="rounded-full flex gap-2 justify-center mt-4 w-fit bg-[#004D43] text-zinc-100 px-14 py-3 text-xl tracking-wider uppercase hover:bg-[#006b5e] transition">
                    Register Now
            <FaArrowUpLong className="rotate-45 origin-center translate-y-[2px]" />
        </div>
       </div>
      </div>
    </section>
  );
}
