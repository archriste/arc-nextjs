import Anchor from "../components/anchor";
import WorkGrid from "../components/workGrid";
import { getWorkData } from "../../lib/workData";

export default function Work() {
  return (
    <section className="relative flex w-screen flex-col bg-gray-800 bg-gradient-to-b from-sky-500 to-cyan-500 py-24 sm:px-10 md:px-20 lg:px-32 xl:px-40">
      <Anchor id="work" />
      <h1 className="font-inter text-center pb-8 text-5xl font-bold text-white drop-shadow-xl sm:text-left">
        Work
      </h1>
      <h2 className="font-inter w-full pb-8 text-2xl text-white drop-shadow-xl text-justify px-8 sm:px-0">
        This section is for work I&apos;ve undertaken professionally.
      </h2>
      <WorkGrid workData={getWorkData()} />
    </section>
  );
}
