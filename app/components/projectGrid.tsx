import ProjectItem from "./projectItem";

export default function ProjectGrid({ projectData }: { projectData: any }) {
  return (
    <div id="project-grid" className="snap-x flex flex-nowrap overflow-x-auto scroll-px-9 md:scroll-px-20 lg:scroll-px-32 xl:scroll-px-40 h-[400px] sm:h-[540px]">
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
      <div id="project-grid-end" className="sm:min-w-[16px] translate-x-9 md:translate-x-20 lg:translate-x-32 xl:translate-x-40"></div>
    </div>
  );
}
