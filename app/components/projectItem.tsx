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
    <div className="relative m-2 h-40 overflow-hidden border-2 border-black xl:mx-20">
      <div
        className={
          id % 2 === 0 ? "flex h-full flex-row" : "flex h-full flex-row-reverse"
        }
      >
        <Image
          className="absolute z-0 min-w-full sm:relative sm:z-10 sm:min-w-max h-auto"
          src={`/${img}`}
          alt={imgAlt}
          height={156}
          width={234}
        />
        <div
          id="project-links"
          className="z-20 box-border flex h-full flex-col bg-gray-800"
        >
          <Link
            href={codepen}
            target="_blank"
            className="flex h-1/2 flex-col items-center border-x border-b border-gray-900 p-2 text-white transition duration-75 ease-in-out hover:bg-gray-200 hover:text-gray-800"
          >
            <FontAwesomeIcon icon={faCodepen} className="" />
            <span className="text-sm font-bold">CODEPEN</span>
          </Link>
          <Link
            href={github}
            target="_blank"
            className="flex h-1/2 flex-col items-center border-x border-gray-900 p-2 text-white transition duration-75 ease-in-out hover:bg-gray-200 hover:text-gray-800"
          >
            <FontAwesomeIcon icon={faGithub} className="" />
            <span className="text-sm font-bold">GITHUB</span>
          </Link>
        </div>
        <div
          id="project-text"
          className="relative z-20 flex w-full flex-col justify-center overflow-hidden bg-gray-800 bg-opacity-80 sm:bg-opacity-50 p-2"
        >
          <h2 className="font-inter block text-center text-md font-bold text-white drop-shadow-xl md:text-start xl:px-8 md:px-4 sm:text-lg md:text-2xl">
            {name}
          </h2>
          <h3 className="font-inter md:text-md text-xs text-white drop-shadow-xl p-4 xl:px-8 lg:text-lg">
            {description}
          </h3>
        </div>
      </div>
    </div>
  );
}