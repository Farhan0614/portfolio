"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react"; // Mail is still a valid UI icon!
import { personalInfo } from "../_data/portfolioData";

// --- Custom Brand SVGs to replace the removed Lucide icons ---
const GithubIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
// -------------------------------------------------------------

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.p
          variants={itemVariants}
          className="text-emerald-500 font-semibold tracking-wide mb-4"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold text-slate-100 mb-4"
        >
          {personalInfo.name}.
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-slate-500 mb-6"
        >
          I build scalable digital solutions.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div variants={itemVariants} className="flex items-center gap-6">
          <a
            href="#projects"
            className="px-8 py-4 bg-emerald-500 text-slate-950 font-bold rounded-lg hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
          >
            Check out my work
          </a>

          <div className="flex items-center gap-4 border-l border-slate-700 pl-6">
            {/* Updated Icons Here */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-emerald-500 transition-colors"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-emerald-500 transition-colors"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-emerald-500 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
