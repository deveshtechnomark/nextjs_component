import React from "react";
interface RangeSelectorProps {
    variant?: string;
    minRange?: number;
    maxRange?: number;
    gap?: number;
    number?: boolean;
    getValue: (arg1: number) => void;
}
declare const Range: React.FC<RangeSelectorProps>;
export { Range };
