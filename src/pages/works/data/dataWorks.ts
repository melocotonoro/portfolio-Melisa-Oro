import IMGECOTECH from "@assets/works/ecotech.png";
import IMGARTEKUALI from "@assets/works/artekuali.png";
import IMGAPPCOMENSALES from "@assets/works/appcomensales.jpg";
import IMGAPPRAPPI from "@assets/works/apprappi.jpg";
import IMGWISH from "@assets/works/wish-him.png";
import IMGMIDAS from "@assets/works/midas-data-studio.png";
import IMGSALUDABLE from "@assets/works/proyecto-saludable.png";
import IMGKERMESSE from "@assets/works/kermesse-del-libro.png";
import IMGTATETI from "@assets/works/tateti.png";
import IMGPROFUSA from "@assets/works/profusa.jpg";
import type { DataWork } from "../work.types";

const dataWork: DataWork[] = [
  {
    id: "work-1",
    role: "Ux/Ui",
    work: "Diseño app",
    background: IMGECOTECH,
    namePage: "EcoTech",
    url: {
      behance: "https://www.behance.net/gallery/247845431/Caso-de-Estudio-No-Country-E-commerce-Eco-Tech",
      video: "https://www.youtube.com/embed/Z31Ui-VC2q8?si=o3LJ4_iFDVsh_c1F",
      figma:
        "https://www.figma.com/design/4EIb4XmGCEj3hPeCUPkfZc/E-commerce-eco-electr%C3%B3nica?node-id=129-77&t=dsaTEaq59EIdznuN-1 ",
      title: "Diseño sitio web EcoTech",
      summary:
        "Diseño  de sitio web que fomenta la compra de electrónica sustentable, ayudando a visibilizar las marcas que aportan a la concientización de la reducción de desechos y a liderar la transición hacia una tecnología más verde.",
    },
  },
  {
    id: "work-2",
    role: "Ux/Ui",
    work: "Diseño app",
    background: IMGARTEKUALI,
    namePage: "Arte Kuali",
    url: {
      github: "https://github.com/melocotonoro",
      video: "https://www.youtube.com/embed/CII7daH4_cM?si=dXDde7Rg5FQeGOWx",
      behance:
        "https://www.behance.net/gallery/194700773/Diseno-Web-Arte-Kuali",
      title: "Diseño sitio web Arte Kuali",
      summary:
        "Plataforma web creada para una empresa familiar dedicada a la comercialización de juguetes de madera, siguiento la metodología Montessori.",
    },
  },
  {
    id: "work-3",
    role: "Ux/Ui",
    work: "Diseño app",
    background: IMGAPPCOMENSALES,
    namePage: "Comen & Sales",
    url: {
      github: "https://github.com/melocotonoro",
      video: "https://www.youtube.com/embed/-m0A_IhI0C8?si=R78Ey6K6HX-AE5fj",
      behance: "https://www.behance.net/gallery/116376211/DISEXO-UXU",
      title: "Diseño app Comen & Sales",
      summary:
        "Maximizando la eficiencia en el sector gastronómico, eliminando las esperas innecesarias, la app permite gestionar reservas en tiempo real y protege la rentabilidad del local, asegurando que ninguna mesa quede vacía ante una cancelación.",
    },
  },
  {
    id: "work-4",
    role: "Ux/Ui",
    work: "Rediseño app",
    background: IMGAPPRAPPI,
    namePage: "Rediseño Rappi",
    url: {
      figma:
        "https://www.figma.com/design/BJNknAJivMizeRZ7eqzNqS/rappi?node-id=0-1&t=hE0zxsV4joXjjxux-1",
      video: "https://www.youtube.com/embed/vE33X7EUSzM?si=Ex2niYNwDjxhorTA",
      behance: "https://www.behance.net/gallery/127935855/REDISENO-RAPPI-APP",
      title: "Rediseño app Rappi",
      summary:
        "Rediseño de la app: Optimizando la experiencia del usuario mediante un análisis de cumplimiento y la creación de un valor agregado distintivo en el mercado logístico.",
    },
  },
  {
    id: "work-5",
    role: "<Dev/>",
    work: "Diseño & Dev",
    background: IMGWISH,
    namePage: "Wish Him",
    url: {
      github: "https://github.com/melocotonoro/Wish-Him-Ecommerce",
      video: "https://www.youtube.com/embed/hW91dZfrhuU?si=oFp8j3OTXPslopnB",
      behance: "https://www.behance.net/",
      title: "Diseño E-commerce Wish Him",
      summary:
        "Encontrar el regalo ideal para un hombre suele ser un desafío debido a la falta de opciones especializadas. Este e-commerce exclusivo resuelve esta fragmentación del mercado, ofreciendo una experiencia de compra enfocada 100% en el público masculino.",
    },
  },
  {
    id: "work-6",
    role: "<Dev/>",
    work: "Diseño & Dev",
    background: IMGMIDAS,
    namePage: "Data Midas",
    url: {
      github: "https://github.com/melocotonoro/Data-Midas",
      video: "https://www.youtube.com/embed/5qshNQ6hMd4?si=g3B4Vr8W3q-vq8Ef",
      behance: "https://www.behance.net/",
      title: "Diseño sitio web Data Midas",
      summary:
        "Diseño y desarrollo de una plataforma web B2B especializada en la comercialización de servicios de Data Science. El proyecto se ejecutó mediante un flujo de trabajo colaborativo, en conjunto con un desarrollador Frontend.",
    },
  },
  {
    id: "work-7",
    role: "<Dev/>",
    work: "Diseño & Dev",
    background: IMGSALUDABLE,
    namePage: "Proyectos Saludables",
    url: {
      github: "https://github.com/melocotonoro/proyectoSaludable",
      video: "https://www.youtube.com/embed/YL4-RjGTBD0?si=WO7SciU8Lg12KJUj",
      behance: "https://www.behance.net/",
      title: "Diseño sitio web Saludable",
      summary:
        "Plataforma interactiva de nutrición que combina planes de alimentación con herramientas de cálculo de calorías personalizadas. Desarrollada con JavaScript para una experiencia de usuario fluida.",
    },
  },
  {
    id: "work-8",
    role: "<Dev/>",
    work: "Diseño & Dev",
    background: IMGKERMESSE,
    namePage: "La Kermesse",
    url: {
      github: "https://github.com/melocotonoro/LaKermessedellibro-git",
      video: "https://www.youtube.com/embed/Wv3SA6QRiok?si=tQ7JGX8dA3nWoarV",
      behance: "https://www.behance.net/",
      title: "Diseño sitio web La Kermesse",
      summary:
        "Kermesse es un sitio interactivo diseñado para fomentar el intercambio de literatura. A través de un sistema de 'match' inteligente, los usuarios pueden concretar canjes directos o si el intercambio no es recíproco, el usuario acumula puntaje para otro canje.",
    },
  },
  {
    id: "work-9",
    role: "<Dev/>",
    work: "Diseño & Dev",
    background: IMGTATETI,
    namePage: "Juego Ta Te Ti",

    url: {
      github: "https://github.com/melocotonoro/TaTeTi",
      video: "https://www.youtube.com/embed/wHYMmZkNaiE?si=KBzogEJGGzzCJ4oH",
      behance: "https://www.behance.net/",
      title: "Diseño de juego Ta Te Ti",
      summary:
        "Diseño y desarrollo de una versión interactiva del clásico Ta-Te-Ti. Este proyecto se centra en la gestión de turnos alternos entre dos jugadores, validación de condiciones de victoria en tiempo real y una interfaz  responsiva que asegura una experiencia fluida.",
    },
  },
  {
    id: "work-10",
    role: "Diseño",
    work: "Diseño de Marca",
    background: IMGPROFUSA,
    namePage: "Marca Profusa",

    url: {
      github: "https://github.com/melocotonoro",
      video: "https://youtube.com",
      behance: "https://www.behance.net/gallery/109950561/Profusa-Lenceria",
      title: "Diseño de marca Profusa",
      summary:
        "Desarrollo de identidad visual. El diseño se articula a través de una paleta sofisticada en tonos bordó, representando el poder y la elegancia, contrastada con la delicadeza tonos en rosas, damascos y duraznos. El logo, de trazo lineal en dorado, sintetiza la figura femenina con minimalismo.",
    },
  },
];

export { dataWork };
