import { Link } from "react-router-dom";
import IMGGITHUB from "@assets/works/github-active.png";
import IMGGITHUBPRES from "@assets/works/github-pressed.png";
import type { ButtonType, InitialPressed } from "../../../work.types";

interface Props {
  github: string;
  onPress: (button: ButtonType) => void;
  isPressed: InitialPressed;
}

const GithubButton = ({ github, onPress, isPressed }: Props) => {
  const isGitDisabled = github === "https://github.com/melocotonoro";

  return (
    <Link
      to={isGitDisabled ? "#" : github}
      target="_blank"
      rel="noopener noreferrer"
      title="GitHub"
      className={`size-10 inline-flex items-center justify-center rounded-full border border-b-white transition duration-300 md:hover:ring-2 md:hover:ring-text-pink/70  ${
        isGitDisabled ? "pointer-events-none opacity-50" : ""
      }`}
      onClick={() => onPress("github")}
    >
      <img
        src={isPressed.github ? IMGGITHUBPRES : IMGGITHUB}
        alt="ir al código"
        className="size-6"
      />
    </Link>
  );
};
export default GithubButton;
