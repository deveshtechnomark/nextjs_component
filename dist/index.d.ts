import React, { InputHTMLAttributes } from "react";
interface PasswordProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    validate?: boolean;
    errorMessage?: string;
    disabled?: boolean;
    getValue: (arg1: string) => void;
    getError: (arg1: boolean) => void;
    hasError?: boolean;
    props?: any;
    minChar?: number;
    maxChar?: number;
}
declare const Password: React.FC<PasswordProps>;
export { Password };
