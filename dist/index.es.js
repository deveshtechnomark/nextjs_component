import React from 'react';

var styles = {"main":"index-module_main__7DdGM","circle":"index-module_circle__GsSil","scaleUp":"index-module_scaleUp__v9Exb","scaleDown":"index-module_scaleDown__UNuKs","minimize":"index-module_minimize__bT0-I","magnify":"index-module_magnify__-Z84H","fromMiddle":"index-module_fromMiddle__l44Km","medium":"index-module_medium__YZMn-","small":"index-module_small__C0Pt0"};

var Close = function Close(_a) {
  var variant = _a.variant;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: styles.main
  }, React.createElement("button", {
    className: "".concat(styles.fromMiddle, " ").concat(styles.circle, " ").concat(variant === "small" ? styles.small : styles.medium, " ").concat(styles.scaleUp),
    "data-animation": "minimize"
  }, React.createElement("span", null))));
};

export { Close };
//# sourceMappingURL=index.es.js.map
