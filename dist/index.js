'use strict';

var React = require('react');
var typographyTs = require('typography-ts');
require('typography-ts/dist/index.css');

var Modal = function Modal(_a) {
  var isOpen = _a.isOpen;
    _a.onClose;
    var children = _a.children,
    size = _a.size;
  if (!isOpen) return null;
  var getSizeClasses = function getSizeClasses() {
    switch (size) {
      case "sm":
        return "w-72";
      case "md":
      default:
        return "w-4/12";
      case "lg":
        return "w-1/2";
      case "full":
        return "w-full";
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative my-6 mx-auto ".concat(getSizeClasses())
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-2 rounded-lg relative flex flex-col bg-pureWhite outline-none focus:outline-none"
  }, children))));
};

var ModalTitle = function ModalTitle(_a) {
  var children = _a.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(typographyTs.Typography, {
    type: 'body',
    className: "text-pureBlack flex items-center justify-between p-3 border-b border-solid border-lightSilver rounded-t"
  }, children || 'Modal Title'));
};

var ModalContent = function ModalContent(_a) {
  var children = _a.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "p-2 mb-5 flex-auto"
  }, /*#__PURE__*/React.createElement(typographyTs.Typography, {
    type: 'body',
    className: "text-pureBlack leading-relaxed"
  }, children || 'Modal Content'));
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
  return /*#__PURE__*/React.createElement(typographyTs.Typography, {
    type: 'body',
    className: "p-4 flex flex-wrap items-center border-t border-solid border-lightSilver rounded-b ".concat(justifyClasses)
  }, children || "Modal Action");
};

exports.Modal = Modal;
exports.ModalAction = ModalAction;
exports.ModalContent = ModalContent;
exports.ModalTitle = ModalTitle;
