import React, { useRef, useState, useEffect } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Styles = {"saturation":"styles-module_saturation__7Y0dQ","cursor":"styles-module_cursor__6kTAp","color_picker__color_block":"styles-module_color_picker__color_block__D73Ku","color_picker__cursor":"styles-module_color_picker__cursor__5DgSE","color_picker__grid":"styles-module_color_picker__grid__kCACN","color_picker__label":"styles-module_color_picker__label__DzIUX","color_picker__input":"styles-module_color_picker__input__OvUmh","color_picker__rgba":"styles-module_color_picker__rgba__6D6k9","color_box":"styles-module_color_box__2NwBa","color_box_white":"styles-module_color_box_white__cqAt6","color_box_gray":"styles-module_color_box_gray__a-pIV","color_box_primary":"styles-module_color_box_primary__SiWe7","color_box_info":"styles-module_color_box_info__-ckTL","color_box_success":"styles-module_color_box_success__U6wyH","color_box_warning":"styles-module_color_box_warning__6fD88","color_box_danger":"styles-module_color_box_danger__-DF6k","color_box_secondary":"styles-module_color_box_secondary__P7nmT","color_box_dark":"styles-module_color_box_dark__NTalG","wrapper":"styles-module_wrapper__qcf8m"};

var ColorPicker = function ColorPicker(props) {
  var colorPickerRef = useRef(null);
  var _a = useState(false),
    isDragging = _a[0],
    setIsDragging = _a[1];
  var _b = useState(""),
    colorBoxValue = _b[0],
    setColorBoxValue = _b[1];
  var _c = useState({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }),
    rgba = _c[0],
    setRGBA = _c[1];
  var _d = useState({
      x: 0,
      y: 0
    }),
    cursorPosition = _d[0],
    setCursorPosition = _d[1];
  var _e = useState(100),
    opacityPercentage = _e[0],
    setOpacityPercentage = _e[1];
  var _f = useState("#f10909"),
    hex = _f[0],
    setHex = _f[1];
  var _g = useState(false),
    isDragging2 = _g[0];
    _g[1];
  var _h = useState({
      x: 0,
      y: 0
    }),
    cursorPosition2 = _h[0],
    setCursorPosition2 = _h[1];
  var _j = useState({
      r: 0,
      g: 0,
      b: 0,
      a: 100
    }),
    colorBlockRGBA = _j[0],
    setColorBlockRGBA = _j[1];
  var _k = useState(false),
    isInputFocused = _k[0],
    setIsInputFocused = _k[1];
  var colorBlockRef = useRef(null);
  useEffect(function () {
    var colorBlock = colorBlockRef.current;
    var ctx_colorBlock = colorBlock === null || colorBlock === void 0 ? void 0 : colorBlock.getContext("2d");
    var colorBlockWidth = (colorBlock === null || colorBlock === void 0 ? void 0 : colorBlock.width) || 0;
    var colorBlockHeight = (colorBlock === null || colorBlock === void 0 ? void 0 : colorBlock.height) || 0;
    var colorBlockState = {
      x: 0,
      y: 0
    };
    var colorPickerState = {
      drag: false,
      rgbaColor: hex
    };
    if (ctx_colorBlock) {
      ctx_colorBlock.rect(0, 0, colorBlockWidth, colorBlockHeight);
      fillColorBlockGradient();
    }
    function fillColorBlockGradient() {
      if (ctx_colorBlock) {
        ctx_colorBlock.fillStyle = colorPickerState.rgbaColor;
        ctx_colorBlock.fillRect(0, 0, colorBlockWidth, colorBlockHeight);
        var grdWhite = ctx_colorBlock.createLinearGradient(0, 0, colorBlockWidth, 0);
        grdWhite.addColorStop(0, "rgba(255, 255, 255, 1)");
        grdWhite.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx_colorBlock.fillStyle = grdWhite;
        ctx_colorBlock.fillRect(0, 0, colorBlockWidth, colorBlockHeight);
        var grdBlack = ctx_colorBlock.createLinearGradient(0, 0, 0, colorBlockHeight);
        grdBlack.addColorStop(0, "rgba(0, 0, 0, 0)");
        grdBlack.addColorStop(1, "rgba(0, 0, 0, 1)");
        ctx_colorBlock.fillStyle = grdBlack;
        ctx_colorBlock.fillRect(0, 0, colorBlockWidth, colorBlockHeight);
      }
    }
    function mousedownColorBlock(e) {
      e.preventDefault();
      colorPickerState.drag = true;
      changeColorVariable(e);
      setCursorPosition2({
        x: e.clientX,
        y: e.clientY
      });
    }
    function mousemoveColorBlock(e) {
      if (colorPickerState.drag) {
        changeColorVariable(e);
        setCursorPosition2({
          x: e.clientX,
          y: e.clientY
        });
      }
    }
    function mouseupColorBlock(e) {
      colorPickerState.drag = false;
    }
    function mouseoutColorBlock(e) {
      colorPickerState.drag = false;
    }
    function changeColorVariable(e) {
      if (e) {
        colorBlockState.x = e.offsetX;
        colorBlockState.y = e.offsetY;
      }
      if (ctx_colorBlock) {
        var imageData = ctx_colorBlock.getImageData(colorBlockState.x, colorBlockState.y, 1, 1).data;
        var newRGBA = {
          r: imageData[0],
          g: imageData[1],
          b: imageData[2],
          a: 1
        };
        setColorBlockRGBA(newRGBA); // Set the new RGBA value for the color block
        setHex(getHexColor(newRGBA));
      }
    }
    if (colorBlock) {
      colorBlock.addEventListener("mousedown", mousedownColorBlock);
      colorBlock.addEventListener("mousemove", mousemoveColorBlock);
      colorBlock.addEventListener("mouseup", mouseupColorBlock);
      colorBlock.addEventListener("mouseout", mouseoutColorBlock);
    }
    var handleMouseMove = function handleMouseMove(event) {
      if (isDragging && colorPickerRef.current) {
        updateColorAndPosition(event);
      }
    };
    var handleMouseUp = function handleMouseUp() {
      var _a;
      setIsDragging(false);
      (_a = colorPickerRef.current) === null || _a === void 0 ? void 0 : _a.classList.remove("dragging");
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return function () {
      if (colorBlock) {
        colorBlock.removeEventListener("mousedown", mousedownColorBlock);
        colorBlock.removeEventListener("mousemove", mousemoveColorBlock);
        colorBlock.removeEventListener("mouseup", mouseupColorBlock);
        colorBlock.removeEventListener("mouseout", mouseoutColorBlock);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, isInputFocused]);
  var handleHexChange = function handleHexChange(e) {
    var newHex = e.target.value;
    setHex(newHex);
    setRGBA(__assign(__assign({}, rgba), getRGBAFromHex(newHex)));
    updateCursorPosition(newHex); // Update the cursor position on the hue line
  };

  var updateCursorPosition = function updateCursorPosition(newHex) {
    var color = getRGBAFromHex(newHex);
    var percentageX = getColorPercentageX(color);
    var cursorX = percentageX / 100 * colorPickerRef.current.offsetWidth;
    setCursorPosition({
      x: cursorX,
      y: cursorPosition.y
    });
  };
  var getColorPercentageX = function getColorPercentageX(color) {
    // Calculate the percentage of color on the hue line based on its RGB values
    var r = color.r,
      g = color.g,
      b = color.b;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var diff = max - min;
    var hue;
    if (diff === 0) {
      hue = 0;
    } else if (max === r) {
      hue = (g - b) / diff % 6;
    } else if (max === g) {
      hue = (b - r) / diff + 2;
    } else {
      hue = (r - g) / diff + 4;
    }
    var percentageX = hue / 6 * 100;
    return percentageX;
  };
  var handleInputFocus = function handleInputFocus() {
    setIsInputFocused(true);
    setHex(hex);
  };
  var handleInputBlur = function handleInputBlur() {
    setIsInputFocused(false);
  };
  useEffect(function () {
    var newRGBA = __assign(__assign({}, rgba), colorBlockRGBA);
    setRGBA(newRGBA);
    setHex(getHexColor(newRGBA));
  }, [colorBlockRGBA]);
  var handleMouseDown = function handleMouseDown(event) {
    setIsDragging(true);
    updateColorAndPosition(event.nativeEvent);
  };
  var updateColorAndPosition = function updateColorAndPosition(event) {
    if (colorPickerRef.current) {
      var rect = colorPickerRef.current.getBoundingClientRect();
      var gradientWidth = rect.width;
      var gradientHeight = rect.height;
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      var clampedX = Math.max(0, Math.min(gradientWidth, x));
      var clampedY = Math.max(0, Math.min(gradientHeight, y));
      var percentageX = clampedX / gradientWidth * 100;
      var color = getColorAtPosition(percentageX);
      setRGBA(color);
      setCursorPosition({
        x: clampedX,
        y: clampedY
      });
      setHex(getHexColor(color));
    }
  };
  var getColorAtPosition = function getColorAtPosition(x, y) {
    var colors = [{
      r: 255,
      g: 0,
      b: 0,
      a: 1
    }, {
      r: 255,
      g: 255,
      b: 0,
      a: 1
    }, {
      r: 0,
      g: 255,
      b: 0,
      a: 1
    }, {
      r: 0,
      g: 255,
      b: 255,
      a: 1
    }, {
      r: 0,
      g: 0,
      b: 255,
      a: 1
    }, {
      r: 255,
      g: 0,
      b: 255,
      a: 1
    }, {
      r: 255,
      g: 0,
      b: 0,
      a: 1
    }];
    var index = Math.floor((colors.length - 1) * (x / 100));
    var currentColor = colors[index];
    var nextColor = colors[index + 1] || colors[index];
    var colorPercentage = x % (100 / (colors.length - 1)) / (100 / (colors.length - 1));
    var r = interpolateColorComponent(currentColor.r, nextColor.r, colorPercentage);
    var g = interpolateColorComponent(currentColor.g, nextColor.g, colorPercentage);
    var b = interpolateColorComponent(currentColor.b, nextColor.b, colorPercentage);
    var a = interpolateColorComponent(currentColor.a, nextColor.a, colorPercentage);
    return {
      r: r,
      g: g,
      b: b,
      a: a
    };
  };
  var interpolateColorComponent = function interpolateColorComponent(start, end, percentage) {
    return Math.round(start + (end - start) * percentage);
  };
  var getHexColor = function getHexColor(color) {
    var r = color.r,
      g = color.g,
      b = color.b;
    var hexR = r.toString(16).padStart(2, "0");
    var hexG = g.toString(16).padStart(2, "0");
    var hexB = b.toString(16).padStart(2, "0");
    return "#".concat(hexR).concat(hexG).concat(hexB);
  };
  var _l = useState(1),
    opacity = _l[0],
    setOpacity = _l[1];
  var _m = useState(false),
    open = _m[0],
    setOpen = _m[1];
  var handleOpacityChange = function handleOpacityChange(e) {
    var newOpacity = parseFloat(e.target.value);
    setOpacity(newOpacity);
    if (props.name === "a") {
      var newOpacity1 = parseFloat(e.target.value);
      setOpacity(newOpacity1);
    }
    // Calculate the percentage and update the state
    var percentage = Math.round(newOpacity * 100);
    setOpacityPercentage(percentage);
    // Update the alpha value in the rgba state
    setRGBA(function (prevRGBA) {
      return __assign(__assign({}, prevRGBA), {
        a: newOpacity
      });
    });
  };
  var getRGBAFromHex = function getRGBAFromHex(hexColor) {
    var color = hexColor.replace("#", "");
    var r = parseInt(color.substring(0, 2), 16);
    var g = parseInt(color.substring(2, 4), 16);
    var b = parseInt(color.substring(4, 6), 16);
    return {
      r: r,
      g: g,
      b: b,
      a: rgba.a
    };
  };
  var handleRGBChange = function handleRGBChange(e) {
    var _a;
    var _b = e.target,
      name = _b.name,
      value = _b.value;
    var newRGB = __assign(__assign({}, rgba), (_a = {}, _a[name] = parseInt(value, 10), _a));
    setRGBA(newRGB);
    setColorBlockRGBA(newRGB);
    setHex(getHexColor(newRGB));
  };
  var rgbaColorValue = "".concat(hex).concat(opacity !== 1 ? Math.round(opacity * 255).toString(16) : "");
  useEffect(function () {
    console.log(colorBoxValue);
    props.onChange(colorBoxValue || rgbaColorValue);
  }, [colorBoxValue, rgbaColorValue]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-sm max-h-[230px] rounded overflow-hidden shadow-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-6 py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: colorBoxValue || rgbaColorValue,
      width: "30px",
      height: "30px",
      margin: "5px 10px 5px 0",
      borderRadius: "5px",
      border: "2px solid ".concat(colorBoxValue || rgbaColorValue)
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "text my-2"
  }, "Standard Color"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles.color_box, " ").concat(Styles.color_box_white),
    onClick: function onClick() {
      setColorBoxValue("#FFFFFF");
      setOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles.color_box, " ").concat(Styles.color_box_gray),
    onClick: function onClick() {
      setColorBoxValue("#D8D8D8");
      setOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles.color_box, " ").concat(Styles.color_box_primary),
    onClick: function onClick() {
      setColorBoxValue("#02B89D");
      setOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles.color_box, " ").concat(Styles.color_box_secondary),
    onClick: function onClick() {
      setColorBoxValue("#069CDE");
      setOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles.color_box, " ").concat(Styles.color_box_success),
    onClick: function onClick() {
      setColorBoxValue("#135736");
      setOpen(false);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles.color_box, " ").concat(Styles.color_box_danger),
    onClick: function onClick() {
      setColorBoxValue("#DC3545");
      setOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles.color_box, " ").concat(Styles.color_box_warning),
    onClick: function onClick() {
      setColorBoxValue("#FFC107");
      setOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles.color_box, " ").concat(Styles.color_box_info),
    onClick: function onClick() {
      setColorBoxValue("#0DCAF0");
      setOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles.color_box, " ").concat(Styles.color_box_dark),
    onClick: function onClick() {
      setColorBoxValue("#333333");
      setOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles.wrapper),
    onClick: function onClick() {
      setColorBoxValue("");
      setHex("");
      setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "box empty"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "divide-y divide-gary-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center py-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-center py-2",
    onClick: function onClick() {
      setOpen(true), setColorBoxValue("");
    },
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-6 h-6 text-gray-800 text-custom-color",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 21 21"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: 'currentcolor',
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
  })), /*#__PURE__*/React.createElement("p", {
    className: "ml-2"
  }, "More Color")))))))), /*#__PURE__*/React.createElement("div", {
    className: "".concat(open ? "" : "hidden", " rounded overflow-hidden shadow-lg"),
    style: {
      width: "330px",
      height: "370px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles.color_picker__color_block),
    ref: colorPickerRef
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      "float": "right",
      margin: '5px 5px 5px 5px',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-3 h-3 text-custom-color",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 14 14"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentcolor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "px-1 py-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-xl mb-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles.color_picker__gradient)
  }, /*#__PURE__*/React.createElement("canvas", {
    className: "".concat(Styles.color_picker__color_block),
    ref: colorBlockRef,
    width: "322",
    height: "200",
    style: {
      borderRadius: "5px",
      cursor: isDragging2 ? "grabbing" : "crosshair"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles.color_picker__cursor),
    style: {
      left: "".concat(cursorPosition2.x, "px"),
      top: "".concat(cursorPosition2.y, "px")
    }
  })), /*#__PURE__*/React.createElement("p", null, "Hue"), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles.saturation),
    ref: colorPickerRef,
    onMouseDown: handleMouseDown
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles.cursor),
    style: {
      border: '5px solid rgb(248, 248, 248)',
      background: hex,
      position: "absolute",
      top: "0px",
      left: "".concat(cursorPosition.x, "px"),
      cursor: isDragging ? "grabbing" : "grab"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "5px 0 0 0"
    }
  }, "Opacity:", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      "float": "right"
    }
  }, opacityPercentage, "%")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "1",
    step: "0.01",
    value: opacity,
    onChange: handleOpacityChange,
    style: {
      WebkitAppearance: "none",
      appearance: "none",
      width: "100%",
      height: "8px",
      background: "linear-gradient(to right, rgba(0, 0, 0, 0), ".concat(rgbaColorValue, ")"),
      borderRadius: "3px",
      outline: "none",
      margin: "0",
      padding: "0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex align-center gap-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("span", null, "Hex"), /*#__PURE__*/React.createElement("input", {
    className: "".concat(Styles.color_picker__input, " ").concat(isInputFocused ? "focused" : ""),
    type: "text",
    value: "".concat(hex).concat(opacity !== 1 ? Math.round(opacity * 255).toString(16) : ""),
    onChange: handleHexChange,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("span", null, "R"), /*#__PURE__*/React.createElement("input", {
    className: "".concat(Styles.color_picker__rgba, " ").concat(isInputFocused ? "focused" : ""),
    type: "number",
    name: "r",
    min: 0,
    max: 255,
    value: rgba.r,
    onChange: handleRGBChange,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("span", null, "G"), /*#__PURE__*/React.createElement("input", {
    className: "".concat(Styles.color_picker__rgba, " ").concat(isInputFocused ? "focused" : ""),
    type: "number",
    name: "g",
    min: 0,
    max: 255,
    value: rgba.g,
    onChange: handleRGBChange,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("span", null, "B"), /*#__PURE__*/React.createElement("input", {
    className: "".concat(Styles.color_picker__rgba, " ").concat(isInputFocused ? "focused" : ""),
    type: "number",
    name: "b",
    min: 0,
    max: 255,
    value: rgba.b,
    onChange: handleRGBChange,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("span", null, "A"), /*#__PURE__*/React.createElement("input", {
    className: "".concat(Styles.color_picker__rgba),
    type: "number",
    name: "a",
    value: rgba.a,
    onChange: handleOpacityChange,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur
  }))))))));
};

export { ColorPicker };
