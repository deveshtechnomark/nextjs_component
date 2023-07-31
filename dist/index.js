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

var Textarea = function Textarea(_a) {
  var label = _a.label,
    className = _a.className,
    id = _a.id,
    name = _a.name,
    value = _a.value,
    _b = _a.rows,
    rows = _b === void 0 ? "1" : _b,
    validate = _a.validate,
    onBlur = _a.onBlur,
    onChange = _a.onChange,
    supportingText = _a.supportingText,
    disabled = _a.disabled,
    getValue = _a.getValue,
    getError = _a.getError,
    hasError = _a.hasError,
    minChar = _a.minChar,
    maxChar = _a.maxChar,
    _c = _a.errorMessage,
    errorMessage = _c === void 0 ? "This is a required field!" : _c,
    props = __rest(_a, ["label", "className", "id", "name", "value", "rows", "validate", "onBlur", "onChange", "supportingText", "disabled", "getValue", "getError", "hasError", "minChar", "maxChar", "errorMessage"]);
  var textAreaRef = React.useRef(null);
  var _d = React.useState(false),
    err = _d[0],
    setErr = _d[1];
  var _e = React.useState(false),
    focus = _e[0],
    setFocus = _e[1];
  var _f = React.useState("false"),
    errMsg = _f[0],
    setErrMsg = _f[1];
  React.useEffect(function () {
    setErr(hasError);
    setErrMsg(errorMessage);
  }, [hasError, errorMessage]);
  var validateInput = function validateInput(e) {
    if (e.target.value.trim() === "") {
      setErr(true);
      getError(false);
      setErrMsg("This is a required field!");
    } else if (e.target.value.trim().length <= minChar) {
      setErr(true);
      getError(false);
      setErrMsg("Please enter minimum ".concat(minChar, " characters."));
    } else if (e.target.value.trim().length >= maxChar) {
      setErr(true);
      getError(false);
      setErrMsg("You can enter maximum ".concat(maxChar, " characters."));
    } else {
      setErr(false);
      getError(true);
      setErrMsg("");
    }
  };
  var handleFocus = function handleFocus() {
    setFocus(true);
  };
  var focusHandler = function focusHandler() {
    setFocus(false);
  };
  var handleInputChange = function handleInputChange(e) {
    getValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
    if (err) {
      setErr(false);
    }
  };
  var parsedRows = rows;
  return React.createElement("div", {
    className: "flex flex-col w-full text-[14px]"
  }, label && React.createElement("span", {
    className: "flex"
  }, React.createElement("label", {
    className: "".concat(err ? "text-defaultRed" : focus ? "text-primary" : "text-slatyGrey")
  }, label), validate && React.createElement("span", {
    className: "".concat(disabled ? "text-slatyGrey" : "text-defaultRed")
  }, "\xA0*")), React.createElement("div", {
    className: "".concat(!err ? "flex w-full relative before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full" : "w-full")
  }, React.createElement("textarea", __assign({
    className: "".concat(className, " py-1 border-b outline-none transition duration-600 w-full h-full text-darkCharcoal ").concat(err ? "border-b-defaultRed" : focus ? "border-b-primary" : "border-b-lightSilver"),
    ref: textAreaRef,
    rows: parsedRows,
    id: id,
    name: name,
    value: value,
    onBlur: onBlur ? onBlur : validate ? validateInput : validate ? focusHandler : undefined,
    onChange: handleInputChange,
    onFocus: handleFocus
  }, props))), !err && supportingText && React.createElement("span", {
    className: "text-slatyGrey text-[12px] sm:text-[14px]"
  }, supportingText), err && React.createElement("span", {
    className: "text-defaultRed text-[12px] sm:text-[14px]"
  }, errMsg));
};

exports.Textarea = Textarea;
//# sourceMappingURL=index.js.map
