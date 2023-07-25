import React from 'react';

var styles = {"main":"index-module_main__7DdGM","smallTooltip":"index-module_smallTooltip__gb2hi","mediumTooltip":"index-module_mediumTooltip__fLw36","circle":"index-module_circle__GsSil","scaleUp":"index-module_scaleUp__v9Exb","scaleDown":"index-module_scaleDown__UNuKs","minimize":"index-module_minimize__bT0-I","magnify":"index-module_magnify__-Z84H","fromMiddle":"index-module_fromMiddle__l44Km","large":"index-module_large__A68CE","medium":"index-module_medium__YZMn-","small":"index-module_small__C0Pt0"};

var Close = function Close(_a) {
  var variant = _a.variant;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "".concat(styles.main, " ").concat(variant === "small" && styles.smallTooltip, " ").concat(variant === "medium" && styles.mediumTooltip)
  }, React.createElement("button", {
    className: "".concat(styles.fromMiddle, " ").concat(styles.circle, " ").concat(variant === "small" ? styles.small : variant === "medium" ? styles.medium : styles.large, " ").concat(styles.scaleUp),
    "data-animation": "minimize"
  }, React.createElement("span", null))));
};

export { Close };
//# sourceMappingURL=index.es.js.map
