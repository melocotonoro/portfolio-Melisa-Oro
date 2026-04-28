import Modal from "@/components/modal/Modal";
import ICONPLAY from "@assets/modal/play.png";
import ICONPLAYPRESS from "@assets/modal/play-clicked.png";
import { useState } from "react";
import type { DataWork } from "../work.types";

interface Props {
  onClick: () => void;
  dataModal?: DataWork;
}

const ModalWork = ({ onClick, dataModal }: Props) => {
  if (!dataModal) return null;

  const { url } = dataModal;
  const [play, setPlay] = useState(false);

  const [isPressed, setIsPressed] = useState(false);

  const handlePressed=()=>{
    setIsPressed((prev)=> !prev);
    setTimeout(() => {
      setPlay(true)
    }, 300);
  }

  return (
    <Modal onClick={onClick}>
      <div className="w-full">
        <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 md:w-10/12 md:h-75 md:m-auto">
          {play ? (
            <iframe
              className="w-full h-full"
              src={url.video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <div
              onClick={handlePressed}
              className="w-full h-full bg-black flex items-center justify-center cursor-pointer "
            >
              <img src={isPressed ? ICONPLAYPRESS : ICONPLAY} className="size-16" alt="icono reproducir" />
            </div>
          )}
        </div>
      </div>

      <div className="w-77 h-44 m-auto flex flex-col justify-evenly md:w-10/12 ">
        <h2 className="text-[22px] font-bold text-text-pink">{url.title}</h2>
        <p className="text-sm text-wrap text-text-gray">{url.summary}</p>
      </div>
    </Modal>
  );
};
export default ModalWork;
