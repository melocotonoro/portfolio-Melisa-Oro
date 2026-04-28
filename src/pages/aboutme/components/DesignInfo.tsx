import POLIGONBLUR from "@assets/figures/Polygon-blur.svg";

const DesignInfo = () => {
  return (
    <div className="h-56 pt-12.5 flex flex-col justify-between animate-text-bounce-In-Left md:mb-20">
      <div className="text-3xl font-eras_itc mb-3 text-text-orange md:text-5xl md:w-110 md:h-37 lg:w-127.5 lg:text-[64px]">
        <p>Soy Diseñadora</p>
        <p>Ux/Ui</p>
      </div>
      <div className="w-80 h-32 text-text-gray relative lg:w-115 lg:h-36.75">
        <img
          src={POLIGONBLUR}
          alt="Elemento decorativo blur"
          className="absolute left-0 lg:w-20 lg:h-16"
        />
        <p className="p-4 font-roboto font-medium md:px-4 md:w-110 md:text-[22px] lg:w-115 lg:text-[24px] lg:ml-10 lg:mt-4">
          Empatizar y comprender la demanda del usuario como punto de partida
          para idear y diseñar elementos que satisfaga su necesidad.
        </p>
      </div>
    </div>
  );
};
export default DesignInfo;
