import Link from "next/link";

export default function About() {
  return (
    <section className="relative flex min-h-screen w-full flex-col bg-gray-800 bg-gradient-to-r from-emerald-500 to-emerald-600 px-10 sm:px-16 md:px-20">
      <a id="about" className="absolute -top-20"></a>
      <div>
        <h1 className="font-inter font-bold py-8 text-6xl text-white drop-shadow-xl">
          About me
        </h1>
        <p className="font-inter w-full py-4 text-2xl text-white drop-shadow-xl">
          My name is Alain. I&apos;m a coder who is passionate about learning new
          ways to create meaningful tools and applications. My main focus at the
          moment is on transitioning from my IT background to a full-time career
          in software development.
        </p>
        <p className="font-inter w-full py-4 text-2xl text-white drop-shadow-xl">
          I believe that being obsessed about customers and the user experience
          is the key to building great products and delivering value. If you&apos;d
          like to work together, head down to the contact page!
        </p>
      </div>
    </section>
  );
}
