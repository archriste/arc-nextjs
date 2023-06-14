import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-24">
      <h1 className="m-8 p-8 text-center text-6xl text-black">
        Alain Christe - Software Developer
      </h1>
      <h2 className="text-center text-4xl">
        Follow one of the links below:
      </h2>
      <div className="flex m-16 flex-row justify-center bg-gray-200 rounded-xl border border-black overflow-hidden">
        <Link
          className="flex h-24 w-96 items-center border-r border-black justify-center text-2xl hover:bg-gray-300"
          href={`https://christe.co/arc-nextjs/portfolio.html`}
        >
          Portfolio
        </Link>
        <Link
          className="flex h-24 w-96 items-center justify-center text-2xl hover:bg-gray-300"
          href={`https://christe.co/arc-nextjs/blog.html`}
        >
          Blog
        </Link>
      </div>
    </main>
  );
}
