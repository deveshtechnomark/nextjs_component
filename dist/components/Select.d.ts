import React from "react";
import 'next-ts-lib/dist/index.css';
interface Option {
    value: string;
    label: string;
}
interface SelectProps {
    id: string;
    options: Option[];
    onSelect: (value: string) => void;
    type?: string;
    label?: string;
    className?: string;
    search?: boolean;
    required?: boolean;
    defaultValue?: string;
    avatar?: boolean;
    avatarName?: string;
    avatarImgUrl?: string;
    errorMessage?: string;
    hasError?: boolean;
    getError: (arg1: boolean) => void;
}
declare const Select: React.FC<SelectProps>;
export { Select };
