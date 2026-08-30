"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { handleScroll } from "../_util/scroll";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
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
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-500 origin-left"
        style={{ scaleX }}
      />
    </header>
  );
}
