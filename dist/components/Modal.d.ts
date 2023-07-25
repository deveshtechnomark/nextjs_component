import React, { ReactNode } from "react";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    size?: "sm" | "md" | "lg" | "extra-lg" | "full";
    closeIcon?: boolean;
    width?: string;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
