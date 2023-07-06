import Link from "next/link";
import Image from "next/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WorkItem({
  id,
  name,
  img,
  imgAlt,
  description,
  url,
  github,
}: {
  id: number;
  name: string;
  img: string;
  imgAlt: string;
  description: string;
  url: string;
  github: string;
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-2xl border-2 bg-black bg-opacity-50 p-4">
      <h2 className="font-inter text-center text-xl font-bold text-white md:pb-8 md:text-4xl">
        {name}
      </h2>
      <div id="img-container" className="relative h-56 w-full md:h-96">
        <Image
          src={`/${img}`}
          alt={imgAlt}
          fill
          style={{
            width: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <p className="font-inter px-2 py-4 text-justify text-base text-white sm:px-10 lg:text-center">
        {description}
      </p>
      <div className="flex h-16 w-full flex-row overflow-hidden justify-center border border-gray-900 bg-gray-900 gap-px rounded-xl text-white sm:w-3/4">
        <Link
          target="_blank"
          href={url}
          className="flex justify-center items-center h-full w-full flex-row bg-gray-800 hover:bg-gray-200 hover:text-gray-800"
        >
          <span className="text-2xl px-12 font-bold hidden sm:inline-block">Link</span>
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            className="h-full w-10 text-2xl"
          />
        </Link>
        <Link
          target="_blank"
          href={github}
          className="flex justify-center items-center h-full w-full flex-row bg-gray-800 hover:bg-gray-200 hover:text-gray-800"
        >
          <span className="text-2xl px-12 font-bold hidden sm:inline-block">GitHub</span>
          <FontAwesomeIcon icon={faGithub} className="h-full w-11 text-2xl" />
        </Link>
      </div>
    </div>
  );
}
