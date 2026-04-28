import IMGPLAY from "@assets/works/play-active.png";
import IMGPLAYPRES from "@assets/works/play-pressed.png";
import type { ButtonType, InitialPressed } from "../../../work.types";

interface Props {
  video: string;
  onPress: (button: ButtonType, id: string) => void;
  isPressed: InitialPressed;
  id: string;
}
const YouTubeButton = ({ video, id, onPress, isPressed }: Props) => {
  const isYoutubeDisabled = video === "https://youtube.com";
  return (
    <div
      className={`size-10 inline-flex items-center justify-center rounded-full border border-b-white
  ${isYoutubeDisabled ? "opacity-50 pointer-events-none" : "cursor-pointer transition duration-300  md:hover:ring-2 md:hover:ring-text-pink/70 "}`}
      title="YouTube"
      onClick={() => onPress("youtube", id)}
    >
      <img
        src={isPressed.youtube ? IMGPLAYPRES : IMGPLAY}
        alt="ir a la página"
        className="size-6"
      />
    </div>
  );
};
export default YouTubeButton;
