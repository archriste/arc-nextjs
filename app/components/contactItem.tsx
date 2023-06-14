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
      className="relative my-2 box-border flex h-20 w-full items-center justify-between overflow-hidden rounded-xl border text-white animate-diagonal"
      style={{ backgroundImage: `url(${bg.src})`, backgroundAttachment: "fixed" }}
    >
        <div className="absolute h-full w-full bg-opacity-0 hover:backdrop-invert transition duration-100"></div>
      <span className="px-8 text-xl font-bold lg:text-2xl">{name}</span>
      <FontAwesomeIcon icon={icon} className="h-16 px-8" />
    </a>
  );
}
