import ProjectItem from "./projectItem";

export default function ProjectGrid({ projectData }: { projectData: any }) {
  return (
    <div id="project-grid" className="snap-x snap-mandatory sm:snap-proximity flex flex-nowrap overflow-x-auto scroll-px-[calc((100vw-318px)/2)] md:scroll-px-20 lg:scroll-px-32 xl:scroll-px-40 h-[400px] sm:h-[540px]">
      {projectData.map(
        ({
          id,
          name,
          description,
          img,
          imgAlt,
          codepen,
          github,
        }: {
          id: number;
          name: string;
          description: string;
          img: string;
          imgAlt: string;
          codepen: string;
          github: string;
        }) => (
          <ProjectItem
            key={id}
            id={id}
            name={name}
            description={description}
            img={img}
            imgAlt={imgAlt}
            codepen={codepen}
            github={github}
          />
        )
      )}
      <div id="project-grid-end" className="min-w-[calc((100vw-318px)/2)] translate-x-[calc((100vw-318px)/2)] md:min-w-[16px] md:translate-x-20 lg:translate-x-32 xl:translate-x-40"></div>
    </div>
  );
}
