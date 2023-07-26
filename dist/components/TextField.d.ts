import React, { InputHTMLAttributes } from "react";
interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    type?: string;
    validate?: boolean;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    errorMessage?: string;
    supportingText?: string;
    disabled?: boolean;
    hasError?: boolean;
    minChar?: number;
    noNumeric?: boolean;
    noSpecialChar?: boolean;
    getValue: (arg1: string) => void;
}
declare const TextField: React.FC<TextFieldProps>;
export { TextField };
