import ProjectGrid from "../components/projectGrid";
import Anchor from "../components/anchor";
import { getFrontEndProjectsData } from "../../lib/projectData";
import { getVisualizationProjectsData } from "../../lib/projectData";

export default function Projects() {
  return (
    <section className="relative w-screen bg-gray-800 bg-gradient-to-t from-rose-400 to-pink-400 py-24 sm:px-10 md:px-20 lg:px-32 xl:px-40">
      <Anchor id="projects" />
      <h1 className="font-inter px-10 pb-8 text-center text-5xl font-bold text-white drop-shadow-xl sm:px-0 sm:text-left">
        Projects
      </h1>
      <h2 className="font-inter px-8 text-justify text-2xl text-white drop-shadow-xl sm:px-0">
        Here are some learning projects I&apos;ve put together as practice.
      </h2>
      <h1 className="font-inter px-10 py-8 text-center text-4xl font-bold text-white drop-shadow-xl sm:px-0 sm:text-left">
        Front End
      </h1>
      <ProjectGrid projectData={getFrontEndProjectsData()} />
      <h1 className="font-inter px-10 py-8 text-center text-4xl font-bold text-white drop-shadow-xl sm:px-0 sm:text-left">
        Data Visualization
      </h1>
      <ProjectGrid projectData={getVisualizationProjectsData()} />
    </section>
  );
}
