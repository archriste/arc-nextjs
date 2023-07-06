import WorkItem from "./workItem";

export default function WorkGrid({ workData }: { workData: any }) {
    return (
        <div id="project-grid" className="flex flex-col">
            { workData.map(({ id, name, img, imgAlt, description, url, github }: {id: number, name:string, description: string, img: string, imgAlt: string, url: string, github: string}) => (
                <div key={id}><WorkItem id={id} name={name} description={description} img={img} imgAlt={imgAlt} url={url} github={github} /></div>
            ))}
        </div>
    )
}