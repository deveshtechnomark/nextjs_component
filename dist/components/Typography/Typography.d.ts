import React, { CSSProperties } from "react";
interface TypographyProps {
    style?: CSSProperties;
    className?: string;
    type?: string;
    children?: React.ReactNode;
}
export default class Typography extends React.Component<TypographyProps> {
    constructor(props: TypographyProps);
    render(): React.JSX.Element;
}
export {};
