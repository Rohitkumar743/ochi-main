import React from "react";
import Logo from "../assets/logo_black.svg";
import { LuMenu } from "react-icons/lu";

function Navbar() {
  const navLinks = ["Services", "Contact", "About Us", "Insights", "Login"];
  return (
    <div className="sticky bg-zinc-900/40 backdrop-blur-md top-0 z-[999] py-4 sm:py-5">
      <div className="container w-full font-NueueMontreal flex items-center justify-between">
        <div className="logo">
          <img src={Logo} className="w-12" alt="ochi logo" />
        </div>
        <div className="links items-center gap-10 hidden md:flex">
          {navLinks.map((item, index) => (
            <a
              key={index}
              className={`text-md font-light capitalize whitespace-nowrap cursor-pointer ${
                index === 4 && "ml-[10vw] border px-3 py-2 rounded-lg hover:bg-white hover:text-black transition-transform"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
        <LuMenu className="md:hidden block text-3xl" />
      </div>
    </div>
  );
}

export default Navbar;
