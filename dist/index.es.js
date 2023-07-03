import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { CheckBox } from 'form-elements';
import 'form-elements/dist/index.css';

function ChevronDown() {
  return React.createElement("div", null, React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
  })));
}

function UserIcon() {
  return React.createElement("div", null, React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"
  }), React.createElement("path", {
    d: "M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"
  })));
}

var Select = function Select(_a) {
  var id = _a.id,
    options = _a.options,
    onSelect = _a.onSelect,
    type = _a.type,
    label = _a.label;
  var _b = useState(""),
    inputValue = _b[0],
    setInputValue = _b[1];
  var _c = useState(false),
    open = _c[0],
    setOpen = _c[1];
  var selectRef = useRef(null);
  useEffect(function () {
    window.addEventListener("click", handleOutsideClick);
    return function () {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  var handleOutsideClick = function handleOutsideClick(event) {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  var handleToggleOpen = function handleToggleOpen() {
    setOpen(function (prevOpen) {
      return !prevOpen;
    });
  };
  var handleInputChange = function handleInputChange(e) {
    var inputValue = e.target.value.toLowerCase();
    setInputValue(inputValue);
  };
  var handleSelect = function handleSelect(value) {
    setInputValue(value);
    setOpen(false);
    console.log(value);
    onSelect(value); // Calling the onSelect callback prop for fetching value
  };

  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: classNames("relative font-medium w-full flex-row border-b border-gray-300 hover:border-CSgreen transition-colors duration-300"),
    ref: selectRef
  }, React.createElement("label", {
    className: classNames("text-[14px] font-normal font-proxima text-CSSecondaryGray", open && "text-CSgreen"),
    htmlFor: id
  }, label ? label : "label", "*"), React.createElement("div", {
    className: "flex flex-row items-center justify-center relative mt-0.5"
  }, React.createElement("input", {
    id: id,
    onClick: handleToggleOpen,
    onChange: handleInputChange,
    readOnly: !open,
    placeholder: "Please Select...",
    value: inputValue.length > 25 ? inputValue.substring(0, 20) + "..." : inputValue,
    style: {
      width: "191px"
    },
    className: classNames("flex-grow outline-none bg-white text-CSDarkGray p-2 text-[16px] font-normal font-proxima", !inputValue && "text-CSDarkGray", open && "text-CSgreen", !open ? "cursor-pointer" : "cursor-default", !open ? "placeholder-CSDarkGray" : "placeholder-CSgreen")
  }), React.createElement("div", {
    onClick: handleToggleOpen,
    className: classNames("text-[1.5rem] text-CSDarkGray cursor-pointer", {
      "rotate-180": open
    })
  }, React.createElement(ChevronDown, null))), React.createElement("ul", {
    className: classNames("absolute z-10 w-full bg-CSDropDownBG mt-[1px] overflow-y-auto shadow-md transition-transform", open ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500" : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500", {
      "ease-out": open
    })
  }, options && options.map(function (option) {
    return React.createElement("li", {
      key: option.value,
      className: classNames("p-[10px] text-[16px] font-proxima hover:bg-CSListHover font-normal cursor-pointer flex", {
        "bg-CSListHover": option.value === inputValue,
        hidden: !option.label.toLowerCase().startsWith(inputValue)
      }),
      onClick: function onClick() {
        if (option.value !== inputValue) {
          handleSelect(option.value);
        }
      }
    }, type === "icons" && React.createElement("div", {
      className: "mr-2 flex-shrink-0 items-center text-[1.5rem] text-CSDarkGray"
    }, React.createElement(UserIcon, null)), option.label);
  }))));
};

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

var MultiSelect = function MultiSelect(_a) {
  var id = _a.id,
    options = _a.options,
    onSelect = _a.onSelect,
    label = _a.label,
    type = _a.type;
  var selectRef = useRef(null);
  var _b = useState([]),
    selectedValues = _b[0],
    setSelectedValues = _b[1];
  var _c = useState(""),
    inputValue = _c[0],
    setInputValue = _c[1];
  var _d = useState(false),
    open = _d[0],
    setOpen = _d[1];
  useEffect(function () {
    var handleOutsideClick = function handleOutsideClick(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return function () {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  var handleToggleOpen = function handleToggleOpen() {
    setOpen(function (prevState) {
      return !prevState;
    });
  };
  var handleInputChange = function handleInputChange(e) {
    var inputValue = e.target.value.toLowerCase();
    setInputValue(inputValue);
  };
  var handleSelect = function handleSelect(value) {
    var updatedValues = __spreadArray([], selectedValues, true);
    var index = updatedValues.indexOf(value);
    if (index > -1) {
      updatedValues.splice(index, 1);
    } else {
      updatedValues.push(value);
    }
    setSelectedValues(updatedValues);
    setInputValue("");
    console.log(updatedValues);
    onSelect(updatedValues);
  };
  return React.createElement("div", {
    className: "relative font-medium w-full flex-row border-b border-gray-300 hover:border-CSgreen transition-colors duration-300",
    ref: selectRef
  }, React.createElement("label", {
    className: classNames("text-[14px] font-normal font-proxima text-CSSecondaryGray", open && "text-CSgreen"),
    htmlFor: id
  }, label ? label : "label", "*"), React.createElement("div", {
    className: "flex flex-row items-center justify-center relative mt-0.5"
  }, React.createElement("input", {
    id: id,
    onClick: handleToggleOpen,
    onChange: handleInputChange,
    readOnly: !open,
    placeholder: selectedValues.length > 0 ? "".concat(selectedValues.length, " selected") : "Please Select...",
    value: inputValue.length > 25 ? inputValue.substring(0, 20) + "..." : inputValue,
    style: {
      width: "191px"
    },
    className: classNames("flex-grow bg-white outline-none text-CSDarkGray p-2 text-[16px] font-normal font-proxima", !inputValue && "text-CSDarkGray", open && "text-CSgreen", !open ? "cursor-pointer" : "cursor-default", !open ? "placeholder-CSDarkGray" : "placeholder-CSgreen")
  }), React.createElement("div", {
    onClick: handleToggleOpen,
    className: classNames("text-[1.5rem] text-CSDarkGray cursor-pointer", {
      "rotate-180": open
    })
  }, React.createElement(ChevronDown, null))), React.createElement("ul", {
    className: classNames("absolute z-10 w-full bg-CSDropDownBG mt-[1px] overflow-y-auto shadow-md transition-transform", open ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500" : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500", {
      "ease-out": open
    })
  }, options && options.map(function (option) {
    return React.createElement("li", {
      key: option.value,
      className: classNames("p-[10px] text-[16px] hover:bg-CSListHover font-normal font-proxima cursor-pointer flex", {
        "bg-CSListHover": selectedValues.includes(option.value),
        hidden: !option.label.toLowerCase().startsWith(inputValue)
      }),
      onClick: type !== "checkbox" ? function () {
        if (option.value !== inputValue) {
          handleSelect(option.value);
        }
      } : undefined
    }, type === "icons" && React.createElement("div", {
      className: "mr-2 flex-shrink-0 items-center text-[1.5rem] text-CSDarkGray"
    }, React.createElement(UserIcon, null)), type === "checkbox" && React.createElement(CheckBox, {
      id: option.value,
      label: option.label,
      onChange: function onChange(e) {
        e.target.checked ? handleSelect(option.value) : handleSelect(option.value);
      }
    }), type !== "checkbox" && option.label);
  })));
};

function CrossIcon() {
  return React.createElement("div", null, React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
  })));
}

var MultiSelectChip = function MultiSelectChip(_a) {
  var options = _a.options,
    defaultValue = _a.defaultValue,
    onSelect = _a.onSelect,
    label = _a.label,
    type = _a.type;
    _a.id;
  var _b = useState(defaultValue || []),
    selected = _b[0],
    setSelected = _b[1];
  var _c = useState(false),
    open = _c[0],
    setOpen = _c[1];
  var selectRef = useRef(null);
  useEffect(function () {
    window.addEventListener("click", handleOutsideClick);
    return function () {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  var handleOutsideClick = function handleOutsideClick(event) {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  var handleSelect = function handleSelect(value) {
    var selectedIndex = selected.indexOf(value);
    var updatedSelected;
    if (selectedIndex === -1) {
      // Value is not selected, add it to the selection
      updatedSelected = __spreadArray(__spreadArray([], selected, true), [value], false);
    } else {
      // Value is already selected, remove it from the selection
      updatedSelected = __spreadArray(__spreadArray([], selected.slice(0, selectedIndex), true), selected.slice(selectedIndex + 1), true);
    }
    setSelected(updatedSelected);
    onSelect(updatedSelected);
  };
  var handleClearAll = function handleClearAll() {
    setSelected([]);
    onSelect([]);
  };
  var handleToggleOpen = function handleToggleOpen() {
    setOpen(function (prevState) {
      return !prevState;
    });
  };
  var selectedDisplay = selected.length > 0 ? React.createElement("div", {
    className: "flex flex-wrap items-center"
  }, selected.slice(0, 2).map(function (option) {
    return React.createElement("div", {
      key: option,
      className: classNames("flex items-center badge bg-CSChipBG text-CSGrayChip border border-CSChipBorder rounded-sm px-1 mr-[5px] mb-2 text-[14px] font-proxima", option.length > 8 && "max-w-[100px]")
    }, React.createElement("span", {
      title: option
    }, option.length > 8 ? option.substring(0, 8) + "..." : option), React.createElement("div", {
      onClick: function onClick() {
        return handleSelect(option);
      },
      className: "ml-1 cursor-pointer"
    }, React.createElement(CrossIcon, null)));
  }), selected.length > 2 && React.createElement("div", {
    className: "flex items-center badge bg-CSChipBG text-CSDarkGray border border-CSChipBorder rounded-sm px-1 mr-[5px] mb-2 text-[14px] font-proxima"
  }, "+", selected.length - 2)) : React.createElement("div", {
    className: classNames("text-CSDarkGray pb-2 font-proxima", {
      "text-CSgreen": open
    })
  }, "Please Select...");
  return React.createElement("div", {
    className: "relative w-full font-medium flex-row",
    ref: selectRef
  }, React.createElement("label", {
    onClick: handleToggleOpen,
    className: classNames("text-[14px] font-normal font-proxima text-CSSecondaryGray", {
      "text-CSgreen": open
    })
  }, label ? label : "label", "*"), React.createElement("div", {
    onClick: handleToggleOpen,
    className: classNames("flex justify-between bg-white border-b border-gray-300 text-CSDarkGray pt-2 pl-2 text-[16px] font-normal font-proxima transition-colors duration-300", {
      "text-CSDarkGray": selected.length === 0
    }, {
      "text-CSgreen": open
    }, !open ? "cursor-pointer" : "cursor-default", "hover:border-CSgreen")
  }, selectedDisplay, React.createElement("div", {
    onClick: handleToggleOpen,
    className: classNames("text-[1.5rem] text-CSDarkGray cursor-pointer", {
      "rotate-180": open
    })
  }, React.createElement(ChevronDown, null))), React.createElement("ul", {
    className: classNames("absolute z-10 w-full bg-CSDropDownBG mt-[1px] overflow-y-auto shadow-md transition-transform", open ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500" : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500", {
      "ease-out": open
    })
  }, React.createElement("li", {
    className: classNames("pt-3 pl-3 text-[16px] font-normal font-proxima text-CSgreen cursor-pointer flex"),
    onClick: handleClearAll
  }, "Clear All"), options && options.map(function (option) {
    return React.createElement("li", {
      key: option.value,
      className: classNames("p-3 text-[16px] hover:bg-CSListHover font-normal font-proxima cursor-pointer flex", {
        "bg-CSListHover": selected.includes(option.value)
      }),
      onClick: type !== "checkbox" ? function () {
        return handleSelect(option.value);
      } : undefined
    }, type === "icons" && React.createElement("div", {
      className: "mr-2 flex-shrink-0 items-center text-[1.5rem] text-CSDarkGray"
    }, React.createElement(UserIcon, null)), type === "checkbox" && React.createElement(CheckBox, {
      id: option.value,
      label: option.label,
      checked: selected.includes(option.value),
      onChange: function onChange(e) {
        e.target.checked ? handleSelect(option.value) : handleSelect(option.value);
      }
    }), type !== "checkbox" && option.label);
  })));
};

export { MultiSelect, MultiSelectChip, Select };
//# sourceMappingURL=index.es.js.map
