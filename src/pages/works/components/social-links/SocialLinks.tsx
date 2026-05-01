import { useState } from "react";
import type { ButtonType, InitialPressed, WorkUrls } from "../../work.types";
import FigmaButton from "./buttons/FigmaButton";
import GithubButton from "./buttons/GithubButton";
import BehanceButton from "./buttons/BehanceButton";
import YouTubeButton from "./buttons/YouTubeButton";

interface Props {
  url: WorkUrls;
  work: string;
  id: string;
  onClick: (id: string) => void;
}

const SocialLinks = ({ id, work, url, onClick }: Props) => {
  const { github, behance, figma, video } = url;
  const initialPressed: InitialPressed = {
    github: false,
    figma: false,
    behance: false,
    youtube: false,
  };

  const [isPressed, setIsPressed] = useState(initialPressed);

  const handlePressed = (button: ButtonType, id?: string) => {
    if (isPressed[button]) return;

    setIsPressed((prev) => ({
      ...prev,
      [button]: true,
    }));

    setTimeout(() => {
      if (button === "youtube" && id) {
        onClick(id);
      }

      setIsPressed((prev) => ({
        ...prev,
        [button]: false,
      }));
    }, 700);
  };

  return (
    <div>
      <div className="in-w-44 h-25 px-2 flex flex-col items-center justify-evenly absolute bottom-0 left-0 bg-text-orange rounded-tr-2xl rounded-bl-4xl inset-shadow-sm inset-shadow-orange-blur-top shadow-sm shadow-orange-blur-bottom">
        <p className="text-[22px] font-medium">{work}</p>

        <div className="w-38 h-11 flex justify-between">
          {github ? (
            <GithubButton
              github={github}
              onPress={handlePressed}
              isPressed={isPressed}
            />
          ) : figma ? (
            <FigmaButton
              figma={figma}
              onPress={handlePressed}
              isPressed={isPressed}
            />
          ) : null}

          <YouTubeButton
            video={video}
            id={id}
            onPress={handlePressed}
            isPressed={isPressed}
          />

          {behance ? (
            <BehanceButton
              behance={behance}
              onPress={handlePressed}
              isPressed={isPressed}
            />
          ) : figma ? (
            <FigmaButton
              figma={figma}
              onPress={handlePressed}
              isPressed={isPressed}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default SocialLinks;
