import React from "react";
import "./index.css";
interface TextareaProps {
    label?: string;
    className?: string;
    id?: string;
    name?: string;
    value?: string;
    rows?: string | number;
    required?: boolean;
    validate?: boolean;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    errorMessage?: string;
}
declare const Textarea: React.FC<TextareaProps>;
export { Textarea };
