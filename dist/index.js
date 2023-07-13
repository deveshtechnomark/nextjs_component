'use strict';

var React = require('react');
var formElements = require('form-elements');
require('form-elements/dist/index.css');

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
  var _a = React.useState(props.data),
    filteredData = _a[0],
    setFilteredData = _a[1];
  var _b = React.useState(""),
    sortingColumn = _b[0],
    setSortingColumn = _b[1];
  var _c = React.useState("asc"),
    sortingOrder = _c[0],
    setSortingOrder = _c[1];
  var _d = React.useState([]),
    isAllChecked = _d[0],
    setIsAllChecked = _d[1];
  var _e = React.useState(false),
    isChecked = _e[0],
    setIsChecked = _e[1];
  // function for handling select and deselect all
  var handleSelectAll = function handleSelectAll(e) {
    var checked = e.target.checked;
    var updatedArray = filteredData.map(function (_item, index) {
      return checked;
    });
    setIsAllChecked(updatedArray);
    setIsChecked(checked);
  };
  // function for selecting single row
  var handleCheckRow = function handleCheckRow(index, checked) {
    var updatedArray = __spreadArray([], isAllChecked, true);
    updatedArray[index] = checked;
    setIsAllChecked(updatedArray);
  };
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
    className: "w-full overflow-x-auto"
  }, React.createElement("table", {
    className: "w-full"
  }, React.createElement("thead", null, React.createElement("tr", {
    className: "".concat(props.sticky ? "sticky top-0 z-10 drop-shadow" : "border-y border-b-pureBlack border-t-pureBlack", " bg-pureWhite h-[48px]")
  }, props.selected && React.createElement("th", {
    className: "sm:w-[56px]"
  }, React.createElement(formElements.CheckBox, {
    id: "selectAll",
    checked: isChecked,
    onChange: handleSelectAll
  })), props.headers.map(function (header) {
    return React.createElement("th", {
      key: header,
      className: "cursor-pointer text-[16px] sm:text-[14px] font-bold text-center uppercase",
      onClick: function onClick() {
        props.sortable && handleSort(header);
      }
    }, React.createElement("span", {
      className: "flex justify-center items-center"
    }, header, sortingColumn === header && React.createElement("span", {
      className: "ml-2 ".concat(sortingOrder === "asc" ? "" : "rotate-180")
    }, React.createElement(SortingIcon, null))));
  }), props.action && React.createElement("th", {
    className: "cursor-pointer text-[16px] sm:text-[14px] font-bold text-center"
  }, "Actions"))), React.createElement("tbody", null, filteredData.map(function (item, index) {
    return React.createElement("tr", {
      key: index,
      className: "h-[56px] border-b border-b-lightSilver cursor-default hover:bg-whiteSmoke"
    }, props.selected && React.createElement("td", {
      className: "sm:w-[56px]"
    }, React.createElement(formElements.CheckBox, {
      id: index.toString(),
      checked: isAllChecked[index],
      onChange: function onChange(e) {
        return handleCheckRow(index, e.target.checked);
      }
    })), props.headers.map(function (header) {
      return React.createElement("td", {
        key: header,
        className: "py-[19px] sm:py-[12px] px-[20px] sm:text-base text-center font-normal"
      }, React.createElement("span", {
        className: "flex justify-center items-center"
      }, typeof item[header] === "string" && item[header].startsWith("http") ? React.createElement("img", {
        src: item[header],
        alt: "Item",
        className: "max-w-[50px] max-h-[50px] rounded"
      }) : item[header]));
    }), props.action && props.actions.map(function (action) {
      return React.createElement("td", {
        key: action,
        className: "text-center"
      }, action);
    }));
  }))));
};

module.exports = Table;
//# sourceMappingURL=index.js.map
