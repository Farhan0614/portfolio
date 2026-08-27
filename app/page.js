import Hero from "./_components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-950 overflow-hidden">
      {/* We render the Hero here. 
        Later, we will stack <About />, <Skills />, and <Projects /> right below it.
      */}
      <Hero />
    </main>
  );
}
