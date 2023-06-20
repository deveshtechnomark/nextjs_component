'use strict';

var React = require('react');

var Close = function Close() {
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "main"
  }, React.createElement("button", {
    className: "fromMiddle circle scaleUp",
    "data-animation": "minimize"
  }, React.createElement("span", null))));
};

exports.Close = Close;
