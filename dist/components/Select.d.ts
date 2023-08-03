import React from "react";
import "next-ts-lib/dist/index.css";
interface Option {
    value: any;
    label: string;
}
interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    options: Option[];
    type?: string;
    label?: string;
    className?: string;
    search?: boolean;
    validate?: boolean;
    defaultValue?: string;
    value?: any;
    avatar?: boolean;
    avatarName?: string;
    avatarImgUrl?: string;
    errorMessage?: string;
    hasError?: boolean;
    getValue: (value: any, label?: any) => void;
    getError: (arg1: boolean) => void;
    supportingText?: string;
    errorClass?: string;
}
declare const Select: React.FC<SelectProps>;
export { Select };
