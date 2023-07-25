import React from "react";
import "form-elements/dist/index.css";
interface TableHeader {
    heading: string;
    field: string;
    sort: boolean;
}
interface TableProps {
    className?: any;
    data: any[];
    headers: TableHeader[];
    sortable?: boolean;
    sticky?: boolean;
    selected?: boolean;
    action?: boolean;
    actions?: any[];
    actionHeading?: string | React.ReactNode;
    expandable?: boolean;
}
declare const Table: React.FC<TableProps>;
export default Table;
