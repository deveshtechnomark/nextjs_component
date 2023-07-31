import React from "react";
import "./index.css";
import "select-dropdown/dist/index.css";
interface TelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    validate?: boolean;
    errorMessage?: string;
    supportingText?: string;
    disabled?: boolean;
    countryCode?: boolean;
    getValue: (arg1: string) => void;
    getError: (arg1: boolean) => void;
    hasError?: boolean;
}
declare const Tel: React.FC<TelInputProps>;
export { Tel };
