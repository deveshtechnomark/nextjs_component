import React from "react";
import "./index.css";
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    className?: string;
    validate?: boolean;
    errorMessage?: string;
    supportingText?: string;
    disabled?: boolean;
    getValue: (arg1: string) => void;
    getError: (arg1: boolean) => void;
    hasError?: boolean;
    minChar?: number;
    maxChar?: number;
}
declare const Textarea: React.FC<TextareaProps>;
export { Textarea };
