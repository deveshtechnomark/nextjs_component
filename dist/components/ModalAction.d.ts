import React, { ReactNode } from "react";
import 'typography-ts/dist/index.css';
interface ModalActionProps {
    children: ReactNode;
    position?: "start" | "center" | "end";
}
declare const ModalAction: React.FC<ModalActionProps>;
export default ModalAction;
