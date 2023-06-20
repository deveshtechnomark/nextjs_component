import React from "react";
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
