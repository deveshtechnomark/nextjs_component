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
    required = _a.required,
    className = _a.className,
    onBlur = _a.onBlur,
    validate = _a.validate,
    _b = _a.errorMessage,
    errorMessage = _b === void 0 ? "This is a required field!" : _b,
    props = _a.props;
  var _c = useState(""),
    password = _c[0],
    setPassword = _c[1];
  var _d = useState("password"),
    type = _d[0],
    setType = _d[1];
  var _e = useState(false),
    err = _e[0],
    setErr = _e[1];
  var _f = useState(false),
    focus = _f[0],
    setFocus = _f[1];
  var _g = useState(false),
    open = _g[0],
    setOpen = _g[1];
  var _h = useState(""),
    errorMes = _h[0],
    setErrorMes = _h[1];
  var _j = useState(""),
    data = _j[0],
    setData = _j[1];
  var handlePasswordChange = function handlePasswordChange(e) {
    var newData = e.target.value;
    setPassword(newData);
    setData(newData);
    setOpen(true);
    if (err) {
      setErr(false);
    }
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
    regex: /.{8,}/,
    index: 5
  }];
  var requirementList = ["1 Special Character", "1 Uppercase", "1 Lowercase", "1 Number", "No Space Allowed", "Minimum 8 Characters"];
  var validatePassword = function validatePassword() {
    var isAllValid = true;
    var requirementsList = requirements.map(function (item) {
      var isValid;
      if (item.index === 4 && password.length > 0) {
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
    if (e.target.value === "") {
      setErr(true);
      setOpen(false);
      setErrorMes(errorMessage);
    } else if (!e.target.value.match(/[^A-Za-z0-9]/)) {
      setErr(true);
      setOpen(false);
      setErrorMes("Please fill details according to the requirements.");
    } else if (!e.target.value.match(/[A-Z]/)) {
      setErr(true);
      setOpen(false);
      setErrorMes("Please fill details according to the requirements.");
    } else if (!e.target.value.match(/[a-z]/)) {
      setErr(true);
      setOpen(false);
      setErrorMes("Please fill details according to the requirements.");
    } else if (!e.target.value.match(/[0-9]/)) {
      setErr(true);
      setOpen(false);
      setErrorMes("Please fill details according to the requirements.");
    } else if (e.target.value.match(/\s/)) {
      setErr(true);
      setOpen(false);
      setErrorMes("Please fill details according to the requirements.");
    } else if (!e.target.value.match(/.{8,}/)) {
      setErr(true);
      setOpen(false);
      setErrorMes("Please fill details according to the requirements.");
    } else {
      setErr(false);
    }
  };
  var handleFocus = function handleFocus() {
    setFocus(true);
    setOpen(true);
  };
  var getPasswordStrength = function getPasswordStrength() {
    var strength = "password";
    if (data.match(/[^A-Za-z0-9]/) && data.match(/[A-Z]/) && data.match(/[a-z]/) && data.match(/[0-9]/) && !data.match(/\s/) && data.match(/.{8,}/)) {
      strength = "Excellent";
    } else if (data.match(/[A-Z]/) && data.match(/[a-z]/) && data.match(/[0-9]/)) {
      strength = "Good";
    } else if (password.length >= 3 && data.match(/[a-z]/)) {
      strength = "Too weak";
    }
    return strength;
  };
  return React.createElement("div", {
    className: "relative flex flex-col text-sm sm:text-base w-full"
  }, label && React.createElement("label", {
    className: "".concat(err ? "text-defaultRed" : focus ? "text-primary" : "text-slatyGrey")
  }, label, required && "*"), React.createElement("div", {
    className: "".concat(!err && "relative inline-block before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full")
  }, React.createElement("input", __assign({
    className: "".concat(className, " py-1 px-3 border-b outline-none w-full pr-10 ").concat(err ? "border-defaultRed" : focus ? "border-primary" : "border-lightSilver"),
    type: type,
    id: "password-input",
    value: password,
    onChange: handlePasswordChange,
    onBlur: onBlur ? onBlur : validate ? validateInput : undefined,
    onFocus: handleFocus
  }, props))), type === "password" ? React.createElement("span", {
    className: "absolute top-7 right-1 text-md sm:text-lg ".concat(err ? "text-defaultRed" : "text-[#979797]"),
    onClick: function onClick() {
      return setType("text");
    }
  }, React.createElement(EyeClose, null)) : React.createElement("span", {
    className: "absolute top-7 right-1 text-md sm:text-lg ".concat(err ? "text-defaultRed" : "text-[#979797]"),
    onClick: function onClick() {
      return setType("password");
    }
  }, React.createElement(EyeOpen, null)), open && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "absolute ".concat(err ? "bottom-[90px]" : "bottom-[70px]", " z-10 left-0 bg-pureWhite shadow-2xl py-4 pl-2 pr-4 text-[16px] sm-text-[14px] w-fit")
  }, React.createElement("ul", {
    className: "requirement-list"
  }, validatePassword())), React.createElement("span", {
    className: "w-2 h-2 bg-pureWhite z-10 absolute ".concat(err ? "bottom-[86px]" : "bottom-[66px]", " left-[20px] rotate-[45deg]")
  })), password && React.createElement("div", {
    className: "absolute top-[60px] mt-2 flex items-center"
  }, React.createElement("div", {
    className: "relative w-[150px] sm:w-[180px] h-[5px] rounded-lg bg-[#979797]"
  }, React.createElement("span", {
    className: "absolute rounded-l-lg h-[5px] ".concat(data.match(/[^A-Za-z0-9]/) && data.match(/[A-Z]/) && data.match(/[a-z]/) && data.match(/[0-9]/) && !data.match(/\s/) && data.match(/.{8,}/) ? "bg-successColor w-[150px] sm:w-[180px] rounded-lg" : data.match(/[A-Z]/) && data.match(/[a-z]/) && data.match(/[0-9]/) ? "bg-[#FFBF00] w-[85px] sm:w-[100px]" : password.length >= 3 && data.match(/[a-z]/) ? "bg-defaultRed  w-[30px] sm:w-[45px]" : "bg-[#979797]")
  })), React.createElement("span", {
    className: "ml-4 text-xs sm:text-sm"
  }, getPasswordStrength())), err && React.createElement("span", {
    className: "text-defaultRed"
  }, errorMes));
};

export { Password };
//# sourceMappingURL=index.es.js.map
