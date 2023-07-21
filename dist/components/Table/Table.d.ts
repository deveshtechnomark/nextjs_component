import React from "react";
interface TableProps {
    className: any;
    data: any[];
    headers: string[];
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
