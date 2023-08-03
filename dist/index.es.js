import React, { useState, useRef, useEffect } from 'react';
import { Avatar } from 'next-ts-lib';
import 'next-ts-lib/dist/index.css';
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

var Select = function Select(_a) {
  var _b;
  var id = _a.id,
    options = _a.options,
    getValue = _a.getValue;
    _a.type;
    var label = _a.label,
    className = _a.className,
    _c = _a.search,
    search = _c === void 0 ? false : _c,
    validate = _a.validate,
    defaultValue = _a.defaultValue,
    value = _a.value,
    avatar = _a.avatar,
    avatarName = _a.avatarName,
    avatarImgUrl = _a.avatarImgUrl,
    _d = _a.errorMessage,
    errorMessage = _d === void 0 ? "This is a required field." : _d,
    supportingText = _a.supportingText,
    hasError = _a.hasError,
    getError = _a.getError,
    errorClass = _a.errorClass;
  var _e = useState(""),
    inputValue = _e[0],
    setInputValue = _e[1];
  var _f = useState(false),
    error = _f[0],
    setError = _f[1];
  var _g = useState(""),
    errMsg = _g[0],
    setErrMsg = _g[1];
  var _h = useState(false),
    open = _h[0],
    setOpen = _h[1];
  var selectRef = useRef(null);
  {
    validate && useEffect(function () {
      setErrMsg(errorMessage);
      setError(hasError);
      hasError && getError(false);
    }, [errorMessage, hasError]);
  }
  // {
  //   value !== -1 && options
  //     ? useEffect(() => {
  //         options.map((option, index) => {
  //           // if (option.value === value) {
  //           //   setInputValue(option.label);
  //           console.log("option", value, option.label, option.value);
  //           // }
  //         });
  //       }, [])
  //     : "";
  // }
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
    if (validate && inputValue.trim() === "") {
      setError(true);
      setErrMsg("Please select a valid option.");
    } else {
      setError(false);
      setErrMsg("");
      setInputValue(inputValue);
    }
  };
  var handleSelect = function handleSelect(label, value) {
    setInputValue(label);
    setOpen(false);
    if (label.trim() === "") {
      setError(true);
      getError(false);
      setErrMsg("Please select a valid option.");
    } else {
      setError(false);
      setErrMsg("");
      getValue(value, label);
      getError(true);
    }
  };
  var handleBlur = function handleBlur() {
    if (validate) {
      if (inputValue.trim() === "") {
        setError(true);
        setErrMsg("Please select a valid option.");
        getError(false);
      } else {
        setError(false);
        setErrMsg("");
        getError(true);
      }
    }
  };
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "relative font-medium w-full flex-row border-b ".concat(inputValue ? "border-primary" : error ? "border-defaultRed" : "border-lightSilver hover:border-primary transition-colors duration-300", " ").concat(className),
    ref: selectRef
  }, label && React.createElement("label", {
    className: "text-[14px] font-normal font-proxima ".concat(open ? "text-primary" : inputValue ? "text-primary" : error ? "text-defaultRed" : "text-slatyGrey"),
    htmlFor: id
  }, label, validate && React.createElement("span", {
    className: "text-defaultRed"
  }, "\xA0*")), React.createElement("div", {
    className: "flex flex-row items-center relative w-full mb-0"
  }, React.createElement("input", {
    id: id,
    onBlur: handleBlur,
    onClick: handleToggleOpen,
    onChange: handleInputChange,
    readOnly: !search,
    placeholder: defaultValue || "Please select",
    value: value ? value : inputValue.length > 25 ? inputValue.substring(0, 20) + "..." : inputValue,
    autoComplete: "off",
    className: "flex-grow outline-none bg-white text-darkCharcoal text-[14px] font-normal font-proxima w-full ".concat(open ? "text-primary" : "", " ").concat(!open ? "cursor-pointer" : "cursor-default", " ").concat(!open ? "placeholder-darkCharcoal" : "placeholder-primary")
  }), React.createElement("div", {
    onClick: handleToggleOpen,
    className: "text-[1.5rem] text-darkCharcoal cursor-pointer ".concat(open ? "rotate-180" : "")
  }, React.createElement(ChevronDown, null))), React.createElement("ul", {
    className: "absolute z-10 bg-pureWhite mt-[1px] overflow-y-auto shadow-md transition-transform w-full ".concat(open ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500" : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500", " ").concat(open ? "ease-out" : ""),
    style: {
      width: (_b = selectRef.current) === null || _b === void 0 ? void 0 : _b.clientWidth
    }
  }, options.length > 0 && options.map(function (option, index) {
    return React.createElement("li", {
      key: index,
      className: "p-[10px] text-[14px] font-proxima hover:bg-whiteSmoke font-normal cursor-pointer flex items-center ".concat(option.value === inputValue ? "bg-whiteSmoke" : "", " ").concat(search && !option.label.toLowerCase().startsWith(inputValue) ? "hidden" : ""),
      onClick: function onClick() {
        if (option.label !== inputValue) {
          handleSelect(option.label, option.value);
        }
      }
    }, avatar && React.createElement("div", {
      className: "mr-2 flex-shrink-0 items-center text-[1.5rem] text-darkCharcoal"
    }, React.createElement(Avatar, {
      variant: "x-small",
      name: avatarName,
      imageUrl: avatarImgUrl
    })), option.label);
  }))), !error && supportingText && React.createElement("span", {
    className: "text-slatyGrey text-[12px] sm:text-[14px] -mt-[20px]"
  }, supportingText), error && React.createElement("span", {
    className: "text-defaultRed text-[12px] sm:text-[14px] ".concat(errorClass)
  }, errMsg));
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
    type = _a.type,
    className = _a.className,
    _b = _a.required,
    required = _b === void 0 ? false : _b,
    defaultValue = _a.defaultValue,
    avatar = _a.avatar,
    avatarName = _a.avatarName,
    avatarImgUrl = _a.avatarImgUrl,
    _c = _a.errorMessage,
    errorMessage = _c === void 0 ? "This is a required field." : _c;
    _a.supportingText;
    var hasError = _a.hasError,
    getError = _a.getError,
    getValue = _a.getValue,
    errorClass = _a.errorClass,
    validate = _a.validate;
  var selectRef = useRef(null);
  var _d = useState([]),
    selectedValues = _d[0],
    setSelectedValues = _d[1];
  var _e = useState(""),
    inputValue = _e[0],
    setInputValue = _e[1];
  var _f = useState(false),
    open = _f[0],
    setOpen = _f[1];
  var _g = useState(false),
    error = _g[0],
    setError = _g[1];
  var _h = useState(""),
    errMsg = _h[0],
    setErrMsg = _h[1];
  {
    validate && useEffect(function () {
      setErrMsg(errorMessage);
      setError(hasError);
      hasError && getError(false);
    }, [errorMessage, hasError]);
  }
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
    if (validate && inputValue.trim() === "") {
      setError(true);
      setErrMsg("Please select a valid option.");
    } else {
      setError(false);
      setErrMsg("");
      getValue(inputValue);
      setInputValue(inputValue);
    }
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
    onSelect(updatedValues);
    if (validate) {
      if (updatedValues.length === 0) {
        setError(true);
        setErrMsg("Please select at least one option.");
        getError(false);
      } else {
        setError(false);
        setErrMsg("");
        getError(true);
      }
    }
  };
  var handleBlur = function handleBlur() {
    if (validate) {
      if (inputValue.trim() === "") {
        setError(true);
        setErrMsg("Please select a valid option.");
        getError(false);
      } else {
        setError(false);
        setErrMsg("");
        getError(true);
      }
    }
  };
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "relative font-medium w-full flex-row border-b ".concat(selectedValues.length > 0 ? "border-primary" : error ? "border-defaultRed" : "border-lightSilver hover:border-primary transition-colors duration-300", " ").concat(className),
    ref: selectRef
  }, label && React.createElement("label", {
    className: "text-[14px] font-normal font-proxima ".concat(open ? "text-primary" : selectedValues.length > 0 ? "text-primary" : error ? "text-defaultRed" : "text-slatyGrey"),
    htmlFor: id
  }, label, required && React.createElement("span", {
    className: "text-defaultRed"
  }, "\xA0*")), React.createElement("div", {
    className: "flex flex-row items-center justify-center relative"
  }, React.createElement("input", {
    id: id,
    onBlur: handleBlur,
    onClick: handleToggleOpen,
    onChange: handleInputChange,
    readOnly: !open,
    placeholder: selectedValues.length > 0 ? "".concat(selectedValues.length, " selected") : defaultValue || "Please select",
    value: inputValue.length > 25 ? "".concat(inputValue.substring(0, 20), "...") : inputValue,
    style: {
      width: "191px"
    },
    className: "flex-grow bg-white outline-none text-darkCharcoal text-[14px] font-normal font-proxima ".concat(open ? "text-primary" : "", " ").concat(!open ? "cursor-pointer" : "cursor-default", " ").concat(!open ? "placeholder-darkCharcoal" : "placeholder-primary")
  }), React.createElement("div", {
    onClick: handleToggleOpen,
    className: "text-[1.5rem] text-darkCharcoal cursor-pointer ".concat(open ? "rotate-180" : "")
  }, React.createElement(ChevronDown, null))), React.createElement("ul", {
    className: "absolute z-10 w-full bg-pureWhite mt-[1px] overflow-y-auto shadow-md transition-transform ".concat(open ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500" : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500", " ").concat(open ? "ease-out" : "")
  }, options.length > 0 && options.map(function (option, index) {
    return React.createElement("li", {
      key: index,
      className: "p-[10px] text-[14px] hover:bg-whiteSmoke font-normal font-proxima cursor-pointer flex items-center ".concat(selectedValues.includes(option.value) ? "bg-whiteSmoke" : "", " ").concat(!option.label.toLowerCase().startsWith(inputValue) ? "hidden" : ""),
      onClick: type !== "checkbox" ? function () {
        if (option.value !== inputValue) {
          handleSelect(option.value);
        }
      } : undefined
    }, avatar && React.createElement("div", {
      className: "mr-2 flex-shrink-0 items-center text-[1.5rem] text-darkCharcoal"
    }, React.createElement(Avatar, {
      variant: "x-small",
      name: avatarName,
      imageUrl: avatarImgUrl
    })), type === "checkbox" && React.createElement(CheckBox, {
      id: option.value,
      label: option.label,
      onChange: function onChange(e) {
        e.target.checked ? handleSelect(option.value) : handleSelect(option.value);
      }
    }));
  }))), error && React.createElement("span", {
    className: "text-defaultRed text-[12px] sm:text-[14px] ".concat(errorClass)
  }, errMsg));
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
  var _b;
  var options = _a.options,
    defaultValue = _a.defaultValue;
    _a.onSelect;
    var label = _a.label,
    type = _a.type;
    _a.id;
    var className = _a.className;
    _a.required;
    var avatar = _a.avatar,
    avatarName = _a.avatarName,
    avatarImgUrl = _a.avatarImgUrl,
    _d = _a.errorMessage,
    errorMessage = _d === void 0 ? "This is a required field." : _d;
    _a.supportingText;
    var hasError = _a.hasError,
    getError = _a.getError,
    getValue = _a.getValue,
    errorClass = _a.errorClass,
    validate = _a.validate;
  var _e = useState(defaultValue || []),
    selected = _e[0],
    setSelected = _e[1];
  var _f = useState(defaultValue || []);
    _f[0];
    _f[1];
  var _g = useState(false),
    open = _g[0],
    setOpen = _g[1];
  var selectRef = useRef(null);
  var _h = useState(false),
    error = _h[0],
    setError = _h[1];
  var _j = useState(""),
    errMsg = _j[0],
    setErrMsg = _j[1];
  {
    validate && useEffect(function () {
      setErrMsg(errorMessage);
      setError(hasError);
      hasError && getError(false);
    }, [errorMessage, hasError]);
  }
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
    if (updatedSelected.length > 0) {
      setError(false);
      setErrMsg("");
    }
    setSelected(updatedSelected);
    getValue(updatedSelected);
  };
  var handleClearAll = function handleClearAll() {
    setSelected([]);
    getValue([]);
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
      className: "flex items-center badge bg-[#E9ECEF] text-[#212529] border border-[#CED4DA] rounded-sm px-1 mr-[5px] mb-2 text-[14px] font-proxima ".concat(option.length > 8 ? "max-w-[100px]" : "")
    }, React.createElement("span", {
      title: option
    }, option.length > 8 ? option.substring(0, 8) + "..." : option), React.createElement("div", {
      onClick: function onClick() {
        return handleSelect(option);
      },
      className: "ml-1 cursor-pointer"
    }, React.createElement(CrossIcon, null)));
  }), selected.length > 2 && React.createElement("div", {
    className: "flex items-center badge bg-[#E9ECEF] text-darkCharcoal border border-[#CED4DA] rounded-sm px-1 mr-[5px] mb-2 text-[14px] font-proxima"
  }, "+", selected.length - 2)) : React.createElement("div", {
    className: "text-darkCharcoal font-proxima ".concat(open ? "text-primary" : "")
  }, "Please Select...");
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "relative w-full font-medium flex-row",
    ref: selectRef
  }, label && React.createElement("label", {
    onClick: handleToggleOpen,
    className: "text-[14px] font-normal font-proxima ".concat(open ? "text-primary" : selected.length > 0 ? "text-primary" : error ? "text-defaultRed" : "text-slatyGrey")
  }, label, validate && React.createElement("span", {
    className: "text-defaultRed"
  }, "\xA0*")), React.createElement("div", {
    onClick: handleToggleOpen,
    className: "flex justify-between bg-white border-b text-[14px] font-normal font-proxima  ".concat(open ? "text-primary cursor-default" : selected.length === 0 ? "text-darkCharcoal cursor-pointer" : "", " ").concat(selected.length > 0 ? "border-primary" : error ? "border-defaultRed" : "border-lightSilver transition-colors duration-300 hover:border-primary", " ").concat(className)
  }, selectedDisplay, React.createElement("div", {
    onClick: handleToggleOpen,
    className: "text-[1.5rem] text-darkCharcoal cursor-pointer ".concat(open ? "rotate-180" : "")
  }, React.createElement(ChevronDown, null))), React.createElement("ul", {
    className: "absolute z-10 bg-pureWhite mt-[1px] overflow-y-auto shadow-md transition-transform ".concat(open ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500 ease-out" : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500 ease-out"),
    // Setting the width inline style based on the client width of the parent div
    style: {
      width: (_b = selectRef.current) === null || _b === void 0 ? void 0 : _b.clientWidth
    }
  }, React.createElement("li", {
    className: "pt-3 pl-3 text-[14px] font-normal font-proxima text-primary cursor-pointer flex",
    onClick: handleClearAll
  }, "Clear All"), options.length > 0 && options.map(function (option, index) {
    return React.createElement("li", {
      key: index,
      className: "p-3 text-[14px] hover:bg-whiteSmoke font-normal font-proxima cursor-pointer flex ".concat(selected.includes(option.value) ? "bg-whiteSmoke" : ""),
      onClick: type !== "checkbox" ? function () {
        return handleSelect(option.value);
      } : undefined
    }, avatar && React.createElement("div", {
      className: "mr-2 flex-shrink-0 items-center text-[1.5rem] text-darkCharcoal"
    }, React.createElement(Avatar, {
      variant: "x-small",
      name: avatarName,
      imageUrl: avatarImgUrl
    })), type === "checkbox" && React.createElement(CheckBox, {
      id: option.value,
      label: option.label,
      checked: selected.includes(option.value),
      onChange: function onChange(e) {
        e.target.checked ? handleSelect(option.value) : handleSelect(option.value);
      }
    }), type !== "checkbox" && option.label);
  }))), error && React.createElement("span", {
    className: "text-defaultRed text-[12px] sm:text-[14px] ".concat(errorClass)
  }, errMsg));
};

export { MultiSelect, MultiSelectChip, Select };
//# sourceMappingURL=index.es.js.map
