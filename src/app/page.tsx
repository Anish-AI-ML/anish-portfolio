import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import AnveTech from "@/components/sections/AnveTech";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <AnveTech />
      <Contact />
    </main>
  );
}
