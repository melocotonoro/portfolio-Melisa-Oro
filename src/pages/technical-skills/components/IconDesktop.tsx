import type { Icons } from "../data/icons";

interface Props {
  data: Icons[];
}

const IconDesktop = ({data}:Props) => {
  return (
    <>
      {data.map(({ id, name, url }) => (
        <figure className="w-20 h-26 flex flex-col items-center group" key={id}>
          <figcaption className="text-[16px] font-semibold group-hover:drop-shadow-orange transition-all duration-300">
            {name}
          </figcaption>
          <img
            src={url}
            alt={`icon-${name}`}
            loading="lazy"
            className="w-16.25 h-18.25 group-hover:drop-shadow-pink transition-all duration-300"
          />
        </figure>
      ))}
    </>
  );
};

export default IconDesktop;
