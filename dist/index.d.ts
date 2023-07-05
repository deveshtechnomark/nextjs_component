import React from "react";
import 'typography-ts/dist/index.css';
import "./styles.css";
interface InputMaskProps {
    type: string;
    setPrefix: string;
    className: string;
    setDelimiter?: string[];
    splitLengths?: number[];
    US: boolean;
    label?: string;
}
declare const InputMask: React.FC<InputMaskProps>;
export default InputMask;
