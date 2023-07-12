import React, { CSSProperties } from 'react';
interface BreadcrumbItem {
    label: string;
    url: string;
}
interface BreadcrumbProps {
    items: BreadcrumbItem[];
    variant: string;
    className?: string;
    style?: CSSProperties;
}
declare class Breadcrumb extends React.Component<BreadcrumbProps> {
    render(): React.JSX.Element;
}
export default Breadcrumb;
