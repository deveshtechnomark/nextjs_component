import React, { useState } from 'react';
import { Typography } from 'Typography';
import 'Typography/dist/index.css';

var Alert = function Alert(_a) {
  var variant = _a.variant,
    message = _a.message;
  var _b = useState(true),
    visible = _b[0],
    setVisible = _b[1];
  var handleClose = function handleClose() {
    setVisible(false);
  };
  var alertClass = "";
  switch (variant) {
    case "success":
      alertClass = "!bg-primary !text-pureWhite";
      break;
    case "error":
      alertClass = "!bg-errorColor !text-darkRed";
      break;
    case "warning":
      alertClass = "!bg-warningColor !text-darkOrange";
      break;
    case "info":
      alertClass = "!bg-infoColor !text-darkBlue";
      break;
    default:
      alertClass = "!bg-primary !text-pureWhite";
      break;
  }
  var successIcon = React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-4 h-4 sm:w-6 sm:h-6"
  }, React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
  var errorIcon = React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-4 h-4 sm:w-6 sm:h-6"
  }, React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
  }));
  var warningIcon = React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-4 h-4 sm:w-6 sm:h-6"
  }, React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
  }));
  var infoIcon = React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-4 h-4 sm:w-6 sm:h-6"
  }, React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
  }));
  return React.createElement(React.Fragment, null, visible && React.createElement("div", {
    className: "flex flex-col m-[6px] p-[12px] px-[16px] rounded-md text-primary min-w-15rem relative ".concat(alertClass),
    role: "alert"
  }, React.createElement("div", {
    className: "flex"
  }, React.createElement("span", null, variant === "error" ? errorIcon : variant === "warning" ? warningIcon : variant === "info" ? infoIcon : successIcon), React.createElement(Typography, {
    type: "sub-title",
    className: "ml-2 mr-6 text-xs sm:text-base"
  }, message)), React.createElement("button", {
    type: "button",
    className: "absolute top-1/4 right-[20px] w-15 h-15 bg-transparent border-none cursor-pointer pl-10 text-xs sm:text-base",
    onClick: handleClose
  }, "X")));
};

export { Alert };
//# sourceMappingURL=index.es.js.map
