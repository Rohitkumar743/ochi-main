import React from "react";

const Card = () => {
  return (
    <div>
      <h1 className="mb-4 flex gap-2 items-center tracking-wide">
        <span className="w-2 h-2 bg-zinc-50 rounded-full"></span> AI-Powered
        Mentoring
      </h1>
      <div className="card group w-full h-[300px] rounded-xl relative bg-[#0E0E11] overflow-hidden">
        {/* Background gradients  */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-b from-pink-500 via-red-500 to-orange-500"></div>

        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-b from-purple-500 via-fuchsia-500 to-pink-500"></div>

        {/* Content layer  */}
        <div
          className="
              relative z-10 h-full flex items-center
              transition-transform duration-500 ease-out
              group-hover:scale-105
            "
        >
          {/* Inner black content box */}
          <div
            className="
                mx-auto w-[90%] sm:w-[85%] md:w-[70%]
                bg-[#15151a]
                rounded-xl
                px-6 sm:px-8 md:px-12
                py-6 sm:py-8
                text-white
              "
          >
            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              AI-Powered Mentoring
            </h2>

            {/* Description */}
            <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
              Get personalized guidance 24/7 from our intelligent mentor that
              adapts to your learning style.
            </p>

            {/* Features list */}
            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                Instant doubt solving
              </div>

              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                Adaptive learning paths
              </div>

              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                Smart recommendations
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
