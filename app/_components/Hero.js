"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "../_data/portfolioData";

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

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, delay: 0.4 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full pt-20 lg:pt-0"
    >
      {/* FLASHY BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] opacity-30 dark:opacity-20 pointer-events-none -z-10 blur-[100px] bg-gradient-to-b from-emerald-500/40 to-transparent"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-16 lg:gap-8 z-10"
      >
        <div className="flex-1 max-w-3xl flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.p
            variants={itemVariants}
            className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-4"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-slate-100 mb-4"
          >
            {personalInfo.name}.
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-slate-600 dark:text-slate-500 mb-6 leading-tight"
          >
            I build scalable digital solutions.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-lg hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-1"
            >
              Check out my work
            </a>

            <div className="flex items-center gap-4 sm:border-l border-slate-300 dark:border-slate-800 sm:pl-6 pt-4 sm:pt-0">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              >
                <LinkedinIcon size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={imageVariants}
          className="relative group w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] shrink-0"
        >
          {/* Subtle animated ring around the image */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-300/30 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl">
            <Image
              src="/img/profile2.jpg"
              alt={personalInfo.name}
              fill
              priority
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 400px"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
