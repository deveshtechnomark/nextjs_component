import React from "react";
interface TelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    validate?: boolean;
    errorMessage?: string;
    supportingText?: string;
    disabled?: boolean;
    countryCode?: boolean;
    getValue: (arg1: string) => void;
    hasError?: boolean;
}
declare const Tel: React.FC<TelInputProps>;
export { Tel };
