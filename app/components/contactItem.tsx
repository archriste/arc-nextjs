import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import bg from "../../public/img/funky.png";

export default function ContactItem({
  name,
  link,
  icon,
}: {
  name: string;
  link: string;
  icon: IconProp;
}) {
  return (
    <a
      href={link}
      target="_blank"
      className="relative my-2 box-border flex h-20 w-full animate-diagonal items-center sm:justify-between justify-center overflow-hidden rounded-xl border text-white"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute h-full w-full bg-opacity-0 transition duration-100 hover:backdrop-invert"></div>
      <span className="px-8 hidden sm:inline sm:text-lg md:text-xl font-bold lg:text-2xl xl:text-3xl xl:px-16">{name}</span>
      <FontAwesomeIcon icon={icon} className="h-16 px-8 xl:px-16" />
    </a>
  );
}
