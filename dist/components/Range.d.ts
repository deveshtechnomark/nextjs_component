import React from "react";
import "./index.css";
interface RangeSelectorProps {
    dot?: boolean;
    minValue?: number;
    maxValue?: number;
    number?: boolean;
}
declare const Range: React.FC<RangeSelectorProps>;
export { Range };
