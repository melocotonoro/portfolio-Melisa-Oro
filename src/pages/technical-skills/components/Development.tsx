import { iconsDev, iconsDev2, iconsDev3 } from "../data/icons";
import IconDesktop from "./IconDesktop";
import IconMobile from "./IconMobile";

const Development = () => {
  const allIconsDev = [...iconsDev, ...iconsDev2, ...iconsDev3];
  return (
    <>
      <div className="h-82 font-medium flex flex-col justify-between md:h-105 lg:h-78">
        <p className="text-sm font-medium md:text-[22px] lg:mb-6">
          Desarrollo Web
        </p>
        <div className="hidden lg:flex lg:w-225 lg:h-62.5 lg:m-auto lg:flex-wrap lg:gap-10 lg:justify-evenly">
          <IconDesktop data={allIconsDev} />
        </div>

        <div className="h-72 text-[11px] flex flex-col justify-around md:h-90 lg:hidden">
          <div className="w-78 h-20 flex justify-evenly gap-1.5 md:w-11/12 md:h-26 md:mx-auto md:mb-5">
            <IconMobile data={iconsDev} />
          </div>

          <div className="w-78 h-20 flex justify-center gap-1.5 md:w-11/12 md:h-26 md:mx-auto md:gap-x-15 md:mb-5">
            <IconMobile data={iconsDev2} />
          </div>

          <div className="w-full h-20 flex justify-evenly gap-x-1.5 md:w-11/12 md:h-26 md:mx-auto">
            <IconMobile data={iconsDev3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Development;
