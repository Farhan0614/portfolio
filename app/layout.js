import { ThemeProvider } from "./_components/ThemeProvider";
import Navbar from "./_components/Navbar"; // <-- 1. Import the Navbar
import "./globals.css";

export const metadata = {
  title: "Muhammad Farhan | Software Engineer",
  description: "Portfolio of a Full-Stack Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900 dark:bg-black dark:text-slate-300 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* 2. Place the Navbar here! */}
          <Navbar />

          {/* 3. Wrap children in a div with top padding so the fixed navbar doesn't cover your Hero */}
          <div className="pt-20">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
