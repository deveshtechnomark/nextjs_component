'use strict';

var React = require('react');

var styles$1 = {"range":"index-module_range__g-6Gl","range_slide":"index-module_range_slide__vHxlw","circle":"index-module_circle__Prg9I","range_value":"index-module_range_value__nayF5","range_dot":"index-module_range_dot__mYEEN","bullet":"index-module_bullet__Q-dOG","bullet_1":"index-module_bullet_1__7e6nH","bullet_2":"index-module_bullet_2__HP4SU","bullet_3":"index-module_bullet_3__GETnX","bullet_4":"index-module_bullet_4__E4FYd","bullet_5":"index-module_bullet_5__aD6nE","bullet_6":"index-module_bullet_6__aSYq-","bullet_7":"index-module_bullet_7__LBp--","bullet_8":"index-module_bullet_8__lZYX2","bullet_9":"index-module_bullet_9__y25Bn"};

var genSlideStyle = function genSlideStyle(value) {
  return {
    point: {
      left: "calc(".concat(value * 10, "% - ").concat(1 * value, "px)")
    },
    range: {
      width: "".concat(value * 10, "%")
    }
  };
};
var Range = function Range(_a) {
  var dot = _a.dot,
    _b = _a.minValue,
    minValue = _b === void 0 ? 0 : _b,
    _c = _a.maxValue,
    maxValue = _c === void 0 ? 100 : _c,
    number = _a.number;
  var _d = React.useState(0),
    value = _d[0],
    setValue = _d[1];
  var handleChange = function handleChange(e) {
    setValue(Number(e.target.value));
  };
  var slideStyle = genSlideStyle(value);
  var numbers = Math.ceil((maxValue - minValue) / 10);
  var totalSteps = Array.apply(null, new Array(11)).map(function (el, i) {
    return i++;
  });
  return React.createElement("div", null, React.createElement("div", {
    className: "".concat(styles$1.range, " ").concat(dot && styles$1.range_dot)
  }, dot && React.createElement(React.Fragment, null, React.createElement("span", {
    className: styles$1.bullet
  }), React.createElement("span", {
    className: styles$1.bullet_1
  }), React.createElement("span", {
    className: styles$1.bullet_2
  }), React.createElement("span", {
    className: styles$1.bullet_3
  }), React.createElement("span", {
    className: styles$1.bullet_4
  }), React.createElement("span", {
    className: styles$1.bullet_5
  }), React.createElement("span", {
    className: styles$1.bullet_6
  }), React.createElement("span", {
    className: styles$1.bullet_7
  }), React.createElement("span", {
    className: styles$1.bullet_8
  })), React.createElement("span", {
    className: styles$1.range_value,
    style: slideStyle.range
  }), React.createElement("span", {
    className: styles$1.circle,
    style: slideStyle.point
  }), React.createElement("input", {
    className: styles$1.range_slide,
    name: "range",
    type: "range",
    min: "",
    max: "10",
    value: value,
    step: "1",
    onChange: handleChange
  })), number && React.createElement("div", {
    className: "".concat(styles$1.range_slide, " flex justify-between items-center ml-2 mt-1 text-[#6E6D7A] text-sm")
  }, totalSteps.map(function (i, index) {
    return React.createElement("span", {
      key: index
    }, minValue + index * numbers);
  })));
};

var styles = {"container":"range-module_container__qHHIK","range_slider":"range-module_range_slider__MKddC","progress":"range-module_progress__7lGhj"};

var MinMaxRange = function MinMaxRange(_a) {
  var minValue = _a.minValue,
    maxValue = _a.maxValue,
    minRange = _a.minRange,
    maxRange = _a.maxRange,
    number = _a.number;
  var gap = (maxRange - minRange) / 10;
  var _b = React.useState(minRange),
    minValueRange = _b[0],
    setMinValueRange = _b[1];
  var _c = React.useState(maxRange),
    maxValueRange = _c[0],
    setMaxValueRange = _c[1];
  var handleInputChange = function handleInputChange(e) {
    var _a = e.target,
      name = _a.name,
      value = _a.value;
    if (name === "min") {
      if (maxValueRange - Number(value) < gap) {
        setMinValueRange(maxValueRange - gap);
      } else {
        setMinValueRange(Number(value));
      }
    } else {
      if (Number(value) - minValueRange < gap) {
        setMaxValueRange(minValueRange + gap);
      } else {
        setMaxValueRange(Number(value));
      }
    }
  };
  var progressStyle = {
    left: "".concat((minValueRange - minValue) / (maxValue - minValue) * 100, "%"),
    right: "".concat(100 - (maxValueRange - minValue) / (maxValue - minValue) * 100, "%")
  };
  var numbers = Math.ceil((maxValue - minValue) / 10);
  var totalSteps = Array.apply(null, new Array(11)).map(function (_el, i) {
    return i++;
  });
  return React.createElement("div", {
    className: styles.container
  }, React.createElement("div", {
    className: styles.range_slider
  }, React.createElement("div", {
    className: styles.progress,
    style: progressStyle
  }), React.createElement("input", {
    type: "range",
    name: "min",
    min: minValue,
    max: maxValue,
    value: minValueRange,
    onChange: handleInputChange
  }), React.createElement("input", {
    type: "range",
    name: "max",
    min: minValue,
    max: maxValue,
    value: maxValueRange,
    onChange: handleInputChange
  })), number && React.createElement("div", {
    className: "flex justify-between items-center ml-2 mt-1 text-[#6E6D7A] text-sm"
  }, totalSteps.map(function (i, index) {
    return React.createElement("span", {
      key: index
    }, minValue + index * numbers);
  })));
};

exports.MinMaxRange = MinMaxRange;
exports.Range = Range;
//# sourceMappingURL=index.js.map
