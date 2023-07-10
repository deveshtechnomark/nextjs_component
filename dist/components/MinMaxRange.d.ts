import React from "react";
interface MinMaxRangeProps {
    minValue?: number;
    maxValue?: number;
    minRange: number;
    maxRange: number;
    number?: boolean;
}
declare const MinMaxRange: React.FC<MinMaxRangeProps>;
export { MinMaxRange };
