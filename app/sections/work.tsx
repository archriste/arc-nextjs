import Anchor from "../components/anchor";

export default function Work() {
  return (
    <section className="relative flex w-screen flex-col bg-gray-800 bg-gradient-to-t from-rose-400 to-pink-400 py-24 sm:px-10 md:px-20 lg:px-32 xl:px-40">
        <Anchor id="work" />
        <div className="">
            <h1 className="font-inter text-center pb-8 text-5xl font-bold text-white drop-shadow-xl sm:text-left">Work</h1>
            <h2 className="font-inter px-10 text-2xl text-white drop-shadow-xl sm:px-0">This section is for work I&apos;ve undertaken professionally.</h2>
        </div>
    </section>
  );
}
