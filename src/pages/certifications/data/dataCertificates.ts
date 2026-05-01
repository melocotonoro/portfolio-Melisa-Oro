import IMGPHOTOSHOP from "@assets/certificates/Photoshop-Ilustrator.png";
import IMGDISUX from "@assets/certificates/Diseño-UX-UI.png";
import IMGDESWEB from "@assets/certificates/Desarrollo-Web.png";
import IMGDISUXAV from "@assets/certificates/Diseño-UX-UI-Avanzado.png";
import IMGJAVASCRIPT from "@assets/certificates/Javascript.png";
import IMGREACT from "@assets/certificates/React.png";
import IMGFUNPRO from "@assets/certificates/Fundamentos-programación.jpg";
import IMGCODOJAVASCRIPTNODE from "@assets/certificates/CodoAcodo.jpg";
import IMGPROGJAVA from "@assets/certificates/Inovadoras-Digitales-Java.jpeg";
import IMGIAAUTOMA from "@assets/certificates/IA-Automatizacion.jpg";
import IMGBUTTON from "@assets/certificates/Mobile-Module-Button.png";

export interface Certificates {
  id: string;
  name: string;
  url: string;
  buttom: string;
}

export const dataCertificates: Certificates[] = [
  {
    id: "certificates-1",
    name: "Photoshop e Ilustrator",
    url: IMGPHOTOSHOP,
    buttom: IMGBUTTON,
  },
  {
    id: "certificates-2",
    name: "Diseño UX/UI",
    url: IMGDISUX,
    buttom: IMGBUTTON,
  },
  {
    id: "certificates-3",
    name: "Desarrollo Web",
    url: IMGDESWEB,
    buttom: IMGBUTTON,
  },
  {
    id: "certificates-4",
    name: "Diseño UX/UI Avanzado",
    url: IMGDISUXAV,
    buttom: IMGBUTTON,
  },
  {
    id: "certificates-5",
    name: "JavaScript",
    url: IMGJAVASCRIPT,
    buttom: IMGBUTTON,
  },
  {
    id: "certificates-6",
    name: "React-Js",
    url: IMGREACT,
    buttom: IMGBUTTON,
  },
  {
    id: "certificates-7",
    name: "Fundamentos de la Programación",
    url: IMGFUNPRO,
    buttom: IMGBUTTON,
  },
  {
    id: "certificates-8",
    name: "Codo a Codo 4.0 JavaScript/Node Js",
    url: IMGCODOJAVASCRIPTNODE,
    buttom: IMGBUTTON,
  },
  {
    id: "certificates-9",
    name: "Programación Inicial: De cero a Java",
    url: IMGPROGJAVA,
    buttom: IMGBUTTON,
  },
  {
    id: "certificates-10",
    name: "IA y automatización de flujos de trabajo",
    url: IMGIAAUTOMA,
    buttom: IMGBUTTON,
  },
];
