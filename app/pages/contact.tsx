import ContactGrid from "../components/contactGrid";
import Image from "next/image";
import Anchor from "../components/anchor";

export default function Contact() {
  return (
    <section className="relative flex flex-col items-center overscroll-none bg-gradient-to-t from-amber-300 to-amber-400 py-24 px-10 pb-10 md:px-20">
      <Anchor id="contact" />
      <h1 className="font-inter text-5xl pb-8 font-bold text-white drop-shadow-xl">
        Contact
      </h1>
      <ContactGrid />
    </section>
  );
}
