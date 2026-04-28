import { Link } from "react-router-dom";
import IMGBHANCE from "@assets/works/behance-active.png";
import IMGBHANCEPRES from "@assets/works/behance-pressed.png";
import type { ButtonType, InitialPressed } from "../../../work.types";

interface Props {
  behance: string;
  onPress: (button: ButtonType) => void;
  isPressed: InitialPressed;
}

const BehanceButton = ({ behance, onPress, isPressed }: Props) => {
  const isBehanceDisabled = behance === "https://www.behance.net/";

  return (
    <Link
      to={isBehanceDisabled ? "#" : behance}
      target="_blank"
      rel="noopener noreferrer"
      title="Behance"
      className={`size-10 inline-flex items-center justify-center rounded-full border border-b-white ${
        isBehanceDisabled
          ? "pointer-events-none opacity-50"
          : " transition duration-300  md:hover:ring-2 md:hover:ring-text-pink/70"
      }`}
      onClick={() => onPress("behance")}
    >
      <img
        src={isPressed.behance ? IMGBHANCEPRES : IMGBHANCE}
        alt="ir a belance"
        className="size-6"
      />
    </Link>
  );
};
export default BehanceButton;
