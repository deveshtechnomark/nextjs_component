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
}
declare const Select: React.FC<SelectProps>;
export { Select };
