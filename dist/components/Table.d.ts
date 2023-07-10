import React from "react";
interface TableProps {
    data: any[];
    headers: string[];
    sortable?: boolean;
    sticky?: boolean;
}
declare const Table: React.FC<TableProps>;
export default Table;
