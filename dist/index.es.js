import React, { useState, useEffect } from 'react';

var Switch = function Switch(_a) {
  var checked = _a.checked,
    disabled = _a.disabled,
    variant = _a.variant;
  var _b = useState(checked || false),
    isChecked = _b[0],
    setIsChecked = _b[1];
  var handleClick = function handleClick() {
    if (!disabled) {
      setIsChecked(function (prevChecked) {
        return !prevChecked;
      });
    }
  };
  useEffect(function () {
    setIsChecked(checked || false);
  }, [checked]);
  var getColorClasses = function getColorClasses() {
    switch (variant) {
      case "invalid":
        return "bg-defaultRed";
      default:
      case "primary":
        return "bg-primary";
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "group relative border-[1.5px] border-lightSilver ".concat(variant === "invalid" ? "hover:border-defaultRed" : "hover:border-primary", " focus:outline-none bg-white rounded-full shadow-sm h-[22px] overflow-hidden w-[40px] relative ").concat(disabled ? "cursor-not-allowed opacity-60 pointer-events-none" : ""),
    id: "btn",
    onClick: handleClick,
    disabled: disabled
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-full ".concat(getColorClasses(), " absolute top-[4px] h-[13px] w-[13px] left-[4px] transition-transform duration-[800ms] linear"),
    style: {
      transform: isChecked ? "scale(4.5)" : "scale(1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "rounded-full bg-white absolute top-[4px] h-[13px] w-[13px] right-[4px] transition-transform duration-[800ms] linear",
    style: {
      transform: isChecked ? "scale(1)" : "scale(1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute rounded-full ".concat(variant === "invalid" ? "group-hover:delay-0 group-hover:bg-defaultRed" : " group-hover:delay-0 group-hover:bg-primary", " absolute top-[20%] h-[13px] w-[13px] left-[4px] ").concat(isChecked ? {
      getColorClasses: getColorClasses
    } : "delay-[450ms] bg-pinkSwan")
  }), /*#__PURE__*/React.createElement("div", {
    className: "rounded-full bg-white absolute top-[4px] h-[13px] w-[13px] right-[4px]"
  })));
};

export { Switch };
