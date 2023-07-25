import React, { ReactNode } from "react";
import "./index.css";
interface TooltipProps {
    content?: ReactNode;
    position: "top" | "bottom" | "left" | "right";
    children: ReactNode;
    className?: string;
}
declare const Tooltip: React.FC<TooltipProps>;
export { Tooltip };
