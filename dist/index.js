'use strict';

var React = require('react');

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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function ClearIcon() {
  return React.createElement("div", null, React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), React.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
  })));
}

function CheckIcon() {
  return React.createElement("div", null, React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
  })));
}

var TextField = function TextField(_a) {
  var label = _a.label,
    className = _a.className,
    id = _a.id,
    name = _a.name,
    value = _a.value,
    type = _a.type,
    required = _a.required,
    validate = _a.validate,
    onBlur = _a.onBlur,
    onChange = _a.onChange,
    _b = _a.errorMessage,
    errorMessage = _b === void 0 ? "This is a required field!" : _b,
    supportingText = _a.supportingText,
    disabled = _a.disabled,
    props = __rest(_a, ["label", "className", "id", "name", "value", "type", "required", "validate", "onBlur", "onChange", "errorMessage", "supportingText", "disabled"]);
  var inputRef = React.useRef(null);
  var _c = React.useState(false),
    err = _c[0],
    setErr = _c[1];
  var _d = React.useState(false),
    focus = _d[0],
    setFocus = _d[1];
  var _e = React.useState(false),
    valid = _e[0],
    setValid = _e[1];
  var _f = React.useState(false),
    showEmailError = _f[0],
    setShowEmailError = _f[1];
  var handleFocus = function handleFocus() {
    setFocus(true);
  };
  var handleBlur = function handleBlur(e) {
    if (validate && required && (e.target.value === "" || !e.target.value)) {
      setErr(true);
    } else if (validate && type === "email" && !validateEmail(e.target.value)) {
      setErr(true);
      setShowEmailError(true);
    } else {
      setErr(false);
      setShowEmailError(false);
    }
    setFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  };
  var validateEmail = function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  var handleInputChange = function handleInputChange(e) {
    var inputValue = e.target.value;
    if (onChange) {
      onChange(e);
    }
    if (validate && type === "text") {
      if (inputValue.length < 0) {
        setValid(true);
        setErr(false);
      } else {
        setValid(false);
        setErr(false);
      }
    } else if (validate && type === "email") {
      if (inputValue && validateEmail(inputValue)) {
        setValid(true);
        setErr(false);
        setShowEmailError(false);
      } else {
        setValid(false);
      }
    } else if (err || valid) {
      setErr(false);
      setValid(false);
    }
  };
  var handleClear = function handleClear() {
    if (onChange) {
      onChange({
        target: {
          value: ""
        }
      });
    }
    setErr(false);
    setValid(false);
    setShowEmailError(false);
  };
  var labelClassName = "\n  ".concat(err ? "text-defaultRed" : focus || value ? "text-primary" : "text-slatyGrey", "\n");
  return React.createElement("div", {
    className: "flex flex-col text-[14px] laptop:text-base relative font-proxima"
  }, label && React.createElement("label", {
    className: labelClassName
  }, label, required && "*"), React.createElement("div", {
    className: "".concat(!err && "animated-input relative inline-block before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full")
  }, React.createElement("input", __assign({
    className: "\n          ".concat(className, "\n          py-1 px-3 border-b outline-none transition duration-600 w-full\n          ").concat(err ? "border-b-defaultRed" : value || focus ? "border-b-primary" : "border-b-lightSilver", "\n          ").concat(valid && "text-successColor font-normal text-[14px] font-proxima", "\n          ").concat(showEmailError && "text-defaultRed", "\n        "),
    ref: inputRef,
    type: type,
    id: id,
    name: name,
    value: value,
    onBlur: handleBlur,
    onChange: handleInputChange,
    onFocus: handleFocus,
    disabled: disabled
  }, props))), err && React.createElement("span", {
    className: "text-defaultRed absolute right-0 top-0 mt-5 mr-3 cursor-pointer"
  }, React.createElement("div", {
    className: "text-[20px]",
    onClick: handleClear
  }, React.createElement(ClearIcon, null))), valid && React.createElement("span", {
    className: "text-primary bg-white text-[20px] absolute right-0 top-0 mt-[26px] mr-3"
  }, React.createElement(CheckIcon, null)), err && React.createElement("span", {
    className: "text-defaultRed"
  }, errorMessage), !err && supportingText && React.createElement("span", {
    className: "text-slatyGrey"
  }, supportingText));
};

exports.TextField = TextField;
//# sourceMappingURL=index.js.map
