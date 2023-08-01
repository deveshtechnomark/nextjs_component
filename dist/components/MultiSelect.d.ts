import React from "react";
import 'next-ts-lib/dist/index.css';
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
    className?: string;
    required?: boolean;
    defaultValue?: string;
    avatar?: boolean;
    avatarName?: string;
    avatarImgUrl?: string;
}
declare const MultiSelect: React.FC<MultiSelectProps>;
export { MultiSelect };
