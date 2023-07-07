import React from "react";
import "./index.css";
import "select-dropdown/dist/index.css";
interface TelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    required?: boolean;
    validate?: boolean;
    errorMessage?: string;
    supportingText?: string;
    disabled?: boolean;
    getValue: (arg1: string) => void;
}
declare const Tel: React.FC<TelInputProps>;
export { Tel };
