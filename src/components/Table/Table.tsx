import React, { useState } from "react";
import CheckBox from "../Checkbox/Checkbox";
import SortingIcon from "./icons/SortingIcon.js";

interface TableProps {
  data: any[];
  headers: string[];
  sortable?: boolean;
  sticky?: boolean;
  selected?: boolean;
  action?: boolean;
  actions?: any[];
  actionHeading?: string | React.ReactNode;
}

const Table: React.FC<TableProps> = (props) => {
  const [filteredData, setFilteredData] = useState<any[]>(props.data);
  const [sortingColumn, setSortingColumn] = useState<string>("");
  const [sortingOrder, setSortingOrder] = useState<string>("asc");
  const [isAllChecked, setIsAllChecked] = useState<boolean[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  // function for handling select and deselect all
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const updatedArray = filteredData.map((_item, index) => checked);
    setIsAllChecked(updatedArray);
    setIsChecked(checked);
  };

  // function for selecting single row
  const handleCheckRow = (index: number, checked: boolean) => {
    const updatedArray = [...isAllChecked];
    updatedArray[index] = checked;
    setIsAllChecked(updatedArray);
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

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr
            className={`${
              props.sticky
                ? "sticky top-0 z-10 drop-shadow"
                : "border-y border-b-pureBlack border-t-pureBlack"
            } bg-pureWhite h-[48px]`}
          >
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
                className="cursor-pointer text-[16px] sm:text-[14px] font-bold text-center uppercase"
                onClick={() => {
                  props.sortable && handleSort(header);
                }}
              >
                <span className="flex justify-center items-center">
                  {header}

                  {sortingColumn === header && (
                    <span
                      className={`ml-2 ${
                        sortingOrder === "asc" ? "" : "rotate-180"
                      }`}
                    >
                      <SortingIcon />
                    </span>
                  )}
                </span>
              </th>
            ))}

            {props.action && (
              <th className="cursor-pointer text-[16px] sm:text-[14px] font-bold text-center uppercase">
                {props.actionHeading ? props.actionHeading : "Actions"}
              </th>
            )}
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item, index) => (
            <tr
              key={index}
              className="h-[56px] border-b border-b-lightSilver cursor-default hover:bg-whiteSmoke"
            >
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
                  className="py-[19px] sm:py-[12px] px-[20px] sm:text-base text-center font-normal"
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
                  <td key={action} className="text-center">
                    {action}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;