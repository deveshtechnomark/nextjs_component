import React from "react";
import 'next-ts-lib/dist/index.css';
import "form-elements/dist/index.css";
interface MultiSelectChipProps {
    options: {
        value: string;
        label: string;
    }[];
    defaultValue?: string[];
    onSelect: (selected: string[]) => void;
    id?: string;
    label?: string;
    type?: string;
    className?: string;
    required?: boolean;
    avatar?: boolean;
    avatarName?: string;
    avatarImgUrl?: string;
}
declare const MultiSelectChip: React.FC<MultiSelectChipProps>;
export { MultiSelectChip };
