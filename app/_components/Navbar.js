"use client";

import ThemeToggle from "./ThemeToggle";
import { handleScroll } from "../_util/scroll";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { personalInfo } from "../_data/portfolioData";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

// Single source of truth for nav items — reused by both the desktop
// nav and the mobile dropdown so they can never drift apart.
const NAV_LINKS = [
  { id: "about", label: "About & Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Small download icon reused by both menus
const ResumeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // --- Mobile menu state ---
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  // Close on Escape and on outside click
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const onMouseDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onMouseDown);

    // Close if the viewport grows past the md breakpoint (desktop takes over)
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => e.matches && setIsOpen(false);
    mediaQuery.addEventListener("change", onChange);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onMouseDown);
      mediaQuery.removeEventListener("change", onChange);
    };
  }, [isOpen]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Shared click handler: smooth-scroll to the section and close the menu
  const goTo = (e, targetId) => {
    e.preventDefault();
    const wasOpen = isOpen;
    setIsOpen(false);

    if (!wasOpen) {
      // Desktop (menu never open): scroll immediately — original behavior.
      handleScroll(e, targetId);
      return;
    }

    // Mobile: the menu is currently open. If we scroll now, the AnimatePresence
    // exit (height collapse) + the body scroll-lock release cancel the in-flight
    // smooth scroll. So: let the menu finish closing first (exit duration is
    // 0.25s), then scroll on the next frame.
    requestAnimationFrame(() => {
      setTimeout(() => handleScroll(e, targetId), 260);
    });
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/50 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
        {/* Left Side: Logo / Name */}
        <button
          onClick={(e) => goTo(e, "hero")}
          className="text-xl font-extrabold tracking-tighter text-slate-900 dark:text-slate-100 hover:text-emerald-500 cursor-pointer dark:hover:text-emerald-400 transition-colors focus:outline-none"
        >
          Farhan<span className="text-emerald-500">.</span>
        </button>

        {/* Right Side: Desktop Links + Toggle + Mobile Hamburger */}
        <div className="flex items-center gap-6">
          {/* Desktop nav — unchanged, hidden below md */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-400">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={(e) => goTo(e, link.id)}
                className="hover:text-emerald-500 cursor-pointer transition-colors focus:outline-none"
              >
                {link.label}
              </button>
            ))}

            <a
              href={personalInfo.cvUrl}
              download="Muhammad_Farhan_CV.pdf"
              className="hover:text-emerald-500 cursor-pointer transition-colors focus:outline-none inline-flex items-center gap-1"
              aria-label="Download CV"
            >
              <ResumeIcon />
              Resume
            </a>
          </nav>

          {/* Vertical Divider (desktop only) */}
          <div className="hidden md:block w-px h-6 bg-slate-300 dark:bg-slate-700"></div>

          {/* The Theme Toggle Button! */}
          <ThemeToggle />

          {/* Mobile Hamburger Button (shown below md) */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors shadow-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (shown below md only) */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-black/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800"
          >
            <div className="px-6 pt-2 pb-6 flex flex-col">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                  onClick={(e) => goTo(e, link.id)}
                  className="text-left py-4 text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors border-b border-slate-100 dark:border-slate-800/60 cursor-pointer focus:outline-none focus-visible:text-emerald-500"
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.a
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.25 }}
                href={personalInfo.cvUrl}
                download="Muhammad_Farhan_CV.pdf"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 py-4 text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors cursor-pointer focus:outline-none focus-visible:text-emerald-500"
                aria-label="Download CV"
              >
                <ResumeIcon />
                Resume
              </motion.a>

              {/* Mobile CTA — mirrors the emerald buttons used across the site */}
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.25 }}
                onClick={(e) => goTo(e, "contact")}
                className="mt-4 px-8 py-3 bg-emerald-500 text-black font-bold rounded-lg hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Emerald scroll-progress bar — unchanged */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-500 origin-left"
        style={{ scaleX }}
      />
    </header>
  );
}
