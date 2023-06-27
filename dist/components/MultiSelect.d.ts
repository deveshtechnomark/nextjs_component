import React from "react";
import "form-elements/dist/index.css";
interface MultiSelectProps {
    id: string;
    options: {
        value: string;
        label: string;
    }[];
    onSelect: (selectedValues: string[]) => void;
    label?: string;
    type?: string;
}
declare const MultiSelect: React.FC<MultiSelectProps>;
export { MultiSelect };
