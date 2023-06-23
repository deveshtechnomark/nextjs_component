import React, { useState, useEffect } from 'react';

var InputMask = function InputMask(_a) {
  var type = _a.type,
    setPrefix = _a.setPrefix,
    className = _a.className,
    setDelimiter = _a.setDelimiter,
    splitLengths = _a.splitLengths,
    id = _a.id,
    US = _a.US,
    label = _a.label;
  setPrefix ? setPrefix.split("") : [];
  var _b = useState(""),
    value = _b[0],
    setValue = _b[1];
  useEffect(function () {}, [value]);
  var getDefaultLabel = function getDefaultLabel(type) {
    switch (type) {
      case "numeral":
        return "Numeral";
      case "date":
        return "Date";
      case "time":
        return "Time";
      case "credit":
        return "Credit Card";
      case "phone":
        return "Phone Number";
      case "delimiter":
        return "Delimiter";
      case "prefix":
        return "Prefix";
      default:
        return "Label";
    }
  };
  var getDefaultPlaceholder = function getDefaultPlaceholder(type) {
    switch (type) {
      case "numeral":
        return "1,00,00,000";
      case "date":
        return US ? "DD/MM/YYYY" : "MM/DD/YYYY";
      case "time":
        return "15:58:25";
      case "credit":
        return "xxxx xxxx xxxx 1234";
      case "phone":
        return "9874 563 214";
      case "delimiter":
        return "Delimiter:'.'";
      case "prefix":
        return setPrefix || "+123";
    }
  };
  var changeHandler = function changeHandler(event) {
    var inputValue = event.target.value || "";
    //prefix inputmask
    if (type === "prefix") {
      var prefixValue = setPrefix || "+123";
      var splitLength = splitLengths || [3, 3, 3, 4];
      if (inputValue === prefixValue) {
        setValue(prefixValue);
      } else if (inputValue.startsWith(prefixValue)) {
        var numericValue = inputValue.substring(prefixValue.length).replace(/\D/g, "");
        var formattedValue = prefixValue;
        var currentIndex = 0;
        for (var _i = 0, splitLength_1 = splitLength; _i < splitLength_1.length; _i++) {
          var length_1 = splitLength_1[_i];
          var chunk = numericValue.substring(currentIndex, currentIndex + length_1);
          if (chunk) {
            formattedValue += " " + chunk;
          }
          currentIndex += length_1;
        }
        setValue(formattedValue);
      } else {
        setValue(prefixValue);
      }
    }
    //numeral inputmask
    else if (type === "numeral") {
      var numericValue = inputValue.replace(/[^0-9]/g, "");
      if (numericValue === "") {
        setValue("");
      } else {
        var reversed = numericValue.split("").reverse().join("");
        var result = reversed.match(/.{1,3}/g).join(",");
        var finalResult = result.split("").reverse().join("");
        setValue(finalResult);
      }
    }
    //date inputmask
    else if (type === "date") {
      var inputValue_1 = event.target.value || "";
      inputValue_1 = inputValue_1.replace(/[^0-9]/g, "");
      var formattedValue = "";
      if (inputValue_1.length >= 1) {
        formattedValue = inputValue_1.slice(0, 2);
      }
      if (inputValue_1.length >= 3) {
        formattedValue += "/" + inputValue_1.slice(2, 4);
      }
      if (inputValue_1.length >= 5) {
        formattedValue += "/" + inputValue_1.slice(4, 8);
      }
      setValue(formattedValue);
    }
    //time inputmask
    else if (type === "time") {
      var inputValue_2 = event.target.value || "";
      inputValue_2 = inputValue_2.replace(/[^0-9]/g, "");
      var formattedValue = "";
      if (inputValue_2.length >= 1) {
        formattedValue = inputValue_2.slice(0, 2);
      }
      if (inputValue_2.length >= 3) {
        formattedValue += ":" + inputValue_2.slice(2, 4);
      }
      if (inputValue_2.length >= 5) {
        formattedValue += ":" + inputValue_2.slice(4, 6);
      }
      setValue(formattedValue);
    }
    //credit card inputmask
    else if (type === "credit") {
      var inputValue_3 = event.target.value || "";
      inputValue_3 = inputValue_3.replace(/\s/g, "");
      inputValue_3 = inputValue_3.replace(/[^\d]/g, "");
      inputValue_3 = inputValue_3.slice(0, 16);
      var formattedValue = "";
      for (var i = 0; i < inputValue_3.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formattedValue += " ";
        }
        formattedValue += inputValue_3[i];
      }
      setValue(formattedValue);
    }
    //phone number inputmask
    else if (type === "phone") {
      var inputValue_4 = event.target.value || "";
      inputValue_4 = inputValue_4.replace(/\s/g, "");
      inputValue_4 = inputValue_4.replace(/[^\d]/g, "");
      inputValue_4 = inputValue_4.slice(0, 10);
      var formattedValue = "";
      for (var i = 0; i < inputValue_4.length; i++) {
        if (i === 4 || i === 7) {
          formattedValue += " ";
        }
        formattedValue += inputValue_4[i];
      }
      setValue(formattedValue);
    }
    //delimiter inputmask
    else if (type === "delimiter") {
      var inputValue_5 = event.target.value || "";
      if (!inputValue_5) {
        setValue("");
        return;
      }
      inputValue_5 = inputValue_5.replace(new RegExp((setDelimiter || ["·", "·"]).join("|"), "g"), "");
      var formattedValue = "";
      var delimiterIndex = 0;
      var currentLength = 0;
      for (var i = 0; i < inputValue_5.length; i++) {
        formattedValue += inputValue_5[i];
        currentLength++;
        if (delimiterIndex < (setDelimiter || ["·", "·"]).length && currentLength === (splitLengths || [3, 3, 3])[delimiterIndex]) {
          formattedValue += (setDelimiter || ["·", "·"])[delimiterIndex];
          delimiterIndex++;
          currentLength = 0;
        }
      }
      setValue(formattedValue);
    }
  };
  var defaultLabel = getDefaultLabel(type);
  var defaultPlaceholder = getDefaultPlaceholder(type);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs text-gray-600",
    htmlFor: id
  }, label || defaultLabel), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: id,
    className: "".concat(className, " block w-auto text-xs border-b-2 border-gray-300 outline-none bg-transparent"),
    onChange: changeHandler,
    value: value,
    placeholder: defaultPlaceholder
  }));
};

export { InputMask as default };
