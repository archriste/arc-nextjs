import ContactGrid from "../components/contactGrid";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative flex min-h-screen flex-col items-center overscroll-none bg-gradient-to-t from-amber-300 to-amber-400 px-10 pb-10 md:px-20">
      <a id="contact" className="absolute -top-20"></a>
      <h1 className="font-inter py-8 text-6xl font-bold text-white drop-shadow-xl">
        Contact
      </h1>
      <ContactGrid />
    </section>
  );
}
