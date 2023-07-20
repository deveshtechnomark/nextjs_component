import React from "react";
import "form-elements/dist/index.css";
interface TableProps {
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
