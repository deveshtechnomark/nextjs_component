import React, { useState, useEffect } from 'react';

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
/* global Reflect, Promise, SuppressedError, Symbol */


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

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Dot = function Dot() {
  return React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    className: "text-lightSilver text-3xl"
  }, React.createElement("path", {
    d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
  }));
};
var Check = function Check() {
  return React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    className: "text-successColor text-[18px]"
  }, React.createElement("path", {
    d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
  }));
};
var EyeOpen = function EyeOpen() {
  return React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
  }), React.createElement("path", {
    d: "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
  }));
};
var EyeClose = function EyeClose() {
  return React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
  }), React.createElement("path", {
    d: "M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
  }));
};

var Password = function Password(_a) {
  var label = _a.label,
    className = _a.className,
    onBlur = _a.onBlur,
    validate = _a.validate,
    _b = _a.errorMessage,
    errorMessage = _b === void 0 ? "This is a required field!" : _b,
    getValue = _a.getValue,
    hasError = _a.hasError,
    disabled = _a.disabled,
    _c = _a.minChar,
    minChar = _c === void 0 ? 8 : _c,
    _d = _a.maxChar,
    maxChar = _d === void 0 ? 30 : _d,
    // Default to 30 characters if maxChar prop is not provided
    props = __rest(_a, ["label", "className", "onBlur", "validate", "errorMessage", "getValue", "hasError", "disabled", "minChar", "maxChar"]);
  var _e = useState(""),
    password = _e[0],
    setPassword = _e[1];
  var _f = useState("password"),
    type = _f[0],
    setType = _f[1];
  var _g = useState(false),
    err = _g[0],
    setErr = _g[1];
  var _h = useState(false),
    focus = _h[0],
    setFocus = _h[1];
  var _j = useState(false),
    open = _j[0],
    setOpen = _j[1];
  var _k = useState(""),
    errorMes = _k[0],
    setErrorMsg = _k[1];
  var _l = useState(""),
    data = _l[0],
    setData = _l[1];
  useEffect(function () {
    setErrorMsg(errorMessage);
    setErr(hasError);
  }, [hasError, errorMessage]);
  var handlePasswordChange = function handlePasswordChange(e) {
    var newData = e.target.value;
    setPassword(newData);
    setData(newData);
    setOpen(true);
    if (err) {
      setErr(false);
    }
    getValue(newData);
  };
  var requirements = [{
    regex: /[^A-Za-z0-9]/,
    index: 0
  }, {
    regex: /[A-Z]/,
    index: 1
  }, {
    regex: /[a-z]/,
    index: 2
  }, {
    regex: /[0-9]/,
    index: 3
  }, {
    regex: /\s/,
    index: 4
  }, {
    regex: new RegExp(".{".concat(minChar, ",").concat(maxChar, "}")),
    index: 5
  }];
  var requirementList = ["1 Special Character", "1 Uppercase", "1 Lowercase", "1 Number", "No Space Allowed", "Minimum ".concat(minChar, " and Maximum ").concat(maxChar, " Characters")];
  var validatePassword = function validatePassword() {
    var isAllValid = true;
    var requirementsList = requirements.map(function (item) {
      var isValid;
      if (item.index === 4 && password.length > 0) {
        isValid = !item.regex.test(password);
      } else if (item.index === 5 && password.length > maxChar) {
        isValid = !item.regex.test(password);
      } else {
        isValid = item.regex.test(password);
      }
      var requirementItemClass = isValid ? "valid" : "";
      if (!isValid) {
        isAllValid = false;
      }
      return React.createElement("li", {
        key: item.index,
        className: "".concat(requirementItemClass, " flex items-center justify-left text-darkCharcoal text-xs passwordsm:text-base passwordmd:text-lg")
      }, isValid ? React.createElement("span", {
        className: "ml-[5px] my-[6px] text-[18px] text-successColor"
      }, React.createElement(Check, null)) : React.createElement("span", {
        className: "text-3xl text-lightSilver"
      }, React.createElement(Dot, null)), React.createElement("span", {
        className: "".concat(isValid && "line-through ml-[7px] decoration-slatyGrey text-slatyGrey")
      }, requirementList[item.index]));
    });
    if (isAllValid) {
      setOpen(false);
    }
    return requirementsList;
  };
  var validateInput = function validateInput(e) {
    if (e.target.value.trim() === "") {
      setErr(true);
      setOpen(false);
      setErrorMsg(errorMessage);
    } else if (!e.target.value.match(/[^A-Za-z0-9]/) || !e.target.value.match(/[A-Z]/) || !e.target.value.match(/[a-z]/) || !e.target.value.match(/[0-9]/) || e.target.value.match(/\s/) || e.target.value.length < minChar || e.target.value.length > maxChar) {
      setErr(true);
      setOpen(false);
      setErrorMsg("Please fill details according to the requirements.");
    } else {
      setErr(false);
    }
  };
  var handleFocus = function handleFocus() {
    setFocus(true);
    setOpen(true);
  };
  var focusHandler = function focusHandler() {
    setFocus(false);
    setOpen(false);
  };
  var getPasswordStrength = function getPasswordStrength() {
    var strength = "password";
    if (data.match(/[A-Z]/) && data.match(/[a-z]/) && data.match(/[0-9]/) && !data.match(/\s/) && data.length >= minChar && data.length <= maxChar) {
      strength = "Excellent";
    } else if (data.match(/[A-Z]/) && data.match(/[a-z]/) && data.match(/[0-9]/)) {
      strength = "Good";
    } else if (password.length >= 3 && data.match(/[a-z]/)) {
      strength = "Too weak";
    }
    return strength;
  };
  return React.createElement("div", {
    className: "relative flex flex-col text-[14px] w-full"
  }, React.createElement("div", {
    className: "relative w-full"
  }, open && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "absolute bottom-[30px] z-10 left-0 bg-pureWhite shadow-2xl py-4 pl-2 pr-4 text-[16px] sm-text-[14px] w-fit"
  }, React.createElement("ul", {
    className: "requirement-list"
  }, validatePassword())), React.createElement("span", {
    className: "w-2 h-2 bg-pureWhite z-10 absolute bottom-[26px] left-[20px] rotate-[45deg]"
  })), label && React.createElement("span", {
    className: "flex"
  }, React.createElement("label", {
    className: "".concat(err ? "text-defaultRed" : focus ? "text-primary" : "text-slatyGrey")
  }, label), validate && React.createElement("span", {
    className: "".concat(disabled ? "text-slatyGrey" : "text-defaultRed")
  }, "\xA0*"))), React.createElement("div", {
    className: "".concat(!err && "relative inline-block before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full")
  }, React.createElement("input", __assign({
    className: "".concat(className, " py-1 border-b outline-none w-full pr-10 ").concat(err ? "border-defaultRed" : focus ? "border-primary" : "border-lightSilver"),
    type: type,
    value: password,
    onChange: handlePasswordChange,
    onBlur: onBlur ? onBlur : validate ? validateInput : validate ? focusHandler : undefined,
    onFocus: handleFocus,
    disabled: disabled
  }, props))), type === "password" ? React.createElement("span", {
    className: "absolute ".concat(!label ? "top-2" : "top-7", " right-1 text-md sm:text-lg ").concat(err ? "text-defaultRed" : "text-[#979797]"),
    onClick: function onClick() {
      return setType("text");
    }
  }, React.createElement(EyeClose, null)) : React.createElement("span", {
    className: "absolute ".concat(!label ? "top-2" : "top-7", " right-1 text-md sm:text-lg ").concat(err ? "text-defaultRed" : "text-[#979797]"),
    onClick: function onClick() {
      return setType("password");
    }
  }, React.createElement(EyeOpen, null)), React.createElement("div", {
    className: "flex flex-col justify-center w-full"
  }, password && React.createElement("div", {
    className: "mt-2 flex items-center"
  }, React.createElement("div", {
    className: "relative w-[150px] sm:w-[180px] h-[5px] rounded-lg bg-[#979797]"
  }, React.createElement("span", {
    className: "absolute rounded-l-lg h-[5px] ".concat(data.match(/[A-Z]/) && data.match(/[a-z]/) && data.match(/[0-9]/) && !data.match(/\s/) && data.length >= minChar && data.length <= maxChar ? "bg-successColor w-[150px] sm:w-[180px] rounded-lg" : data.match(/[A-Z]/) && data.match(/[a-z]/) && data.match(/[0-9]/) ? "bg-[#FFBF00] sm:w-[100px]" : password.length >= 3 && data.match(/[a-z]/) ? "bg-defaultRed sm:w-[45px]" : "bg-[#979797]")
  })), React.createElement("span", {
    className: "ml-4 text-xs sm:text-sm"
  }, getPasswordStrength())), err && React.createElement("span", {
    className: "text-defaultRed text-[12px] sm:text-[14px]"
  }, errorMes)));
};

export { Password };
//# sourceMappingURL=index.es.js.map
