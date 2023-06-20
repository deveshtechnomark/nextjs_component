import React, { ChangeEvent, FocusEvent } from "react";
import './index.module.scss';
interface ExampleComponentProps {
    type: string;
    placeholder?: string;
    size?: string;
    label: string;
    className?: string;
    min?: string;
    max?: string;
    id?: string;
    name?: string;
    value?: string;
    hidden?: boolean;
    minLength?: number;
    maxLength?: number;
    accept?: string;
    required?: boolean;
    disabled?: boolean;
    variant?: string;
    validation?: boolean;
    onChange?(name: string, value: string): void;
}
interface ExampleComponentState {
    isOpen: boolean;
    getValue: string;
    error: string;
    inputStyle: object;
    isFocused: boolean;
}
export default class ExampleComponent extends React.Component<ExampleComponentProps, ExampleComponentState> {
    constructor(props: ExampleComponentProps);
    handleFocus(): void;
    handleChange(event: ChangeEvent<HTMLInputElement>): void;
    handleValidation(event: FocusEvent<HTMLInputElement>): void;
    render(): React.JSX.Element;
}
export {};
