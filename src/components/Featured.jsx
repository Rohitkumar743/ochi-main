import { motion, useAnimation } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import Card from "./Card";

function Featured() {
  // array to animate two cards
  const cards = [useAnimation(), useAnimation()];
  // receives index and animates that card only
  const handleHoverStart = (index) => {
    cards[index].start({
      y: "0",
    });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({
      y: "100%",
    });
  };
  return (
    <div className="container w-full sm:pt-20 pt-10">
      <div className="w-full border-b-[1px] border-zinc-700 pb-5">
        <h1 className="text-2xl sm:text-4xl">Meet Your AI Learning Companion</h1>
      </div>
      <div className="py-10 cards w-full flex flex-col md:flex-row gap-10 ">
        
       
          <Card/>
          <Card/>

      </div>


      <div className="m-auto rounded-full flex gap-2 justify-center w-fit bg-[#004D43] font-NueueMontreal text-zinc-100 px-10 py-3 text-sm tracking-wider uppercase">
        See all Projects
        <FaArrowUpLong className="rotate-45 origin-center translate-y-[2px]" />
      </div>
    </div>
  );
}

export default Featured;

//  <motion.div
//           onHoverStart={() => handleHoverStart(0)}
//           onHoverEnd={() => handleHoverEnd(0)}
//           className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
//         >
//           <h1 className="mb-4 flex gap-2 items-center tracking-wide">
//             <span className="w-2 h-2 bg-zinc-50 rounded-full"></span> AI-Powered Mentoring
//           </h1>

        

//           {/* card */}
//          <div className="card group w-full h-[300px] rounded-xl relative bg-[#0E0E11] overflow-hidden">

//           {/* Background gradients  */}
//           <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-b from-pink-500 via-red-500 to-orange-500"></div>

//           <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-b from-purple-500 via-fuchsia-500 to-pink-500"></div>

//           {/* Content layer  */}
//           <div
//             className="
//               relative z-10 h-full flex items-center
//               transition-transform duration-500 ease-out
//               group-hover:scale-105
//             "
//           >
//             {/* Inner black content box */}
//             <div
//               className="
//                 mx-auto w-[90%] sm:w-[85%] md:w-[70%]
//                 bg-[#15151a]
//                 rounded-xl
//                 px-6 sm:px-8 md:px-12
//                 py-6 sm:py-8
//                 text-white
//               "
//             >
//               {/* Title */}
//               <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
//                 AI-Powered Mentoring
//               </h2>

//               {/* Description */}
//               <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
//                 Get personalized guidance 24/7 from our intelligent mentor that adapts to your learning style.
//               </p>

//               {/* Features list */}
//               <div className="mt-5 space-y-3">
//                 <div className="flex items-center gap-3 text-sm sm:text-base">
//                   <span className="w-2 h-2 rounded-full bg-gray-400"></span>
//                   Instant doubt solving
//                 </div>

//                 <div className="flex items-center gap-3 text-sm sm:text-base">
//                   <span className="w-2 h-2 rounded-full bg-gray-400"></span>
//                   Adaptive learning paths
//                 </div>

//                 <div className="flex items-center gap-3 text-sm sm:text-base">
//                   <span className="w-2 h-2 rounded-full bg-gray-400"></span>
//                   Smart recommendations
//                 </div>
//               </div>
//             </div>
//           </div>


//         </div>
        
        
//         </motion.div>


  {/* animated text */}
          {/* <h1 className="absolute text-[#CDEA68] flex overflow-hidden left-1/2 sm:left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-NueueMontreal leading-none tracking-tighter">
            {"FIDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1> */}
{/* animation text */}
          {/* <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-1/2 sm:right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-NueueMontreal leading-none tracking-tighter">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1> */}