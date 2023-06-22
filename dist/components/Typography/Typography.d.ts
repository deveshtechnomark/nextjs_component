import React, { CSSProperties, ReactNode } from "react";
import "./Typography.css";
interface TypographyProps {
    style?: CSSProperties;
    className?: string;
    type?: string;
    children?: ReactNode;
}
export default class Typography extends React.Component<TypographyProps> {
    render(): React.JSX.Element;
}
export {};
