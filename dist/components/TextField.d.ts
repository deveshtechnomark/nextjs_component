import React from "react";
interface TextFieldProps {
    label?: string;
    className?: string;
    id?: string;
    name?: string;
    value?: string;
    type?: string;
    required?: boolean;
    validate?: boolean;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    errorMessage?: string;
    supportingText?: string;
    disabled?: boolean;
}
declare const TextField: React.FC<TextFieldProps>;
export { TextField };
