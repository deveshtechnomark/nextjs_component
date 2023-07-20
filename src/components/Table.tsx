import React, { ChangeEvent, useState } from "react";
import { CheckBox } from "form-elements";
import "form-elements/dist/index.css";

import SortingIcon from "./icons/SortingIcon";
import ChevronIcon from "./icons/ChevronIcon";

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

const Table: React.FC<TableProps> = (props) => {
  const [filteredData, setFilteredData] = useState<any[]>(props.data);
  const [sortingColumn, setSortingColumn] = useState<string>("");
  const [sortingOrder, setSortingOrder] = useState<string>("asc");
  const [isAllChecked, setIsAllChecked] = useState<boolean[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>([]); // State to track expanded rows

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

  const handleSort = (column: string) => {
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
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className={`w-full ${props.className}`}>
        <thead>
          <tr
            className={`${props.sticky
              ? "sticky top-0 z-10 drop-shadow"
              : "border-y border-b-pureBlack border-t-pureBlack"
              } bg-pureWhite h-[48px]`}
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
                key={header}
                className="cursor-pointer text-[16px] sm:text-[14px] font-bold uppercase"
                onClick={() => {
                  props.sortable && handleSort(header);
                }}
              >
                <span className="flex justify-center items-center">
                  <div className="flex items-center">
                    {header}
                    {props.sortable && (
                      <span
                        className={`ml-2 ${sortingOrder === "asc" ? "" : "rotate-180"
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
                className={`h-[56px] cursor-default hover:bg-whiteSmoke ${props.expandable && expandedRows[index] ? "bg-whiteSmoke" : "border-b border-b-lightSilver"
                  }`}
              >
                {props.expandable && (
                  <td className="sm:w-[56px]">
                    <button
                      onClick={() => toggleRowExpansion(index)}
                      className={`transition-all duration-300 ${expandedRows[index] && "-rotate-180"}`}
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
                    key={header}
                    className="py-[19px] sm:py-[12px] px-[20px] sm:text-base font-normal"
                  >
                    <span className="flex justify-center items-center">
                      {typeof item[header] === "string" &&
                        item[header].startsWith("http") ? (
                        <img
                          src={item[header]}
                          alt="Item"
                          className="max-w-[50px] max-h-[50px] rounded"
                        />
                      ) : (
                        item[header]
                      )}
                    </span>
                  </td>
                ))}

                {props.action &&
                  props.actions.map((action) => (
                    <td key={action}>
                      {action}
                    </td>
                  ))}
              </tr>

              {props.expandable && expandedRows[index] && (
                <tr className="p-4">
                  {props.expandable && <th></th>}

                  {props.headers.map((header) => (
                    <td
                      key={header}
                      className="py-[19px] sm:py-[12px] px-[20px] sm:text-base font-normal"
                    >
                      <span className="flex justify-center items-center">
                        {typeof item[header] === "string" &&
                          item[header].startsWith("http") ? (
                          <img
                            src={item[header]}
                            alt="Item"
                            className="max-w-[50px] max-h-[50px] rounded"
                          />
                        ) : (
                          item[header]
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
