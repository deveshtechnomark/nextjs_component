import React, { ReactNode } from "react";
interface ModalActionProps {
    children: ReactNode;
    position?: "start" | "center" | "end";
}
declare const ModalAction: React.FC<ModalActionProps>;
export default ModalAction;
