import IMGFIGMA from "@assets/works/figma-active.png";
import IMGFIGMAPRES from "@assets/works/figma-pressed.png";
import { Link } from "react-router-dom";
import type { ButtonType, InitialPressed } from "../../../work.types";

interface Props {
  figma: string;
  onPress: (button: ButtonType) => void;
  isPressed: InitialPressed;
}

const FigmaButton = ({ figma, onPress, isPressed }: Props) => {
  return (
    <Link
      to={figma}
      target="_blank"
      rel="noopener noreferrer"
      title="Figma"
      className="size-10 inline-flex items-center justify-center rounded-full border border-b-white transition duration-300 md:hover:ring-2 md:hover:ring-text-pink/70 "
      onClick={() => onPress("figma")}
    >
      <img
        src={isPressed.figma ? IMGFIGMAPRES : IMGFIGMA}
        alt="ir al figma"
        className="size-6"
      />
    </Link>
  );
};
export default FigmaButton;
