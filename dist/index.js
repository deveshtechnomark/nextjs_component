'use strict';

var React = require('react');
var ClearIcon = require('@mui/icons-material/Clear');
var CheckIcon = require('@mui/icons-material/Check');
var classnames = require('classnames');

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
  var inputClassName = classnames(className, "py-1 px-3 border-b outline-none transition duration-600 w-full", err ? "border-b-CSError" : focus ? "border-b-CSgreen" : "border-b-CSSecondaryGray", valid && "text-CSEmailSuccess font-normal text-[14px] font-proxima", showEmailError && "text-CSError");
  var labelClassName = classnames(err ? "text-CSError" : focus ? "text-CSgreen" : "text-CSSecondaryGray");
  return React.createElement("div", {
    className: "flex flex-col text-[14px] laptop:text-base relative font-proxima"
  }, label && React.createElement("label", {
    className: labelClassName
  }, label, required && "*"), React.createElement("div", {
    className: "".concat(!err && "animated-input relative inline-block before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-CSgreen before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full")
  }, React.createElement("input", __assign({
    className: inputClassName,
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
    className: "text-CSError absolute right-0 top-0 mt-5 mr-3 cursor-pointer",
    onClick: handleClear
  }, React.createElement(ClearIcon, null)), valid && focus && React.createElement("span", {
    className: "text-CSgreen absolute right-0 top-0 mt-5 mr-3"
  }, React.createElement(CheckIcon, null)), err && React.createElement("span", {
    className: "text-CSError"
  }, errorMessage), !err && supportingText && React.createElement("span", {
    className: "text-CSSecondaryGray"
  }, supportingText));
};

exports.TextField = TextField;
//# sourceMappingURL=index.js.map
