import ICONCLOSE from "@assets/modal/close.png";
import ICONCLOSEPRESS from "@assets/modal/close-clicked.png";
import { useState } from "react";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const Modal = ({ onClick, children }: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressed=()=>{
    setIsPressed((prev)=> !prev);
    setTimeout(() => {
      onClick();
    }, 300);
  }
  return (
    <div className="fixed inset-0 flex items-center  backdrop-blur-sm animate-fadeIn bg-black/90">
      <div className="w-full h-125 flex flex-col  rounded-2xl font-roboto bg-primary/70 md:w-11/12 md:h-140 md:m-auto lg:max-w-3xl lg:h-150">
        <button onClick={handlePressed} className="self-end p-3">
          <img src={isPressed ? ICONCLOSEPRESS : ICONCLOSE} alt="icono cerrar" className="w-10 lg:size-12" />
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
