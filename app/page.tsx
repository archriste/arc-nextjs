import Hero from "./sections/hero";
import Link from "next/link";
import Navbar from "./components/navbar";
import About from "./sections/about";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import Work from "./sections/work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar />
      <About />
      <Work />
      <Projects />
      <Contact />
    </main>
  );
}
