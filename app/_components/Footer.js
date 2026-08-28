import { personalInfo } from "../_data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center border-t border-slate-200 dark:border-neutral-800 mt-12">
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        Designed & Built by{" "}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
        >
          {personalInfo.name}
        </a>
      </p>
      <p className="text-slate-400 dark:text-slate-500 text-xs mt-2">
        &copy; {currentYear} All rights reserved.
      </p>
    </footer>
  );
}
