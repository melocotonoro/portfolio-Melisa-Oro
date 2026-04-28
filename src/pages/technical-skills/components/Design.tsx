import { iconsDesign } from "../data/icons";

const Design = () => {
  return (
    <div className="h-57 font-medium flex flex-col justify-between md:h-72 md:mb-10 lg:mb-0 lg:h-48">
      <p className="text-sm md:text-[22px] lg:mb-6">Diseño UX/UI</p>
      <div className="h-46 flex flex-wrap justify-evenly gap-x-6 text-[11px] md:w-3/4 md:gap-x-20 md:gap-y-7 md:mx-auto md:h-57 lg:w-303">
        {iconsDesign.map(({ id, name, url }) => (
          <figure
            className="w-14 h-20 flex flex-col items-center md:w-20 md:h-26 group lg:w-20 lg:h-26.25"
            key={id}
          >
            <figcaption className="md:text-[16px] md:group-hover:drop-shadow-orange transition-all duration-300">
              {name}
            </figcaption>
            <img
              src={url}
              alt={`icon-${name}`}
              className="w-11.5 h-13.25 md:w-16 md:h-18 md:group-hover:drop-shadow-pink lg:w-16.25 lg:h-18.25 transition-all duration-300"
            />
          </figure>
        ))}
      </div>
    </div>
  );
};
export default Design;
