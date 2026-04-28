import { useState } from "react";
import SocialLinks from "./social-links/SocialLinks";
import type { DataWork } from "../work.types";

interface Props {
  data: DataWork;
  onClick: (id: string) => void;
}

const CardWork = ({ data, onClick }: Props) => {
  const { namePage, role, work, background, url, id } = data;
  const [isOpacity, setIsOpacity] = useState(false);

  const getStyleByRole = () => {
    switch (role) {
      case "Ux/Ui":
        return "inset-shadow-pink-blur-top shadow-sm shadow-pink-blur-bottom bg-text-pink";
      case "<Dev/>":
        return "inset-shadow-purple-blur-top shadow-sm shadow-purple-blur-bottom bg-inactive";
      case "Diseño":
        return "inset-shadow-blue-blur-top shadow-sm shadow-blue-blur-bottom bg-blue-card";
      default:
        return "";
    }
  };

  const styleCard = getStyleByRole();

  const handleIsOpacity = () => {
    setIsOpacity(!isOpacity);
  };

  return (
    <div className="w-58 h-68 m-auto mb-5 relative rounded-tr-2xl rounded-bl-4xl text-text-gray bg-card-bg overflow-hidden">
      <div
        title={namePage}
        style={{
          backgroundImage: `url(${background})`,
        }}
        className={`w-full h-68 rounded-tr-2xl rounded-bl-4xl duration-300 bg-contain bg-center ease-in transition-all ${isOpacity ? "opacity-100 scale-110" : "opacity-30 scale-100"} md:opacity-30 scale-100 md:hover:opacity-100 md:hover:scale-110 lg:h-40 lg:bg-cover lg:my-10 `}
        onClick={handleIsOpacity}
      ></div>
      <div
        title={namePage}
        className={`w-20 h-18 text-center  flex items-center justify-center absolute top-0 right-0 rounded-tr-2xl rounded-bl-4xl inset-shadow-sm ${styleCard}`}
      >
        <p className="text-xl font-bold">{role}</p>
      </div>

      <SocialLinks id={id} work={work} url={url} onClick={onClick} />
    </div>
  );
};

export default CardWork;
