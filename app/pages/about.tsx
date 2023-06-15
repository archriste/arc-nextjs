import Link from "next/link";
import Anchor from "../components/anchor";

export default function About() {
  return (
    <section className="relative flex w-full flex-col bg-gray-800 bg-gradient-to-r from-emerald-500 to-emerald-600 py-24 px-10 md:px-20 lg:px-32 xl:px-40">
      <Anchor id="about" />
      <div>
        <h1 className="font-inter text-center pb-8 text-5xl font-bold text-white drop-shadow-xl sm:text-left">
          About me
        </h1>
        <p className="font-inter w-full pb-4 text-2xl text-white drop-shadow-xl">
          My name is Alain. I&apos;m a coder who is passionate about learning
          new ways to create meaningful tools and applications. My main focus at
          the moment is on transitioning from my IT background to a full-time
          career in software development.
        </p>
        <p className="font-inter w-full text-2xl text-white drop-shadow-xl">
          I believe that being obsessed about customers and the user experience
          is the key to building great products that deliver value. If
          you&apos;d like to work together, head down to the contact page!
        </p>
      </div>
    </section>
  );
}
