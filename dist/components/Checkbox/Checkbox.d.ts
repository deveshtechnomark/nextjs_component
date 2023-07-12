import React, { InputHTMLAttributes } from "react";
interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    variant?: "invalid";
    className?: string;
    intermediate?: boolean;
}
declare const CheckBox: ({ id, label, variant, className, intermediate, ...props }: CheckBoxProps) => React.JSX.Element;
export default CheckBox;
