"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Code, Wrench } from "lucide-react";
import { personalInfo, skills } from "../_data/portfolioData";

// A helper function to map your skill categories to cool icons
const getSkillIcon = (category) => {
  switch (category) {
    case "frontend":
      return <Code className="text-emerald-500 mb-4" size={32} />;
    case "backend":
      return <Terminal className="text-emerald-500 mb-4" size={32} />;
    case "database":
      return <Database className="text-emerald-500 mb-4" size={32} />;
    default:
      return <Wrench className="text-emerald-500 mb-4" size={32} />;
  }
};

export default function About() {
  const scrollVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    // The id="about" is crucial here so your Navbar links can scroll directly to it!
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full relative"
    >
      {/* Subtle Background Glow for the Skills section */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <motion.div
        variants={scrollVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the section is in view
        className="flex flex-col lg:flex-row gap-16"
      >
        {/* LEFT SIDE: The About Narrative */}
        <div className="lg:w-1/3 flex flex-col gap-6">
          <motion.div variants={childVariants}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mb-2">
              About Me.
            </h2>
            <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            <p>
              I am a Full-Stack Software Engineer who thrives on breaking down
              complex technical challenges into clean, scalable web
              applications. My expertise lies in architecting decoupled systems
              using Next.js and Node.js that are built to perform.
            </p>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            <p>
              My engineering philosophy goes beyond just making things work. I
              am deeply passionate about **Software Quality
              Engineering**—prioritizing robust architecture, strict testing
              methodologies, and maintainable code from day one.
            </p>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            <p>
              Technology moves fast, so continuous learning is baked into my
              daily routine. Ultimately, I believe great software isn't just
              about writing logic; it requires clear communication, seamless
              collaboration, and a focus on delivering real user value.
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE: The Skills Matrix */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              variants={childVariants}
              className="p-8 rounded-2xl bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md border border-slate-200/50 dark:border-neutral-800/50 shadow-xl shadow-slate-200/20 dark:shadow-none hover:-translate-y-2 transition-transform duration-300 group"
            >
              {/* Dynamic Icon */}
              {getSkillIcon(category)}

              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 capitalize">
                {category}
              </h3>

              <ul className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1 text-sm font-medium bg-slate-100 dark:bg-black text-slate-700 dark:text-slate-300 rounded-md border border-slate-200 dark:border-neutral-800 group-hover:border-emerald-500/50 transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
