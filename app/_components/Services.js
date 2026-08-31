"use client";

import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Network,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";
import { services } from "../_data/portfolioData";

// Helper to map string icon names from data to actual Lucide components
const IconMap = {
  MonitorSmartphone,
  Network,
  BrainCircuit,
  ShieldCheck,
};

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="services"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full relative"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mb-2">
          What I Do.
        </h2>
        <div className="w-20 h-1 bg-emerald-500 rounded-full mb-6"></div>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
          I provide end-to-end software engineering solutions, from designing
          secure backend architectures to building intuitive user interfaces.
        </p>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {services.map((service) => {
          const IconComponent = IconMap[service.icon];

          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative p-8 md:p-10 bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md rounded-2xl border border-slate-200/50 dark:border-neutral-800/50 shadow-xl shadow-slate-200/20 dark:shadow-none overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="mb-6 inline-flex p-4 rounded-xl bg-slate-50 dark:bg-black border border-slate-100 dark:border-neutral-800 group-hover:border-emerald-500/30 transition-colors">
                {IconComponent && (
                  <IconComponent className="text-emerald-500" size={32} />
                )}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-emerald-500 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
