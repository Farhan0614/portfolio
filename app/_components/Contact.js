"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { personalInfo } from "../_data/portfolioData";
import { sendEmail } from "../_actions/sendEmail";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // 'idle', 'loading', 'success', 'error'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    if (result?.error) {
      setStatus("error");
      alert(result.error);
    } else {
      setStatus("success");
      e.target.reset();

      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto w-full relative"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-200/50 dark:border-neutral-800/50 shadow-2xl shadow-slate-200/20 dark:shadow-none relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -z-10"></div>

        <div className="flex flex-col md:flex-row gap-12 relative z-10">
          {/* LEFT SIDE: Contact Info */}
          <div className="md:w-5/12 flex flex-col gap-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mb-2">
                Get in Touch.
              </h2>
              <div className="w-16 h-1 bg-emerald-500 rounded-full mb-6"></div>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                I am currently open to new opportunities. Whether you have a
                question, a project idea, or just want to say hi, I&apos;ll try
                my best to get back to you!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <div className="p-3 bg-slate-100 dark:bg-black rounded-lg">
                  <Mail size={20} className="text-emerald-500" />
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-medium hover:text-emerald-500 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <div className="p-3 bg-slate-100 dark:bg-black rounded-lg">
                  <MapPin size={20} className="text-emerald-500" />
                </div>
                <span className="font-medium">{personalInfo.location}</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: The Form */}
          <motion.form
            id="contact-form"
            onSubmit={handleSubmit}
            variants={itemVariants}
            className="md:w-7/12 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-bold text-slate-700 dark:text-slate-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
                className="px-4 py-3 bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-neutral-800 focus:outline-none focus:border-emerald-500 transition-colors w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-bold text-slate-700 dark:text-slate-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
                className="px-4 py-3 bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-neutral-800 focus:outline-none focus:border-emerald-500 transition-colors w-full"
              />
            </div>

            <div className="flex flex-col gap-2 mb-2">
              <label
                htmlFor="message"
                className="text-sm font-bold text-slate-700 dark:text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="How can I help you?"
                required
                className="px-4 py-3 bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-neutral-800 focus:outline-none focus:border-emerald-500 transition-colors w-full resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="group flex items-center cursor-pointer justify-center gap-2 bg-emerald-500 text-black font-bold uppercase tracking-wider py-4 rounded-lg hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 hover:-translate-y-1 w-full sm:w-auto self-end px-10 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
            >
              {status === "idle" && (
                <>
                  <span>Send Message</span>
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </>
              )}
              {status === "loading" && (
                <>
                  <span>Sending...</span>
                  <Loader2 size={18} className="animate-spin" />
                </>
              )}
              {status === "success" && (
                <>
                  <span>Sent!</span>
                  <CheckCircle2 size={18} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
