import Link from "next/link";
import NavButton from "./navbutton";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 flex h-20 min-w-full items-stretch justify-center border-b border-t shadow shadow-transparent backdrop-blur backdrop-brightness-50 backdrop-grayscale bg-black bg-opacity-20">
      <Link href="../">
        <div className="font-inter absolute left-0 flex h-full items-center justify-center px-8 font-bold text-white transition-all duration-200 bg-black bg-opacity-0 hover:bg-opacity-50">
          Back
        </div>
      </Link>
      <NavButton
        to="about"
        text="About"
        classes="font-inter flex h-full font-bold items-center justify-center px-4 sm:px-8 text-white transition-all duration-200 will-change-transform hover:text-emerald-300 bg-black bg-opacity-0 hover:bg-opacity-50"
      />
      <NavButton
        to="projects"
        text="Projects"
        classes="font-inter flex h-full font-bold items-center justify-center px-4 sm:px-8 text-white transition-all duration-200 will-change-transform hover:text-sky-300 bg-black bg-opacity-0 hover:bg-opacity-50"
      />
      <NavButton
        to="contact"
        text="Contact"
        classes="font-inter flex h-full font-bold items-center justify-center px-4 sm:px-8 text-white transition-all duration-200 will-change-transform hover:text-amber-300 bg-black bg-opacity-0 hover:bg-opacity-50"
      />
    </div>
  );
}