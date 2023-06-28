import React, { useState, useEffect, useRef } from 'react';
import { useDebounce } from 'usehooks-ts';

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

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var useRipple = function useRipple(ref) {
  var _a = useState([]),
    ripples = _a[0],
    setRipples = _a[1];
  useEffect(function () {
    if (ref.current) {
      var elem_1 = ref.current;
      var clickHandler_1 = function clickHandler_1(e) {
        var rect = elem_1.getBoundingClientRect();
        var left = e.clientX - rect.left;
        var top = e.clientY - rect.top;
        var height = elem_1.clientHeight;
        var width = elem_1.clientWidth;
        var diameter = Math.max(width, height);
        setRipples(__spreadArray(__spreadArray([], ripples, true), [{
          top: top - diameter / 2,
          left: left - diameter / 2,
          height: Math.max(width, height),
          width: Math.max(width, height)
        }], false));
      };
      elem_1.addEventListener("click", clickHandler_1);
      return function () {
        elem_1.removeEventListener("click", clickHandler_1);
      };
    }
  }, [ref, ripples]);
  var _debounced = useDebounce(ripples, 1000);
  useEffect(function () {
    if (_debounced.length) {
      setRipples([]);
    }
  }, [_debounced.length]);
  return ripples === null || ripples === void 0 ? void 0 : ripples.map(function (style, i) {
    return React.createElement("span", {
      key: i,
      style: __assign(__assign({}, style), {
        position: "absolute",
        backgroundColor: "#FFFFFF",
        opacity: "25%",
        transform: "scale(0)",
        animation: "ripple 600ms linear",
        borderRadius: "50%"
      })
    });
  });
};

var Button = function Button(_a) {
  var className = _a.className,
    variant = _a.variant,
    style = _a.style,
    _b = _a.type,
    type = _b === void 0 ? "button" : _b,
    children = _a.children,
    disabled = _a.disabled,
    onBlur = _a.onBlur,
    onChange = _a.onChange,
    onFocus = _a.onFocus,
    onSubmit = _a.onSubmit,
    props = __rest(_a, ["className", "variant", "style", "type", "children", "disabled", "onBlur", "onChange", "onFocus", "onSubmit"]);
  var handleClick = function handleClick() {};
  var ref = useRef(null);
  var ripples = useRipple(ref);
  return React.createElement(React.Fragment, null, React.createElement("button", __assign({}, props, {
    ref: ref,
    style: style,
    className: "".concat(className, " ").concat(className.includes("btn-sm") && "py-[3.5px] px-[10px] text-sm", " ").concat(className.includes("btn-lg") && "py-[12px] px-[20px]", " bg-white text-[#6E6D7A] relative overflow-hidden py-[6px] px-[15px] text-base group ").concat(variant === "btn" && "!bg-[#D8D8D8] !text-[#6E6D7A]", " ").concat(variant === "btn-primary" && "!bg-[#02B89D] !text-white hover:!bg-[#029882]", " ").concat(variant === "btn-secondary" && "!bg-[#069CDE] !text-white hover:!bg-[#0281B9]", " ").concat(variant === "btn-success" && "!bg-[#198754] !text-white hover:!bg-[#146C43]", " ").concat(variant === "btn-error" && "!bg-[#DC3545] !text-white hover:!bg-[#B02A37]", " ").concat(variant === "btn-warning" && "!bg-[#FFC107] !text-white hover:!bg-[#CC9A06]", " ").concat(variant === "primary" && "!text-[#02B89D]", " ").concat(variant === "secondary" && "!text-[#069CDE]", " ").concat(variant === "success" && "!text-[#198754]", " ").concat(variant === "error" && "!text-[#DC3545]", " ").concat(variant === "warning" && "!text-[#FFC107]", " ").concat(variant === "btn-outline" && "!text-[#6E6D7A] border border-[#6E6D7A]", " ").concat(variant === "btn-outline-primary" && "!text-[#02B89D] hover:!text-[#029882] border border-[#02B89D] hover:border-[#029882] hover:!bg-[#E0F8F4]", " ").concat(variant === "btn-outline-secondary" && "!text-[#069CDE] hover:!text-[#0281B9] border border-[#069CDE] hover:border-[#0281B9] hover:!bg-[#E5F5FC]", " ").concat(variant === "btn-outline-success" && "!text-[#198754] hover:!text-[#146C43] border border-[#198754] hover:border-[#146C43] hover:!bg-[#D1E7DD]", " ").concat(variant === "btn-outline-error" && "!text-[#DC3545] hover:!text-[#B02A37] border border-[#DC3545] hover:border-[#B02A37] hover:!bg-[#F8D7DA]", " ").concat(variant === "btn-outline-warning" && "!text-[#FFC107] hover:!text-[#CC9A06] border border-[#FFC107] hover:border-[#CC9A06] hover:!bg-[#FFF3CD]"),
    type: type,
    disabled: disabled,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    onSubmit: onSubmit,
    onClick: handleClick
  }), ripples, React.createElement("span", {
    className: "relative",
    onClick: handleClick
  }, children)));
};

export { Button };
//# sourceMappingURL=index.es.js.map
