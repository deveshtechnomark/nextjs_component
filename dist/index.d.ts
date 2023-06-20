import React, { ReactNode } from "react";
import "./index.css";
interface TooltipProps {
    text: string;
    position?: "top" | "bottom" | "left" | "right";
    children: ReactNode;
}
declare const Tooltip: React.FC<TooltipProps>;
export { Tooltip };
