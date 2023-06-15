import Hero from "./pages/hero";
import Link from "next/link";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
