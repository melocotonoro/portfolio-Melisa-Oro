import type { Certificates } from "../data/dataCertificates";
import { useEffect, useState } from "react";
import { getAnimationDelay } from "../hooks/useCardAnimation";

interface Props {
  data: Certificates;
  onClick: (id: string) => void;
  index: number;
  total: number;
}

const CardCertificate = ({ data, onClick, index, total }: Props) => {
  const { name, url, buttom, id } = data;
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    const update = () => {
      let cols: 2 | 3 | 4;

      if (window.innerWidth < 768) {
        cols = 2; // móvil
      } else if (window.innerWidth < 1024) {
        cols = 3; // tablet
      } else {
        cols = 4; // desktop
      }
      setDelay(getAnimationDelay(index, total, cols));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [index, total]);

  return (
    <div
      className="w-36 h-34 md:w-59 md:h-46.5 animate-revealLeftToRight opacity-0"
      style={{ animationDelay: `${delay}s` }}
    >
      <figure className="h-20 relative md:w-57-5 md:h-30">
        <img
          src={url}
          alt={name}
          className="w-full h-20 mb-3 rounded-2xl md:h-full"
        />
        <figcaption className="font-medium tracking-wide md:text-[14px]">
          {name}
        </figcaption>
        <div
          onClick={() => onClick(id)}
          style={{ backgroundImage: `url(${buttom})` }}
          className="size-10 absolute bottom-1 right-1 opacity-0 transition-all duration-300 animate-fadeIcon md:hover:drop-shadow-orange md:hover:ring md:hover:ring-text-orange md:rounded-full"
          title="Maximizar"
        />
      </figure>
    </div>
  );
};

export default CardCertificate;
