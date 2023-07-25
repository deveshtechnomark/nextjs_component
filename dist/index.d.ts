import React, { InputHTMLAttributes } from "react";
import "./index.css";
interface PasswordProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    validate?: boolean;
    errorMessage?: string;
    disabled?: boolean;
    getValue: (arg1: string) => void;
    hasError?: boolean;
    props?: any;
}
declare const Password: React.FC<PasswordProps>;
export { Password };
