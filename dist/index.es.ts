import React from 'react';

var Close = function Close() {
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "main"
  }, React.createElement("button", {
    className: "fromMiddle circle scaleUp",
    "data-animation": "minimize"
  }, React.createElement("span", null))));
};

export { Close };
