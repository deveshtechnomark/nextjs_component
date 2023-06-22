import React from 'react';
import { Tooltip } from 'tooltip';
import 'tooltip/dist/index.css';

var Close = function Close() {
  return React.createElement(React.Fragment, null, React.createElement(Tooltip, {
    position: "top",
    text: "Close"
  }, React.createElement("div", {
    className: "main"
  }, React.createElement("button", {
    className: "fromMiddle circle scaleUp",
    "data-animation": "minimize"
  }, React.createElement("span", null)))));
};

export { Close };
//# sourceMappingURL=index.es.js.map
