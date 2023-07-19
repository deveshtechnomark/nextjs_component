import React, { ReactNode, useEffect } from "react";
import Style from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "full";
  closeIcon?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, size }) => {

  if (!isOpen) return null;

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-72";
      case "md":
      default:
        return "w-4/12";
      case "lg":
        return "w-1/2";
      case "full":
        return "w-full";
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center ${Style.modal}`}
      >
        <div className={`my-6 mx-auto ${getSizeClasses()}`}>
          <div className="border-[1px] border-lightSilver rounded-lg flex flex-col bg-pureWhite outline-none focus:outline-none">
            {children}
          </div>
        </div>
      </div>
      <div className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-none`} />
    </>
  );
};

export default Modal;
