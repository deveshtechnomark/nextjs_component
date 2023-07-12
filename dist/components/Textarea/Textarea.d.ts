import React from "react";
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    className?: string;
    required?: boolean;
    validate?: boolean;
    errorMessage?: string;
    supportingText?: string;
    disabled?: boolean;
}
declare const Textarea: React.FC<TextareaProps>;
export { Textarea };
