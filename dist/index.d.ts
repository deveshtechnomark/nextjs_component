import React from "react";
import "tooltip/dist/index.css";
import "./index.css";
interface ListProps {
    icon: React.ReactNode;
    action: () => void;
    hoverText: string;
}
interface Props {
    open?: boolean;
    large?: boolean;
    listItems: ListProps[];
}
declare const SpeedDial: React.FC<Props>;
export { SpeedDial };
