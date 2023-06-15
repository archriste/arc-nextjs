import Link from "next/link";
import NavButton from "./navbutton";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex h-14 min-w-full items-stretch justify-center shadow shadow-transparent backdrop-blur backdrop-brightness-50 backdrop-grayscale bg-black bg-opacity-20">
      <NavButton
        to="about"
        text="About"
        classes="hover:text-emerald-300"
      />
      <NavButton
        to="projects"
        text="Projects"
        classes="hover:text-sky-300"
      />
      <NavButton
        to="contact"
        text="Contact"
        classes="hover:text-amber-300"
      />
    </div>
  );
}
