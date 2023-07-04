import React, { useState } from 'react';
import { Typography } from 'Typography';
import 'Typography/dist/index.css';

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


function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function ChevronDown() {
  return React.createElement("div", null, React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
  })));
}

var Accordion = function Accordion(_a) {
  var dataCollection = _a.dataCollection,
    label = _a.label,
    icon = _a.icon,
    one = _a.one;
  var _b = useState([]),
    activeAccordions = _b[0],
    setActiveAccordions = _b[1];
  var toggleAccordion = function toggleAccordion(index) {
    if (activeAccordions.includes(index)) {
      setActiveAccordions(activeAccordions.filter(function (i) {
        return i !== index;
      }));
    } else {
      setActiveAccordions(__spreadArray(__spreadArray([], activeAccordions, true), [index], false));
    }
  };
  var toggleAccordionOne = function toggleAccordionOne(index) {
    if (activeAccordions.includes(index)) {
      setActiveAccordions([]);
    } else {
      setActiveAccordions([index]);
    }
  };
  return React.createElement("div", {
    className: "px-10 py-5 mx-auto"
  }, label && React.createElement("div", null, React.createElement(Typography, {
    type: "label"
  }, label)), React.createElement("div", {
    className: "w-full"
  }, dataCollection.map(function (item, index) {
    return React.createElement("div", {
      key: index,
      className: "border border-transparent border-b-lightSilver cursor-pointer",
      onClick: one ? function () {
        return toggleAccordionOne(index);
      } : function () {
        return toggleAccordion(index);
      }
    }, React.createElement("div", {
      className: "flex justify-between py-4 px-3 hover:bg-whiteSmoke ".concat(activeAccordions.includes(index) ? "bg-whiteSmoke" : "")
    }, React.createElement(Typography, {
      type: "h6",
      className: "".concat(activeAccordions.includes(index) ? "text-textColor " : "text-textColor")
    }, item.question), React.createElement("span", {
      className: "flex justify-center items-center ml-6"
    }, icon ? React.createElement("div", null, React.createElement("div", {
      className: "w-[16px] h-[2px] bg-textColor"
    }), React.createElement("div", {
      className: "w-[16px] bg-textColor transition-all duration-500 ".concat(activeAccordions.includes(index) ? "plus h-0" : "transform translate-x-0 -translate-y-0.5 -rotate-90 h-[2px]")
    })) : React.createElement("span", {
      className: "transition-all duration-500 ".concat(activeAccordions.includes(index) ? "-rotate-180" : "")
    }, React.createElement(ChevronDown, null)))), React.createElement("div", null, React.createElement(Typography, {
      type: "h6",
      className: "text-textColor px-3 transition-all duration-[600ms] ".concat(activeAccordions.includes(index) ? "my-2" : "")
    }, activeAccordions.includes(index) ? "".concat(item.answer) : "")));
  })));
};

export { Accordion };
//# sourceMappingURL=index.es.js.map
