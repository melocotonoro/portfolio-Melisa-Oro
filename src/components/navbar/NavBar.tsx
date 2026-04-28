import { NavLink } from "react-router-dom";
import ICONSOBREMI from "@assets/nav/Icon-SobreMi.svg";
import ICONHABILIDADESTEC from "@assets/nav/Icon-HabilidadesTecnicas.svg";
import ICONCURSOS from "@assets/nav/Icon-Cursos.svg";
import ICONTRABAJOS from "@assets/nav/Icon-Portafolio.svg";
import ICONHABILIDADESBLA from "@assets/nav/Icon-HabilidadesBlandas.svg";
import ICONCERTIFICADOS from "@assets/nav/Icon-Certificados.svg";
import ICONCONTACTO from "@assets/nav/Icon-Contacto.svg";

const Navbar = () => {
  const tabs = [
    { id: 1, title: "Sobre mí", to: "/", url: ICONSOBREMI },
    {
      id: 2,
      title: "Habilidades técnicas",

      to: "/habilidades_tecnicas",
      url: ICONHABILIDADESTEC,
    },
    { id: 3, title: "Estudios", to: "/estudios", url: ICONCURSOS },
    { id: 4, title: "Trabajos realizados", to: "/trabajos", url: ICONTRABAJOS },
    {
      id: 5,
      title: "Habilidades blandas",
      to: "/habilidades_blandas",
      url: ICONHABILIDADESBLA,
    },
    {
      id: 6,
      title: "Certificados",
      to: "/certificados",
      url: ICONCERTIFICADOS,
    },
    { id: 7, title: "Encuentrame", to: "/contacto", url: ICONCONTACTO },
  ];
  return (
    <header className="w-82.5 h-8 m-auto md:w-196.5 md:h-18 lg:w-310 lg:h-20">
      <nav>
        <ul className="flex border-2 border-t-0 border-r-0 border-l-0 border-text-orange">
          {tabs.map((tab) => (
            <li
              key={`icon-${tab.id}`}
              className="relative w-12 h-8 md:w-28.5 md:h-18 lg:w-44.5 lg:h-20"
              title={tab.title}
            >
              <NavLink to={tab.to}>
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute inset-0 bottom-0.5 bg-orange-400 [clip-path:polygon(0_0,70%_0%,100%_100%,0%_100%)] translate-y-0.5" />
                    )}
                    <figure
                      className={`
                         absolute
                        transition-all duration-300
                         ${isActive ? "inset-0.5 bg-active translate-y-1" : "inset-0 bg-inactive md:hover:bg-purple-hover "}
                         flex items-center
                         md:pl-3 [clip-path:polygon(0_0,70%_0%,100%_100%,0%_100%)]
                       `}
                    >
                      <img
                        src={tab.url}
                        alt={`icon-${tab.title}`}
                        className="w-6 ml-2 md:w-13 md:h-12 lg:size-20 lg:ml-6"
                      />
                    </figure>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
