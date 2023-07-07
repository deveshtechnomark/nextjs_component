import React, { useState } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var Table = function Table(props) {
  var _a = useState(props.data),
    filteredData = _a[0],
    setFilteredData = _a[1];
  var _b = useState(""),
    sortingColumn = _b[0],
    setSortingColumn = _b[1];
  var _c = useState("asc"),
    sortingOrder = _c[0],
    setSortingOrder = _c[1];
  var handleSort = function handleSort(column) {
    var sortedData = __spreadArray([], filteredData, true);
    var newSortingOrder = "asc";
    if (column === sortingColumn && sortingOrder === "asc") {
      newSortingOrder = "desc";
    }
    sortedData.sort(function (a, b) {
      var valueA = a[column];
      var valueB = b[column];
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
  return React.createElement("div", {
    className: "w-full"
  }, React.createElement("table", {
    className: "w-full"
  }, React.createElement("thead", null, React.createElement("tr", {
    className: "bg-pureWhite border border-t-pureBlack border-b-pureBlack h-[48px]"
  }, props.headers.map(function (header) {
    return React.createElement("th", {
      key: header,
      className: "cursor-pointer uppercase text-[16px] text-center font-proxima font-bold",
      onClick: function onClick() {
        return handleSort(header);
      }
    }, header, sortingColumn === header && React.createElement("span", null, sortingOrder === "asc" ? "▲" : "▼"));
  }))), React.createElement("tbody", null, filteredData.map(function (item, index) {
    return React.createElement("tr", {
      key: index,
      className: "h-[56px] border border-b-lightSilver cursor-default hover:bg-whiteSmoke"
    }, props.headers.map(function (header) {
      return React.createElement("td", {
        key: header,
        className: "py-[19px] px-[20px] text-center text-base font-proxima font-normal"
      }, typeof item[header] === "string" && item[header].startsWith("http") ? React.createElement("img", {
        src: item[header],
        alt: "Item",
        className: "max-w-[50px] max-h-[50px] rounded"
      }) : item[header]);
    }));
  }))));
};

export { Table as default };
//# sourceMappingURL=index.es.js.map
