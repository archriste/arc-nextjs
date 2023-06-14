import ProjectItem from "./projectItem";

export default function ProjectGrid({ projectData }: { projectData: any }) {
    return (
        <div id="project-grid" className="flex flex-col">
            { projectData.map(({ key, name, description, img, imgAlt, codepen, github }: {key: number, name:string, description: string, img: string, imgAlt: string, codepen: string, github: string}) => (
                <ProjectItem key={key} name={name} description={description} img={img} imgAlt={imgAlt} codepen={codepen} github={github} />
            ))}
        </div>
    )
}