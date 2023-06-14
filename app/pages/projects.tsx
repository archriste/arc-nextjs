import ProjectGrid from "../components/projectGrid";
import {getFrontEndProjectsData} from "../../lib/projects";
import {getVisualizationProjectsData} from "../../lib/projects";

export default function Projects() {
  return (
    <section className="relative block min-h-screen bg-gray-800 bg-gradient-to-r from-sky-500 to-indigo-500 px-10 pb-10 md:px-20">
      <a id="projects" className="absolute -top-20"></a>
      <h1 className="font-inter font-bold py-8 text-6xl text-white drop-shadow-xl">
        Projects
      </h1>
      <h2 className="font-inter py-4 text-2xl text-white drop-shadow-xl">
        Here&apos;s a selection of projects I&apos;ve completed.
        </h2>
        <h2 className="font-inter py-4 text-2xl text-white drop-shadow-xl">
        I&apos;m working on new ones all the time.
      </h2>
      <h1 className="font-inter font-bold py-8 text-5xl text-white drop-shadow-xl">
        Front End
      </h1>
      <ProjectGrid projectData={ getFrontEndProjectsData() } />
      <h1 className="font-inter font-bold py-8 text-5xl text-white drop-shadow-xl">
        Data Visualization
      </h1>
      <ProjectGrid projectData={ getVisualizationProjectsData() } />
    </section>
  );
}
