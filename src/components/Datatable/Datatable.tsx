import React, { useRef, useState } from "react";
import ChevronRight from "./icons/ChevronRight";
import ChevronDown from "./icons/ChevronDown";
import ChevronUp from "./icons/ChevronUp";

interface DataTableProps {
    columns: any[];
    data: any[];
    stickyHeader?: any;
    hoverEffect?: any;
    headerInvisible?: any;
}

const DataTable = ({
    columns,
    data,
    stickyHeader,
    hoverEffect,
    headerInvisible,
}: DataTableProps) => {
    const tableRef = useRef<HTMLTableElement>(null);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "" });
    const [expandedRows, setExpandedRows] = useState(new Set());

    const handleSort = (columnKey: any) => {
        let direction = "asc";
        if (sortConfig.key === columnKey && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key: columnKey, direction });
    };

    const handleRowToggle = (rowIndex: any) => {
        const isRowExpanded = expandedRows.has(rowIndex);
        const newExpandedRows = new Set(expandedRows);

        if (isRowExpanded) {
            newExpandedRows.delete(rowIndex);
        } else {
            newExpandedRows.add(rowIndex);
        }

        setExpandedRows(newExpandedRows);
    };

    const sortedData = React.useMemo(() => {
        if (!sortConfig.key) return data;

        const sorted = [...data].sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            if (typeof aValue === "string" && typeof bValue === "string") {
                return sortConfig.direction === "asc"
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue);
            } else if (typeof aValue === "number" && typeof bValue === "number") {
                return sortConfig.direction === "asc"
                    ? aValue - bValue
                    : bValue - aValue;
            } else {
                // Handle other data types here if needed
                return 0;
            }
        });

        return sorted;
    }, [data, sortConfig]);

    return (
        <div className="h-full overflow-auto">
            <table className="w-full">
                <thead
                    className={`text-left border-t border-b border-t-[#ccc] border-b-[#ccc] top-0 z-[1] ${stickyHeader ? "bg-[#f2f2f2] sticky" : "bg-none static"
                        } ${headerInvisible ? "hidden" : ""}`}
                >
                    <tr>
                        {expandedRows && <th className="w-12"></th>}
                        {columns?.map((column) => (
                            <th
                                className={`font-bold p-2 ${column.sortable ? "cursor-pointer" : "cursor-default"
                                    }`}
                                key={column.key}
                                onClick={() => column.sortable && handleSort(column.accessor)}
                            >
                                {column.sortable ? (
                                    <span className="flex items-center gap-1 ml-[5px]">
                                        {column.header}
                                        {sortConfig.key === column.accessor &&
                                            (sortConfig.direction === "asc" ? (
                                                <ChevronUp style={{ height: "0.7em" }} />
                                            ) : (
                                                <ChevronDown style={{ height: "0.7em" }} />
                                            ))}
                                    </span>
                                ) : (
                                    column.header
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData?.map((row, rowIndex) => (
                        <React.Fragment key={rowIndex}>
                            <tr
                                className={`cursor-pointer ${hoverEffect ? "hover:bg-[#f2f2f2]" : ""
                                    }`}
                            >
                                {expandedRows && (
                                    <td
                                        className="pl-2 border-b border-b-[#ccc]"
                                        onClick={() => handleRowToggle(rowIndex)}
                                    >
                                        {expandedRows.has(rowIndex) ? (
                                            <ChevronDown style={{}} />
                                        ) : (
                                            <ChevronRight />
                                        )}
                                    </td>
                                )}
                                {columns?.map((column, columnIndex) => (
                                    <td
                                        className="p-2 border-b border-b-[#ccc] whitespace-nowrap overflow-hidden text-ellipsis"
                                        key={columnIndex}
                                    >
                                        {row[column.accessor]}
                                    </td>
                                ))}
                            </tr>
                            {expandedRows.has(rowIndex) && (
                                <tr>
                                    <td className="p-2" colSpan={columns.length + 1}>
                                        {row.details ? (
                                            row.details
                                        ) : (
                                            <div className="m-3">No data to display</div>
                                        )}
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;