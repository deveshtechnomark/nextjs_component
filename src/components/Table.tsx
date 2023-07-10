import React, { useState } from "react";
import SortingIcon from "./icons/SortingIcon.js";

interface TableProps {
  data: any[];
  headers: string[];
  sortable?: boolean;
  sticky?: boolean;
}

const Table: React.FC<TableProps> = (props) => {
  const [filteredData, setFilteredData] = useState<any[]>(props.data);
  const [sortingColumn, setSortingColumn] = useState<string>("");
  const [sortingOrder, setSortingOrder] = useState<string>("asc");

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
    <div className="w-full m-0 p-0 box-border">
      <table className="w-full">
        <thead>
          <tr className={`${props.sticky && "sticky top-0"} bg-pureWhite border border-t-pureBlack border-b-pureBlack h-[48px]`}>
            {props.headers.map((header) => (
              <th
                key={header}
                className="cursor-pointer uppercase text-[16px] text-center font-proxima font-bold"
                onClick={() => { props.sortable && handleSort(header) }}
              >
                <span className="flex justify-center items-center">{header}
                  {sortingColumn === header && (
                    <span className={`ml-2 ${sortingOrder === "asc" ? "" : "rotate-180"}`}><SortingIcon /></span>
                  )}</span>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index} className="h-[56px] border border-b-lightSilver cursor-default hover:bg-whiteSmoke">
              {props.headers.map((header) => (
                <td key={header} className="py-[19px] px-[20px] text-center text-base font-proxima font-normal">
                  <span className="flex justify-center items-center">{typeof item[header] === "string" &&
                    item[header].startsWith("http") ? (
                    <img
                      src={item[header]}
                      alt="Item"
                      className="max-w-[50px] max-h-[50px] rounded"
                    />
                  ) : (
                    item[header]
                  )}</span>
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