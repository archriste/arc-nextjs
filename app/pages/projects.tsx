import ProjectGrid from "../components/projectGrid";
import { getFrontEndProjectsData } from "../../lib/projects";
import { getVisualizationProjectsData } from "../../lib/projects";

export default function Projects() {
  return (
    <section className="relative block min-h-screen bg-gray-800 bg-gradient-to-r from-sky-500 to-indigo-500 pb-10 sm:px-10 md:px-20 lg:px-32 xl:px-40">
      <a id="projects" className="absolute -top-20"></a>
      <h1 className="font-inter px-10 py-8 text-center text-6xl font-bold text-white drop-shadow-xl sm:px-0 sm:text-left">
        Projects
      </h1>
      <h2 className="font-inter px-10 py-4 text-2xl text-white drop-shadow-xl sm:px-0">
        Here&apos;s a selection of projects I&apos;ve completed.
      </h2>
      <h2 className="font-inter px-10 py-4 text-2xl text-white drop-shadow-xl sm:px-0">
        Shoot me a message if you&apos;ve got one for me!
      </h2>
      <h1 className="font-inter px-10 py-8 text-center text-5xl font-bold text-white drop-shadow-xl sm:px-0 sm:text-left">
        Front End
      </h1>
      <ProjectGrid projectData={getFrontEndProjectsData()} />
      <h1 className="font-inter px-10 py-8 text-center text-5xl font-bold text-white drop-shadow-xl sm:px-0 sm:text-left">
        Data Visualization
      </h1>
      <ProjectGrid projectData={getVisualizationProjectsData()} />
    </section>
  );
}
