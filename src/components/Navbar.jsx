import React, { useState } from "react";
import Logo from "../assets/logo_black.svg";
import { LuMenu, LuX } from "react-icons/lu";
import { useLenis } from "lenis/react";

function Navbar() {
  const lenis = useLenis();
  const [open, setOpen] = useState(false);

  // MAIN NAV LINKS
  const mainLinks = [
    { name: "Home", id: "home" },
    { name: "Our Solutions", id: "solutions" },
    { name: "About Us", id: "about" },
    { name: "Buy Now", id: "buynow" },
    { name: "Contact Us", id: "contact" },
  ];

  // AUTH LINKS
  const authLinks = [
    { name: "Login", id: "login" },
    { name: "Sign Up", id: "signup" },
  ];

  const handleScroll = (id) => {
    setOpen(false);

    // Route navigation
    if (id === "login") {
      window.location.href = "/login";
      return;
    }

    if (id === "signup") {
      window.location.href = "/signup";
      return;
    }

    // Lenis smooth scroll
    if (lenis) {
      lenis.scrollTo(`#${id}`, {
        offset: -90,
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-[999] bg-zinc-900/40 backdrop-blur-md">
        <nav className="container mx-auto flex items-center justify-between py-4 sm:py-5 font-NueueMontreal">

          {/* LOGO */}
          <img
            src={Logo}
            alt="Logo"
            className="w-12 cursor-pointer"
            onClick={() => handleScroll("home")}
          />

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-14 justify-end  w-full ml-16">

            {/* MAIN LINKS */}
            <div className="flex items-center gap-10">
              {mainLinks.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleScroll(item.id)}
                  className="text-sm font-light capitalize hover:text-white transition"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* AUTH BUTTONS */}
            <div className="flex items-center gap-4">
              {authLinks.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleScroll(item.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium
                    transition-all duration-300
                    ${
                      item.name === "Sign Up"
                        ? "bg-white text-black hover:scale-105 hover:shadow-lg"
                        : "border border-white/20 hover:bg-white hover:text-black"
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl"
          >
            <LuMenu />
          </button>
        </nav>
      </header>

      {/* ================= MOBILE FULL SCREEN MENU ================= */}
      <div
        className={`fixed inset-0 z-[1000] bg-black/90 backdrop-blur-xl
        transition-transform duration-500 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* TOP BAR */}
        <div className="flex items-center justify-between px-6 py-4">
          <img src={Logo} className="w-12" alt="logo" />
          <button onClick={() => setOpen(false)} className="text-3xl">
            <LuX />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <div className="flex flex-col items-center justify-center gap-8 h-full text-xl">
          {[...mainLinks, ...authLinks].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className={`capitalize transition
                ${
                  item.name === "Sign Up"
                    ? "bg-white text-black px-6 py-2 rounded-full"
                    : "hover:text-white"
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
