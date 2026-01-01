import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Eyes from "./components/Eyes";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Animated_scroller from "./components/Animated_Scroller";
import What_We_Offer from "./components/What_We_Offer";
import AboutUs from "./components/AboutUs";
import TestimoniaSection from "./components/TestimoniaSection";
import PricingSection from "./components/PricingSection";
import FAQsSection from "./components/FAQsSection";
import ResourcesSection from "./components/ResourcesSection";
import ContactUs from "./components/ContactUs";
import ProblemSolutionSection from "./components/ProblemSolutionSection";

function App() {
  // Locomotive Scroll
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      smoothTouch: true,
      touchMultiplier: 1,
    },
  });

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <HeroSection />
      <Animated_scroller />
      <What_We_Offer />
      <ProblemSolutionSection/>
      <AboutUs/>
      {/* <Eyes /> */}
      <TestimoniaSection/>
      <PricingSection/>
      <FAQsSection/>
      <ResourcesSection/>
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default App;
