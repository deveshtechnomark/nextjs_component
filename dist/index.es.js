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

function SortingIcon() {
  return React.createElement("div", null, React.createElement("svg", {
    width: "7",
    height: "10",
    viewBox: "0 0 7 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M3.5 0L6.53109 3H0.468911L3.5 0Z",
    fill: "#333333"
  }), React.createElement("path", {
    d: "M3.5 10L0.468911 7L6.53109 7L3.5 10Z",
    fill: "#6E6D7A"
  })));
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
    className: "w-full m-0 p-0 box-border"
  }, React.createElement("table", {
    className: "w-full"
  }, React.createElement("thead", null, React.createElement("tr", {
    className: "".concat(props.sticky && "sticky top-0", " bg-pureWhite border border-t-pureBlack border-b-pureBlack h-[48px]")
  }, props.headers.map(function (header) {
    return React.createElement("th", {
      key: header,
      className: "cursor-pointer uppercase text-[16px] text-center font-proxima font-bold",
      onClick: function onClick() {
        props.sortable && handleSort(header);
      }
    }, React.createElement("span", {
      className: "flex justify-center items-center"
    }, header, sortingColumn === header && React.createElement("span", {
      className: "ml-2 ".concat(sortingOrder === "asc" ? "" : "rotate-180")
    }, React.createElement(SortingIcon, null))));
  }))), React.createElement("tbody", null, filteredData.map(function (item, index) {
    return React.createElement("tr", {
      key: index,
      className: "h-[56px] border border-b-lightSilver cursor-default hover:bg-whiteSmoke"
    }, props.headers.map(function (header) {
      return React.createElement("td", {
        key: header,
        className: "py-[19px] px-[20px] text-center text-base font-proxima font-normal"
      }, React.createElement("span", {
        className: "flex justify-center items-center"
      }, typeof item[header] === "string" && item[header].startsWith("http") ? React.createElement("img", {
        src: item[header],
        alt: "Item",
        className: "max-w-[50px] max-h-[50px] rounded"
      }) : item[header]));
    }));
  }))));
};

export { Table as default };
//# sourceMappingURL=index.es.js.map
