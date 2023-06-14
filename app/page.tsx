import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return [{ name: "portfolio" }, { name: "blog" }];
}

export default function Home({ params }: { params: { name: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-24">
      <h1 className="m-8 p-8 text-center text-6xl text-black">
        Alain Christe - Software Developer
      </h1>
      <h2 className="text-center text-4xl">Follow one of the links below:</h2>
      <div className="m-16 flex flex-row justify-center overflow-hidden rounded-xl border border-black bg-gray-200">
        <Link
          className="flex h-24 w-96 items-center justify-center border-r border-black text-2xl hover:bg-gray-300"
          href={`portfolio/`}
        >
          Portfolio
        </Link>
        <Link
          className="flex h-24 w-96 items-center justify-center text-2xl hover:bg-gray-300"
          href={`blog/`}
        >
          Blog
        </Link>
      </div>
    </main>
  );
}
