'use strict';

var React = require('react');

var Style = {"modal":"Modal-module_modal__ZBixj","modalAnimation":"Modal-module_modalAnimation__OfLMB"};

var Modal = function Modal(_a) {
  var isOpen = _a.isOpen;
    _a.onClose;
    var children = _a.children,
    size = _a.size,
    width = _a.width;
  if (!isOpen) return null;
  var getSizeClasses = function getSizeClasses() {
    switch (size) {
      case "sm":
        return "w-75";
      case "md":
        return "w-[500px]";
      case "lg":
        return "w-[800px]";
      case "extra-lg":
        return "w-[1140px]";
      case "full":
        return "w-full";
      default:
        return "w-[".concat(width, "] || w-[500px]");
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center ".concat(Style.modal)
  }, /*#__PURE__*/React.createElement("div", {
    className: "my-6 mx-auto ".concat(getSizeClasses(), " ").concat(width)
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-[1px] border-lightSilver rounded-lg flex flex-col bg-pureWhite outline-none focus:outline-none"
  }, children))), /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-[1px]"
  }));
};

var ModalTitle = function ModalTitle(_a) {
  var children = _a.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "text-pureBlack flex items-center justify-between border-b border-solid border-lightSilver rounded-t"
  }, children || 'Modal Title'));
};

var ModalContent = function ModalContent(_a) {
  var children = _a.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-auto max-h-96 overflow-y-auto text-pureBlack"
  }, children || 'Modal Content');
};

var ModalAction = function ModalAction(_a) {
  var children = _a.children,
    position = _a.position;
  var justifyClasses = "";
  if (position === "start") {
    justifyClasses = "justify-start";
  } else if (position === "center") {
    justifyClasses = "justify-center";
  } else {
    justifyClasses = "justify-end";
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center border-t border-solid border-lightSilver rounded-b ".concat(justifyClasses)
  }, children || "Modal Action");
};

exports.Modal = Modal;
exports.ModalAction = ModalAction;
exports.ModalContent = ModalContent;
exports.ModalTitle = ModalTitle;
