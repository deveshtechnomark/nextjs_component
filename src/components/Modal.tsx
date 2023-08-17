import React, { ReactNode } from "react";
import Style from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "extra-lg" | "full";
  closeIcon?: boolean;
  width?: string; // Allow custom width to be passed in props
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  size,
  width // Receive the custom width from props
}) => {
  if (!isOpen) return null;

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-[300px]";
      case "lg":
        return "w-[800px]";
      case "extra-lg":
        return "w-[1140px]";
      case "full":
        return "w-full";
      case "md":
        return width ? `w-[${width}]` : "w-[500px]"; // Use custom width if provided, else default
      default:
        return "w-[500px]";
    }
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 backdrop-blur-[1px] z-50`}
        onClick={onClose}
      >
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center ${Style.modal}`}
        >
          <div
            className={`my-6 mx-auto ${getSizeClasses()}`}
            onClick={handleModalClick}
          >
            <div className="border-[1px] border-lightSilver rounded-lg flex flex-col bg-pureWhite outline-none focus:outline-none">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
