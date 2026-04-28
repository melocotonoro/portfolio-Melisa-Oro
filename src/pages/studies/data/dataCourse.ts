// import RAMIFICACION2 from "@/assets/course-img/giphy.gif";
import RAMIFICACION2 from "@/assets/course/ramificaciones-2.gif";
import RAMIFICACION3 from "@/assets/course/ramificaciones-3.gif";

interface Courses {
  title: string;
  institution: string;
}

export interface DataCourses {
  year: number;
  courses: Courses[];
  img?: string;
}

const dataCoursesCurrent: DataCourses[] = [
  {
    year: 2020,
    courses: [
      { title: "Photoshop", institution: "Coderhouse" },
      { title: "Illustrator", institution: "Coderhouse" },
    ],
    img: RAMIFICACION2,
  },
  {
    year: 2021,
    courses: [
      { title: "Diseño UX/UI", institution: "Coderhouse" },
      { title: "Desarrollo Web", institution: "Coderhouse" },
      { title: "Diseño UX/UI Avanzado", institution: "Coderhouse" },
    ],
    img: RAMIFICACION3,
  },
  {
    year: 2022,
    courses: [
      { title: "JavaScript", institution: "Coderhouse" },
      {
        title: "Fundamentos de la programación",
        institution: "Egg Educación",
      },
      { title: "React", institution: "Coderhouse" },
    ],
    img: RAMIFICACION3,
  },
  {
    year: 2024,
    courses: [
      { title: "Front-End Back-End", institution: "Codo a Codo" },
      { title: "MySql", institution: "Pildoras Informáticas" },
      { title: "Java-MySql", institution: "Mujeres Informáticas" },
    ],
    img: RAMIFICACION3,
  },
  {
    year: 2026,
    courses: [
      {
        title: "IA y automatización de flujos de trabajo",
        institution: "Campus UNC",
      },
      {
        title: "Inglés It",
        institution: "En proceso",
      },
    ],
    img: RAMIFICACION2,
  },
];

const dataTwoCourses: DataCourses[] = [
  {
    year: 2020,
    courses: [
      { title: "Photoshop", institution: "Coderhouse" },
      { title: "Illustrator", institution: "Coderhouse" },
    ],
    img: RAMIFICACION2,
  },
];

const dataThreeCourses: DataCourses[] = [
  {
    year: 2021,
    courses: [
      { title: "Diseño UX/UI", institution: "Coderhouse" },
      { title: "Desarrollo Web", institution: "Coderhouse" },
      { title: "Diseño UX/UI Avanzado", institution: "Coderhouse" },
    ],
    img: RAMIFICACION3,
  },
  {
    year: 2022,
    courses: [
      { title: "JavaScript", institution: "Coderhouse" },
      {
        title: "Fundamentos de la programación",
        institution: "Egg Educación",
      },
      { title: "React", institution: "Coderhouse" },
    ],
    img: RAMIFICACION3,
  },
  {
    year: 2024,
    courses: [
      { title: "Front-End Back-End", institution: "Codo a Codo" },
      { title: "MySql", institution: "Pildoras informáticas" },
      { title: "Java-MySql", institution: "Mujeres informáticas" },
    ],
    img: RAMIFICACION3,
  },
];

export { dataCoursesCurrent, dataTwoCourses, dataThreeCourses };
