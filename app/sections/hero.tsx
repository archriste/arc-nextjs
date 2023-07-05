import Link from "next/link";
import Button from "../components/navbutton";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavButton from "../components/navbutton";

export default function Hero() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <span
        id="hero-title"
        className="font-inter fixed left-2/4 top-2/4 w-full -translate-x-2/4 -translate-y-2/4 animate-fade text-center text-8xl text-white mix-blend-difference"
      >
        Hi, I&apos;m Alain!
      </span>
      <a
        href="https://github.com/archriste/archriste.github.io/blob/main/README.md"
        target="_blank"
        className="font-inter fixed top-3/4 animate-slowfade text-center"
      >
        Click here to view the readme or keep scrolling to see my work!
      </a>
    </div>
  );
}
