import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import students from "../assets/images/students.avif";

const features = [
  "Personalized learning paths for JEE & NEET aspirants",
  "One-on-one mentor matching with continuous guidance",
  "Weekly performance tracking and actionable insights",
  "Smart study planning with flexible schedules",
];

function What_We_Offer() {
  return (
    <section className="w-full bg-[#1d1f1e] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE — CONTENT */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-white">
            What We Offer
          </h2>

          <p className="text-zinc-300 mb-10 leading-relaxed">
            A focused mentoring and monitoring platform designed specifically
            for JEE and NEET students — helping them stay consistent, confident,
            and exam-ready.
          </p>

          <div className="space-y-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 text-zinc-200
                           transition-all duration-300
                           hover:text-green-400"
              >
                <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                <p className="text-base sm:text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE WITH GRADIENT + ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden
                          shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

            {/* Image */}
            <img
              src={students}
              alt="Students learning"
              className="w-full h-full object-cover
                         transition-transform duration-500
                         hover:scale-105"
            />

            {/* Bottom Gradient Overlay */}
            <div
              className="pointer-events-none absolute inset-0
                         bg-gradient-to-t
                         from-black/70 via-black/30 to-transparent"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default What_We_Offer;
