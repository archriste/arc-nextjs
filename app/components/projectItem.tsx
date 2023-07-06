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
  var reverse = id % 2 === 0 ? false : true;

  return (
    <div className="relative m-2 h-40 overflow-hidden rounded-xl border-black xl:h-32">
      <div
        className={
          reverse ? "flex h-full flex-row-reverse" : "flex h-full flex-row"
        }
      >
        <Image
          className={`absolute bottom-0 z-0 h-auto min-w-full border-gray-900 sm:relative sm:z-10 sm:min-w-max`}
          src={`/${img}`}
          alt={imgAlt}
          height={156}
          width={234}
        />
        <div
          id="project-links"
          className={`${
            reverse ? "border-r" : "border-l"
          } z-20 box-border flex h-full flex-col border border-gray-900 bg-gray-800`}
        >
          <Link
            href={codepen}
            target="_blank"
            className="flex h-1/2 flex-col items-center border-gray-900 p-2 text-white transition duration-75 ease-in-out hover:bg-gray-200 hover:text-gray-800"
          >
            <FontAwesomeIcon icon={faCodepen} className="" />
            <span className="text-sm font-bold">CODEPEN</span>
          </Link>
          <Link
            href={github}
            target="_blank"
            className="flex h-1/2 flex-col items-center border-gray-900 p-2 text-white transition duration-75 ease-in-out hover:bg-gray-200 hover:text-gray-800"
          >
            <FontAwesomeIcon icon={faGithub} className="" />
            <span className="text-sm font-bold">GITHUB</span>
          </Link>
        </div>
        <div
          id="project-text"
          className={`${
            reverse ? "border-l" : "border-r"
          } relative z-20 flex w-full flex-col sm:justify-center justify-evenly overflow-hidden border-y border-gray-900 bg-gray-800 bg-opacity-90 p-2 sm:bg-opacity-50 top-1/2 h-1/2 sm:top-0 sm:h-full`}
        >
          <h2 className="font-inter block text-left text-base font-bold text-white drop-shadow-xl sm:text-lg md:px-4 md:text-start md:text-xl xl:px-8">
            {name}
          </h2>
          <h3 className="font-inter text-sm leading-4 text-white drop-shadow-xl md:px-4 text-justify lg:text-lg xl:px-8 xl:text-xl">
            {description}
          </h3>
        </div>
      </div>
    </div>
  );
}
