import React, { useRef, useState, useEffect } from 'react';
import { Select } from 'select-dropdown';
import 'select-dropdown/dist/index.css';

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
/* global Reflect, Promise, SuppressedError, Symbol */


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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var data = [{
  value: "+91",
  label: "+91 🇮🇳"
}, {
  value: "+93",
  label: "+93 🇦🇫"
}, {
  value: "+358",
  label: "+358 🇦🇽"
}, {
  value: "+355",
  label: "+355 🇦🇱"
}, {
  value: "+213",
  label: "+213 🇩🇿"
}, {
  value: "+1684",
  label: "+1684 🇦🇸"
}, {
  value: "+376",
  label: "+376 🇦🇩"
}, {
  value: "+244",
  label: "+244 🇦🇴"
}, {
  value: "+1264",
  label: "+1264 🇦🇮"
}, {
  value: "+672",
  label: "+672 🇦🇶"
}, {
  value: "+1268",
  label: "+1268 🇦🇬"
}, {
  value: "+54",
  label: "+54 🇦🇷"
}, {
  value: "+374",
  label: "+374 🇦🇲"
}, {
  value: "+297",
  label: "+297 🇦🇼"
}, {
  value: "+61",
  label: "+61 🇦🇺"
}, {
  value: "+43",
  label: "+43 🇦🇹"
}, {
  value: "+994",
  label: "+994 🇦🇿"
}, {
  value: "+1242",
  label: "+1242 🇧🇸"
}, {
  value: "+973",
  label: "+973 🇧🇭"
}, {
  value: "+880",
  label: "+880 🇧🇩"
}, {
  value: "+1246",
  label: "+1246 🇧🇧"
}, {
  value: "+375",
  label: "+375 🇧🇾"
}, {
  value: "+32",
  label: "+32 🇧🇪"
}, {
  value: "+501",
  label: "+501 🇧🇿"
}, {
  value: "+229",
  label: "+229 🇧🇯"
}, {
  value: "+1441",
  label: "+1441 🇧🇲"
}, {
  value: "+975",
  label: "+975 🇧🇹"
}, {
  value: "+591",
  label: "+591 🇧🇴"
}, {
  value: "+387",
  label: "+387 🇧🇦"
}, {
  value: "+267",
  label: "+267 🇧🇼"
}, {
  value: "+55",
  label: "+55 🇧🇷"
}, {
  value: "+246",
  label: "+246 🇮🇴"
}, {
  value: "+673",
  label: "+673 🇧🇳"
}, {
  value: "+359",
  label: "+359 🇧🇬"
}, {
  value: "+226",
  label: "+226 🇧🇫"
}, {
  value: "+257",
  label: "+257 🇧🇮"
}, {
  value: "+855",
  label: "+855 🇰🇭"
}, {
  value: "+237",
  label: "+237 🇨🇲"
}, {
  value: "+1",
  label: "+1 🇨🇦"
}, {
  value: "+238",
  label: "+238 🇨🇻"
}, {
  value: "+345",
  label: "+345 🇰🇾"
}, {
  value: "+236",
  label: "+236 🇨🇫"
}, {
  value: "+235",
  label: "+235 🇹🇩"
}, {
  value: "+56",
  label: "+56 🇨🇱"
}, {
  value: "+86",
  label: "+86 🇨🇳"
}, {
  value: "+61",
  label: "+61 🇨🇽"
}, {
  value: "+61",
  label: "+61 🇨🇨"
}, {
  value: "+57",
  label: "+57 🇨🇴"
}, {
  value: "+269",
  label: "+269 🇰🇲"
}, {
  value: "+242",
  label: "+242 🇨🇬"
}, {
  value: "+243",
  label: "+243 🇨🇩"
}, {
  value: "+682",
  label: "+682 🇨🇰"
}, {
  value: "+506",
  label: "+506 🇨🇷"
}, {
  value: "+225",
  label: "+225 🇨🇮"
}, {
  value: "+385",
  label: "+385 🇭🇷"
}, {
  value: "+53",
  label: "+53 🇨🇺"
}, {
  value: "+357",
  label: "+357 🇨🇾"
}, {
  value: "+420",
  label: "+420 🇨🇿"
}, {
  value: "+45",
  label: "+45 🇩🇰"
}, {
  value: "+253",
  label: "+253 🇩🇯"
}, {
  value: "+1767",
  label: "+1767 🇩🇲"
}, {
  value: "+1849",
  label: "+1849 🇩🇴"
}, {
  value: "+593",
  label: "+593 🇪🇨"
}, {
  value: "+20",
  label: "+20 🇪🇬"
}, {
  value: "+503",
  label: "+503 🇸🇻"
}, {
  value: "+240",
  label: "+240 🇬🇶"
}, {
  value: "+291",
  label: "+291 🇪🇷"
}, {
  value: "+372",
  label: "+372 🇪🇪"
}, {
  value: "+251",
  label: "+251 🇪🇹"
}, {
  value: "+500",
  label: "+500 🇫🇰"
}, {
  value: "+298",
  label: "+298 🇫🇴"
}, {
  value: "+679",
  label: "+679 🇫🇯"
}, {
  value: "+358",
  label: "+358 🇫🇮"
}, {
  value: "+33",
  label: "+33 🇫🇷"
}, {
  value: "+594",
  label: "+594 🇬🇫"
}, {
  value: "+689",
  label: "+689 🇵🇫"
}, {
  value: "+241",
  label: "+241 🇬🇦"
}, {
  value: "+220",
  label: "+220 🇬🇲"
}, {
  value: "+995",
  label: "+995 🇬🇪"
}, {
  value: "+49",
  label: "+49 🇩🇪"
}, {
  value: "+233",
  label: "+233 🇬🇭"
}, {
  value: "+350",
  label: "+350 🇬🇮"
}, {
  value: "+30",
  label: "+30 🇬🇷"
}, {
  value: "+299",
  label: "+299 🇬🇱"
}, {
  value: "+1473",
  label: "+1473 🇬🇩"
}, {
  value: "+590",
  label: "+590 🇬🇵"
}, {
  value: "+1671",
  label: "+1671 🇬🇺"
}, {
  value: "+502",
  label: "+502 🇬🇹"
}, {
  value: "+44",
  label: "+44 🇬🇬"
}, {
  value: "+224",
  label: "+224 🇬🇳"
}, {
  value: "+245",
  label: "+245 🇬🇼"
}, {
  value: "+595",
  label: "+595 🇬🇾"
}, {
  value: "+509",
  label: "+509 🇭🇹"
}, {
  value: "+379",
  label: "+379 🇻🇦"
}, {
  value: "+504",
  label: "+504 🇭🇳"
}, {
  value: "+852",
  label: "+852 🇭🇰"
}, {
  value: "+36",
  label: "+36 🇭🇺"
}, {
  value: "+354",
  label: "+354 🇮🇸"
}, {
  value: "+62",
  label: "+62 🇮🇩"
}, {
  value: "+98",
  label: "+98 🇮🇷"
}, {
  value: "+964",
  label: "+964 🇮🇷"
}, {
  value: "+353",
  label: "+353 🇮🇪"
}, {
  value: "+44",
  label: "+44 🇮🇲"
}, {
  value: "+972",
  label: "+972 🇮🇱"
}, {
  value: "+39",
  label: "+39 🇮🇹"
}, {
  value: "+1876",
  label: "+1876 🇯🇲"
}, {
  value: "+81",
  label: "+81 🇯🇵"
}, {
  value: "+44",
  label: "+44 🇯🇪"
}, {
  value: "+962",
  label: "+962 🇯🇴"
}, {
  value: "+77",
  label: "+77 🇰🇿"
}, {
  value: "+254",
  label: "+254 🇰🇪"
}, {
  value: "+686",
  label: "+686 🇰🇮"
}, {
  value: "+850",
  label: "+850 🇰🇵"
}, {
  value: "+82",
  label: "+82 🇰🇷"
}, {
  value: "+965",
  label: "+965 🇰🇼"
}, {
  value: "+996",
  label: "+996 🇰🇬"
}, {
  value: "+856",
  label: "+856 🇱🇦"
}, {
  value: "+371",
  label: "+371 🇱🇻"
}, {
  value: "+961",
  label: "+961 🇱🇧"
}, {
  value: "+266",
  label: "+266 🇱🇸"
}, {
  value: "+231",
  label: "+231 🇱🇷"
}, {
  value: "+218",
  label: "+218 🇱🇾"
}, {
  value: "+423",
  label: "+423 🇱🇮"
}, {
  value: "+370",
  label: "+370 🇱🇹"
}, {
  value: "+352",
  label: "+352 🇱🇺"
}, {
  value: "+853",
  label: "+853 🇲🇴"
}, {
  value: "+389",
  label: "+389 🇲🇰"
}, {
  value: "+261",
  label: "+261 🇲🇬"
}, {
  value: "+265",
  label: "+265 🇲🇼"
}, {
  value: "+60",
  label: "+60 🇲🇾"
}, {
  value: "+960",
  label: "+960 🇲🇻"
}, {
  value: "+223",
  label: "+223 🇲🇱"
}, {
  value: "+356",
  label: "+356 🇲🇹"
}, {
  value: "+692",
  label: "+692 🇲🇭"
}, {
  value: "+596",
  label: "+596 🇲🇶"
}, {
  value: "+222",
  label: "+222 🇲🇷"
}, {
  value: "+230",
  label: "+230 🇲🇺"
}, {
  value: "+262",
  label: "+262 🇾🇹"
}, {
  value: "+52",
  label: "+52 🇲🇽"
}, {
  value: "+691",
  label: "+691 🇫🇲"
}, {
  value: "+373",
  label: "+373 🇲🇩"
}, {
  value: "+377",
  label: "+377 🇲🇨"
}, {
  value: "+976",
  label: "+976 🇲🇳"
}, {
  value: "+382",
  label: "+382 🇲🇪"
}, {
  value: "+1664",
  label: "+1664 🇲🇸"
}, {
  value: "+212",
  label: "+212 🇲🇦"
}, {
  value: "+258",
  label: "+258 🇲🇿"
}, {
  value: "+95",
  label: "+95 🇲🇲"
}, {
  value: "+264",
  label: "+264 🇳🇦"
}, {
  value: "+674",
  label: "+674 🇳🇷"
}, {
  value: "+977",
  label: "+977 🇳🇵"
}, {
  value: "+31",
  label: "+31 🇳🇱"
}, {
  value: "+599",
  label: "+599 🇧🇶"
}, {
  value: "+687",
  label: "+687 🇳🇨"
}, {
  value: "+64",
  label: "+64 🇳🇿"
}, {
  value: "+505",
  label: "+505 🇳🇮"
}, {
  value: "+227",
  label: "+227 🇳🇪"
}, {
  value: "+234",
  label: "+234 🇳🇬"
}, {
  value: "+683",
  label: "+683 🇳🇺"
}, {
  value: "+672",
  label: "+672 🇳🇫"
}, {
  value: "+1670",
  label: "+1670 🇲🇵"
}, {
  value: "+47",
  label: "+47 🇳🇴"
}, {
  value: "+968",
  label: "+968 🇴🇲"
}, {
  value: "+92",
  label: "+92 🇵🇰"
}, {
  value: "+680",
  label: "+680 🇵🇼"
}, {
  value: "+970",
  label: "+970 🇵🇸"
}, {
  value: "+507",
  label: "+507 🇵🇦"
}, {
  value: "+675",
  label: "+675 🇵🇬"
}, {
  value: "+595",
  label: "+595 🇵🇾"
}, {
  value: "+51",
  label: "+51 🇵🇪"
}, {
  value: "+63",
  label: "+63 🇵🇭"
}, {
  value: "+872",
  label: "+872 🇵🇳"
}, {
  value: "+48",
  label: "+48 🇵🇱"
}, {
  value: "+351",
  label: "+351 🇵🇹"
}, {
  value: "+1939",
  label: "+1939 🇵🇷"
}, {
  value: "+974",
  label: "+974 🇶🇦"
}, {
  value: "+40",
  label: "+40 🇷🇴"
}, {
  value: "+7",
  label: "+7 🇷🇺"
}, {
  value: "+250",
  label: "+250 🇷🇼"
}, {
  value: "+262",
  label: "+262 🇷🇪"
}, {
  value: "+590",
  label: "+590 🇧🇱"
}, {
  value: "+290",
  label: "+290 🇸🇭"
}, {
  value: "+1869",
  label: "+1869 🇰🇳"
}, {
  value: "+1758",
  label: "+1758 🇱🇨"
}, {
  value: "+590",
  label: "+590 🇲🇫"
}, {
  value: "+508",
  label: "+508 🇵🇲"
}, {
  value: "+1784",
  label: "+1784 🇻🇨"
}, {
  value: "+685",
  label: "+685 🇼🇸"
}, {
  value: "+378",
  label: "+378 🇸🇲"
}, {
  value: "+239",
  label: "+239 🇸🇹"
}, {
  value: "+966",
  label: "+966 🇸🇦"
}, {
  value: "+221",
  label: "+221 🇸🇳"
}, {
  value: "+381",
  label: "+381 🇷🇸"
}, {
  value: "+248",
  label: "+248 🇸🇨"
}, {
  value: "+232",
  label: "+232 🇸🇱"
}, {
  value: "+65",
  label: "+65 🇸🇬"
}, {
  value: "+421",
  label: "+421 🇸🇰"
}, {
  value: "+386",
  label: "+386 🇸🇮"
}, {
  value: "+677",
  label: "+677 🇸🇧"
}, {
  value: "+252",
  label: "+252 🇸🇴"
}, {
  value: "+27",
  label: "+27 🇿🇦"
}, {
  value: "+211",
  label: "+211 🇸🇸"
}, {
  value: "+500",
  label: "+500 🇬🇸"
}, {
  value: "+34",
  label: "+34 🇪🇸"
}, {
  value: "+94",
  label: "+94 🇱🇰"
}, {
  value: "+249",
  label: "+249 🇸🇩"
}, {
  value: "+597",
  label: "+597 🇸🇷"
}, {
  value: "+47",
  label: "+47 🇸🇯"
}, {
  value: "+268",
  label: "+268 🇸🇿"
}, {
  value: "+46",
  label: "+46 🇸🇪"
}, {
  value: "+41",
  label: "+41 🇨🇭"
}, {
  value: "+963",
  label: "+963 🇸🇾"
}, {
  value: "+886",
  label: "+886 🇹🇼"
}, {
  value: "+992",
  label: "+992 🇹🇯"
}, {
  value: "+255",
  label: "+255 🇹🇿"
}, {
  value: "+66",
  label: "+66 🇹🇭"
}, {
  value: "+670",
  label: "+670 🇹🇱"
}, {
  value: "+228",
  label: "+228 🇹🇬"
}, {
  value: "+690",
  label: "+690 🇹🇰"
}, {
  value: "+676",
  label: "+676 🇹🇴"
}, {
  value: "+1868",
  label: "+1868 🇹🇹"
}, {
  value: "+216",
  label: "+216 🇹🇳"
}, {
  value: "+90",
  label: "+90 🇹🇷"
}, {
  value: "+993",
  label: "+993 🇹🇲"
}, {
  value: "+1649",
  label: "+1649 🇹🇨"
}, {
  value: "+688",
  label: "+688 🇹🇻"
}, {
  value: "+256",
  label: "+256 🇺🇬"
}, {
  value: "+380",
  label: "+380 🇺🇦"
}, {
  value: "+971",
  label: "+971 🇦🇪"
}, {
  value: "+44",
  label: "+44 🇬🇧"
}, {
  value: "+1",
  label: "+1 🇺🇸"
}, {
  value: "+598",
  label: "+598 🇺🇾"
}, {
  value: "+998",
  label: "+998 🇺🇿"
}, {
  value: "+678",
  label: "+678 🇻🇺"
}, {
  value: "+58",
  label: "+58 🇻🇪"
}, {
  value: "+84",
  label: "+84 🇻🇳"
}, {
  value: "+1284",
  label: "+1284 🇻🇬"
}, {
  value: "+1340",
  label: "+1340 🇻🇮"
}, {
  value: "+681",
  label: "+681 🇼🇫"
}, {
  value: "+967",
  label: "+967 🇾🇪"
}, {
  value: "+260",
  label: "+260 🇿🇲"
}, {
  value: "+263",
  label: "+263 🇿🇼"
}];

var Tel = function Tel(_a) {
  var label = _a.label,
    className = _a.className,
    id = _a.id,
    name = _a.name,
    validate = _a.validate,
    onBlur = _a.onBlur;
    _a.onChange;
    var supportingText = _a.supportingText,
    disabled = _a.disabled,
    getValue = _a.getValue,
    _b = _a.countryCode,
    countryCode = _b === void 0 ? false : _b,
    errorMessage = _a.errorMessage,
    hasError = _a.hasError,
    props = __rest(_a, ["label", "className", "id", "name", "validate", "onBlur", "onChange", "supportingText", "disabled", "getValue", "countryCode", "errorMessage", "hasError"]);
  var inputRef = useRef(null);
  var _c = useState(false),
    err = _c[0],
    setErr = _c[1];
  var _d = useState(false),
    focus = _d[0],
    setFocus = _d[1];
  var _e = useState(""),
    value = _e[0],
    setValue = _e[1];
  var _f = useState("+91"),
    selectedCountryCode = _f[0],
    setSelectedCountryCode = _f[1];
  var _g = useState(""),
    errorMsg = _g[0],
    setErrorMsg = _g[1];
  useEffect(function () {
    setErrorMsg(errorMessage);
    setErr(hasError);
  }, [hasError, errorMessage]);
  var validateInput = function validateInput(e) {
    if (e.target.value === "") {
      setErr(true);
    } else if (e.target.value.length < 12) {
      setErr(true);
      setErrorMsg("Please Enter valid 10 digits Phone Number.");
    } else {
      setErr(false);
    }
  };
  var handleFocus = function handleFocus() {
    setFocus(true);
  };
  var handleInputChange = function handleInputChange(e) {
    var inputValue = e.target.value || "";
    inputValue = inputValue.replace(/\s/g, "");
    inputValue = inputValue.replace(/[^\d]/g, "");
    inputValue = inputValue.slice(0, 10);
    var formattedValue = "";
    for (var i = 0; i < inputValue.length; i++) {
      if (i === 4 || i === 7) {
        formattedValue += " ";
      }
      formattedValue += inputValue[i];
    }
    setValue(formattedValue);
    if (err) {
      setErr(false);
    }
    getValue(selectedCountryCode + " " + formattedValue);
  };
  return React.createElement("div", {
    className: "flex flex-col w-full text-[14px] relative"
  }, label && React.createElement("span", {
    className: "flex"
  }, React.createElement("label", {
    className: "".concat(err ? "text-defaultRed" : focus ? "text-primary" : "text-slatyGrey")
  }, label), validate && React.createElement("span", {
    className: "".concat(disabled ? "text-slatyGrey" : "text-defaultRed")
  }, "\xA0*")), React.createElement("div", {
    className: "flex ".concat(!err ? "w-full relative before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full" : "w-full")
  }, React.createElement("div", {
    className: "flex border-b outline-none transition duration-600 w-full h-full ".concat(err ? "border-b-defaultRed" : focus ? "border-b-primary" : "border-b-lightSilver")
  }, countryCode && React.createElement("div", {
    className: "w-[100px]"
  }, React.createElement(Select, {
    className: "!border-none",
    options: data,
    id: "basic",
    onSelect: function onSelect(value) {
      setSelectedCountryCode(value);
    },
    defaultValue: "+91"
  })), React.createElement("input", __assign({
    className: "".concat(className, " py-1 outline-none w-full h-full"),
    ref: inputRef,
    type: "tel",
    id: id,
    name: name,
    value: value,
    onBlur: onBlur ? onBlur : validate ? validateInput : undefined,
    onChange: handleInputChange,
    onFocus: handleFocus,
    disabled: disabled,
    placeholder: "9874 563 214"
  }, props)))), !err && supportingText && React.createElement("span", {
    className: "text-slatyGrey text-[12px] sm:text-[14px]"
  }, supportingText), err && React.createElement("span", {
    className: "text-defaultRed text-[12px] sm:text-[14px]"
  }, errorMsg));
};

export { Tel };
//# sourceMappingURL=index.es.js.map
