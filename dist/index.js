'use strict';

var React = require('react');
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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Toast = /** @class */function (_super) {
  __extends(Toast, _super);
  function Toast() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Toast.showToast = function (type, message, text, duration) {
    var successIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-4 h-4 sm:w-6 sm:h-6\">\n    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z\" />\n  </svg>\n  ";
    var errorIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-4 h-4 sm:w-6 sm:h-6\">\n    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\" />\n  </svg>\n  ";
    var warningIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-4 h-4 sm:w-6 sm:h-6\">\n    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z\" />\n  </svg>\n  ";
    var infoIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-4 h-4 sm:w-6 sm:h-6\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z\" />\n</svg>\n";
    var toastElement = document.createElement("div");
    toastElement.className = "flex flex-col text-xs sm:text-base m-[6px] p-[12px] px-[16px] rounded-md text-white font-semibold min-w-15rem relative ".concat(type === "error" ? "bg-error !text-errorText" : type === "warning" ? "bg-warning !text-warningText" : type === "info" ? "bg-info !text-infoText" : "bg-success !text-successText");
    var closeButton = document.createElement("span");
    closeButton.className = "absolute top-1/4 right-[20px] w-15 h-15 bg-transparent border-none text-base cursor-pointer pl-10 text-xs sm:text-base";
    closeButton.innerHTML = "X";
    closeButton.addEventListener("click", function () {
      Toast.removeToast(toastElement);
    });
    var messageElement = document.createElement("span");
    messageElement.className = "flex flex-start items-center mr-20";
    messageElement.innerHTML = "\n     <span style=\"padding-right:5px\">".concat(type === "error" ? errorIcon : type === "warning" ? warningIcon : type === "info" ? infoIcon : successIcon, "</span>\n     <Typography type=\"h6\">").concat(message, "</Typography>");
    toastElement.appendChild(messageElement);
    toastElement.appendChild(closeButton);
    var textElement = document.createElement("span");
    textElement.className = "flex flex-start items-center ml-[22px] sm:ml-[30px] font-normal";
    textElement.innerHTML = "\n    <Typography type=\"label\">".concat(text, "</Typography>");
    {
      text && toastElement.appendChild(textElement);
    }
    var container = document.getElementById(Toast.containerId);
    if (container) {
      container.appendChild(toastElement);
      setTimeout(function () {
        Toast.removeToast(toastElement);
      }, duration || 5000);
    }
  };
  Toast.success = function (message, text, duration) {
    Toast.showToast("success", message, text, duration);
  };
  Toast.error = function (message, text, duration) {
    Toast.showToast("error", message, text, duration);
  };
  Toast.warning = function (message, text, duration) {
    Toast.showToast("warning", message, text, duration);
  };
  Toast.info = function (message, text, duration) {
    Toast.showToast("info", message, text, duration);
  };
  Toast.removeToast = function (toastElement) {
    if (toastElement && toastElement.parentNode) {
      toastElement.parentNode.removeChild(toastElement);
    }
  };
  Toast.prototype.render = function () {
    var _a = this.props.position,
      position = _a === void 0 ? "top_right" : _a;
    return React.createElement("div", {
      id: Toast.containerId,
      className: "flex flex-col fixed select-none animate-slideDown ".concat(position === "top_right" && "top-2 right-5", " ").concat(position === "bottom_right" && "bottom-2 right-5", " ").concat(position === "top_left" && "top-2 left-5", " ").concat(position === "bottom_left" && "bottom-2 left-5", " ").concat(position === "top_center" && "left-1/2 transform -translate-x-1/2 top-2", " ").concat(position === "bottom_center" && "left-1/2 transform -translate-x-1/2 bottom-2")
    });
  };
  Toast.containerId = "fixed z-9999";
  return Toast;
}(React.Component);

exports.Toast = Toast;
