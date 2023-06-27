import React, { HTMLAttributes } from "react";
interface CheckBoxPropTypes {
    id: string;
    label?: string;
    variant?: string;
    variant2?: string;
}
declare const CheckBox: ({ variant, id, variant2, label, ...props }: CheckBoxPropTypes & HTMLAttributes<HTMLInputElement>) => React.JSX.Element;
export default CheckBox;
