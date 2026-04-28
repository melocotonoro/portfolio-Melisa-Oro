import type { Icons } from "../data/icons";

interface Props {
  data: Icons[];
}
const IconMobile = ({ data }: Props) => {
  return (
    <>
      {data.map(({ id, name, url }) => (
        <figure
          className="w-14 h-20 flex flex-col items-center md:w-20 md:h-26 group"
          key={id}
        >
          <figcaption className="md:text-[16px] md:group-hover:drop-shadow-orange transition-all duration-300">
            {name}
          </figcaption>
          <img
            src={url}
            alt={`icon-${name}`}
            loading="lazy"
            className="w-11.5 h-13.25 md:w-16 md:h-18 md:group-hover:drop-shadow-pink transition-all duration-300"
          />
        </figure>
      ))}
    </>
  );
};

export default IconMobile;
