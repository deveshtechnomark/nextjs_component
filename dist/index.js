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
    type = _a.type,
    validate = _a.validate,
    onBlur = _a.onBlur,
    onChange = _a.onChange,
    errorMessage = _a.errorMessage,
    supportingText = _a.supportingText,
    disabled = _a.disabled,
    getValue = _a.getValue,
    getError = _a.getError,
    hasError = _a.hasError,
    autoComplete = _a.autoComplete,
    minChar = _a.minChar,
    maxChar = _a.maxChar,
    noNumeric = _a.noNumeric,
    noSpecialChar = _a.noSpecialChar,
    props = __rest(_a, ["label", "className", "type", "validate", "onBlur", "onChange", "errorMessage", "supportingText", "disabled", "getValue", "getError", "hasError", "autoComplete", "minChar", "maxChar", "noNumeric", "noSpecialChar"]);
  var inputRef = React.useRef(null);
  var _b = React.useState(false),
    err = _b[0],
    setErr = _b[1];
  var _c = React.useState(false),
    focus = _c[0],
    setFocus = _c[1];
  var _d = React.useState(false),
    valid = _d[0],
    setValid = _d[1];
  var _e = React.useState(false),
    showEmailError = _e[0],
    setShowEmailError = _e[1];
  var _f = React.useState(""),
    errorMsg = _f[0],
    setErrorMsg = _f[1];
  React.useEffect(function () {
    setErrorMsg(errorMessage);
    setErr(hasError);
  }, [hasError, errorMessage]);
  var handleFocus = function handleFocus() {
    setFocus(true);
  };
  var handleBlur = function handleBlur(e) {
    if (validate && (e.target.value === "" || !e.target.value)) {
      setErr(true);
      setFocus(false);
      setErrorMsg("This field is required!");
    } else if (validate && type === "email" && !validateEmail(e.target.value)) {
      setErr(true);
      setShowEmailError(true);
      setFocus(false);
      setErrorMsg("Please Provide the correct email!");
    } else if (validate && e.target.value.trim().length < minChar) {
      setErr(true);
      setErrorMsg("Please enter minimum ".concat(minChar, " character!"));
    } else if (validate && e.target.value.trim().length > maxChar) {
      setErr(true);
      setErrorMsg("Please enter minimum ".concat(maxChar, " character!"));
    } else if (validate && e.target.value.trim().match(/\d/)) {
      setErr(true);
      setErrorMsg("Numbers are not allowed");
    } else if (validate && type === "email" && e.target.value.trim().length < minChar) {
      setErr(true);
      setErrorMsg("Please enter minimum ".concat(minChar, " character!"));
    } else if (validate && type === "email" && e.target.value.trim().length > maxChar) {
      setErr(true);
      setErrorMsg("Please enter minimum ".concat(maxChar, " character!"));
    } else {
      setErr(false);
      setShowEmailError(false);
      setFocus(true);
    }
    if (e.target.value === "") {
      setFocus(false);
    }
    if (onBlur) {
      onBlur(e);
    }
  };
  var validateEmail = function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(email);
  };
  var handleInputChange = function handleInputChange(e) {
    var inputValue = e.target.value;
    // Check if noNumeric prop is true and input contains numeric characters
    if (noNumeric && /\d/.test(inputValue)) {
      return;
    }
    // Check if noSpecialChar prop is true and input contains special characters
    if (noSpecialChar && /[^a-zA-Z0-9]/.test(inputValue)) {
      return;
    }
    getValue(inputValue);
    if (onChange) {
      onChange(e);
    }
    if (validate && type === "text") {
      if (inputValue.length < 0) {
        getError(false);
      } else if (inputValue.trim().length < minChar) {
        getError(false);
      } else if (inputValue.trim().length > maxChar) {
        getError(false);
      } else if (inputValue.trim().match(/\d/)) {
        getError(false);
      } else {
        setValid(false);
        setErr(false);
        getError(true);
      }
    } else if (validate && type === "email") {
      if (inputValue && validateEmail(inputValue)) {
        setValid(true);
        setErr(false);
        getError(true);
        setShowEmailError(false);
      } else if (validate && type === "email" && inputValue.trim().length < minChar) {
        setValid(true);
        setErr(false);
        getError(false);
        setShowEmailError(false);
      } else if (validate && type === "email" && inputValue.trim().length > maxChar) {
        setValid(true);
        setErr(false);
        getError(false);
        setShowEmailError(false);
      } else {
        setValid(false);
        setErr(false);
        setShowEmailError(false);
        getError(false);
      }
    } else if (err || valid) {
      setErr(false);
      setValid(false);
    }
  };
  return React.createElement("div", {
    className: "flex flex-col text-[14px] relative"
  }, label && React.createElement("span", {
    className: "flex"
  }, React.createElement("label", {
    className: "".concat(err ? "text-defaultRed" : focus ? "text-primary" : "text-slatyGrey")
  }, label), validate && React.createElement("span", {
    className: "".concat(disabled ? "text-slatyGrey" : "text-defaultRed")
  }, "\xA0*")), React.createElement("div", {
    className: "".concat(!err && !disabled && "animated-input relative inline-block before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full")
  }, React.createElement("input", __assign({
    className: "\n          ".concat(className, "\n          py-1 border-b outline-none transition duration-600 w-full font-normal text-[14px]\n          ").concat(type === "email" ? "pr-10" : "", "\n          ").concat(err ? "border-b-defaultRed" : focus ? "border-b-primary" : "border-b-lightSilver", "\n          ").concat(valid && !err ? "text-successColor" : showEmailError ? "text-defaultRed" : "text-[#333333]", "\n        "),
    ref: inputRef,
    type: type,
    onBlur: handleBlur,
    onChange: handleInputChange,
    onFocus: handleFocus,
    disabled: disabled,
    autoComplete: autoComplete
  }, props))), valid && !err && React.createElement("span", {
    className: "text-primary bg-white text-[20px] absolute right-0 top-0 mt-6 mr-3"
  }, React.createElement(CheckIcon, null)), err && React.createElement("span", {
    className: "text-defaultRed text-[12px] sm:text-[14px]"
  }, errorMessage ? errorMessage : errorMsg), !err && supportingText && React.createElement("span", {
    className: "text-slatyGrey text-[12px] sm:text-[14px]"
  }, supportingText));
};

exports.TextField = TextField;
//# sourceMappingURL=index.js.map
