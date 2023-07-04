'use strict';

var React = require('react');

var styles = {"tooltip":"style-module_tooltip__56CEr","top":"style-module_top__93xdT","slideDown":"style-module_slideDown__WbB-l","bottom":"style-module_bottom__KoZlX","slideUp":"style-module_slideUp__rLxYS","left":"style-module_left__9v2w5","slideLeft":"style-module_slideLeft__r1vsH","right":"style-module_right__UQlJn","slideRight":"style-module_slideRight__dI10q","tool":"style-module_tool__PUTl1"};

var Tooltip = function Tooltip(_a) {
  var content = _a.content,
    position = _a.position,
    children = _a.children;
  var text = content === null || content === void 0 ? void 0 : content.toString();
  var textLength = text ? text.length : 0;
  return React.createElement("div", {
    className: "".concat(styles.tooltip, " relative cursor-pointer p-2 text-2xl max-w-fit")
  }, React.createElement("span", {
    className: "".concat(styles.tool, " flex justify-center items-center min-w-[300px] ").concat(textLength <= 6 && "!min-w-[100px]", " tooltipText absolute bg-[#bcf1e8] text-[#333333] whitespace-nowrap px-[10px] py-[15px] border border-[#02b89d] rounded-md opacity-0 before:absolute before:w-3 before:h-3 before:bg-[#bcf1e8] before:border-t before:border-[#02b89d] before:border-r ").concat(position === "top" && "".concat(styles.top, " left-1/2 transform -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:bottom-[-7px] before:transform before:rotate-[135deg]"), " \n        ").concat(position === "bottom" && "".concat(styles.bottom, " left-1/2 transform -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:top-[-7px] before:transform before:rotate-[-45deg]"), " \n        ").concat(position === "left" && "".concat(styles.left, " top-1/2 transform -translate-y-1/2 before:top-1/2 before:-translate-y-1/2 before:right-[-2.2%] ").concat(textLength <= 6 && "before:right-[-7%]", " before:transform before:rotate-[45deg]"), " \n        ").concat(position === "right" && "".concat(styles.right, " top-1/2 transform -translate-y-1/2 before:top-1/2 before:-translate-y-1/2 before:left-[-2.2%] ").concat(textLength <= 6 && "before:left-[-7%]", " before:transform before:rotate-[-135deg]"))
  }, content), React.createElement("span", null, children));
};

exports.Tooltip = Tooltip;
