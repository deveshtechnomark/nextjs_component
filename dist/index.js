'use strict';

var React = require('react');
var bs = require('react-icons/bs');
var Typography = require('Typography');
require('Typography/dist/index.css');

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

var Password = function Password(_a) {
  var label = _a.label,
    required = _a.required,
    className = _a.className,
    onBlur = _a.onBlur,
    validate = _a.validate,
    _b = _a.errorMessage,
    errorMessage = _b === void 0 ? "This is a required field!" : _b,
    props = _a.props;
  var _c = React.useState(""),
    password = _c[0],
    setPassword = _c[1];
  var _d = React.useState("password"),
    type = _d[0],
    setType = _d[1];
  var _e = React.useState(false),
    err = _e[0],
    setErr = _e[1];
  var _f = React.useState(false),
    focus = _f[0],
    setFocus = _f[1];
  var _g = React.useState(false),
    open = _g[0],
    setOpen = _g[1];
  var _h = React.useState(""),
    errorMes = _h[0],
    setErrorMes = _h[1];
  var _j = React.useState(""),
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
      return React.createElement(Typography.Typography, {
        type: "h6"
      }, React.createElement("li", {
        key: item.index,
        className: "".concat(requirementItemClass, " flex items-center justify-left text-xs passwordsm:text-base passwordmd:text-lg")
      }, isValid ? React.createElement(bs.BsCheckLg, {
        className: "text-teal-500 ml-[5px] my-[6px]"
      }) : React.createElement(bs.BsDot, {
        className: "text-gray-500 text-3xl"
      }), React.createElement("span", {
        className: "".concat(isValid && "line-through ml-[7px] decoration-gray-500 text-gray-500")
      }, requirementList[item.index])));
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
    className: "relative flex flex-col text-sm sm:text-base mb-6 w-full"
  }, label && React.createElement("label", {
    className: "".concat(err ? "text-error" : focus ? "text-textExcellent" : "text-defaultColor")
  }, React.createElement(Typography.Typography, {
    type: "label"
  }, label, required && "*")), React.createElement("div", {
    className: "".concat(!err && "relative inline-block before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-textExcellent before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full")
  }, React.createElement(Typography.Typography, {
    type: "h6"
  }, React.createElement("input", __assign({
    className: "".concat(className, " py-2 px-3 border-b outline-none w-full ").concat(err ? "border-error" : focus ? "border-textExcellent" : "border-defaultColor"),
    type: type,
    id: "password-input",
    value: password,
    onChange: handlePasswordChange,
    onBlur: onBlur ? onBlur : validate ? validateInput : undefined,
    onFocus: handleFocus
  }, props)))), type === "password" ? React.createElement("span", {
    className: "absolute top-9 right-1 text-md sm:text-lg ".concat(err ? "text-error" : "text-textDefault"),
    onClick: function onClick() {
      return setType("text");
    }
  }, React.createElement(bs.BsFillEyeSlashFill, null)) : React.createElement("span", {
    className: "absolute top-9 right-1 text-md sm:text-lg ".concat(err ? "text-error" : "text-textDefault"),
    onClick: function onClick() {
      return setType("password");
    }
  }, React.createElement(bs.BsFillEyeFill, null)), open && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "absolute bottom-[90px] left-0 bg-white shadow-2xl py-4 pl-2 pr-4 text-[16px] sm-text-[14px] w-fit"
  }, React.createElement("ul", {
    className: "requirement-list"
  }, validatePassword())), React.createElement("span", {
    className: "w-2 h-2 bg-white absolute bottom-[85px] left-[20px] rotate-[45deg]"
  })), password && React.createElement("div", {
    className: "absolute top-[60px] mt-2 flex items-center"
  }, React.createElement("div", {
    className: "relative w-[150px] sm:w-[180px] h-[5px] rounded-lg bg-textDefault"
  }, React.createElement("span", {
    className: "absolute rounded-l-lg h-[5px] ".concat(data.match(/[^A-Za-z0-9]/) && data.match(/[A-Z]/) && data.match(/[a-z]/) && data.match(/[0-9]/) && !data.match(/\s/) && data.match(/.{8,}/) ? "bg-textExcellent w-[150px] sm:w-[180px] rounded-lg" : data.match(/[A-Z]/) && data.match(/[a-z]/) && data.match(/[0-9]/) ? "bg-textGood w-[85px] sm:w-[100px]" : password.length >= 3 && data.match(/[a-z]/) ? "bg-textWeek  w-[30px] sm:w-[45px]" : "bg-textDefault")
  })), React.createElement("span", {
    className: "ml-4 text-xs sm:text-sm"
  }, getPasswordStrength())), err && React.createElement(Typography.Typography, {
    type: "h6"
  }, React.createElement("span", {
    className: "absolute ".concat(password ? "top-[90px]" : "top-[65px]", " text-error")
  }, errorMes)));
};

exports.Password = Password;
//# sourceMappingURL=index.js.map
