import React from "react";
import "./styles.css";
interface InputMaskProps {
    type: string;
    setPrefix: string;
    className: string;
    setDelimiter?: string[];
    splitLengths?: number[];
    US: boolean;
    id: string;
    label?: string;
}
declare const InputMask: React.FC<InputMaskProps>;
export default InputMask;
