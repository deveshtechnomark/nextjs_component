import React, { useState } from 'react';
import { BsChevronUp, BsPlusLg, BsChevronDown } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
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
    return React.createElement(Typography, {
      type: "h6",
      key: index
    }, React.createElement("div", {
      key: index,
      className: "border border-transparent ".concat(activeAccordions.includes(index) ? "border-b-textColor" : "border-b-borderBottomColor", " cursor-pointer"),
      onClick: one ? function () {
        return toggleAccordionOne(index);
      } : function () {
        return toggleAccordion(index);
      }
    }, React.createElement("div", {
      className: "flex justify-between py-4 px-3 hover:bg-hoverColor ".concat(activeAccordions.includes(index) ? "bg-bgColor" : "")
    }, React.createElement("p", {
      className: "".concat(activeAccordions.includes(index) ? "text-textColor " : "text-textColor", " font-medium")
    }, item.question), React.createElement("span", {
      className: "flex justify-center items-center ml-6"
    }, activeAccordions.includes(index) ? React.createElement("span", null, icon ? React.createElement(FiMinus, null) : React.createElement(BsChevronUp, null)) : React.createElement("span", null, icon ? React.createElement(BsPlusLg, null) : React.createElement(BsChevronDown, null)))), React.createElement("div", null, React.createElement("p", {
      className: "text-textColor px-3 ".concat(activeAccordions.includes(index) ? "my-2 transition-all duration-300" : "")
    }, activeAccordions.includes(index) ? "".concat(item.answer) : ""))));
  })));
};

export { Accordion };
//# sourceMappingURL=index.es.js.map
