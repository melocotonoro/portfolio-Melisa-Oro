//Diseño
import ICONWHIMSICAL from "@assets/soft-skills/Whimsical.png";
import ICONPHOTOSHOP from "@assets/soft-skills/Photoshop.png";
import ICONILUSTRATOR from "@assets/soft-skills/Ilustrator.png";
import ICONFIGMA from "@assets/soft-skills/Figma.png";
import ICONTRELLO from "@assets/soft-skills/Trello.png";
import ICONOPTIMAL from "@assets/soft-skills/Optimal.png";
import ICONHOTJAR from "@assets/soft-skills/Hotjar.png";
import ICON8N from "@assets/soft-skills/N8n.png";

//Desarrollo Web
import ICONHTML from "@assets/soft-skills/Html.png";
import ICONCSS from "@assets/soft-skills/Css.png";
import ICONJAVASCRIPT from "@assets/soft-skills/Javascript.png";
import ICONJQUERY from "@assets/soft-skills/JQuery.png";
import ICONREACT from "@assets/soft-skills/ReactJs.png";
import ICONBOOTSTRAP from "@assets/soft-skills/Bootstrap.png";
import ICONSASS from "@assets/soft-skills/Sass.png";
import ICONVSC from "@assets/soft-skills/VSC.png";
import ICONGITHUB from "@assets/soft-skills/GitHub.png";
import ICONFIRESTORE from "@assets/soft-skills/Firestore.png";
import ICONEXPRESS from "@assets/soft-skills/ExpressJs.png";
import ICONJAVA from "@assets/soft-skills/Java.png";
import ICONNODE from "@assets/soft-skills/NodeJs.png";
import ICONMYSQL from "@assets/soft-skills/Mysql.png";

export interface Icons {
  id: string;
  name: string;
  url: string;
}

const iconsDesign: Icons[] = [
  {
    id: "desing-1",
    name: "Whimsical",
    url: ICONWHIMSICAL,
  },
  {
    id: "desing-2",
    name: "Photoshop",
    url: ICONPHOTOSHOP,
  },
  {
    id: "desing-3",
    name: "Ilustrator",
    url: ICONILUSTRATOR,
  },
  {
    id: "desing-4",
    name: "Figma",
    url: ICONFIGMA,
  },
  {
    id: "desing-5",
    name: "Trello",
    url: ICONTRELLO,
  },
  {
    id: "desing-6",
    name: "Optimal",
    url: ICONOPTIMAL,
  },
  {
    id: "desing-7",
    name: "HotJar",
    url: ICONHOTJAR,
  },
  {
    id: "desing-8",
    name: "N8N",
    url: ICON8N,
  },
];

const iconsDev: Icons[] = [
  {
    id: "dev-1",
    name: "Html",
    url: ICONHTML,
  },
  {
    id: "dev-2",
    name: "Css",
    url: ICONCSS,
  },
  {
    id: "dev-3",
    name: "JavaScript",
    url: ICONJAVASCRIPT,
  },
  {
    id: "dev-4",
    name: "JQuery",
    url: ICONJQUERY,
  },
  {
    id: "dev-5",
    name: "React",
    url: ICONREACT,
  },
];

const iconsDev2: Icons[] = [
  {
    id: "dev-6",
    name: "Bootstrap",
    url: ICONBOOTSTRAP,
  },
  {
    id: "dev-7",
    name: "Sass",
    url: ICONSASS,
  },
  {
    id: "dev-8",
    name: "VSC",
    url: ICONVSC,
  },
  {
    id: "dev-9",
    name: "Github",
    url: ICONGITHUB,
  },
];

const iconsDev3: Icons[] = [
  {
    id: "dev2-10",
    name: "Firestore",
    url: ICONFIRESTORE,
  },
  {
    id: "dev2-11",
    name: "Express Js",
    url: ICONEXPRESS,
  },
  {
    id: "dev2-12",
    name: "Java",
    url: ICONJAVA,
  },
  {
    id: "dev2-13",
    name: "Node Js",
    url: ICONNODE,
  },
  {
    id: "dev2-14",
    name: "MySQL",
    url: ICONMYSQL,
  },
];
export { iconsDesign, iconsDev, iconsDev2, iconsDev3 };
