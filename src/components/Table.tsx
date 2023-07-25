import React, { ChangeEvent, useState } from "react";
import { CheckBox } from "form-elements";
import "form-elements/dist/index.css";

import SortingIcon from "./icons/SortingIcon";
import ChevronIcon from "./icons/ChevronIcon";

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

const Table: React.FC<TableProps> = (props) => {
  const [filteredData, setFilteredData] = useState<any[]>(props.data);
  const [sortingColumn, setSortingColumn] = useState<string>("");
  const [sortingOrder, setSortingOrder] = useState<string>("asc");
  const [isAllChecked, setIsAllChecked] = useState<boolean[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>([]);

  const toggleRowExpansion = (index: number) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // function for handling select and deselect all
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const updatedArray = filteredData.map((_item, index) => checked);
    setIsAllChecked(updatedArray);
    setIsChecked(checked);
  };

  const handleSort = (column: string, isSortable: boolean) => {
    if (!isSortable) return;

    const sortedData = [...filteredData];

    let newSortingOrder = "asc";
    if (column === sortingColumn && sortingOrder === "asc") {
      newSortingOrder = "desc";
    }

    sortedData.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (typeof valueA === "string" && typeof valueB === "string") {
        return valueA.localeCompare(valueB);
      } else if (typeof valueA === "number" && typeof valueB === "number") {
        return valueA - valueB;
      } else {
        return 0;
      }
    });

    if (newSortingOrder === "desc") {
      sortedData.reverse();
    }

    setFilteredData(sortedData);
    setSortingColumn(column);
    setSortingOrder(newSortingOrder);
  };

  // function for selecting single row
  const handleCheckRow = (index: number, checked: boolean) => {
    const updatedArray = [...isAllChecked];
    updatedArray[index] = checked;
    setIsAllChecked(updatedArray);

    // Check if any of the checkboxes in the rows are unchecked
    const anyUnchecked = updatedArray.some((value) => !value);

    // Update the main checkbox state in the header accordingly
    setIsChecked(!anyUnchecked);
  };

  return (
    <div className={`w-full overflow-x-auto h-screen ${props.className}`}>
      <table className="w-full">
        <thead>
          <tr
            className={`${
              props.sticky
                ? "sticky top-0 z-[1] drop-shadow-md"
                : "border-y border-b-pureBlack border-t-pureBlack"
            } bg-pureWhite h-[48px] w-full`}
          >
            {props.expandable && <th></th>}
            {props.selected && (
              <th className="sm:w-[56px]">
                <CheckBox
                  id="selectAll"
                  checked={isChecked}
                  onChange={handleSelectAll}
                />
              </th>
            )}

            {props.headers.map((header) => (
              <th
                key={header.field}
                className="cursor-pointer text-[16px] sm:text-[14px] font-bold uppercase"
                onClick={() => {
                  handleSort(header.field, header.sort);
                }}
              >
                <span className="flex justify-start items-center pl-[10px]">
                  <div className="flex items-center">
                    {header.heading}
                    {header.sort && (
                      <span
                        className={`ml-2 ${
                          sortingOrder === "asc" ? "" : "rotate-180"
                        }`}
                      >
                        <SortingIcon />
                      </span>
                    )}
                  </div>
                </span>
              </th>
            ))}

            {props.action && (
              <th className="cursor-pointer text-[16px] sm:text-[14px] font-bold uppercase">
                {props.actionHeading ? props.actionHeading : "Actions"}
              </th>
            )}
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item, index) => (
            <React.Fragment key={index}>
              <tr
                className={`h-[56px] cursor-default hover:bg-whiteSmoke ${
                  props.expandable && expandedRows[index]
                    ? "bg-whiteSmoke"
                    : "border-b border-b-lightSilver"
                }`}
              >
                {props.expandable && (
                  <td className="sm:w-[56px]">
                    <button
                      onClick={() => toggleRowExpansion(index)}
                      className={`transition-all duration-300 ${
                        expandedRows[index] && "-rotate-180"
                      }`}
                    >
                      <ChevronIcon />
                    </button>
                  </td>
                )}

                {props.selected && (
                  <td className="sm:w-[56px]">
                    <CheckBox
                      id={index.toString()}
                      checked={isAllChecked[index]}
                      onChange={(e) => handleCheckRow(index, e.target.checked)}
                    />
                  </td>
                )}

                {props.headers.map((header) => (
                  <td
                    key={header.field}
                    className="py-[19px] sm:py-[12px] pl-[10px] sm:text-base font-normal"
                  >
                    <span className="flex justify-start items-center">
                      {typeof item[header.field] === "string" &&
                      item[header.field].startsWith("http") ? (
                        <img
                          src={item[header.field]}
                          alt="Item"
                          className="max-w-[50px] max-h-[50px] rounded"
                        />
                      ) : (
                        item[header.field]
                      )}
                    </span>
                  </td>
                ))}

                {props.action &&
                  props.actions.map((action) => <td key={action}>{action}</td>)}
              </tr>

              {props.expandable && expandedRows[index] && (
                <tr className="p-4">
                  {/* Take a blank heading on expandable icon */}
                  {props.expandable && <th></th>}
                  {/* Tale a blank column when select and expandable both enabled */}
                  {props.selected && <td></td>}

                  {props.headers.map((header) => (
                    <td
                      key={header.field}
                      className="py-[19px] sm:py-[12px] pl-[10px] sm:text-base font-normal"
                    >
                      <span className="flex justify-start items-center">
                        {typeof item[header.field] === "string" &&
                        item[header.field].startsWith("http") ? (
                          <img
                            src={item[header.field]}
                            alt="Item"
                            className="max-w-[50px] max-h-[50px] rounded"
                          />
                        ) : (
                          item[header.field]
                        )}
                      </span>
                    </td>
                  ))}
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
