import React, { useState, useEffect } from 'react';

var Switch = function Switch(_a) {
  var _b = _a.checked,
    checked = _b === void 0 ? false : _b,
    _c = _a.disabled,
    disabled = _c === void 0 ? false : _c,
    _d = _a.primary,
    primary = _d === void 0 ? false : _d,
    _e = _a.secondary,
    secondary = _e === void 0 ? false : _e,
    _f = _a.success,
    success = _f === void 0 ? false : _f,
    _g = _a.info,
    info = _g === void 0 ? false : _g,
    _h = _a.warning,
    warning = _h === void 0 ? false : _h,
    _j = _a.error,
    error = _j === void 0 ? false : _j;
  var _k = useState(checked),
    isChecked = _k[0],
    setIsChecked = _k[1];
  useEffect(function () {
    setIsChecked(checked);
  }, [checked]);
  useEffect(function () {
    if (error || primary || success || secondary || info || warning) {
      setIsChecked(true);
    }
  }, [primary, success, secondary, info, warning, error]);
  var handleChange = function handleChange() {
    setIsChecked(!isChecked);
  };
  return /*#__PURE__*/React.createElement("label", {
    className: "relative inline-flex items-center cursor-pointer"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    value: "",
    className: "sr-only peer",
    checked: isChecked,
    disabled: disabled,
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-11 h-6 bg-csSwitchGray ".concat(disabled ? "cursor-not-allowed" : "cursor-pointer peer-focus:outline-none", " rounded-full ").concat(isChecked ? "peer-checked:after:translate-x-full" : "", " peer-checked:after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-csSwitchWhite after:rounded-full after:h-5 after:w-5 after:transition-all  ").concat(isChecked ? "peer-checked:bg-csSwitchDefalut" : "", " ").concat(primary ? "peer-checked:bg-csSwitchDefalut" : "", " ").concat(secondary ? "peer-checked:bg-csSwitchSecondary" : "", " ").concat(success ? "peer-checked:bg-csSwitchSuccess" : "", " ").concat(info ? "peer-checked:bg-csSwitchInfo" : "", " ").concat(warning ? "peer-checked:bg-csSwitchWarning" : "", " ").concat(error ? "peer-checked:bg-csSwitchError" : "")
  }));
};

export { Switch };
