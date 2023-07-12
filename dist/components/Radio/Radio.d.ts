import React, { InputHTMLAttributes } from "react";
interface RadioPropsTypes extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    variant?: string;
}
declare const Radio: ({ id, label, variant, ...props }: RadioPropsTypes) => React.JSX.Element;
export default Radio;
