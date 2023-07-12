import React from "react";
interface TableProps {
    data: any[];
    headers: string[];
    sortable?: boolean;
    sticky?: boolean;
    selected?: boolean;
    action?: boolean;
    actions?: any[];
}
declare const Table: React.FC<TableProps>;
export default Table;
