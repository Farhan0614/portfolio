import About from "./_components/About";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    // Removed bg-slate-950 from here
    <main className="flex flex-col min-h-screen overflow-hidden relative">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
