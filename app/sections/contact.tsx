import ContactGrid from "../components/contactGrid";
import Image from "next/image";
import Anchor from "../components/anchor";

export default function Contact() {
  return (
    <section className="relative flex min-h-screen w-screen flex-col items-center overscroll-none bg-gradient-to-t from-amber-400 to-yellow-400 px-10 py-24 pb-10 md:px-20">
      <Anchor id="contact" />
      <h1 className="font-inter pb-8 text-5xl font-bold text-white drop-shadow-xl">
        Contact
      </h1>
      <ContactGrid />
    </section>
  );
}
