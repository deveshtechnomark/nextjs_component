import React from "react";
interface MinMaxRangeProps {
    variant?: string;
    minValue: number;
    maxValue: number;
    minRange: number;
    maxRange: number;
    number?: boolean;
    gap?: number;
    getValue: (arg1: number, arg2: number) => void;
}
declare const MinMaxRange: React.FC<MinMaxRangeProps>;
export { MinMaxRange };
