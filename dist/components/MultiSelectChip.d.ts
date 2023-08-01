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
    errorMessage?: string;
    hasError?: boolean;
    getValue: (value: any) => void;
    getError: (arg1: boolean) => void;
    supportingText?: string;
    errorClass?: string;
    validate?: boolean;
}
declare const MultiSelectChip: React.FC<MultiSelectChipProps>;
export { MultiSelectChip };
