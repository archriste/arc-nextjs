import {
  faGithub,
  faLinkedin,
  faCodepen,
  faFreeCodeCamp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactItem from "./contactItem";
import Image from "next/image";

export default function ContactGrid() {
  return (
    <div id="contact-grid" className="flex w-3/4 flex-col xl:w-2/3">
      <ContactItem
        name="GitHub"
        link="https://github.com/archriste"
        icon={faGithub}
      />
      <ContactItem
        name="LinkedIn"
        link="https://www.linkedin.com/in/archriste/"
        icon={faLinkedin}
      />
      <ContactItem
        name="CodePen"
        link="https://codepen.io/archriste"
        icon={faCodepen}
      />
      <ContactItem
        name="freeCodeCamp"
        link="https://www.freecodecamp.org/arct"
        icon={faFreeCodeCamp}
      />
      <ContactItem
        name="Email"
        link="mailto:alain@christe.co"
        icon={faEnvelope}
      />
      <ContactItem name="Phone" link="tel:1-312-569-0404" icon={faPhone} />
    </div>
  );
}
