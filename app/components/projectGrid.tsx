"use client";

import { useRef } from "react";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectItem from "./projectItem";

export default function ProjectGrid({ projectData }: { projectData: any }) {
  const gridRef = useRef<HTMLDivElement>(null);

  const handleScroll = ({ direction }: { direction: string }) => {
    if (gridRef.current !== null) {
      gridRef.current.scrollBy({
        top: 0,
        left: direction === "left" ? -340 : 340,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex flex-col">
      <div
        ref={gridRef}
        id="project-grid"
        className="flex h-[400px] snap-x snap-mandatory scroll-px-[calc((100vw-318px)/2)] flex-nowrap overflow-x-scroll sm:h-[540px] sm:snap-proximity md:scroll-px-20 lg:scroll-px-32 xl:scroll-px-40"
      >
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
        <div
          id="project-grid-end"
          className="min-w-[calc((100vw-318px)/2)] translate-x-[calc((100vw-318px)/2)] md:min-w-[16px] md:translate-x-20 lg:translate-x-32 xl:translate-x-40"
        ></div>
      </div>
      <div className="self-center w-1/2 flex justify-center">
        <button
          onClick={() => handleScroll({ direction: "left" })}
          className="z-10 hidden h-16 w-16 m-4 rounded-full bg-white shadow-md md:inline-block"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={() => handleScroll({ direction: "right" })}
          className="z-10 hidden h-16 w-16 m-4 rounded-full bg-white shadow-md md:inline-block"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
