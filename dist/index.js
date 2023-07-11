'use strict';

var React = require('react');

var styles$1 = {"range":"index-module_range__g-6Gl","range_slide":"index-module_range_slide__vHxlw","circle":"index-module_circle__Prg9I","range_value":"index-module_range_value__nayF5","dot":"index-module_dot__qK6C7","line":"index-module_line__DMEyC"};

var genSlideStyle = function genSlideStyle(value, gap, minRange, maxRange, getValue) {
  var numbers = Math.ceil((maxRange - minRange) / gap);
  var x = minRange + value * numbers;
  getValue(x);
  return {
    point: {
      left: "calc(".concat(value * (100 / gap), "% - ").concat(1 * value, "px)")
    },
    range: {
      width: "".concat(value * (100 / gap), "%")
    }
  };
};
var Range = function Range(_a) {
  var _b = _a.variant,
    variant = _b === void 0 ? "dot" : _b,
    _c = _a.minRange,
    minRange = _c === void 0 ? 0 : _c,
    _d = _a.maxRange,
    maxRange = _d === void 0 ? 100 : _d,
    number = _a.number,
    _e = _a.gap,
    gap = _e === void 0 ? 10 : _e,
    getValue = _a.getValue;
  var _f = React.useState(0),
    value = _f[0],
    setValue = _f[1];
  var slideStyle = genSlideStyle(value, gap, minRange, maxRange, getValue);
  var numbers = Math.ceil((maxRange - minRange) / gap);
  var totalSteps = Array.apply(null, new Array(gap + 1)).map(function (el, i) {
    return i++;
  });
  var handleChange = function handleChange(e) {
    setValue(Number(e.target.value));
  };
  return React.createElement("div", null, React.createElement("div", {
    className: "".concat(styles$1.range)
  }, React.createElement("div", {
    className: "flex items-center justify-between w-full absolute ".concat(variant === "dot" && "top-[1.2px]")
  }, totalSteps.map(function (i, index) {
    return React.createElement("span", {
      className: "".concat(variant === "line" ? "".concat(styles$1.line) : "".concat(styles$1.dot)),
      key: index
    });
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
    max: gap,
    value: value,
    step: "1",
    onChange: handleChange
  })), number && React.createElement("div", {
    className: "".concat(styles$1.range_slide, " flex justify-between items-center mt-1 text-[#6E6D7A] text-sm")
  }, totalSteps.map(function (i, index) {
    return React.createElement("span", {
      key: index
    }, minRange + index * numbers);
  })));
};

var styles = {"container":"range-module_container__qHHIK","range_slider":"range-module_range_slider__MKddC","dot":"range-module_dot__mwwbV","line":"range-module_line__k-y-T","progress":"range-module_progress__7lGhj"};

var MinMaxRange = function MinMaxRange(_a) {
  var _b = _a.variant,
    variant = _b === void 0 ? "dot" : _b,
    _c = _a.minValue,
    minValue = _c === void 0 ? 0 : _c,
    _d = _a.maxValue,
    maxValue = _d === void 0 ? 100 : _d,
    minRange = _a.minRange,
    maxRange = _a.maxRange,
    number = _a.number,
    getValue = _a.getValue,
    _e = _a.gap,
    gap = _e === void 0 ? 10 : _e;
  var gapValue = (maxRange - minRange) / gap;
  var _f = React.useState(minRange),
    minValueRange = _f[0],
    setMinValueRange = _f[1];
  var _g = React.useState(maxRange),
    maxValueRange = _g[0],
    setMaxValueRange = _g[1];
  var handleInputChange = function handleInputChange(e) {
    var _a = e.target,
      name = _a.name,
      value = _a.value;
    if (name === "min") {
      if (maxValueRange - Number(value) < gapValue) {
        setMinValueRange(maxValueRange - gapValue);
      } else {
        setMinValueRange(Number(value));
      }
    } else {
      if (Number(value) - minValueRange < gapValue) {
        setMaxValueRange(minValueRange + gapValue);
      } else {
        setMaxValueRange(Number(value));
      }
    }
  };
  getValue(minValueRange, maxValueRange);
  var progressStyle = {
    left: "".concat((minValueRange - minValue) / (maxValue - minValue) * 100, "%"),
    right: "".concat(100 - (maxValueRange - minValue) / (maxValue - minValue) * 100, "%")
  };
  var numbers = Math.ceil((maxValue - minValue) / gap);
  var totalSteps = Array.apply(null, new Array(gap + 1)).map(function (_el, i) {
    return i++;
  });
  return React.createElement("div", {
    className: styles.container
  }, React.createElement("div", {
    className: styles.range_slider
  }, React.createElement("div", {
    className: "flex items-center justify-between w-full absolute ".concat(variant === "dot" && "top-[1.2px]")
  }, totalSteps.map(function (i, index) {
    return React.createElement("span", {
      className: "".concat(variant === "line" ? "".concat(styles.line) : "".concat(styles.dot)),
      key: index
    });
  })), React.createElement("div", {
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
