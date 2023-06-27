'use strict';

var React = require('react');
var tooltip = require('tooltip');
require('tooltip/dist/index.css');

var styles = {"main":"index-module_main__7DdGM","circle":"index-module_circle__GsSil","scaleUp":"index-module_scaleUp__v9Exb","scaleDown":"index-module_scaleDown__UNuKs","minimize":"index-module_minimize__bT0-I","magnify":"index-module_magnify__-Z84H","fromMiddle":"index-module_fromMiddle__l44Km"};

var Close = function Close() {
  return React.createElement(React.Fragment, null, React.createElement(tooltip.Tooltip, {
    position: "top",
    text: "Close"
  }, React.createElement("div", {
    className: styles.main
  }, React.createElement("button", {
    className: "".concat(styles.fromMiddle, " ").concat(styles.circle, " ").concat(styles.scaleUp),
    "data-animation": "minimize"
  }, React.createElement("span", null)))));
};

exports.Close = Close;
//# sourceMappingURL=index.js.map
