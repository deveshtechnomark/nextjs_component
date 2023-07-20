import React, { InputHTMLAttributes } from "react";
interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    className?: string;
    validate?: boolean;
    hasError?: boolean;
    variant?: "invalid";
    intermediate?: boolean;
}
declare const CheckBox: ({ id, label, variant, validate, hasError, className, intermediate, ...props }: CheckBoxProps) => React.JSX.Element;
export default CheckBox;
