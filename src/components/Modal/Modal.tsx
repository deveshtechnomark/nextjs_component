import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "full";
  closeIcon?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  size
}) => {
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
    <div className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className={`relative my-6 mx-auto ${getSizeClasses()}`}>
        <div className="border-2 border-lightSilver rounded-lg relative flex flex-col bg-pureWhite outline-none focus:outline-none">
          {children}
        </div>
      </div>
    </div>
    </>
  );
};

export default Modal;