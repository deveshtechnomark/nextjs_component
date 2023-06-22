'use strict';

var React = require('react');
var tooltip = require('tooltip');
require('tooltip/dist/index.css');

var Close = function Close() {
  return React.createElement(React.Fragment, null, React.createElement(tooltip.Tooltip, {
    position: "top",
    text: "Close"
  }, React.createElement("div", {
    className: "main"
  }, React.createElement("button", {
    className: "fromMiddle circle scaleUp",
    "data-animation": "minimize"
  }, React.createElement("span", null)))));
};

exports.Close = Close;
//# sourceMappingURL=index.js.map
