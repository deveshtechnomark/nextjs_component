import React from "react";
interface ScrollSpyProps {
    targetIds: string[];
    titles: string[];
    position?: "horizontal" | "verticalDrawer" | "vertical";
    icons?: React.ReactNode[];
}
export declare const ScrollSpy: React.FC<ScrollSpyProps>;
export {};
