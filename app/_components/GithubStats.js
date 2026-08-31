import { BookOpen, Calendar, GitMerge } from "lucide-react";
import { personalInfo } from "../_data/portfolioData";

// Custom Github Icon SVG
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

const githubUsername = personalInfo.github.split("/").pop();

export default async function GithubStats() {
  let stats = null;
  let yearsActive = "1+";

  try {
    const res = await fetch(`https://api.github.com/users/${githubUsername}`, {
      next: { revalidate: 3600 },
    });

    if (res.ok) {
      stats = await res.json();

      // Calculate years active based on GitHub account creation date
      if (stats.created_at) {
        const createdYear = new Date(stats.created_at).getFullYear();
        const currentYear = new Date().getFullYear();
        const diff = currentYear - createdYear;
        yearsActive = diff > 0 ? `${diff}+` : "1";
      }
    }
  } catch (error) {
    console.error("Failed to fetch GitHub stats", error);
  }

  // Fallback data
  const displayStats = stats || {
    public_repos: "10+",
  };

  const statCards = [
    {
      label: "Public Repositories",
      value: displayStats.public_repos,
      icon: BookOpen,
    },
    { label: "Years Coding", value: yearsActive, icon: Calendar },
    { label: "Commits/PRs", value: "Active", icon: GitMerge }, // Hardcoded based on your Next/Node expertise
  ];

  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <div className="bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-200/50 dark:border-neutral-800/50 shadow-xl shadow-slate-200/20 dark:shadow-none relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 transition-colors duration-300">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -z-10"></div>

        {/* Left Side: Call to Action */}
        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-6 transition-colors">
            <GithubIcon size={16} />
            <span>Live GitHub API</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 transition-colors">
            Code speaks louder than words.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 transition-colors">
            I believe in building in public and writing clean, scalable
            architecture. Check out my latest repositories and open-source
            contributions.
          </p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-emerald-500 dark:text-emerald-400 font-bold hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
          >
            <span>View GitHub Profile</span>
            <span className="text-xl">→</span>
          </a>
        </div>

        {/* Right Side: The Live Stat Cards */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {statCards.map((stat, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 flex flex-col gap-3 transition-colors duration-300 ${i === 2 ? "sm:col-span-2" : ""}`}
            >
              <stat.icon className="text-emerald-500" size={24} />
              <div>
                <div className="text-3xl font-black text-slate-900 dark:text-white transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
