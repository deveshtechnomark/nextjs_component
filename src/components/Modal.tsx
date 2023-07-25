import React, { ReactNode, useEffect, useRef } from "react";
import Style from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "extra-lg" | "full";
  closeIcon?: boolean;
  width?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  size,
  width,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  if (!isOpen) return null;

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-75";
      case "md":
        return "w-[500px]";
      case "lg":
        return "w-[800px]";
      case "extra-lg":
        return "w-[1140px]";
      case "full":
        return "w-full";
      default:
        return `w-[${width}] || w-[500px]`;
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center ${Style.modal}`}
      >
        <div className={`my-6 mx-auto ${getSizeClasses()} ${width}`}>
          <div className="border-[1px] border-lightSilver rounded-lg flex flex-col bg-pureWhite outline-none focus:outline-none">
            {children}
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-[1px]`}
      />
    </>
  );
};

export default Modal;
