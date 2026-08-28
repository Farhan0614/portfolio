"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  // Custom function to handle smooth scrolling without altering the URL
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Prevents the default anchor link behavior
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Calculate position, taking the 80px fixed navbar height into account
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/50 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
        {/* Left Side: Logo / Name */}
        <button
          onClick={(e) => handleScroll(e, "hero")} // Assuming you add id="hero" to your Hero section
          className="text-xl font-extrabold tracking-tighter text-slate-900 dark:text-slate-100 hover:text-emerald-500 cursor-pointer dark:hover:text-emerald-400 transition-colors focus:outline-none"
        >
          Farhan<span className="text-emerald-500">.</span>
        </button>

        {/* Right Side: Links & Toggle */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-400">
            {/* Notice we use buttons instead of Links to prevent URL changes */}
            <button
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-emerald-500 cursor-pointer transition-colors focus:outline-none"
            >
              About & Skills
            </button>

            <button
              onClick={(e) => handleScroll(e, "services")}
              className="hover:text-emerald-500 cursor-pointer transition-colors focus:outline-none"
            >
              Services
            </button>

            <button
              onClick={(e) => handleScroll(e, "projects")}
              className="hover:text-emerald-500 cursor-pointer transition-colors focus:outline-none"
            >
              Projects
            </button>

            <button
              onClick={(e) => handleScroll(e, "contact")}
              className="hover:text-emerald-500 cursor-pointer transition-colors focus:outline-none"
            >
              Contact
            </button>
          </nav>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px h-6 bg-slate-300 dark:bg-slate-700"></div>

          {/* The Theme Toggle Button! */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
