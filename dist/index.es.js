import React, { useState } from 'react';
import { CheckBox } from 'form-elements';
import 'form-elements/dist/index.css';

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


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

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

function ChevronIcon() {
  return React.createElement("div", null, React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("mask", {
    id: "mask0_1008_120778"
    // style="mask-type:alpha"
    ,
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "28",
    height: "28"
  }, React.createElement("rect", {
    width: "28",
    height: "28",
    fill: "#D9D9D9"
  })), React.createElement("g", {
    mask: "url(#mask0_1008_120778)"
  }, React.createElement("path", {
    d: "M7.92383 10.7094C8.05905 10.5742 8.22001 10.5066 8.40671 10.5066C8.59341 10.5066 8.75437 10.5742 8.8896 10.7094L14.0052 15.825L19.1377 10.6924C19.266 10.5641 19.423 10.5 19.6089 10.5C19.7947 10.5 19.9574 10.5698 20.097 10.7094C20.2322 10.8446 20.2998 11.0056 20.2998 11.1923C20.2998 11.379 20.2322 11.5399 20.097 11.6752L14.4357 17.326C14.372 17.3896 14.3048 17.4346 14.2342 17.4608C14.1635 17.4869 14.0872 17.5 14.0052 17.5C13.9232 17.5 13.8468 17.4869 13.7762 17.4608C13.7055 17.4346 13.6383 17.3896 13.5746 17.326L7.90681 11.6581C7.77856 11.5299 7.71443 11.3746 7.71443 11.1923C7.71443 11.0099 7.78423 10.849 7.92383 10.7094Z",
    fill: "#6E6D7A"
  }))));
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
  var _d = useState([]),
    isAllChecked = _d[0],
    setIsAllChecked = _d[1];
  var _e = useState(false),
    isChecked = _e[0],
    setIsChecked = _e[1];
  var _f = useState([]),
    expandedRows = _f[0],
    setExpandedRows = _f[1]; // State to track expanded rows
  var toggleRowExpansion = function toggleRowExpansion(index) {
    setExpandedRows(function (prevState) {
      var _a;
      return __assign(__assign({}, prevState), (_a = {}, _a[index] = !prevState[index], _a));
    });
  };
  // function for handling select and deselect all
  var handleSelectAll = function handleSelectAll(e) {
    var checked = e.target.checked;
    var updatedArray = filteredData.map(function (_item, index) {
      return checked;
    });
    setIsAllChecked(updatedArray);
    setIsChecked(checked);
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
  // function for selecting single row
  var handleCheckRow = function handleCheckRow(index, checked) {
    var updatedArray = __spreadArray([], isAllChecked, true);
    updatedArray[index] = checked;
    setIsAllChecked(updatedArray);
  };
  return React.createElement("div", {
    className: "w-full overflow-x-auto"
  }, React.createElement("table", {
    className: "w-full"
  }, React.createElement("thead", null, React.createElement("tr", {
    className: "".concat(props.sticky ? "sticky top-0 z-10 drop-shadow" : "border-y border-b-pureBlack border-t-pureBlack", " bg-pureWhite h-[48px]")
  }, props.expandable && React.createElement("th", null), props.selected && React.createElement("th", {
    className: "sm:w-[56px]"
  }, React.createElement(CheckBox, {
    id: "selectAll",
    checked: isChecked,
    onChange: handleSelectAll
  })), props.headers.map(function (header) {
    return React.createElement("th", {
      key: header,
      className: "cursor-pointer text-[16px] sm:text-[14px] font-bold uppercase",
      onClick: function onClick() {
        props.sortable && handleSort(header);
      }
    }, React.createElement("span", {
      className: "flex justify-center items-center"
    }, React.createElement("div", {
      className: "flex items-center"
    }, header, props.sortable && React.createElement("span", {
      className: "ml-2 ".concat(sortingOrder === "asc" ? "" : "rotate-180")
    }, React.createElement(SortingIcon, null)))));
  }), props.action && React.createElement("th", {
    className: "cursor-pointer text-[16px] sm:text-[14px] font-bold uppercase"
  }, props.actionHeading ? props.actionHeading : "Actions"))), React.createElement("tbody", null, filteredData.map(function (item, index) {
    return React.createElement(React.Fragment, {
      key: index
    }, React.createElement("tr", {
      className: "h-[56px] cursor-default hover:bg-whiteSmoke ".concat(props.expandable && expandedRows[index] ? "bg-whiteSmoke" : "border-b border-b-lightSilver")
    }, props.expandable && React.createElement("td", {
      className: "sm:w-[56px]"
    }, React.createElement("button", {
      onClick: function onClick() {
        return toggleRowExpansion(index);
      },
      className: "transition-all duration-300 ".concat(expandedRows[index] && "-rotate-180")
    }, React.createElement(ChevronIcon, null))), props.selected && React.createElement("td", {
      className: "sm:w-[56px]"
    }, React.createElement(CheckBox, {
      id: index.toString(),
      checked: isAllChecked[index],
      onChange: function onChange(e) {
        return handleCheckRow(index, e.target.checked);
      }
    })), props.headers.map(function (header) {
      return React.createElement("td", {
        key: header,
        className: "py-[19px] sm:py-[12px] px-[20px] sm:text-base font-normal"
      }, React.createElement("span", {
        className: "flex justify-center items-center"
      }, typeof item[header] === "string" && item[header].startsWith("http") ? React.createElement("img", {
        src: item[header],
        alt: "Item",
        className: "max-w-[50px] max-h-[50px] rounded"
      }) : item[header]));
    }), props.action && props.actions.map(function (action) {
      return React.createElement("td", {
        key: action
      }, action);
    })), props.expandable && expandedRows[index] && React.createElement("tr", {
      className: "p-4"
    }, props.expandable && React.createElement("th", null), props.headers.map(function (header) {
      return React.createElement("td", {
        key: header,
        className: "py-[19px] sm:py-[12px] px-[20px] sm:text-base font-normal"
      }, React.createElement("span", {
        className: "flex justify-center items-center"
      }, typeof item[header] === "string" && item[header].startsWith("http") ? React.createElement("img", {
        src: item[header],
        alt: "Item",
        className: "max-w-[50px] max-h-[50px] rounded"
      }) : item[header]));
    })));
  }))));
};

export { Table as default };
//# sourceMappingURL=index.es.js.map
