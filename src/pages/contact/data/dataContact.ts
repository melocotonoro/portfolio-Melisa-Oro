import ICONCEL from "@assets/contact/Icon-Celular.png";
import ICONEMAIL from "@assets/contact/Icon-Email.png";
import ICONLINKEDIN from "@assets/contact/Icon-Linkedin.png";
import ICONGITHUB from "@assets/contact/Icon-Github.png";
import ICONBEHANCE from "@assets/contact/Icon-Behance.png";

export interface Contact {
  id: string;
  name: string;
  url: string;
  info?: string;
  link?: string;
}

export const dataContact: Contact[] = [
  {
    id: "1",
    name: "Contacto",
    url: ICONCEL,
    info: "+54 9 0351 153476526",
  },
  {
    id: "2",
    name: "Correo",
    url: ICONEMAIL,
    info: "melisaoro@gmail.com",
  },
  {
    id: "3",
    name: "LinkedIn",
    url: ICONLINKEDIN,
    link: "https://www.linkedin.com/in/melisa-s-oro",
  },
  {
    id: "4",
    name: "Github",
    url: ICONGITHUB,
    link: "https://github.com/melocotonoro",
  },
  {
    id: "5",
    name: "Behance",
    url: ICONBEHANCE,
    link: "https://www.behance.net/melisaoro",
  },
];
