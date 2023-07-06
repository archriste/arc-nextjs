import Link from "next/link";
import Image from "next/image";
import { faCodepen, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectItem({
  id,
  img,
  name,
  description,
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
}) {

  return (
    <div className="snap-start mr-4 h-96 translate-x-9 md:translate-x-20 lg:translate-x-32 xl:translate-x-40 w-full max-w-xs flex-none overflow-hidden rounded-xl border border-gray-900 sm:h-[500px] sm:max-w-lg">
      <div className="flex h-full flex-col">
        <div className={`relative h-full`}>
          <Image
            className="z-0 border-gray-900"
            src={`/${img}`}
            alt={imgAlt}
            fill
            placeholder="blur"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div
          id="project-text"
          className="z-20 flex h-full flex-col justify-start bg-gray-800 bg-opacity-90 p-2"
        >
          <h2 className="text-2xl pb-2 px-2 font-bold text-white drop-shadow-xl">
            {name}
          </h2>
          <h3 className="text-justify px-2 text-lg leading-5 text-white drop-shadow-xl">
            {description}
          </h3>
        </div>
        <div
          id="project-links"
          className="flex h-48 sm:h-36 w-full flex-row justify-center gap-px overflow-hidden border-t border-gray-900 bg-gray-900 text-white"
        >
          <Link
            href={codepen}
            target="_blank"
            className="flex h-full w-full flex-row-reverse items-center justify-center bg-gray-800 transition hover:bg-gray-200 hover:text-gray-800"
          >
            <FontAwesomeIcon icon={faCodepen} className="w-11" />
            <span className="hidden px-6 text-2xl font-bold sm:inline-block">CodePen</span>
          </Link>
          <Link
            href={github}
            target="_blank"
            className="flex h-full w-full flex-row-reverse items-center justify-center bg-gray-800 transition hover:bg-gray-200 hover:text-gray-800"
          >
            <FontAwesomeIcon icon={faGithub} className="w-11" />
            <span className="hidden px-12 text-2xl font-bold sm:inline-block">GitHub</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
