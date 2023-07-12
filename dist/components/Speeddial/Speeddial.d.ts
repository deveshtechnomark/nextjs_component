import React from "react";
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
