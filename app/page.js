import Hero from "./_components/Hero";
import About from "./_components/About";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import GridBackground from "./_components/GridBackground"; // <-- Import it
import Services from "./_components/Services";
import GithubStats from "./_components/GithubStats";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Drop the background component here! */}
      <GridBackground />

      <Hero />
      <About />
      <Services />
      <GithubStats />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
