import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/50 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
        {/* Left Side: Logo / Name */}
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tighter text-slate-900 dark:text-slate-100 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
        >
          Farhan<span className="text-emerald-500">.</span>
        </Link>

        {/* Right Side: Links & Toggle */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-400">
            <Link
              href="#about"
              className="hover:text-emerald-500 transition-colors"
            >
              About & Skills
            </Link>
            <Link
              href="#services"
              className="hover:text-emerald-500 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="hover:text-emerald-500 transition-colors"
            >
              Projects
            </Link>
            {/* Added the Contact Link right here! */}
            <Link
              href="#contact"
              className="hover:text-emerald-500 transition-colors"
            >
              Contact
            </Link>
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
