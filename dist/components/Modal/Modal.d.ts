import React, { ReactNode } from "react";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    size?: "sm" | "md" | "lg" | "full";
    closeIcon?: boolean;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
