import React, { ReactNode } from "react";
interface TooltipProps {
    content?: ReactNode;
    position: "top" | "bottom" | "left" | "right";
    children: ReactNode;
}
declare const Tooltip: React.FC<TooltipProps>;
export { Tooltip };
