"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projects } from "../_data/portfolioData";

// Custom Github Icon SVG to avoid missing export issues
const GithubIcon = ({ size = 20 }) => (
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

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full relative"
    >
      {/* Section Header */}
      <div className="flex flex-col mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mb-2">
          Featured Work.
        </h2>
        <div className="w-20 h-1 bg-emerald-500 rounded-full mb-4"></div>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg">
          A collection of full-stack software applications demonstrating
          scalable backend systems, complex data processing, and modern frontend
          design.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            variants={cardVariants}
            className="group flex flex-col bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-neutral-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-emerald-500/50 transition-all duration-300"
          >
            {/* Image Banner Container */}
            <div className="relative w-full h-64 md:h-72 overflow-hidden bg-slate-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>

            {/* Content Body */}
            <div className="flex flex-col flex-1 p-8 justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-emerald-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack & Links Footer */}
              <div>
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold bg-slate-100 dark:bg-black text-slate-700 dark:text-slate-300 rounded-md border border-slate-200 dark:border-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-neutral-800">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                  >
                    <GithubIcon size={18} />
                    <span>Source Code</span>
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors ml-auto"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
