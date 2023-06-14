import Link from "next/link";
import Button from "../components/navbutton";

export default function Hero() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center">
      <span
        id="hero-title"
        className="font-inter fixed left-2/4 top-2/4 w-full -translate-x-2/4 -translate-y-2/4 animate-fade text-white text-center text-8xl mix-blend-difference"
      >
        Hi, I&apos;m Alain!
      </span>
      <a
          href="https://github.com/archriste/archriste.github.io/blob/main/README.md"
          target="_blank"
          className="fixed top-3/4 animate-slowfade text-center font-inter"
          >...and I&apos;d love for you to view the readme!</a>
    </div>
  );
}
