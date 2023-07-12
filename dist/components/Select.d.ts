import React from "react";
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
}
declare const Select: React.FC<SelectProps>;
export { Select };
