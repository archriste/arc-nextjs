import ProjectItem from "./projectItem";

export default function ProjectGrid({ projectData }: { projectData: any }) {
  return (
    <div id="project-grid" className="flex flex-col">
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
          <div key={id}>
            <ProjectItem
              id={id}
              name={name}
              description={description}
              img={img}
              imgAlt={imgAlt}
              codepen={codepen}
              github={github}
            />
          </div>
        )
      )}
    </div>
  );
}
