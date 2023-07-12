'use strict';

var React = require('react');
var usehooksTs = require('usehooks-ts');
var classNames = require('classnames');

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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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

var Typography = /** @class */function (_super) {
  __extends(Typography, _super);
  function Typography() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Typography.prototype.render = function () {
    var _a = this.props,
      style = _a.style,
      className = _a.className,
      type = _a.type,
      children = _a.children;
    var Element;
    var styles = "";
    switch (type) {
      case "h1":
        Element = "h1";
        styles = "text-[32px] font-bold md:text-[40px]";
        break;
      case "h2":
        Element = "h2";
        styles = " text-[28px] font-bold md:text-[32px]";
        break;
      case "h3":
        Element = "h3";
        styles = "text-[24px] font-semibold md:text-[28px]";
        break;
      case "h4":
        Element = "h4";
        styles = "text-[20px] font-semibold md:text-[24px]";
        break;
      case "h5":
        Element = "h5";
        styles = "text-[16px] font-medium md:text-[20px]";
        break;
      case "h6":
        Element = "h6";
        styles = "text-[14px] font-medium md:text-[16px]";
        break;
      case "title":
        Element = "title";
        styles = "text-[16px] font-medium md:text-[20px]";
        break;
      case "sub-title":
        Element = "span";
        styles = "text-[16px] font-medium md:text-[16px]";
        break;
      case "table-title":
        Element = "caption";
        styles = "text-[14px] width-max-content font-bold md:text-[16px]";
        break;
      case "label":
        Element = "label";
        styles = "text-[12px] font-normal md:text-[14px]";
        break;
      case "body":
        Element = "p";
        styles = "text-[14px] font-normal md:text-[16px]";
        break;
      case "button":
        Element = "button";
        styles = "text-[16px] font-normal md:text-[16px]";
        break;
      case "caption":
        Element = "caption";
        styles = "text-[10px] width-max-content font-normal md:text-[10px]";
        break;
      case "badge":
        Element = "span";
        styles = "text-[10px] font-normal md:text-[10px]";
        break;
      case "tool-tip":
        Element = "span";
        styles = "text-[16px] font-normal md:text-[14px]";
        break;
      default:
        Element = "span";
        styles = "text-[14px] font-normal md:text-[16px]";
        break;
    }
    var combinedClassName = "".concat(className, " ").concat(styles);
    return /*#__PURE__*/React.createElement(Element, {
      style: style,
      className: combinedClassName
    }, children);
  };
  return Typography;
}(React.Component);

function ChevronDown$1() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
  })));
}

var Accordion = function Accordion(_a) {
  var dataCollection = _a.dataCollection,
    label = _a.label,
    icon = _a.icon,
    one = _a.one;
  var _b = React.useState([]),
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
  return /*#__PURE__*/React.createElement("div", {
    className: "px-10 py-5 mx-auto"
  }, label && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Typography, {
    type: "label"
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, dataCollection.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "border border-[#fff] border-b-lightSilver cursor-pointer",
      onClick: one ? function () {
        return toggleAccordionOne(index);
      } : function () {
        return toggleAccordion(index);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between py-4 px-3 hover:bg-whiteSmoke ".concat(activeAccordions.includes(index) ? "bg-whiteSmoke" : "")
    }, /*#__PURE__*/React.createElement(Typography, {
      type: "h6",
      className: "".concat(activeAccordions.includes(index) ? "text-darkCharcoal " : "text-darkCharcoal")
    }, item.question), /*#__PURE__*/React.createElement("span", {
      className: "flex justify-center items-center ml-6"
    }, icon ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "w-[16px] h-[2px] bg-darkCharcoal"
    }), /*#__PURE__*/React.createElement("div", {
      className: "w-[16px] bg-darkCharcoal transition-all duration-500 ".concat(activeAccordions.includes(index) ? "plus h-0" : "transform translate-x-0 -translate-y-0.5 -rotate-90 h-[2px]")
    })) : /*#__PURE__*/React.createElement("span", {
      className: "transition-all duration-500 ".concat(activeAccordions.includes(index) ? "-rotate-180" : "")
    }, /*#__PURE__*/React.createElement(ChevronDown$1, null)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Typography, {
      type: "h6",
      className: "text-darkCharcoal px-3 transition-all duration-[600ms] ".concat(activeAccordions.includes(index) ? "my-2" : "")
    }, activeAccordions.includes(index) ? "".concat(item.answer) : "")));
  })));
};

var Alert = function Alert(_a) {
  var variant = _a.variant,
    message = _a.message;
  var _b = React.useState(true),
    visible = _b[0],
    setVisible = _b[1];
  var handleClose = function handleClose() {
    setVisible(false);
  };
  var alertClass = "";
  switch (variant) {
    case "success":
      alertClass = "!bg-primary !text-pureWhite";
      break;
    case "error":
      alertClass = "!bg-errorColor !text-defaultRed";
      break;
    case "warning":
      alertClass = "!bg-warningColor !text-defaultOrange";
      break;
    case "info":
      alertClass = "!bg-infoColor !text-defaultBlue";
      break;
    default:
      alertClass = "!bg-primary !text-pureWhite";
      break;
  }
  var successIcon = /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-4 font-[700] h-4 sm:w-6 sm:h-6"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
  var errorIcon = /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-4 font-[700] h-4 sm:w-6 sm:h-6"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
  }));
  var warningIcon = /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-4 font-[700] h-4 sm:w-6 sm:h-6"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
  }));
  var infoIcon = /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-4 font-[700] h-4 sm:w-6 sm:h-6"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, visible && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col m-[6px] p-[12px] px-[16px] rounded-md text-primary min-w-15rem relative ".concat(alertClass),
    role: "alert"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement("span", null, variant === "error" ? errorIcon : variant === "warning" ? warningIcon : variant === "info" ? infoIcon : successIcon), /*#__PURE__*/React.createElement(Typography, {
    type: "sub-title",
    className: "ml-2 font-[700] mr-6 text-xs sm:text-base"
  }, message)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "absolute top-1/4 right-[20px] w-15 h-15 bg-transparent border-none cursor-pointer pl-10 text-xs sm:text-base",
    onClick: handleClose
  }, "X")));
};

var styles$5 = {"avatarGroup":"Avatar-module_avatarGroup__kvn-5","avatar":"Avatar-module_avatar__5-kP8"};

var style$5 = {"dot__badge":"Badge-module_dot__badge__uBgC9","badge_ripple":"Badge-module_badge_ripple__jc5Pn"};

var Badge = function Badge(_a) {
  var text = _a.text,
    badgetype = _a.badgetype,
    variant = _a.variant;
  var getColor = function getColor(type) {
    switch (type) {
      case "dark":
        return "#333333";
      case "secondary":
        return "#069CDE";
      case "graph":
        return "#EA6A47";
      case "success":
        return "#198754";
      case "warning":
        return "#FFC107";
      case "error":
        return "#DC3545";
      default:
        return "#02B89D";
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: variant === "pill" ? {
      borderColor: "".concat(getColor(badgetype)),
      color: "".concat(getColor(badgetype))
    } : {
      backgroundColor: "".concat(getColor(badgetype))
    },
    className: "".concat(variant === "pill" ? "h-[27px] w-[82px] border rounded-[33px] overflow-x-hidden" : "h-[18px] w-[18px] border-none rounded-full text-white text-[10px]", " flex items-center justify-center\n      ")
  }, variant === "dot" ? /*#__PURE__*/React.createElement("span", {
    style: variant === "dot" ? {
      borderColor: "".concat(getColor(badgetype))
    } : {},
    className: style$5.dot__badge
  }, parseInt(text) > 99 ? "99+" : text) : text);
};

var Avatar = function Avatar(_a) {
  var imageUrl = _a.imageUrl,
    name = _a.name,
    className = _a.className,
    type = _a.type,
    badge = _a.badge,
    badgeText = _a.badgeText,
    variant = _a.variant;
  var avatarTypeClass = type === "square" ? "rounded-none" : "rounded-full";
  var handleOnError = function handleOnError(e) {
    e.currentTarget.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/avatar-bg.png";
  };
  var Name = name === null || name === void 0 ? void 0 : name.toUpperCase();
  var Red = ["A", "F", "K", "P", "U", "Z"];
  var Blue = ["B", "G", "L", "Q", "V"];
  var Green = ["C", "H", "M", "R", "W"];
  var SkyBlue = ["D", "I", "N", "S", "X"];
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles$5.avatar, " relative w-fit")
  }, imageUrl ? /*#__PURE__*/React.createElement("img", {
    className: "".concat(variant === "large" ? "w-[64px] h-[64px]" : variant === "small" ? "w-[32px] h-[32px]" : variant === "x-small" ? "w-[24px] h-[24px]" : "w-[40px] h-[40px]", " display-block object-fit-cover border-2 border-pureWhite ").concat(avatarTypeClass, " ").concat(className),
    src: imageUrl,
    alt: Name,
    onError: handleOnError
  }) : Name ? /*#__PURE__*/React.createElement("span", {
    className: "".concat(variant === "large" ? "w-[64px] h-[64px] text-2xl" : variant === "small" ? "w-[32px] h-[32px] text-sm" : variant === "x-small" ? "w-[24px] h-[24px] text-xs" : "w-[40px] h-[40px] text-base", " text-pureWhite border-2 border-pureWhite flex justify-center items-center ").concat(avatarTypeClass, " ").concat(Red.includes(Name.charAt(0)) ? "bg-defaultRed" : Blue.includes(Name.charAt(0)) ? "bg-defaultBlue" : Green.includes(Name.charAt(0)) ? "bg-primary" : SkyBlue.includes(Name.charAt(0)) ? "bg-infoColor" : "bg-defaultOrange", " ").concat(className)
  }, Name.length <= 2 ? Name.slice(0, 2) : Name.match(/\s/) ? Name.split(" ").map(function (word) {
    return word.charAt(0);
  }).join("") : Name.charAt(0)) : /*#__PURE__*/React.createElement("span", {
    className: "".concat(variant === "large" ? "w-[64px] h-[64px]" : variant === "small" ? "w-[32px] h-[32px]" : variant === "x-small" ? "w-[24px] h-[24px]" : "w-[40px] h-[40px]", " border-2 bg-pureWhite border-pureWhite rounded-full flex justify-center items-center")
  }, /*#__PURE__*/React.createElement("svg", {
    width: "".concat(variant === "large" ? "" : variant === "small" ? "" : variant === "x-small" ? "" : "35"),
    height: "".concat(variant === "large" ? "" : variant === "small" ? "" : variant === "x-small" ? "" : "35"),
    viewBox: "0 0 107 112",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M53.6139 73.2177C67.5276 73.2177 78.8069 57.5951 78.8069 38.3237C78.8069 19.0523 67.5276 3.42969 53.6139 3.42969C39.7002 3.42969 28.4209 19.0523 28.4209 38.3237C28.4209 57.5951 39.7002 73.2177 53.6139 73.2177Z",
    fill: "#ADB5BD"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M53.2163 70.9844C32.1283 70.9844 13.2763 76.0384 0.738281 83.9774C12.4683 100.543 31.7713 111.368 53.6143 111.368C75.3033 111.368 94.4873 100.696 106.241 84.3284C93.7073 76.1874 74.6133 70.9844 53.2163 70.9844Z",
    fill: "#ADB5BD"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M57.4503 87.7374H49.7773C44.4833 87.7374 40.1523 83.4064 40.1523 78.1124V56.2344C40.1523 50.9404 44.4833 46.6094 49.7773 46.6094H57.4503C62.7443 46.6094 67.0753 50.9404 67.0753 56.2344V78.1124C67.0753 83.4064 62.7443 87.7374 57.4503 87.7374Z",
    fill: "#ADB5BD"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32.3989 40.3092C33.1529 45.9032 31.911 50.7542 29.625 51.1432C27.339 51.5322 24.8739 47.3122 24.1189 41.7182C23.3649 36.1242 24.607 31.2732 26.893 30.8842C29.179 30.4952 31.6449 34.7152 32.3989 40.3092Z",
    fill: "#ADB5BD"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M74.8289 40.3092C74.0749 45.9032 75.3169 50.7542 77.6029 51.1432C79.8889 51.5322 82.3539 47.3122 83.1089 41.7182C83.8629 36.1242 82.6209 31.2732 80.3349 30.8842C78.0489 30.4952 75.5829 34.7152 74.8289 40.3092Z",
    fill: "#ADB5BD"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M29.3013 36.9526C28.4543 31.3666 27.6073 25.7806 26.7593 20.1956C26.4513 18.1676 26.1543 16.0306 26.8953 14.1176C27.6353 12.2046 29.8073 10.6816 31.7283 11.3996C30.9593 7.51364 35.2583 4.64365 39.0043 3.35465C45.2813 1.19365 52.0123 0.0936451 58.5953 0.944645C65.1793 1.79565 71.6073 4.70764 76.0453 9.64464C77.4503 11.2076 78.6603 12.9826 79.3293 14.9736C80.6173 18.8066 79.7973 22.9896 78.9673 26.9466C78.3073 30.0906 77.6483 33.2346 76.9883 36.3786C76.8383 37.0966 76.6693 37.8496 76.1793 38.3956C75.3983 39.2656 74.0813 39.3306 72.9123 39.3326C60.4203 39.3596 47.9273 39.3866 35.4353 39.4136C33.0863 39.4186 30.0203 38.8396 29.7103 36.5116",
    fill: "#ADB5BD"
  }))), badge && /*#__PURE__*/React.createElement("span", {
    className: "absolute ".concat(type === "square" ? "-top-1 -right-2" : "top-0 -right-1")
  }, /*#__PURE__*/React.createElement(Badge, {
    badgetype: "primary",
    variant: "dot",
    text: badgeText
  })));
};
var AvatarGroup = function AvatarGroup(_a) {
  var children = _a.children,
    _b = _a.type,
    type = _b === void 0 ? "circle" : _b,
    _c = _a.show,
    show = _c === void 0 ? 5 : _c,
    _d = _a.className,
    className = _d === void 0 ? "" : _d,
    variant = _a.variant;
  if (React.Children.count(children) > show) {
    var remainingCount = React.Children.count(children) - show;
    var visibleChildren = React.Children.toArray(children).slice(0, show);
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(styles$5.avatarGroup, " flex items-center justify-center")
    }, visibleChildren.map(function (child, index) {
      return /*#__PURE__*/React.createElement(Avatar, {
        key: index,
        imageUrl: child.props.imageUrl,
        name: child.props.name,
        type: type,
        className: className,
        variant: variant
      });
    }), /*#__PURE__*/React.createElement(Avatar, {
      className: "!text-[#CA6510] !bg-[#FECBA1] ".concat(className),
      name: "+".concat(remainingCount),
      type: type,
      variant: variant
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "avatar-group"
  }, children);
};

var Breadcrumb = /** @class */function (_super) {
  __extends(Breadcrumb, _super);
  function Breadcrumb() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Breadcrumb.prototype.render = function () {
    var _a = this.props,
      items = _a.items,
      variant = _a.variant,
      className = _a.className,
      style = _a.style;
    var separator = variant === '>' ? '>' : '/';
    var linkStyle = {
      fontSize: style && style.fontSize ? style.fontSize : 'inherit'
    };
    var containerStyle = __assign({
      fontSize: style && style.fontSize ? style.fontSize : 'inherit'
    }, style);
    var iconStyle = {
      fontSize: style && style.fontSize ? style.fontSize : 'inherit'
    };
    return /*#__PURE__*/React.createElement("nav", {
      className: "flex ".concat(className),
      style: containerStyle,
      "aria-label": "Breadcrumb"
    }, /*#__PURE__*/React.createElement("ol", {
      className: "inline-flex items-center"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: iconStyle
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6.66667 3.33333V0.666667C6.66667 0.477778 6.73056 0.319444 6.85833 0.191667C6.98611 0.0638889 7.14445 0 7.33333 0H11.3333C11.5222 0 11.6806 0.0638889 11.8083 0.191667C11.9361 0.319444 12 0.477778 12 0.666667V3.33333C12 3.52222 11.9361 3.68056 11.8083 3.80833C11.6806 3.93611 11.5222 4 11.3333 4H7.33333C7.14445 4 6.98611 3.93611 6.85833 3.80833C6.73056 3.68056 6.66667 3.52222 6.66667 3.33333ZM0 6V0.666667C0 0.477778 0.0638889 0.319444 0.191667 0.191667C0.319444 0.0638889 0.477778 0 0.666667 0H4.66667C4.85556 0 5.01389 0.0638889 5.14167 0.191667C5.26944 0.319444 5.33333 0.477778 5.33333 0.666667V6C5.33333 6.18889 5.26944 6.34722 5.14167 6.475C5.01389 6.60278 4.85556 6.66667 4.66667 6.66667H0.666667C0.477778 6.66667 0.319444 6.60278 0.191667 6.475C0.0638889 6.34722 0 6.18889 0 6ZM6.66667 11.3333V6C6.66667 5.81111 6.73056 5.65278 6.85833 5.525C6.98611 5.39722 7.14445 5.33333 7.33333 5.33333H11.3333C11.5222 5.33333 11.6806 5.39722 11.8083 5.525C11.9361 5.65278 12 5.81111 12 6V11.3333C12 11.5222 11.9361 11.6806 11.8083 11.8083C11.6806 11.9361 11.5222 12 11.3333 12H7.33333C7.14445 12 6.98611 11.9361 6.85833 11.8083C6.73056 11.6806 6.66667 11.5222 6.66667 11.3333ZM0 11.3333V8.66667C0 8.47778 0.0638889 8.31945 0.191667 8.19167C0.319444 8.06389 0.477778 8 0.666667 8H4.66667C4.85556 8 5.01389 8.06389 5.14167 8.19167C5.26944 8.31945 5.33333 8.47778 5.33333 8.66667V11.3333C5.33333 11.5222 5.26944 11.6806 5.14167 11.8083C5.01389 11.9361 4.85556 12 4.66667 12H0.666667C0.477778 12 0.319444 11.9361 0.191667 11.8083C0.0638889 11.6806 0 11.5222 0 11.3333ZM1.33333 5.33333H4V1.33333H1.33333V5.33333ZM8 10.6667H10.6667V6.66667H8V10.6667ZM8 2.66667H10.6667V1.33333H8V2.66667ZM1.33333 10.6667H4V9.33333H1.33333V10.6667Z",
      fill: items.length > 1 ? "#02B89D" : "#6E6D7A"
    })), items.map(function (item, index) {
      return /*#__PURE__*/React.createElement("li", {
        key: index,
        className: "inline-flex items-center"
      }, index > 0 && /*#__PURE__*/React.createElement("span", {
        style: linkStyle,
        className: "w-2 mx-2 h-6 text-primary"
      }, separator), /*#__PURE__*/React.createElement("a", {
        href: item.url,
        className: "ml-1 text-sm font-medium ".concat(index === items.length - 1 ? "text-slatyGrey" : "text-primary border-b border-primary"),
        style: linkStyle
      }, item.label));
    })));
  };
  return Breadcrumb;
}(React.Component);

var useRipple = function useRipple(ref) {
  var _a = React.useState([]),
    ripples = _a[0],
    setRipples = _a[1];
  React.useEffect(function () {
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
  var _debounced = usehooksTs.useDebounce(ripples, 1000);
  React.useEffect(function () {
    if (_debounced.length) {
      setRipples([]);
    }
  }, [_debounced.length]);
  return ripples === null || ripples === void 0 ? void 0 : ripples.map(function (style, i) {
    return /*#__PURE__*/React.createElement("span", {
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
    onClick = _a.onClick,
    onFocus = _a.onFocus,
    onSubmit = _a.onSubmit,
    props = __rest(_a, ["className", "variant", "style", "type", "children", "disabled", "onBlur", "onChange", "onClick", "onFocus", "onSubmit"]);
  var ref = React.useRef(null);
  var ripples = useRipple(ref);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", __assign({}, props, {
    ref: ref,
    style: style,
    className: "".concat(className, " ").concat((className === null || className === void 0 ? void 0 : className.includes("btn-sm")) && "!py-[3.5px] !px-[10px] text-sm", " ").concat((className === null || className === void 0 ? void 0 : className.includes("btn-lg")) && "!py-[14.5px] !Render the badge component with the specified variantpx-[20px]", " bg-pureWhite text-slatyGrey relative overflow-hidden py-[6px] px-[15px] text-base group ").concat(variant === "btn" && "!bg-lightSilver !text-slatyGrey", " ").concat(variant === "btn-primary" && "!bg-primary !text-pureWhite hover:!bg-darkPrimary", " ").concat(variant === "btn-secondary" && "!bg-blueColor !text-pureWhite hover:!bg-darkBlue", " ").concat(variant === "btn-success" && "!bg-successColor !text-pureWhite hover:!bg-darkSuccess", " ").concat(variant === "btn-error" && "!bg-defaultRed !text-pureWhite hover:!bg-darkRed", " ").concat(variant === "btn-warning" && "!bg-yellowColor !text-pureWhite hover:!bg-darkYellow", " ").concat(variant === "primary" && "!text-primary", " ").concat(variant === "secondary" && "!text-blueColor", " ").concat(variant === "success" && "!text-successColor", " ").concat(variant === "error" && "!text-defaultRed", " ").concat(variant === "warning" && "!text-yellowColor", " ").concat(variant === "btn-outline" && "!text-slatyGrey border border-slatyGrey", " ").concat(variant === "btn-outline-primary" && "!text-primary hover:!text-darkPrimary border border-primary hover:border-darkPrimary hover:!bg-[#E0F8F4]", " ").concat(variant === "btn-outline-secondary" && "!text-blueColor hover:!text-darkBlue border border-blueColor hover:border-darkBlue hover:!bg-[#E5F5FC]", " ").concat(variant === "btn-outline-success" && "!text-successColor hover:!text-darkSuccess border border-successColor hover:border-darkSuccess hover:!bg-[#D1E7DD]", " ").concat(variant === "btn-outline-error" && "!text-defaultRed hover:!text-darkRed border border-defaultRed hover:border-darkRed hover:!bg-[#F8D7DA]", " ").concat(variant === "btn-outline-warning" && "!text-yellowColor hover:!text-darkYellow border border-yellowColor hover:border-darkYellow hover:!bg-[#FFF3CD]"),
    type: type,
    disabled: disabled,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    onSubmit: onSubmit,
    onClick: onClick
  }), ripples, /*#__PURE__*/React.createElement("span", {
    className: "relative"
  }, children)));
};

var style$4 = {"checkBox":"checkbox-module_checkBox__QIDro","checkBoxLabel":"checkbox-module_checkBoxLabel__aMPYy","checkBoxSpan":"checkbox-module_checkBoxSpan__XRqnt","shrink-bounce":"checkbox-module_shrink-bounce__bEtFT","checkbox-check":"checkbox-module_checkbox-check__Uz1K3","invalidcheckBox":"checkbox-module_invalidcheckBox__DZgoE","i__checkBox":"checkbox-module_i__checkBox__QHXji","i__checkBoxLabel":"checkbox-module_i__checkBoxLabel__10uiy","i__checkBoxSpan":"checkbox-module_i__checkBoxSpan__xCugf","i-checkbox-check":"checkbox-module_i-checkbox-check__zHKhZ","i__invalidcheckBox":"checkbox-module_i__invalidcheckBox__0Amvu"};

var CheckBox = function CheckBox(_a) {
  var id = _a.id,
    label = _a.label,
    variant = _a.variant,
    className = _a.className,
    intermediate = _a.intermediate,
    props = __rest(_a, ["id", "label", "variant", "className", "intermediate"]);
  return /*#__PURE__*/React.createElement("div", {
    className: "m-0 p-0 w-fit relative flex justify-start items-center ".concat(className)
  }, !intermediate ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", __assign({
    className: "".concat(style$4.checkBox, " ").concat(variant === "invalid" && style$4.invalidcheckBox, " absolute left-3"),
    type: "checkbox",
    id: id
  }, props)), /*#__PURE__*/React.createElement("label", {
    className: "".concat(style$4.checkBoxLabel, " h-6 flex items-center"),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("span", {
    className: style$4.checkBoxSpan
  }), label)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", __assign({
    className: "".concat(style$4.i__checkBox, " ").concat(variant === "invalid" && style$4.i__invalidcheckBox, " absolute left-3"),
    type: "checkbox",
    id: id
  }, props)), /*#__PURE__*/React.createElement("label", {
    className: "".concat(style$4.i__checkBoxLabel, " h-6 w-full flex items-center"),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("span", {
    className: style$4.i__checkBoxSpan
  }), label === null || label === void 0 ? void 0 : label.split(" "))));
};

var styles$4 = {"main":"Close-module_main__UOQ-5","circle":"Close-module_circle__QXiwG","scaleUp":"Close-module_scaleUp__1yb8z","scaleDown":"Close-module_scaleDown__R1U45","minimize":"Close-module_minimize__w0Fd3","magnify":"Close-module_magnify__D9DdT","fromMiddle":"Close-module_fromMiddle__88-J9"};

var styles$3 = {"tooltip":"Tooltip-module_tooltip__LjRUX","top":"Tooltip-module_top__HZqEk","slideDown":"Tooltip-module_slideDown__-sZ-c","bottom":"Tooltip-module_bottom__hrxCa","slideUp":"Tooltip-module_slideUp__YRM1e","left":"Tooltip-module_left__-LZ0w","slideLeft":"Tooltip-module_slideLeft__Wwtaw","right":"Tooltip-module_right__LGQTD","slideRight":"Tooltip-module_slideRight__U6-Ju"};

var Tooltip = function Tooltip(_a) {
  var content = _a.content,
    position = _a.position,
    children = _a.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles$3.tooltip, " relative cursor-pointer p-2 text-sm sm:text-base max-w-fit")
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex justify-center items-center tooltipText absolute bg-[#bcf1e8] w-max max-w-[300px] text-darkCharcoal whitespace-nowrap p-[10px] border border-primary rounded-md opacity-0 before:absolute before:w-3 before:h-3 before:bg-[#bcf1e8] before:border-t before:border-primary before:border-r ".concat(position === "top" && "".concat(styles$3.top, " left-1/2 transform -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:bottom-[-7px] before:transform before:rotate-[135deg]"), " \n        ").concat(position === "bottom" && "".concat(styles$3.bottom, " left-1/2 transform -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:top-[-7px] before:transform before:rotate-[-45deg]"), " \n        ").concat(position === "left" && "".concat(styles$3.left, " top-1/2 transform -translate-y-1/2 before:top-1/2 before:-translate-y-1/2 before:right-[-7px] before:transform before:rotate-[45deg]"), " \n        ").concat(position === "right" && "".concat(styles$3.right, " top-1/2 transform -translate-y-1/2 before:top-1/2 before:-translate-y-1/2 before:left-[-7px] before:transform before:rotate-[-135deg]")),
    style: {
      wordWrap: "break-word",
      whiteSpace: "unset"
    }
  }, content), /*#__PURE__*/React.createElement("span", null, children));
};

var Close = function Close() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tooltip, {
    position: "top",
    content: "Close"
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$4.main
  }, /*#__PURE__*/React.createElement("button", {
    className: "".concat(styles$4.fromMiddle, " ").concat(styles$4.circle, " ").concat(styles$4.scaleUp),
    "data-animation": "minimize"
  }, /*#__PURE__*/React.createElement("span", null)))));
};

var Styles$1 = {"saturation":"Colorpicker-module_saturation__nX6yN","cursor":"Colorpicker-module_cursor__0eqEO","color_picker__color_block":"Colorpicker-module_color_picker__color_block__lK3j2","color_picker__cursor":"Colorpicker-module_color_picker__cursor__I2-ST","color_picker__grid":"Colorpicker-module_color_picker__grid__4Xmw9","color_picker__label":"Colorpicker-module_color_picker__label__KlZ9k","color_picker__input":"Colorpicker-module_color_picker__input__GvpM2","color_picker__rgba":"Colorpicker-module_color_picker__rgba__z3Zwz","color_box":"Colorpicker-module_color_box__Di-GI","color_box_white":"Colorpicker-module_color_box_white__m5meP","color_box_gray":"Colorpicker-module_color_box_gray__gzrwT","color_box_primary":"Colorpicker-module_color_box_primary__0TORT","color_box_info":"Colorpicker-module_color_box_info__GB9j9","color_box_success":"Colorpicker-module_color_box_success__-caPp","color_box_warning":"Colorpicker-module_color_box_warning__lbAja","color_box_danger":"Colorpicker-module_color_box_danger__Ap0n7","color_box_secondary":"Colorpicker-module_color_box_secondary__odotp","color_box_dark":"Colorpicker-module_color_box_dark__OHAWG","wrapper":"Colorpicker-module_wrapper__vatjH"};

var ColorPicker = function ColorPicker(props) {
  var colorPickerRef = React.useRef(null);
  var _a = React.useState(false),
    isDragging = _a[0],
    setIsDragging = _a[1];
  var _b = React.useState(""),
    colorBoxValue = _b[0],
    setColorBoxValue = _b[1];
  var _c = React.useState({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }),
    rgba = _c[0],
    setRGBA = _c[1];
  var _d = React.useState({
      x: 0,
      y: 0
    }),
    cursorPosition = _d[0],
    setCursorPosition = _d[1];
  var _e = React.useState(100),
    opacityPercentage = _e[0],
    setOpacityPercentage = _e[1];
  var _f = React.useState("#f10909"),
    hex = _f[0],
    setHex = _f[1];
  var _g = React.useState(false),
    isDragging2 = _g[0];
    _g[1];
  var _h = React.useState({
      x: 0,
      y: 0
    }),
    cursorPosition2 = _h[0],
    setCursorPosition2 = _h[1];
  var _j = React.useState({
      r: 0,
      g: 0,
      b: 0,
      a: 100
    }),
    colorBlockRGBA = _j[0],
    setColorBlockRGBA = _j[1];
  var _k = React.useState(false),
    isInputFocused = _k[0],
    setIsInputFocused = _k[1];
  var colorBlockRef = React.useRef(null);
  React.useEffect(function () {
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
  React.useEffect(function () {
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
  var _l = React.useState(1),
    opacity = _l[0],
    setOpacity = _l[1];
  var _m = React.useState(false),
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
  React.useEffect(function () {
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
    className: "".concat(Styles$1.color_box, " ").concat(Styles$1.color_box_white),
    onClick: function onClick() {
      setColorBoxValue("#FFFFFF");
      setOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles$1.color_box, " ").concat(Styles$1.color_box_gray),
    onClick: function onClick() {
      setColorBoxValue("#D8D8D8");
      setOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles$1.color_box, " ").concat(Styles$1.color_box_primary),
    onClick: function onClick() {
      setColorBoxValue("#02B89D");
      setOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles$1.color_box, " ").concat(Styles$1.color_box_secondary),
    onClick: function onClick() {
      setColorBoxValue("#069CDE");
      setOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles$1.color_box, " ").concat(Styles$1.color_box_success),
    onClick: function onClick() {
      setColorBoxValue("#135736");
      setOpen(false);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles$1.color_box, " ").concat(Styles$1.color_box_danger),
    onClick: function onClick() {
      setColorBoxValue("#DC3545");
      setOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles$1.color_box, " ").concat(Styles$1.color_box_warning),
    onClick: function onClick() {
      setColorBoxValue("#FFC107");
      setOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles$1.color_box, " ").concat(Styles$1.color_box_info),
    onClick: function onClick() {
      setColorBoxValue("#0DCAF0");
      setOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles$1.color_box, " ").concat(Styles$1.color_box_dark),
    onClick: function onClick() {
      setColorBoxValue("#333333");
      setOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles$1.wrapper),
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
    className: "".concat(Styles$1.color_picker__color_block),
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
    className: "".concat(Styles$1.color_picker__gradient)
  }, /*#__PURE__*/React.createElement("canvas", {
    className: "".concat(Styles$1.color_picker__color_block),
    ref: colorBlockRef,
    width: "322",
    height: "200",
    style: {
      borderRadius: "5px",
      cursor: isDragging2 ? "grabbing" : "crosshair"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles$1.color_picker__cursor),
    style: {
      left: "".concat(cursorPosition2.x, "px"),
      top: "".concat(cursorPosition2.y, "px")
    }
  })), /*#__PURE__*/React.createElement("p", null, "Hue"), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles$1.saturation),
    ref: colorPickerRef,
    onMouseDown: handleMouseDown
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles$1.cursor),
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
    className: "".concat(Styles$1.color_picker__input, " ").concat(isInputFocused ? "focused" : ""),
    type: "text",
    value: "".concat(hex).concat(opacity !== 1 ? Math.round(opacity * 255).toString(16) : ""),
    onChange: handleHexChange,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("span", null, "R"), /*#__PURE__*/React.createElement("input", {
    className: "".concat(Styles$1.color_picker__rgba, " ").concat(isInputFocused ? "focused" : ""),
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
    className: "".concat(Styles$1.color_picker__rgba, " ").concat(isInputFocused ? "focused" : ""),
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
    className: "".concat(Styles$1.color_picker__rgba, " ").concat(isInputFocused ? "focused" : ""),
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
    className: "".concat(Styles$1.color_picker__rgba),
    type: "number",
    name: "a",
    value: rgba.a,
    onChange: handleOpacityChange,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur
  }))))))));
};

var isToday = function isToday(date) {
  var today = new Date();
  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
};
var generateDate = function generateDate(month, year) {
  if (month === void 0) {
    month = new Date().getMonth();
  }
  if (year === void 0) {
    year = new Date().getFullYear();
  }
  var firstDateOfMonth = new Date(year, month, 1);
  var lastDateOfPreviousMonth = new Date(year, month, 0);
  var lastDateOfMonth = new Date(year, month + 1, 0);
  var arrayOfDate = [];
  for (var i = firstDateOfMonth.getDay(); i > 0; i--) {
    var date = new Date(lastDateOfPreviousMonth.getFullYear(), lastDateOfPreviousMonth.getMonth(), lastDateOfPreviousMonth.getDate() - (i - 1));
    arrayOfDate.push({
      currentMonth: false,
      date: date
    });
  }
  for (var i = 1; i <= lastDateOfMonth.getDate(); i++) {
    var date = new Date(year, month, i);
    arrayOfDate.push({
      currentMonth: true,
      date: date,
      today: isToday(date)
    });
  }
  var remaining = 42 - arrayOfDate.length;
  for (var i = 1; i <= remaining; i++) {
    var date = new Date(year, month + 1, i);
    arrayOfDate.push({
      currentMonth: false,
      date: date
    });
  }
  return arrayOfDate;
};
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var style$3 = {"rippleAnimation":"Datepicker-module_rippleAnimation__mvJZB","ripple":"Datepicker-module_ripple__ng4Xs","bottomAnimation":"Datepicker-module_bottomAnimation__BmZYy","topAnimation":"Datepicker-module_topAnimation__Ux6L6","slideLeftAnimation":"Datepicker-module_slideLeftAnimation__gpW-M","slideRightAnimation":"Datepicker-module_slideRightAnimation__JtxLt"};

function ChevronLeft$1() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  })));
}

var Calendar = function Calendar(props) {
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var currentDate = new Date();
  var startYear = props.startYear,
    endYear = props.endYear;
  var inputRef = React.useRef(null);
  var _a = React.useState(currentDate),
    today = _a[0],
    setToday = _a[1];
  var _b = React.useState(false),
    showMonthList = _b[0],
    setShowMonthList = _b[1];
  var _c = React.useState(false),
    showYearList = _c[0],
    setShowYearList = _c[1];
  var _d = React.useState(currentDate),
    selectedDate = _d[0],
    setSelectedDate = _d[1];
  var _e = React.useState(''),
    fullDate = _e[0],
    setFullDate = _e[1];
  var _f = React.useState(1),
    currentPage = _f[0],
    setCurrentPage = _f[1];
  var _g = React.useState(false),
    toggleOpen = _g[0],
    setToggleOpen = _g[1];
  var _h = React.useState(''),
    animate = _h[0],
    setAnimate = _h[1];
  var currentMonth = today.getMonth();
  var _j = React.useState(currentMonth),
    selectedMonth = _j[0],
    setSelectedMonth = _j[1];
  var currentYear = today.getFullYear();
  var _k = React.useState(currentYear),
    selectedYear = _k[0],
    setSelectedYear = _k[1];
  var yearsPerPage = 16;
  var totalPages = Math.ceil((endYear - startYear + 1) / yearsPerPage);
  var startIndex = (currentPage - 1) * yearsPerPage;
  var displayedYears = Array.from({
    length: yearsPerPage
  }, function (_, index) {
    var year = startYear + startIndex + index;
    return year <= endYear ? year : null;
  }).filter(function (year) {
    return year !== null;
  });
  var toggleMonthList = function toggleMonthList() {
    setShowMonthList(!showMonthList);
  };
  var selectMonth = function selectMonth(month) {
    var newDate = new Date(today);
    newDate.setMonth(month);
    setToday(newDate);
    setShowMonthList(false);
    setSelectedMonth(month);
    selectedMonth ? setAnimate(style$3.slideRightAnimation) : setAnimate('');
  };
  var toggleYearList = function toggleYearList() {
    if (!showYearList && !showMonthList) {
      setShowYearList(true);
      setCurrentPage(Math.ceil((selectedYear - startYear + 1) / yearsPerPage));
    } else {
      setShowYearList(false);
    }
  };
  var selectYear = function selectYear(year) {
    var newDate = new Date(today);
    newDate.setFullYear(year);
    setToday(newDate);
    setShowYearList(false);
    setSelectedYear(year);
    setTimeout(function () {
      setAnimate('');
      setShowMonthList(true);
    }, 0);
  };
  var handleDateClick = function handleDateClick(date) {
    var newDate = new Date(date);
    setToday(newDate);
    setSelectedDate(date);
    newDate.setDate(date.getDate() + 1);
    var formattedDate = newDate.toISOString().slice(0, 10);
    setFullDate(formattedDate);
    setToggleOpen(false);
  };
  var goToNextPage = function goToNextPage() {
    currentPage < totalPages ? setCurrentPage(currentPage + 1) : currentPage;
  };
  var goToPreviousPage = function goToPreviousPage() {
    currentPage > 1 ? setCurrentPage(currentPage - 1) : currentPage;
  };
  var calendarShow = function calendarShow() {
    setToggleOpen(!toggleOpen);
  };
  var handleIconClick = function handleIconClick(isNextMonth) {
    var newDate = new Date(today);
    var year = newDate.getFullYear();
    if (isNextMonth) {
      var month = newDate.getMonth() + 1;
      newDate.setMonth(newDate.getMonth() + 1);
      setSelectedMonth(month);
    } else {
      var month = newDate.getMonth() - 1;
      newDate.setMonth(newDate.getMonth() - 1);
      setSelectedMonth(month);
    }
    setSelectedYear(year);
    setToday(newDate);
    setAnimate(isNextMonth ? style$3.slideRightAnimation : style$3.slideLeftAnimation);
    setTimeout(function () {
      setAnimate('');
    }, 100);
  };
  React.useEffect(function () {
    props.onSelectedDate(fullDate);
  }, [fullDate]);
  React.useEffect(function () {
    var handleOutsideClick = function handleOutsideClick(event) {
      var target = event.target;
      var isInputClick = inputRef.current && inputRef.current.contains(target);
      var isCalendarClick = target.closest(".bottomAnimation");
      if (!isInputClick && !isCalendarClick) {
        setToggleOpen(false);
      }
    };
    var handleMouseDown = function handleMouseDown(event) {
      setTimeout(function () {
        handleOutsideClick(event);
      }, 0);
    };
    document.addEventListener("mousedown", handleMouseDown);
    return function () {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "relative flex",
    ref: inputRef
  }, /*#__PURE__*/React.createElement("input", {
    type: toggleOpen ? "date" : "text",
    className: "peer block min-h-[auto] pl-1 w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-500 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1 text-black border-lightSilver",
    placeholder: "Select a date",
    onClick: calendarShow,
    defaultValue: fullDate.toString()
  })), toggleOpen && /*#__PURE__*/React.createElement("div", {
    className: "relative bottomAnimation ".concat(toggleOpen ? style$3.bottomAnimation : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex  mx-auto  items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shadow-md overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between border-b-2 border-lightSilver py-[12px] px-[12px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row  ".concat(showYearList ? "" : animate)
  }, showMonthList === true ? "" : showYearList === true ? "" : /*#__PURE__*/React.createElement("h1", {
    className: "proxima text-[14px] font-semibold cursor-pointer text-slatyBlue",
    onClick: toggleMonthList
  }, months[currentMonth]), showYearList === true && showMonthList === false ? /*#__PURE__*/React.createElement("h1", {
    className: "proxima text-[14px] font-semibold ml-1 text-slatyBlue"
  }, startYear + ' - ' + endYear) : /*#__PURE__*/React.createElement("h1", {
    className: "proxima text-[14px] font-semibold ml-1 cursor-pointer text-slatyBlue ".concat(showMonthList ? 'pointer-events-none' : ''),
    onClick: toggleYearList
  }, currentYear)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-5"
  }, showYearList === false ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all text-darkGray ".concat(showMonthList ? "hidden" : "", " text-[20px]"),
    onClick: function onClick() {
      return handleIconClick(false);
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft$1, null)), /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all text-darkGray ".concat(showMonthList ? "hidden" : "", " rotate-180 text-[20px]"),
    onClick: function onClick() {
      return handleIconClick(true);
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft$1, null))) : /*#__PURE__*/React.createElement(React.Fragment, null, currentPage <= totalPages && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all text-darkGray ".concat(currentPage === 1 ? "opacity-40 pointer-events-none" : "", " text-[20px]"),
    onClick: function onClick() {
      if (currentPage === 1) {
        return;
      }
      goToPreviousPage();
      handleIconClick(false);
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft$1, null)), /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all text-darkGray ".concat(currentPage === totalPages ? "opacity-40 pointer-events-none" : "", " rotate-180 text-[20px]"),
    onClick: function onClick() {
      if (currentPage === totalPages) {
        return;
      }
      goToNextPage();
      handleIconClick(true);
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft$1, null)))))), showMonthList === true ? /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(style$3.topAnimation, "  w-full h-full")
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 place-content-center overflow-hidden proxima"
  }, months.map(function (month, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "py-5 px-2 w-full h-full grid place-content-center text-sm text-textColor proxima relative cursor-pointer ",
      onClick: function onClick() {
        return selectMonth(index);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 h-12 hover:bg-lightGreen hover:text-primary transition-all duration-200 flex items-center justify-center rounded-md ".concat(index === selectedMonth ? 'bg-lightGreen text-primary' : '')
    }, month.length > 5 ? month.slice(0, 3) : month));
  })))) : showYearList === true ? /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(style$3.topAnimation)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(animate, "  w-full")
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 grid-rows-4 gap-1 place-content-center overflow-hidden proxima"
  }, displayedYears.map(function (year) {
    return /*#__PURE__*/React.createElement("div", {
      key: year,
      className: "py-2 px-2 w-full h-full grid place-content-center text-sm text-textColor proxima relative cursor-pointer",
      onClick: function onClick() {
        return selectYear(year);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "py-4 px-3 w-full h-full hover:bg-lightGreen hover:text-primary transition-all duration-200 flex items-center justify-center rounded-md ".concat(year === selectedYear ? 'bg-lightGreen text-primary' : '')
    }, year));
  }))))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-full grid grid-cols-7 proxima  ".concat(animate)
  }, days.map(function (day, index) {
    return /*#__PURE__*/React.createElement("h1", {
      key: index,
      className: "h-14 grid place-content-center text-[12px]"
    }, day);
  })), /*#__PURE__*/React.createElement("div", {
    className: " w-full h-full grid grid-cols-7 ".concat(animate)
  }, generateDate(today.getMonth(), today.getFullYear()).map(function (_a, index) {
    var date = _a.date,
      currentMonth = _a.currentMonth;
    var currentDate = new Date(date);
    var isSameDay = currentDate.getDate() === selectedDate.getDate() && currentDate.getMonth() === selectedDate.getMonth() && currentDate.getFullYear() === selectedDate.getFullYear();
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "h-full w-full grid place-content-center text-sm text-textColor proxima relative ",
      onClick: function onClick() {
        return handleDateClick(currentDate);
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: "h-[40px] w-[40px] grid place-content-center rounded-full cursor-pointer z-10 ".concat(currentMonth ? "" : "text-gray-400", " ").concat(isSameDay ? "bg-primary text-white" : "hover:bg-whiteSmoke")
    }, currentDate.getDate()), isSameDay && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "absolute flex inset-0 rounded-full overflow-visible"
    }, /*#__PURE__*/React.createElement("span", {
      className: "".concat(style$3.rippleAnimation, " absolute rounded-full  bg-primary opacity-50")
    }))));
  })))))));
};

var CalendarYear = function CalendarYear(props) {
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var currentDate = new Date();
  var startYear = props.startYear,
    endYear = props.endYear;
  var inputRef = React.useRef(null);
  var _a = React.useState(currentDate),
    today = _a[0],
    setToday = _a[1];
  var _b = React.useState(false),
    showMonthList = _b[0],
    setShowMonthList = _b[1];
  var _c = React.useState(false),
    showYearList = _c[0],
    setShowYearList = _c[1];
  var _d = React.useState(currentDate),
    selectedDate = _d[0],
    setSelectedDate = _d[1];
  var _e = React.useState(''),
    fullDate = _e[0],
    setFullDate = _e[1];
  var _f = React.useState(1),
    currentPage = _f[0],
    setCurrentPage = _f[1];
  var _g = React.useState(false),
    toggleOpen = _g[0],
    setToggleOpen = _g[1];
  var _h = React.useState(''),
    animate = _h[0],
    setAnimate = _h[1];
  var currentMonth = today.getMonth();
  var _j = React.useState(currentMonth),
    selectedMonth = _j[0],
    setSelectedMonth = _j[1];
  var currentYear = today.getFullYear();
  var _k = React.useState(currentYear),
    selectedYear = _k[0],
    setSelectedYear = _k[1];
  var yearsPerPage = 16;
  var totalPages = Math.ceil((endYear - startYear + 1) / yearsPerPage);
  var startIndex = (currentPage - 1) * yearsPerPage;
  var displayedYears = Array.from({
    length: yearsPerPage
  }, function (_, index) {
    var year = startYear + startIndex + index;
    return year <= endYear ? year : null;
  }).filter(function (year) {
    return year !== null;
  });
  var toggleMonthList = function toggleMonthList() {
    setShowMonthList(!showMonthList);
  };
  var selectMonth = function selectMonth(month) {
    var newDate = new Date(today);
    newDate.setMonth(month);
    setToday(newDate);
    setShowMonthList(false);
    setSelectedMonth(month);
    selectedMonth ? setAnimate(style$3.slideRightAnimation) : setAnimate('');
  };
  var toggleYearList = function toggleYearList() {
    if (!showYearList && !showMonthList) {
      setShowYearList(true);
      setCurrentPage(Math.ceil((selectedYear - startYear + 1) / yearsPerPage));
    } else {
      setShowYearList(false);
    }
  };
  var selectYear = function selectYear(year) {
    var newDate = new Date(today);
    newDate.setFullYear(year);
    setToday(newDate);
    setShowYearList(false);
    setSelectedYear(year);
    setTimeout(function () {
      setAnimate('');
      setShowMonthList(true);
    }, 0);
  };
  var handleDateClick = function handleDateClick(date) {
    var newDate = new Date(date);
    setToday(newDate);
    setSelectedDate(date);
    newDate.setDate(date.getDate() + 1);
    var formattedDate = newDate.toISOString().slice(0, 7);
    setFullDate(formattedDate);
    setToggleOpen(false);
  };
  var goToNextPage = function goToNextPage() {
    currentPage < totalPages ? setCurrentPage(currentPage + 1) : currentPage;
  };
  var goToPreviousPage = function goToPreviousPage() {
    currentPage > 1 ? setCurrentPage(currentPage - 1) : currentPage;
  };
  var calendarShow = function calendarShow() {
    setToggleOpen(!toggleOpen);
  };
  var handleIconClick = function handleIconClick(isNextMonth) {
    var newDate = new Date(today);
    var year = newDate.getFullYear();
    if (isNextMonth) {
      var month = newDate.getMonth() + 1;
      newDate.setMonth(newDate.getMonth() + 1);
      setSelectedMonth(month);
    } else {
      var month = newDate.getMonth() - 1;
      newDate.setMonth(newDate.getMonth() - 1);
      setSelectedMonth(month);
    }
    setSelectedYear(year);
    setToday(newDate);
    setAnimate(isNextMonth ? style$3.slideRightAnimation : style$3.slideLeftAnimation);
    setTimeout(function () {
      setAnimate('');
    }, 100);
  };
  React.useEffect(function () {
    props.onSelectedDate(fullDate);
  }, [fullDate]);
  React.useEffect(function () {
    var handleOutsideClick = function handleOutsideClick(event) {
      var target = event.target;
      var isInputClick = inputRef.current && inputRef.current.contains(target);
      var isCalendarClick = target.closest(".bottomAnimation");
      if (!isInputClick && !isCalendarClick) {
        setToggleOpen(false);
      }
    };
    var handleMouseDown = function handleMouseDown(event) {
      setTimeout(function () {
        handleOutsideClick(event);
      }, 0);
    };
    document.addEventListener("mousedown", handleMouseDown);
    return function () {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "relative flex",
    ref: inputRef
  }, /*#__PURE__*/React.createElement("input", {
    type: toggleOpen ? "month" : "text",
    className: "peer block min-h-[auto] pl-1 w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-500 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1 text-black border-lightSilver",
    placeholder: "Select a date",
    onClick: calendarShow,
    defaultValue: fullDate.toString()
  })), toggleOpen && /*#__PURE__*/React.createElement("div", {
    className: "relative bottomAnimation ".concat(toggleOpen ? style$3.bottomAnimation : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex  mx-auto  items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shadow-md overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between border-b-2 border-lightSilver py-[12px] px-[12px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row  ".concat(showYearList ? "" : animate)
  }, showMonthList === true ? "" : showYearList === true ? "" : /*#__PURE__*/React.createElement("h1", {
    className: "proxima text-[14px] font-semibold cursor-pointer text-slatyBlue",
    onClick: toggleMonthList
  }, months[currentMonth]), showYearList === true && showMonthList === false ? /*#__PURE__*/React.createElement("h1", {
    className: "proxima text-[14px] font-semibold ml-1 text-slatyBlue"
  }, startYear + ' - ' + endYear) : /*#__PURE__*/React.createElement("h1", {
    className: "proxima text-[14px] font-semibold ml-1 cursor-pointer text-slatyBlue ".concat(showMonthList ? 'pointer-events-none' : ''),
    onClick: toggleYearList
  }, currentYear)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-5"
  }, showYearList === false ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all text-darkGray ".concat(showMonthList ? "hidden" : "", " text-[20px]"),
    onClick: function onClick() {
      return handleIconClick(false);
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft$1, null)), /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all text-darkGray ".concat(showMonthList ? "hidden" : "", " rotate-180 text-[20px]"),
    onClick: function onClick() {
      return handleIconClick(true);
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft$1, null))) : /*#__PURE__*/React.createElement(React.Fragment, null, currentPage <= totalPages && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all text-darkGray ".concat(currentPage === 1 ? "opacity-40 pointer-events-none" : "", " text-[20px]"),
    onClick: function onClick() {
      if (currentPage === 1) {
        return;
      }
      goToPreviousPage();
      handleIconClick(false);
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft$1, null)), /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all text-darkGray ".concat(currentPage === totalPages ? "opacity-40 pointer-events-none" : "", " rotate-180 text-[20px]"),
    onClick: function onClick() {
      if (currentPage === totalPages) {
        return;
      }
      goToNextPage();
      handleIconClick(true);
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft$1, null)))))), showMonthList === true ? /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(style$3.topAnimation, "  w-full h-full")
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 place-content-center overflow-hidden proxima"
  }, months.map(function (month, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "py-5 px-2 w-full h-full grid place-content-center text-sm text-textColor proxima relative cursor-pointer ",
      onClick: function onClick() {
        return selectMonth(index);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 h-12 hover:bg-lightGreen hover:text-primary transition-all duration-200 flex items-center justify-center rounded-md ".concat(index === selectedMonth ? 'bg-lightGreen text-primary' : '')
    }, month.length > 5 ? month.slice(0, 3) : month));
  })))) : showYearList === true ? /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(style$3.topAnimation)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(animate, "  w-full")
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 grid-rows-4 gap-1 place-content-center overflow-hidden proxima"
  }, displayedYears.map(function (year) {
    return /*#__PURE__*/React.createElement("div", {
      key: year,
      className: "py-2 px-2 w-full h-full grid place-content-center text-sm text-textColor proxima relative cursor-pointer",
      onClick: function onClick() {
        return selectYear(year);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "py-4 px-3 w-full h-full hover:bg-lightGreen hover:text-primary transition-all duration-200 flex items-center justify-center rounded-md ".concat(year === selectedYear ? 'bg-lightGreen text-primary' : '')
    }, year));
  }))))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-full grid grid-cols-7 proxima  ".concat(animate)
  }, days.map(function (day, index) {
    return /*#__PURE__*/React.createElement("h1", {
      key: index,
      className: "h-14 grid place-content-center text-[12px]"
    }, day);
  })), /*#__PURE__*/React.createElement("div", {
    className: " w-full h-full grid grid-cols-7 ".concat(animate)
  }, generateDate(today.getMonth(), today.getFullYear()).map(function (_a, index) {
    var date = _a.date,
      currentMonth = _a.currentMonth;
    var currentDate = new Date(date);
    var isSameDay = currentDate.getDate() === selectedDate.getDate() && currentDate.getMonth() === selectedDate.getMonth() && currentDate.getFullYear() === selectedDate.getFullYear();
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "h-full w-full grid place-content-center text-sm text-textColor proxima relative ",
      onClick: function onClick() {
        return handleDateClick(currentDate);
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: "h-[40px] w-[40px] grid place-content-center rounded-full cursor-pointer z-10 ".concat(currentMonth ? "" : "text-gray-400", " ").concat(isSameDay ? "bg-primary text-white" : "hover:bg-whiteSmoke")
    }, currentDate.getDate()), isSameDay && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "absolute flex inset-0 rounded-full overflow-visible"
    }, /*#__PURE__*/React.createElement("span", {
      className: "".concat(style$3.rippleAnimation, " absolute rounded-full  bg-primary opacity-50")
    }))));
  })))))));
};

var Style$1 = {"striped_progress_bar":"Progressbar-module_striped_progress_bar__2vJqJ","progressbar_animation":"Progressbar-module_progressbar_animation__75iSo","progress_fill":"Progressbar-module_progress_fill__5-XfA"};

var ProgressBar = function ProgressBar(_a) {
  var _b;
  var _c = _a.progress,
    progress = _c === void 0 ? 100 : _c,
    label = _a.label,
    variant = _a.variant,
    _d = _a.striped,
    striped = _d === void 0 ? false : _d,
    _e = _a.progressDigit,
    progressDigit = _e === void 0 ? true : _e;
  var _f = React.useState(0),
    currentProgress = _f[0],
    setCurrentProgress = _f[1];
  React.useEffect(function () {
    var interval = setInterval(function () {
      setCurrentProgress(function (prevProgress) {
        var increment = Math.ceil(progress / 100);
        var nextProgress = prevProgress + increment;
        return nextProgress > progress ? progress : nextProgress;
      });
    }, 20);
    return function () {
      return clearInterval(interval);
    };
  }, [progress]);
  var fillStyle = (_b = {}, _b["--progress-width"] = "".concat(currentProgress, "%"), _b.width = "var(--progress-width)", _b);
  function getBackgroundColor(variant) {
    switch (variant) {
      case "primary":
        return "bg-primary";
      case "success":
        return "bg-successColor";
      case "danger":
        return "bg-defaultRed";
      case "warning":
        return "bg-lightYellow";
      case "info":
        return "bg-skyBlue";
      case "secondary":
      default:
        return "bg-blueColor";
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement(Typography, {
    type: "label",
    className: "text-sm text-slatyGrey"
  }, label ? label : ""), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-lightSilver rounded"
  }, striped ? /*#__PURE__*/React.createElement("div", {
    className: "h-full rounded ".concat(Style$1.progress_fill, " ").concat(getBackgroundColor(variant)),
    style: fillStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: Style$1.striped_progress_bar
  })) : /*#__PURE__*/React.createElement("div", {
    className: "h-full rounded ".concat(Style$1.progress_fill, " ").concat(getBackgroundColor(variant)),
    style: fillStyle
  })), progressDigit && /*#__PURE__*/React.createElement(Typography, {
    type: "body",
    className: "ml-2 text-sm text-pureBlack"
  }, currentProgress, "%"))));
};

function UploadIcon() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.99997 11.6153C7.78716 11.6153 7.60896 11.5435 7.46537 11.4C7.32179 11.2564 7.25 11.0782 7.25 10.8654V3.21533L5.32692 5.13841C5.17821 5.28712 5.00417 5.36308 4.8048 5.36628C4.60545 5.36948 4.42308 5.28839 4.2577 5.12301C4.10258 4.96789 4.02759 4.78969 4.03272 4.58841C4.03784 4.38714 4.11283 4.21407 4.2577 4.06921L7.3673 0.959607C7.46088 0.866024 7.5596 0.799998 7.66345 0.761531C7.76728 0.723081 7.87946 0.703857 7.99997 0.703857C8.12049 0.703857 8.23267 0.723081 8.3365 0.761531C8.44035 0.799998 8.53907 0.866024 8.63265 0.959607L11.7422 4.06921C11.891 4.21791 11.9644 4.3945 11.9624 4.59898C11.9605 4.80347 11.8871 4.97814 11.7422 5.12301C11.5871 5.27814 11.4089 5.35827 11.2077 5.36341C11.0064 5.36852 10.8282 5.29352 10.673 5.13841L8.74995 3.21533V10.8654C8.74995 11.0782 8.67816 11.2564 8.53458 11.4C8.39099 11.5435 8.21279 11.6153 7.99997 11.6153ZM2.3077 15.5C1.80257 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V11.75C0.5 11.5371 0.5718 11.3589 0.7154 11.2154C0.858983 11.0718 1.03718 11 1.25 11C1.46282 11 1.64102 11.0718 1.7846 11.2154C1.92818 11.3589 1.99997 11.5371 1.99997 11.75V13.6923C1.99997 13.7692 2.03202 13.8397 2.09612 13.9038C2.16024 13.9679 2.23077 14 2.3077 14H13.6922C13.7692 14 13.8397 13.9679 13.9038 13.9038C13.9679 13.8397 14 13.7692 14 13.6923V11.75C14 11.5371 14.0718 11.3589 14.2154 11.2154C14.3589 11.0718 14.5371 11 14.75 11C14.9628 11 15.141 11.0718 15.2845 11.2154C15.4281 11.3589 15.5 11.5371 15.5 11.75V13.6923C15.5 14.1974 15.325 14.625 14.975 14.975C14.625 15.325 14.1974 15.5 13.6922 15.5H2.3077Z",
    fill: "#6E6D7A"
  })));
}

function FileIcon() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "19",
    viewBox: "0 0 15 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.80169 15.0422H10.6967C10.8917 15.0422 11.053 14.9784 11.1805 14.8509C11.3079 14.7234 11.3717 14.5622 11.3717 14.3672C11.3717 14.1722 11.3079 14.0109 11.1805 13.8834C11.053 13.7559 10.8917 13.6922 10.6967 13.6922H4.80169C4.60669 13.6922 4.44544 13.7559 4.31794 13.8834C4.19044 14.0109 4.12669 14.1722 4.12669 14.3672C4.12669 14.5622 4.19044 14.7234 4.31794 14.8509C4.44544 14.9784 4.60669 15.0422 4.80169 15.0422ZM4.80169 11.2172H10.6967C10.8917 11.2172 11.053 11.1534 11.1805 11.0259C11.3079 10.8984 11.3717 10.7372 11.3717 10.5422C11.3717 10.3472 11.3079 10.1859 11.1805 10.0584C11.053 9.93094 10.8917 9.86719 10.6967 9.86719H4.80169C4.60669 9.86719 4.44544 9.93094 4.31794 10.0584C4.19044 10.1859 4.12669 10.3472 4.12669 10.5422C4.12669 10.7372 4.19044 10.8984 4.31794 11.0259C4.44544 11.1534 4.60669 11.2172 4.80169 11.2172ZM1.89919 18.8672C1.53919 18.8672 1.22419 18.7322 0.954194 18.4622C0.684194 18.1922 0.549194 17.8772 0.549194 17.5172V2.21719C0.549194 1.85719 0.684194 1.54219 0.954194 1.27219C1.22419 1.00219 1.53919 0.867188 1.89919 0.867188H9.45919C9.63919 0.867188 9.81544 0.904686 9.98794 0.979686C10.1604 1.05469 10.3067 1.15219 10.4267 1.27219L14.5442 5.38969C14.6642 5.50969 14.7617 5.65594 14.8367 5.82844C14.9117 6.00094 14.9492 6.17719 14.9492 6.35719V17.5172C14.9492 17.8772 14.8142 18.1922 14.5442 18.4622C14.2742 18.7322 13.9592 18.8672 13.5992 18.8672H1.89919ZM9.34669 5.72719V2.21719H1.89919V17.5172H13.5992V6.40219H10.0217C9.82669 6.40219 9.66544 6.33844 9.53794 6.21094C9.41045 6.08344 9.34669 5.92219 9.34669 5.72719Z",
    fill: "#02B89D"
  })));
}

function PdfIcon() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "18",
    viewBox: "0 0 16 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.3367 0.5625L14.9939 4.26713C15.316 4.59281 15.5492 5.16431 15.5492 5.625V16.3125C15.5492 17.2429 14.8018 18 13.8833 18H3.88786C2.96939 18 2.22195 17.2429 2.22195 16.3125C2.22195 16.0014 2.47017 15.75 2.77725 15.75C3.08433 15.75 3.33255 16.0014 3.33255 16.3125C3.33255 16.6224 3.58133 16.875 3.88786 16.875H13.8833C14.1904 16.875 14.4386 16.6224 14.4386 16.3125V6.75C14.4386 6.129 13.9416 5.625 13.328 5.625H11.2456C10.5593 5.625 9.99619 5.05575 9.99619 4.35938V2.25C9.99619 1.629 9.4992 1.125 8.88559 1.125H3.88786C3.58133 1.125 3.33255 1.37756 3.33255 1.6875V7.3125C3.33255 7.62356 3.08433 7.875 2.77725 7.875C2.47017 7.875 2.22195 7.62356 2.22195 7.3125V1.6875C2.22195 0.757125 2.96939 0 3.88786 0H9.99619C10.4515 0 11.0157 0.23625 11.3367 0.5625ZM12.772 8.4375H0.555303C0.249887 8.4375 0 8.69063 0 9V14.625C0 14.9344 0.249887 15.1875 0.555303 15.1875H12.772C13.078 15.1875 13.3273 14.9344 13.3273 14.625V9C13.3273 8.69063 13.078 8.4375 12.772 8.4375ZM3.7483 12.5961H3.00697V13.1901C3.00697 13.3881 2.88258 13.5 2.72265 13.5C2.57605 13.5 2.42112 13.3881 2.42112 13.1895V10.6577C2.42112 10.5092 2.53663 10.3466 2.72265 10.3466H3.7483C4.32581 10.3466 4.84558 10.7381 4.84558 11.4891C4.84502 12.2001 4.32581 12.5961 3.7483 12.5961ZM6.77193 13.5H5.71518C5.56858 13.5 5.40866 13.4184 5.40866 13.221V10.6667C5.40866 10.5047 5.56858 10.3877 5.71518 10.3877H6.73194C8.76102 10.3877 8.7166 13.5 6.77193 13.5ZM10.7285 10.9721H9.43572V11.6871H10.568C10.7285 11.6871 10.8878 11.8491 10.8878 12.0066C10.8878 12.1551 10.7285 12.276 10.568 12.276H9.43572V13.2204C9.43572 13.3779 9.32521 13.4994 9.16973 13.4994C8.97426 13.4994 8.85431 13.3779 8.85431 13.2204V10.6661C8.85431 10.5041 8.97481 10.3871 9.16973 10.3871H10.7285C10.9239 10.3871 11.0389 10.5041 11.0389 10.6661C11.0389 10.8107 10.9239 10.9721 10.7285 10.9721ZM3.00651 10.9131H3.74783C4.04548 10.9131 4.28037 11.1741 4.28093 11.4885C4.28093 11.7675 4.04548 12.033 3.74783 12.033H3.00651V10.9131ZM5.99558 10.9365H6.73246C7.98412 10.9365 7.93136 12.9514 6.73246 12.9514H5.99558V10.9365Z",
    fill: "#F55655"
  })));
}

function WordIcon() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "20",
    viewBox: "0 0 19 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_5506_828764)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask0_5506_828764"
    // style="mask-type:luminance"
    ,
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "1",
    width: "19",
    height: "19"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.5492 1.26172H0.549225V19.2617H18.5492V1.26172Z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#mask0_5506_828764)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0.549225 17.3614V3.94014C0.586177 3.83963 0.651595 3.75208 0.737503 3.68814C0.823411 3.62421 0.926081 3.58667 1.03297 3.58013L3.28296 3.05138L10.6067 1.28513C10.6626 1.26558 10.7226 1.26064 10.781 1.27071C10.8394 1.28077 10.8943 1.30555 10.9404 1.3427C10.9866 1.37985 11.0225 1.42813 11.0448 1.48302C11.0671 1.5379 11.0751 1.59758 11.0679 1.65639C11.0679 1.97139 11.0679 2.27515 11.0679 2.5789C11.0679 2.88265 11.0679 2.83763 11.3267 2.83763H18.0767C18.4142 2.83763 18.5379 2.97266 18.5379 3.32141V17.2151C18.5379 17.5639 18.4142 17.6877 18.0767 17.6989H11.2592C11.0229 17.6989 11.0117 17.6989 11.0117 17.9464C11.0117 18.1939 11.0117 18.5314 11.0117 18.8239C11.0117 19.1164 10.8429 19.3076 10.5167 19.2514L7.45668 18.7564L4.37418 18.2614L1.2242 17.7551C1.0217 17.7101 0.650475 17.7889 0.549225 17.3614ZM17.8404 10.2739C17.8404 8.1139 17.8404 5.95389 17.8404 3.79389C17.8404 3.64764 17.8405 3.56887 17.638 3.56887H11.2254C11.0792 3.56887 11.0229 3.5689 11.0229 3.7714C11.0229 4.16515 11.0229 4.54765 11.0229 4.8964C11.0229 5.24515 11.0229 5.15513 11.2704 5.15513H16.7717C16.817 5.15654 16.8616 5.16708 16.9028 5.1861C16.9439 5.20512 16.9808 5.23225 17.0113 5.26585C17.0417 5.29945 17.0651 5.33882 17.08 5.38165C17.0949 5.42449 17.101 5.46989 17.0979 5.51514C17.0986 5.60331 17.0669 5.68866 17.0088 5.75502C16.9508 5.82137 16.8704 5.86413 16.7829 5.87514H11.3267C11.0904 5.87514 11.0792 5.87516 11.0792 6.13391V7.25891C11.0792 7.52891 11.0792 7.5289 11.3379 7.5289H16.7717C16.8622 7.53469 16.9469 7.57553 17.0078 7.64274C17.0687 7.70995 17.101 7.79825 17.0979 7.8889C17.0986 7.97707 17.0669 8.06243 17.0088 8.12878C16.9508 8.19514 16.8704 8.23786 16.7829 8.24888H11.3492C11.0792 8.24888 11.0792 8.24888 11.0792 8.53013V9.65513C11.0792 9.91388 11.0792 9.91389 11.3379 9.91389H16.7717C16.8583 9.91945 16.9397 9.95712 17.0001 10.0195C17.0604 10.082 17.0953 10.1646 17.0979 10.2514C17.1042 10.3421 17.0748 10.4317 17.0159 10.5011C16.9571 10.5704 16.8735 10.6141 16.7829 10.6226H11.3604C11.0792 10.6226 11.0792 10.6226 11.0792 10.9039V12.0289C11.0792 12.2876 11.0792 12.2989 11.3379 12.2989H16.7717C16.8562 12.3099 16.9337 12.3514 16.9897 12.4157C17.0457 12.4799 17.0762 12.5624 17.0755 12.6476C17.079 12.7347 17.0498 12.82 16.9935 12.8867C16.9373 12.9533 16.8581 12.9965 16.7717 13.0076H11.3042C11.0679 13.0076 11.0567 13.0076 11.0567 13.2551V14.3801C11.0567 14.6501 11.0567 14.6501 11.3155 14.6501H16.7379C16.8275 14.6557 16.9119 14.6946 16.9743 14.7591C17.0368 14.8236 17.0728 14.9091 17.0755 14.9989C17.0785 15.0456 17.0721 15.0925 17.0566 15.1367C17.0412 15.1809 17.017 15.2215 16.9855 15.2561C16.954 15.2908 16.9158 15.3187 16.8733 15.3383C16.8308 15.3579 16.7847 15.3687 16.7379 15.3701H11.3042C11.0679 15.3701 11.0567 15.3701 11.0567 15.6176V16.7426C11.0567 17.0014 11.0567 17.0014 11.3155 17.0014H17.6154C17.8629 17.0014 17.8629 17.0014 17.8629 16.7426C17.8966 14.5601 17.8967 12.4226 17.8967 10.2739H17.8404ZM5.46547 9.4639L5.97174 11.3201L6.53424 13.4014C6.61299 13.6489 6.73672 13.7614 6.95047 13.7501C7.16422 13.7389 7.26543 13.6489 7.33293 13.4239L7.9742 11.0614C8.25545 10.0376 8.53668 9.02514 8.80668 8.01264C8.84439 7.9192 8.84692 7.81526 8.81382 7.72009C8.78072 7.62493 8.71427 7.54501 8.62671 7.49515C8.37921 7.36015 8.13169 7.49513 8.04169 7.79888L7.23172 10.7801C7.14172 11.1176 7.04046 11.4551 6.93921 11.8376L5.81421 7.86638C5.74671 7.60763 5.61172 7.47263 5.39797 7.47263C5.18423 7.47263 5.06047 7.60764 4.98172 7.87764C4.71172 8.87889 4.44168 9.88013 4.16043 10.8926L3.92422 11.7589C3.88036 11.7172 3.85249 11.6615 3.84546 11.6014L2.79922 7.82141C2.76357 7.6931 2.68886 7.57906 2.58547 7.49515C2.52696 7.44667 2.45334 7.42013 2.37734 7.42013C2.30135 7.42013 2.22774 7.44667 2.16922 7.49515C2.01172 7.60765 1.97798 7.7764 2.03423 8.0239C2.52923 9.8014 3.01296 11.5676 3.49671 13.3451C3.56421 13.5926 3.68795 13.7051 3.9017 13.6939C4.11545 13.6826 4.23918 13.5926 4.30668 13.3451C4.54293 12.5014 4.76793 11.6464 5.00418 10.8026C5.15043 10.4201 5.28542 9.9139 5.42042 9.4639H5.46547Z",
    fill: "#1565C0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.42078 9.4611C5.28578 9.94485 5.15081 10.4173 5.02706 10.8786C4.79081 11.7223 4.56581 12.5773 4.32956 13.4211C4.26206 13.6686 4.13833 13.7698 3.92458 13.7698C3.71083 13.7698 3.58703 13.6686 3.51953 13.4211C3.03578 11.6436 2.55204 9.87736 2.05704 8.09986C2.05704 7.85236 2.05704 7.68361 2.19204 7.57111C2.25056 7.52263 2.32417 7.49609 2.40016 7.49609C2.47615 7.49609 2.54976 7.52263 2.60828 7.57111C2.71168 7.65503 2.78639 7.76903 2.82203 7.89734L3.86834 11.6774C3.87537 11.7374 3.90318 11.7932 3.94703 11.8348L4.18331 10.9686C4.46456 9.9561 4.73454 8.95486 5.00454 7.95361C5.08329 7.68361 5.21828 7.54859 5.42078 7.54859C5.62328 7.54859 5.76959 7.68359 5.83709 7.94234L6.96209 11.9136C7.06334 11.5311 7.16454 11.1936 7.25454 10.8561L8.06457 7.87485C8.15457 7.55985 8.40209 7.43611 8.64959 7.57111C8.73715 7.62097 8.8036 7.70089 8.83671 7.79605C8.86981 7.89122 8.86728 7.99517 8.82956 8.0886C8.55956 9.1011 8.27833 10.1136 7.99708 11.1373L7.35582 13.4998C7.28832 13.7248 7.16454 13.8261 6.97329 13.8261C6.78204 13.8261 6.63579 13.7249 6.55704 13.4774L5.99454 11.3961L5.48828 9.53986L5.42078 9.4611Z",
    fill: "white"
  }))), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_5506_828764"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "18",
    height: "19",
    fill: "white",
    transform: "translate(0.549225 0.5)"
  })))));
}

function ExcelIcon() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "20",
    viewBox: "0 0 18 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_5506_828782)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask0_5506_828782"
    // style="mask-type:luminance"
    ,
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "18",
    height: "19"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 0.914062H0V18.9141H18V0.914062Z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#mask0_5506_828782)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 17.1366V2.73656L1.76619 2.42156L5.37746 1.78033L9.35994 1.08281C9.65244 1.08281 9.9337 0.970314 10.215 0.914062V2.64657H17.2012C17.3081 2.6408 17.4149 2.65857 17.5142 2.69862C17.6135 2.73867 17.7028 2.80002 17.7757 2.87835C17.8487 2.95668 17.9036 3.05005 17.9365 3.15191C17.9694 3.25377 17.9795 3.36162 17.9662 3.46783V16.2928C17.9721 16.3677 17.9721 16.4429 17.9662 16.5178C17.9341 16.6895 17.8415 16.844 17.7053 16.9534C17.5691 17.0627 17.3983 17.1197 17.2237 17.1141H10.215V18.8691L7.70622 18.4303L4.33122 17.8228L0.956223 17.2266L0 17.1366ZM10.2487 13.6716H12.4987C12.6225 13.6716 12.6562 13.6716 12.6562 13.8403V15.1341C12.6562 15.2691 12.6562 15.3028 12.4987 15.3028H10.2487V16.5291H17.4262V3.31032H10.2487V4.59283H12.645V6.21284H10.2487V6.83157H12.645V8.45158H10.2487V9.11532H12.645V10.7353H10.395C10.395 10.7353 10.2487 10.7353 10.2487 10.8141C10.2487 10.8928 10.2487 11.1853 10.2487 11.3991H12.4987C12.6112 11.3991 12.645 11.3991 12.645 11.5566V12.8616C12.645 13.0078 12.645 13.0416 12.4762 13.0416H10.2262L10.2487 13.6716ZM2.80124 6.97783L2.88 7.18032C3.25125 8.05782 3.61125 8.94659 4.005 9.83534C4.02427 9.87774 4.03418 9.92376 4.03418 9.97033C4.03418 10.0169 4.02427 10.0629 4.005 10.1053C3.58875 10.9828 3.18371 11.8716 2.76746 12.7603L2.6887 12.9516C3.05995 12.9516 3.39745 12.9516 3.7462 13.0191C3.79368 13.0259 3.84201 13.0147 3.88161 12.9876C3.9212 12.9605 3.94916 12.9196 3.95995 12.8728C4.09495 12.5241 4.24121 12.1753 4.38746 11.8266C4.53371 11.4778 4.64619 11.1853 4.79244 10.8366C5.07369 11.5791 5.35494 12.2878 5.63619 12.9966C5.63619 13.0753 5.69246 13.1428 5.79371 13.1428L6.91871 13.2103H7.0537L6.96368 13.0191L5.55743 10.0828C5.52979 10.0349 5.51527 9.98062 5.51527 9.92532C5.51527 9.87003 5.52979 9.81569 5.55743 9.76781L6.90745 6.91033L6.98621 6.71907L5.74873 6.79782C5.74873 6.79782 5.6587 6.85407 5.64745 6.89907L4.76999 9.03656C4.55624 8.44031 4.33122 7.84406 4.11747 7.23656C4.00497 6.91031 4.00495 6.91031 3.6787 6.92156L2.80124 6.97783Z",
    fill: "#1E6F43"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.80096 6.97751L3.70094 6.92124C4.02719 6.92124 4.02721 6.92124 4.13971 7.23624C4.35346 7.84374 4.57841 8.44 4.79216 9.03625L5.66969 6.89875C5.66969 6.89875 5.73715 6.79751 5.7709 6.79751L7.00845 6.71875L6.92969 6.91002L5.57967 9.76749C5.55203 9.81538 5.53751 9.86971 5.53751 9.92501C5.53751 9.9803 5.55203 10.0346 5.57967 10.0825L6.98592 13.0188L7.07594 13.21H6.94095L5.81595 13.1425C5.7147 13.1425 5.69218 13.075 5.65843 12.9963C5.37718 12.2875 5.09593 11.5788 4.81468 10.8363C4.66843 11.185 4.53345 11.5113 4.4097 11.8263C4.28595 12.1413 4.11719 12.5238 3.98219 12.8725C3.9714 12.9192 3.94344 12.9602 3.90385 12.9873C3.86425 13.0144 3.81592 13.0256 3.76844 13.0188C3.41969 13.0188 3.08219 13.0188 2.71094 12.9513L2.7897 12.76C3.20595 11.8712 3.61092 10.9825 4.02717 10.105C4.04644 10.0626 4.05642 10.0166 4.05642 9.97002C4.05642 9.92345 4.04644 9.87742 4.02717 9.83502C3.64467 8.94627 3.28467 8.0575 2.90217 7.18L2.80096 6.97751Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.1206 4.60547V6.20298H13.2969V4.60547H16.1206Z",
    fill: "#1E6F43"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.1206 6.85547V8.44172H13.2969V6.85547H16.1206Z",
    fill: "#1E6F43"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.2969 9.11719H16.1206V10.7147H13.2969V9.11719Z",
    fill: "#1E6F43"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.1206 13.0311H13.2969V11.4336H16.1206V13.0311Z",
    fill: "#1E6F43"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.1333 15.2919H13.2871V13.8181C13.2871 13.7169 13.2871 13.6719 13.4221 13.6719H16.0096C16.0096 13.6719 16.1221 13.7281 16.1221 13.7619C16.1333 14.2681 16.1333 14.7744 16.1333 15.2919Z",
    fill: "#1E6F43"
  }))), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_5506_828782"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "18",
    height: "19",
    fill: "white",
    transform: "translate(0 0.5)"
  })))));
}

function ClearIcon$1() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
  })));
}

function ImageIcon() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "20",
    viewBox: "0 0 18 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_5506_828798)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0.609375V18.6093L7.32556 11.2837L9.62788 13.586L13.3953 9.8186L17.9999 14.0046V0.609375H0Z",
    fill: "#D8D8D8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.6041 7.30586C5.52885 7.30586 6.27851 6.5562 6.27851 5.63144C6.27851 4.70669 5.52885 3.95703 4.6041 3.95703C3.67935 3.95703 2.92969 4.70669 2.92969 5.63144C2.92969 6.5562 3.67935 7.30586 4.6041 7.30586Z",
    fill: "#FDB663"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.001 14.0063V18.611H14.4428V18.4017L9.62891 13.5877L13.3963 9.82031L18.001 14.0063Z",
    fill: "#70993F"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.4418 18.3975V18.6068H0L7.32556 11.2812L9.62787 13.5836L14.4418 18.3975Z",
    fill: "#80AF52"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_5506_828798"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "18",
    height: "19",
    fill: "white",
    transform: "translate(0 0.5)"
  })))));
}

function CheckIcon$1() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
  })));
}

var extensionToIconMap = {
  pdf: /*#__PURE__*/React.createElement(PdfIcon, null),
  doc: /*#__PURE__*/React.createElement(WordIcon, null),
  docx: /*#__PURE__*/React.createElement(WordIcon, null),
  xls: /*#__PURE__*/React.createElement(ExcelIcon, null),
  xlsx: /*#__PURE__*/React.createElement(ExcelIcon, null),
  jpg: /*#__PURE__*/React.createElement(ImageIcon, null),
  jpeg: /*#__PURE__*/React.createElement(ImageIcon, null),
  png: /*#__PURE__*/React.createElement(ImageIcon, null)
};
function Uploader(_a) {
  var multiSelect = _a.multiSelect,
    variant = _a.variant,
    type = _a.type;
  var _b = React.useState([]),
    fileNames = _b[0],
    setFileNames = _b[1];
  var _c = React.useState(false),
    uploaded = _c[0],
    setUploaded = _c[1];
  var _d = React.useState(false),
    isChecked = _d[0],
    setIsChecked = _d[1];
  // for Url Uploader
  var _e = React.useState(""),
    rootUrl = _e[0],
    setRootUrl = _e[1];
  var _f = React.useState(""),
    mainUrl = _f[0],
    setMainUrl = _f[1];
  var _g = React.useState([]);
    _g[0];
    var setUploadedFiles = _g[1];
  var fileInputRef = React.useRef(null);
  var handleDragOver = function handleDragOver(e) {
    e.preventDefault();
  };
  var handleDrop = function handleDrop(e) {
    e.preventDefault();
    var files = e.dataTransfer.files;
    handleFileChange(files);
  };
  var handleFileChange = function handleFileChange(files) {
    var names = Array.from(files).map(function (file) {
      return file.name;
    });
    setFileNames(names);
    setTimeout(function () {
      setIsChecked(true);
    }, 1600);
    setTimeout(function () {
      setUploaded(true);
    }, 2300);
  };
  var handleBrowseClick = function handleBrowseClick() {
    var _a;
    (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click();
  };
  var handleFileInputChange = function handleFileInputChange(e) {
    var files = e.target.files;
    if (files) {
      handleFileChange(files);
    }
    // Set the uploaded state to false when a new file is selected
    setUploaded(false);
  };
  var handleRemoveFile = function handleRemoveFile(index) {
    var updatedFileNames = __spreadArray([], fileNames, true);
    updatedFileNames.splice(index, 1);
    setFileNames(updatedFileNames);
    if (updatedFileNames.length === 0) {
      setUploaded(false);
    }
  };
  var getFileExtension = function getFileExtension(fileName) {
    var extension = fileName.slice(fileName.lastIndexOf(".") + 1).toLowerCase();
    return extension;
  };
  var renderFileIcon = function renderFileIcon(fileName) {
    var extension = getFileExtension(fileName);
    var icon = extensionToIconMap[extension];
    return icon || /*#__PURE__*/React.createElement(FileIcon, null);
  };
  // for url uploader
  var handleRootUrlChange = function handleRootUrlChange(e) {
    setRootUrl(e.target.value);
  };
  var handleMainUrlChange = function handleMainUrlChange(e) {
    setMainUrl(e.target.value);
  };
  var handleUpload = function handleUpload() {
    if (mainUrl) {
      var fileUrl = mainUrl;
      if (rootUrl) {
        fileUrl = rootUrl + mainUrl;
      }
      // Perform upload logic using the fileUrl
      console.log("Uploading file from URL:", fileUrl);
      // Add your upload logic here
      // Store uploaded file information
      var uploadedFile_1 = {
        url: fileUrl,
        uploadedAt: new Date().toISOString()
      };
      // Add uploaded file to the list
      setUploadedFiles(function (prevUploadedFiles) {
        return __spreadArray(__spreadArray([], prevUploadedFiles, true), [uploadedFile_1], false);
      });
      // Reset the input fields after upload
      setRootUrl("");
      setMainUrl("");
    }
  };
  return type === "url" ? /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-center items-center h-[36px] border border-dashed border-lightSilver rounded-[4px]"
  }, /*#__PURE__*/React.createElement("input", {
    className: "outline-none border-r border-r-lightSilver w-1/6 ml-2 text-[14px]  text-darkCharcoal placeholder:text-[14px]",
    type: "url",
    value: rootUrl,
    onChange: handleRootUrlChange,
    placeholder: "Enter root URL"
  }), /*#__PURE__*/React.createElement("input", {
    className: "outline-none w-4/6 ml-2 text-[14px] text-pureBlack placeholder:text-[14px]",
    type: "url",
    value: mainUrl,
    onChange: handleMainUrlChange,
    placeholder: "Enter main URL"
  }), /*#__PURE__*/React.createElement("span", {
    className: "w-1/6 relative"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleUpload,
    className: "absolute bottom-[-12px] right-5 text-[16px] px-[20px] text-slatyGrey hover:bg-[#EDFFFC] hover:text-primary rounded-[5px]"
  }, "Upload"))) : /*#__PURE__*/React.createElement("div", null, (multiSelect || !variant) && /*#__PURE__*/React.createElement("div", {
    className: "upload-container w-full flex items-center justify-center ".concat(variant === "small" ? "h-[36px]" : "flex-col h-[230px]", " justify-center items-centerborder transition-all duration-200 ease-in \n        border border-dashed border-lightSilver hover:border-primary hover:bg-[#EDFFFC] cursor-pointer rounded-[4px]"),
    onDragOver: handleDragOver,
    onDrop: handleDrop,
    onClick: handleBrowseClick
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    multiple: multiSelect,
    ref: fileInputRef,
    className: "input-field hidden",
    onChange: handleFileInputChange
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-[15px] text-slatyGrey ".concat(variant === "small" ? "" : "border-2 border-lightSilver rounded-[4px] p-2")
  }, /*#__PURE__*/React.createElement(UploadIcon, null)), /*#__PURE__*/React.createElement("p", {
    className: "".concat(variant === "small" ? "ml-[10px]" : "mt-4", " text-[14px] text-darkCharcoal")
  }, "Drag and Drop or ", /*#__PURE__*/React.createElement("span", {
    className: "text-teal-500"
  }, "Browse"), " to Upload")), multiSelect ? /*#__PURE__*/React.createElement("section", {
    className: "mt-2 flex flex-col justify-between p-2 border border-lightSilver w-full h-[105px] rounded-[4px] overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row ml-2 flex-wrap overflow-x-auto"
  }, fileNames.length > 0 && uploaded ? fileNames.map(function (name, index) {
    return /*#__PURE__*/React.createElement("span", {
      className: "text-[14px] text-darkCharcoal flex items-center gap-2 bg-whiteSmoke px-[2px] py-[2.5px] rounded-[2px] mr-2 mb-2",
      key: name
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[14px]"
    }, renderFileIcon(name)), name.length > 8 ? /*#__PURE__*/React.createElement(React.Fragment, null, name.slice(0, 8), "..") : /*#__PURE__*/React.createElement(React.Fragment, null, name), /*#__PURE__*/React.createElement("span", {
      onClick: function onClick() {
        return handleRemoveFile(index);
      },
      className: "text-[14px] text-slatyGrey cursor-pointer"
    }, /*#__PURE__*/React.createElement(ClearIcon$1, null)));
  }) : !uploaded && /*#__PURE__*/React.createElement("span", {
    className: "flex flex-row items-center gap-2 text-[14px] text-darkCharcoal"
  }, fileNames.length === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FileIcon, null), " No selected files") : /*#__PURE__*/React.createElement(React.Fragment, null, fileNames.length, " file", fileNames.length > 1 ? "s" : "", " selected")))), fileNames.length > 0 && !uploaded && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center text-[12px] italic text-slatyGrey flex-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mr-[10px]"
  }, uploaded ? "Uploaded" : "Uploading..."), /*#__PURE__*/React.createElement(ProgressBar, {
    variant: "primary",
    progressDigit: false,
    label: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: " ml-2 text-primary text-[20px]"
  }, isChecked && /*#__PURE__*/React.createElement(CheckIcon$1, null)))) : /*#__PURE__*/React.createElement("section", {
    className: "".concat(variant === "small" ? fileNames.length > 0 && "flex justify-between items-center border border-lightSilver h-[36px] px-[20px] rounded-[4px]" : "mt-2 flex justify-between items-center border border-lightSilver h-[36px] px-[20px] rounded-[4px]")
  }, fileNames.length > 0 && !uploaded ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    className: "text-[12px] italic mr-[10px] text-slatyGrey"
  }, !uploaded ? "Uploading..." : "Uploaded"), /*#__PURE__*/React.createElement(ProgressBar, {
    variant: "primary",
    progressDigit: false,
    label: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: " ml-2 text-primary text-[20px]"
  }, isChecked && /*#__PURE__*/React.createElement(CheckIcon$1, null))) : uploaded ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row items-center"
  }, renderFileIcon(fileNames[0]), /*#__PURE__*/React.createElement("span", {
    className: "ml-2 text-[14px] text-darkCharcoal"
  }, fileNames[0].length > 30 ? /*#__PURE__*/React.createElement(React.Fragment, null, fileNames[0].slice(0, 26), "..", fileNames[0].substring(fileNames[0].lastIndexOf("."))) : /*#__PURE__*/React.createElement(React.Fragment, null, fileNames[0]))), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return handleRemoveFile(0);
    },
    className: "text-[18px] text-slatyGrey cursor-pointer"
  }, /*#__PURE__*/React.createElement(ClearIcon$1, null))) : variant === "small" ? /*#__PURE__*/React.createElement("div", {
    className: "upload-container w-full flex justify-center h-[36px]\n                  items-center transition-all duration-200 ease-in \n                border border-dashed border-lightSilver hover:border-primary hover:bg-[#EDFFFC] \n                cursor-pointer rounded-[4px]",
    onDragOver: handleDragOver,
    onDrop: handleDrop,
    onClick: handleBrowseClick
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    multiple: multiSelect,
    ref: fileInputRef,
    className: "input-field hidden",
    onChange: handleFileInputChange
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-[15px] text-slatyGrey ".concat(variant === "small" ? "" : "border-2 border-lightSilver rounded-[4px] p-2")
  }, /*#__PURE__*/React.createElement(UploadIcon, null)), /*#__PURE__*/React.createElement("p", {
    className: "".concat(variant === "small" ? "ml-[10px]" : "mt-4", " text-[14px] text-darkCharcoal")
  }, "Drag and Drop or ", /*#__PURE__*/React.createElement("span", {
    className: "text-teal-500"
  }, "Browse"), " ", "to Upload")) : /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row items-center"
  }, /*#__PURE__*/React.createElement(FileIcon, null), /*#__PURE__*/React.createElement("span", {
    className: "ml-2 text-[14px] text-darkCharcoal"
  }, "No Files Selected"))));
}

var InputMask = function InputMask(_a) {
  var type = _a.type,
    setPrefix = _a.setPrefix,
    className = _a.className,
    setDelimiter = _a.setDelimiter,
    splitLengths = _a.splitLengths,
    US = _a.US,
    label = _a.label;
  setPrefix ? setPrefix.split("") : [];
  var _b = React.useState(""),
    value = _b[0],
    setValue = _b[1];
  React.useEffect(function () {}, [value]);
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Typography, {
    type: 'label',
    className: "block text-slatyGrey"
  }, label || defaultLabel), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "".concat(className, " block w-full border-b-[1px] border-lightSilver outline-none bg-transparent"),
    onChange: changeHandler,
    value: value,
    placeholder: defaultPlaceholder
  }));
};

var Loader = function Loader(_a) {
  var size = _a.size;
  var container = "";
  var svgSize = 88;
  switch (size) {
    case "sm":
      container = "loader-container sm";
      svgSize = 48;
      break;
    case "lg":
      container = "loader-container lg";
      svgSize = 132;
      break;
    default:
      container = "loader-container md";
      break;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: container
  }, /*#__PURE__*/React.createElement("svg", {
    className: "animate-spin",
    width: svgSize,
    height: svgSize,
    viewBox: "0 0 133 132"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_5047_872358)"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "132",
    height: "132",
    transform: "translate(0.5)",
    fill: "url(#pattern0)"
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip1_5047_872358)"
  }, /*#__PURE__*/React.createElement("path", {
    opacity: "0.05",
    d: "M109.5 66C109.5 57.8403 107.178 49.849 102.806 42.9595C98.4339 36.07 92.1917 30.5667 84.8085 27.0924",
    stroke: "#64DBC9",
    strokeWidth: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: "0.1",
    d: "M109.5 66C109.5 55.0631 105.332 44.5372 97.8457 36.5645",
    stroke: "#64DBC9",
    strokeWidth: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: "0.3",
    d: "M109.5 66C109.5 60.5804 108.475 55.2097 106.48 50.1707",
    stroke: "#64DBC9",
    strokeWidth: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M105.5 66C105.5 65.9183 105.5 65.8367 105.499 65.755",
    stroke: "#64DBC9",
    strokeWidth: "18",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip2_5047_872358)"
  }, /*#__PURE__*/React.createElement("path", {
    opacity: "0.05",
    d: "M45.0001 28.761C37.9336 32.8409 32.1737 38.8472 28.3934 46.0784C24.613 53.3096 22.9681 61.4671 23.6509 69.5982",
    stroke: "#64DBC9",
    strokeWidth: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: "0.1",
    d: "M45.0001 28.761C35.5285 34.2295 28.4965 43.1016 25.3354 53.5717",
    stroke: "#64DBC9",
    strokeWidth: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: "0.3",
    d: "M45.0001 28.761C40.3066 31.4708 36.1677 35.0434 32.8013 39.2907",
    stroke: "#64DBC9",
    strokeWidth: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M47.0001 32.2251C46.9294 32.266 46.8588 32.307 46.7883 32.3483",
    stroke: "#64DBC9",
    strokeWidth: "18",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip3_5047_872358)"
  }, /*#__PURE__*/React.createElement("path", {
    opacity: "0.05",
    d: "M44.9999 103.239C52.0664 107.319 60.1479 109.304 68.3005 108.962C76.4531 108.62 84.3402 105.966 91.0405 101.309",
    stroke: "#64DBC9",
    strokeWidth: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: "0.1",
    d: "M44.9999 103.239C54.4715 108.707 65.671 110.361 76.319 107.864",
    stroke: "#64DBC9",
    strokeWidth: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: "0.3",
    d: "M44.9999 103.239C49.6934 105.949 54.8568 107.747 60.2183 108.539",
    stroke: "#64DBC9",
    strokeWidth: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M46.9999 99.7749C47.0706 99.8157 47.1415 99.8563 47.2125 99.8967",
    stroke: "#64DBC9",
    strokeWidth: "18",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "pattern0",
    patternContentUnits: "objectBoundingBox",
    width: "1",
    height: "1"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#image0_5047_872358"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_5047_872358"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "132",
    height: "132",
    fill: "white",
    transform: "translate(0.5)"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "clip1_5047_872358"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "96",
    height: "96",
    fill: "white",
    transform: "translate(18.5 18)"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "clip2_5047_872358"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "96",
    height: "96",
    fill: "white",
    transform: "translate(48.9307 131.569) rotate(-120)"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "clip3_5047_872358"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "96",
    height: "96",
    fill: "white",
    transform: "translate(132.069 48.4307) rotate(120)"
  })), /*#__PURE__*/React.createElement("image", {
    id: "image0_5047_872358",
    width: "1",
    height: "1",
    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAQSURBVHgBAQUA+v8AAAAAAAAFAAFkeJU4AAAAAElFTkSuQmCC"
  }))));
};

var Modal = function Modal(_a) {
  var isOpen = _a.isOpen;
    _a.onClose;
    var children = _a.children,
    size = _a.size;
  if (!isOpen) return null;
  var getSizeClasses = function getSizeClasses() {
    switch (size) {
      case "sm":
        return "w-72";
      case "md":
      default:
        return "w-4/12";
      case "lg":
        return "w-1/2";
      case "full":
        return "w-full";
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative my-6 mx-auto ".concat(getSizeClasses())
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-2 border-lightSilver rounded-lg relative flex flex-col bg-pureWhite outline-none focus:outline-none"
  }, children))));
};

var ModalAction = function ModalAction(_a) {
  var children = _a.children,
    position = _a.position;
  var justifyClasses = "";
  if (position === "start") {
    justifyClasses = "justify-start";
  } else if (position === "center") {
    justifyClasses = "justify-center";
  } else {
    justifyClasses = "justify-end";
  }
  return /*#__PURE__*/React.createElement(Typography, {
    type: 'body',
    className: "p-4 flex flex-wrap items-center border-t border-solid border-lightSilver rounded-b ".concat(justifyClasses)
  }, children || "Modal Action");
};

var ModalContent = function ModalContent(_a) {
  var children = _a.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "p-2 mb-5 flex-auto"
  }, /*#__PURE__*/React.createElement(Typography, {
    type: 'body',
    className: "text-pureBlack leading-relaxed"
  }, children || 'Modal Content'));
};

var ModalTitle = function ModalTitle(_a) {
  var children = _a.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Typography, {
    type: 'body',
    className: "text-pureBlack flex items-center justify-between p-3 border-b border-solid border-lightSilver rounded-t"
  }, children || 'Modal Title'));
};

function ChevronsLeft() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "11 17 6 12 11 7"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "18 17 13 12 18 7"
  })));
}

function ChevronLeft() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  })));
}

var Pagination = function Pagination(props) {
  var _a = React.useState(1),
    currentPage = _a[0],
    setCurrentPage = _a[1];
  var _b = React.useState(false),
    isSmallScreen = _b[0],
    setIsSmallScreen = _b[1];
  var handleScreenSizeChange = function handleScreenSizeChange() {
    if (window.innerWidth <= 768) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };
  // for screen changing
  React.useEffect(function () {
    handleScreenSizeChange();
    window.addEventListener("resize", handleScreenSizeChange);
    return function () {
      window.removeEventListener("resize", handleScreenSizeChange);
    };
  }, []);
  var handleClick = function handleClick(pageNumber) {
    if (pageNumber === "...") {
      return;
    }
    setCurrentPage(Number(pageNumber));
    props.onChangePage(Number(pageNumber));
  };
  var handleFirstPage = function handleFirstPage() {
    if (currentPage !== 1) {
      handleClick(1);
    }
  };
  var handlePrevPage = function handlePrevPage() {
    if (currentPage > 1) {
      handleClick(currentPage - 1);
    }
  };
  var handleNextPage = function handleNextPage() {
    if (currentPage < props.totalPages) {
      handleClick(currentPage + 1);
    }
  };
  var handleLastPage = function handleLastPage() {
    if (currentPage !== props.totalPages) {
      handleClick(props.totalPages);
    }
  };
  var totalPages = props.totalPages,
    space = props.space,
    variant = props.variant;
  var pageNumbers = [];
  if (totalPages <= 5) {
    pageNumbers = Array.from({
      length: totalPages
    }, function (_, i) {
      return i + 1;
    });
  } else {
    if (currentPage <= 3) {
      pageNumbers = [1, 2, 3, 4, "...", totalPages];
    } else if (currentPage >= totalPages - 2) {
      pageNumbers = [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      pageNumbers = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
    }
  }
  // page changing conditions for small screens
  if (isSmallScreen) {
    if (currentPage <= 2) {
      pageNumbers = [1, 2, "...", totalPages];
    } else if (currentPage >= totalPages - 1) {
      pageNumbers = [1, "...", totalPages - 1, totalPages];
    } else {
      pageNumbers = [1, currentPage, "...", totalPages];
    }
  }
  //Style for main container
  var containerClassName = "flex items-center mt-4";
  // Common style for normal (Next, Prev) buttons
  var buttonStyles = "".concat(isSmallScreen ? "px-2" : "px-3", " py-2 text-[14px]");
  // Common style for arrow buttons
  var arrowButtonStyle = "".concat(isSmallScreen ? "px-2" : "px-3", " py-2");
  // common style for pages button in space variant
  var pagesSpaceStyle = "pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded text-[14px]";
  // Common Style for first page number in variant - without space
  var firstPageNumStyle = "pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded-l-lg text-[14px]";
  // Common style for last page number in variant - without space
  var lastPageNumStyle = "pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded-r-lg text-[14px]";
  // common Style for Middle page numbers for variant without space
  var middlePageNumStyle = "pt-[1px] pr-[9px] pb-[1px] pl-[9px] text-[14px]";
  // Styel for current page number
  var currentPageNumStyle = "bg-lightPrimary border border-primary text-darkCharcoal";
  // Style for default Page Numbers with variant space
  var defaultPageNumSpaceStyle = "text-darkCharcoal bg-pureWhite border border-lightSilver";
  // Style for default page numbers for variant without space
  var defaultPageNumStyle = "text-darkCharcoal bg-pureWhite border-t border-r border-b border-lightSilver";
  // for prop variant = "buttons"
  return variant === "buttons" ?
  // for "space" prop
  space ? /*#__PURE__*/React.createElement("div", {
    className: containerClassName
  }, /*#__PURE__*/React.createElement("button", {
    className: "".concat(buttonStyles, " ").concat(currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleFirstPage();
    },
    disabled: currentPage === 1
  }, "First"), /*#__PURE__*/React.createElement("span", {
    className: "text-lightSilver"
  }, "|"), /*#__PURE__*/React.createElement("button", {
    className: "".concat(buttonStyles, " ").concat(currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handlePrevPage();
    },
    disabled: currentPage === 1
  }, "Prev"), /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, pageNumbers.map(function (pageNumber) {
    return /*#__PURE__*/React.createElement("button", {
      key: pageNumber,
      className: "".concat(pagesSpaceStyle, " ").concat(currentPage === pageNumber ? currentPageNumStyle : defaultPageNumSpaceStyle, " ").concat(isSmallScreen ? "ml-1" : "ml-2"),
      onClick: function onClick() {
        return handleClick(Number(pageNumber));
      },
      disabled: currentPage === pageNumber || pageNumber === "..."
    }, pageNumber);
  })), /*#__PURE__*/React.createElement("button", {
    className: "".concat(buttonStyles, " ").concat(currentPage === totalPages ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleNextPage();
    },
    disabled: currentPage === totalPages
  }, "Next"), /*#__PURE__*/React.createElement("span", {
    className: "text-lightSilver"
  }, "|"), /*#__PURE__*/React.createElement("button", {
    className: "".concat(buttonStyles, " ").concat(currentPage === totalPages ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleLastPage();
    },
    disabled: currentPage === totalPages
  }, "Last")) :
  /*#__PURE__*/
  // buttons without space
  React.createElement("div", {
    className: containerClassName
  }, /*#__PURE__*/React.createElement("button", {
    className: "".concat(buttonStyles, " ").concat(currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleFirstPage();
    },
    disabled: currentPage === 1
  }, "First"), /*#__PURE__*/React.createElement("span", {
    className: "text-lightSilver"
  }, "|"), /*#__PURE__*/React.createElement("button", {
    className: "".concat(buttonStyles, " ").concat(currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handlePrevPage();
    },
    disabled: currentPage === 1
  }, "Prev"), /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, pageNumbers.map(function (pageNumber, index) {
    if (!space && index === 0) {
      return /*#__PURE__*/React.createElement("button", {
        key: pageNumber,
        className: "".concat(firstPageNumStyle, " ").concat(currentPage === pageNumber ? currentPageNumStyle : defaultPageNumSpaceStyle),
        onClick: function onClick() {
          return handleClick(Number(pageNumber));
        },
        disabled: currentPage === pageNumber || pageNumber === "..."
      }, pageNumber);
    } else if (index === pageNumbers.length - 1) {
      return /*#__PURE__*/React.createElement("button", {
        key: pageNumber,
        className: "".concat(lastPageNumStyle, " ").concat(currentPage === pageNumber ? currentPageNumStyle : defaultPageNumStyle),
        onClick: function onClick() {
          return handleClick(Number(pageNumber));
        },
        disabled: currentPage === pageNumber || pageNumber === "..."
      }, pageNumber);
    } else {
      return /*#__PURE__*/React.createElement("button", {
        key: pageNumber,
        className: "".concat(middlePageNumStyle, " ").concat(currentPage === pageNumber ? currentPageNumStyle : defaultPageNumStyle),
        onClick: function onClick() {
          return handleClick(Number(pageNumber));
        },
        disabled: currentPage === pageNumber || pageNumber === "..."
      }, pageNumber);
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "".concat(buttonStyles, " ").concat(currentPage === totalPages ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleNextPage();
    },
    disabled: currentPage === totalPages
  }, "Next"), /*#__PURE__*/React.createElement("span", {
    className: "text-lightSilver"
  }, "|"), /*#__PURE__*/React.createElement("button", {
    className: "".concat(buttonStyles, " ").concat(currentPage === totalPages ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleLastPage();
    },
    disabled: currentPage === totalPages
  }, "Last")) :
  // arrows with space
  space ? /*#__PURE__*/React.createElement("div", {
    className: containerClassName
  }, /*#__PURE__*/React.createElement("button", {
    className: "".concat(arrowButtonStyle, " ").concat(currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleFirstPage();
    },
    disabled: currentPage === 1
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[20px]"
  }, /*#__PURE__*/React.createElement(ChevronsLeft, null))), /*#__PURE__*/React.createElement("span", {
    className: "text-lightSilver"
  }, "|"), /*#__PURE__*/React.createElement("button", {
    className: "".concat(arrowButtonStyle, " ").concat(currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handlePrevPage();
    },
    disabled: currentPage === 1
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[20px]"
  }, /*#__PURE__*/React.createElement(ChevronLeft, null))), /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, pageNumbers.map(function (pageNumber) {
    return /*#__PURE__*/React.createElement("button", {
      key: pageNumber,
      className: "".concat(pagesSpaceStyle, " ").concat(currentPage === pageNumber ? currentPageNumStyle : "text-darkCharcoal", " ").concat(isSmallScreen ? "ml-1" : "ml-2"),
      onClick: function onClick() {
        return handleClick(Number(pageNumber));
      },
      disabled: currentPage === pageNumber || pageNumber === "..."
    }, pageNumber);
  })), /*#__PURE__*/React.createElement("button", {
    className: "".concat(arrowButtonStyle, " ").concat(currentPage === totalPages ? "text-slatyGrey" : "text-darkCharcoal", " ").concat(isSmallScreen ? "ml-1" : "ml-2"),
    onClick: function onClick() {
      return handleNextPage();
    },
    disabled: currentPage === totalPages
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[20px] rotate-180"
  }, /*#__PURE__*/React.createElement(ChevronLeft, null))), /*#__PURE__*/React.createElement("span", {
    className: "text-lightSilver"
  }, "|"), /*#__PURE__*/React.createElement("button", {
    className: "".concat(arrowButtonStyle, " ").concat(currentPage === totalPages ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleLastPage();
    },
    disabled: currentPage === totalPages
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[20px] rotate-180"
  }, /*#__PURE__*/React.createElement(ChevronsLeft, null)))) :
  /*#__PURE__*/
  // arrows without space
  React.createElement("div", {
    className: containerClassName
  }, /*#__PURE__*/React.createElement("button", {
    className: "".concat(arrowButtonStyle, " ").concat(currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleFirstPage();
    },
    disabled: currentPage === 1
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[20px]"
  }, /*#__PURE__*/React.createElement(ChevronsLeft, null))), /*#__PURE__*/React.createElement("span", {
    className: "text-lightSilver"
  }, "|"), /*#__PURE__*/React.createElement("button", {
    className: "".concat(arrowButtonStyle, " ").concat(currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handlePrevPage();
    },
    disabled: currentPage === 1
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[20px]"
  }, /*#__PURE__*/React.createElement(ChevronLeft, null))), /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, pageNumbers.map(function (pageNumber, index) {
    if (!space && index === 0) {
      return /*#__PURE__*/React.createElement("button", {
        key: pageNumber,
        className: "".concat(firstPageNumStyle, " ").concat(currentPage === pageNumber ? currentPageNumStyle : defaultPageNumSpaceStyle),
        onClick: function onClick() {
          return handleClick(Number(pageNumber));
        },
        disabled: currentPage === pageNumber || pageNumber === "..."
      }, pageNumber);
    } else if (index === pageNumbers.length - 1) {
      return /*#__PURE__*/React.createElement("button", {
        key: pageNumber,
        className: "".concat(lastPageNumStyle, " ").concat(currentPage === pageNumber ? currentPageNumStyle : defaultPageNumStyle),
        onClick: function onClick() {
          return handleClick(Number(pageNumber));
        },
        disabled: currentPage === pageNumber || pageNumber === "..."
      }, pageNumber);
    } else {
      return /*#__PURE__*/React.createElement("button", {
        key: pageNumber,
        className: "".concat(middlePageNumStyle, " ").concat(currentPage === pageNumber ? currentPageNumStyle : defaultPageNumStyle),
        onClick: function onClick() {
          return handleClick(Number(pageNumber));
        },
        disabled: currentPage === pageNumber || pageNumber === "..."
      }, pageNumber);
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "".concat(arrowButtonStyle, " ").concat(currentPage === totalPages ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleNextPage();
    },
    disabled: currentPage === totalPages
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[20px] rotate-180"
  }, /*#__PURE__*/React.createElement(ChevronLeft, null))), /*#__PURE__*/React.createElement("span", {
    className: "text-lightSilver"
  }, "|"), /*#__PURE__*/React.createElement("button", {
    className: "".concat(arrowButtonStyle, " ").concat(currentPage === totalPages ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleLastPage();
    },
    disabled: currentPage === totalPages
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[20px] rotate-180"
  }, /*#__PURE__*/React.createElement(ChevronsLeft, null))));
};

var Dot = function Dot() {
  return /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    className: "text-lightSilver text-3xl"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
  }));
};
var Check = function Check() {
  return /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    className: "text-successColor text-[18px]"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
  }));
};
var EyeOpen = function EyeOpen() {
  return /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
  }));
};
var EyeClose = function EyeClose() {
  return /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
  }));
};

var Password = function Password(_a) {
  var label = _a.label,
    required = _a.required,
    className = _a.className,
    onBlur = _a.onBlur,
    validate = _a.validate,
    _b = _a.errorMessage,
    errorMessage = _b === void 0 ? "This is a required field!" : _b,
    props = _a.props;
  var _c = React.useState(""),
    password = _c[0],
    setPassword = _c[1];
  var _d = React.useState("password"),
    type = _d[0],
    setType = _d[1];
  var _e = React.useState(false),
    err = _e[0],
    setErr = _e[1];
  var _f = React.useState(false),
    focus = _f[0],
    setFocus = _f[1];
  var _g = React.useState(false),
    open = _g[0],
    setOpen = _g[1];
  var _h = React.useState(""),
    errorMes = _h[0],
    setErrorMes = _h[1];
  var _j = React.useState(""),
    data = _j[0],
    setData = _j[1];
  var handlePasswordChange = function handlePasswordChange(e) {
    var newData = e.target.value;
    setPassword(newData);
    setData(newData);
    setOpen(true);
    if (err) {
      setErr(false);
    }
  };
  var requirements = [{
    regex: /[^A-Za-z0-9]/,
    index: 0
  }, {
    regex: /[A-Z]/,
    index: 1
  }, {
    regex: /[a-z]/,
    index: 2
  }, {
    regex: /[0-9]/,
    index: 3
  }, {
    regex: /\s/,
    index: 4
  }, {
    regex: /.{8,}/,
    index: 5
  }];
  var requirementList = ["1 Special Character", "1 Uppercase", "1 Lowercase", "1 Number", "No Space Allowed", "Minimum 8 Characters"];
  var validatePassword = function validatePassword() {
    var isAllValid = true;
    var requirementsList = requirements.map(function (item) {
      var isValid;
      if (item.index === 4 && password.length > 0) {
        isValid = !item.regex.test(password);
      } else {
        isValid = item.regex.test(password);
      }
      var requirementItemClass = isValid ? "valid" : "";
      if (!isValid) {
        isAllValid = false;
      }
      return /*#__PURE__*/React.createElement("li", {
        key: item.index,
        className: "".concat(requirementItemClass, " flex items-center justify-left text-darkCharcoal text-xs passwordsm:text-base passwordmd:text-lg")
      }, isValid ? /*#__PURE__*/React.createElement("span", {
        className: "ml-[5px] my-[6px] text-[18px] text-successColor"
      }, /*#__PURE__*/React.createElement(Check, null)) : /*#__PURE__*/React.createElement("span", {
        className: "text-3xl text-lightSilver"
      }, /*#__PURE__*/React.createElement(Dot, null)), /*#__PURE__*/React.createElement("span", {
        className: "".concat(isValid && "line-through ml-[7px] decoration-slatyGrey text-slatyGrey")
      }, requirementList[item.index]));
    });
    if (isAllValid) {
      setOpen(false);
    }
    return requirementsList;
  };
  var validateInput = function validateInput(e) {
    if (e.target.value === "") {
      setErr(true);
      setOpen(false);
      setErrorMes(errorMessage);
    } else if (!e.target.value.match(/[^A-Za-z0-9]/)) {
      setErr(true);
      setOpen(false);
      setErrorMes("Please fill details according to the requirements.");
    } else if (!e.target.value.match(/[A-Z]/)) {
      setErr(true);
      setOpen(false);
      setErrorMes("Please fill details according to the requirements.");
    } else if (!e.target.value.match(/[a-z]/)) {
      setErr(true);
      setOpen(false);
      setErrorMes("Please fill details according to the requirements.");
    } else if (!e.target.value.match(/[0-9]/)) {
      setErr(true);
      setOpen(false);
      setErrorMes("Please fill details according to the requirements.");
    } else if (e.target.value.match(/\s/)) {
      setErr(true);
      setOpen(false);
      setErrorMes("Please fill details according to the requirements.");
    } else if (!e.target.value.match(/.{8,}/)) {
      setErr(true);
      setOpen(false);
      setErrorMes("Please fill details according to the requirements.");
    } else {
      setErr(false);
    }
  };
  var handleFocus = function handleFocus() {
    setFocus(true);
    setOpen(true);
  };
  var getPasswordStrength = function getPasswordStrength() {
    var strength = "password";
    if (data.match(/[^A-Za-z0-9]/) && data.match(/[A-Z]/) && data.match(/[a-z]/) && data.match(/[0-9]/) && !data.match(/\s/) && data.match(/.{8,}/)) {
      strength = "Excellent";
    } else if (data.match(/[A-Z]/) && data.match(/[a-z]/) && data.match(/[0-9]/)) {
      strength = "Good";
    } else if (password.length >= 3 && data.match(/[a-z]/)) {
      strength = "Too weak";
    }
    return strength;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative flex flex-col text-sm sm:text-base w-full"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "".concat(err ? "text-defaultRed" : focus ? "text-primary" : "text-slatyGrey")
  }, label, required && "*"), /*#__PURE__*/React.createElement("div", {
    className: "".concat(!err && "relative inline-block before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full")
  }, /*#__PURE__*/React.createElement("input", __assign({
    className: "".concat(className, " py-1 px-3 border-b outline-none w-full pr-10 ").concat(err ? "border-defaultRed" : focus ? "border-primary" : "border-lightSilver"),
    type: type,
    id: "password-input",
    value: password,
    onChange: handlePasswordChange,
    onBlur: onBlur ? onBlur : validate ? validateInput : undefined,
    onFocus: handleFocus
  }, props))), type === "password" ? /*#__PURE__*/React.createElement("span", {
    className: "absolute top-7 right-1 text-md sm:text-lg ".concat(err ? "text-defaultRed" : "text-[#979797]"),
    onClick: function onClick() {
      return setType("text");
    }
  }, /*#__PURE__*/React.createElement(EyeClose, null)) : /*#__PURE__*/React.createElement("span", {
    className: "absolute top-7 right-1 text-md sm:text-lg ".concat(err ? "text-defaultRed" : "text-[#979797]"),
    onClick: function onClick() {
      return setType("password");
    }
  }, /*#__PURE__*/React.createElement(EyeOpen, null)), open && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "absolute ".concat(err ? "bottom-[90px]" : "bottom-[70px]", " z-10 left-0 bg-pureWhite shadow-2xl py-4 pl-2 pr-4 text-[16px] sm-text-[14px] w-fit")
  }, /*#__PURE__*/React.createElement("ul", {
    className: "requirement-list"
  }, validatePassword())), /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 bg-pureWhite z-10 absolute ".concat(err ? "bottom-[86px]" : "bottom-[66px]", " left-[20px] rotate-[45deg]")
  })), password && /*#__PURE__*/React.createElement("div", {
    className: "absolute top-[60px] mt-2 flex items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-[150px] sm:w-[180px] h-[5px] rounded-lg bg-[#979797]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute rounded-l-lg h-[5px] ".concat(data.match(/[^A-Za-z0-9]/) && data.match(/[A-Z]/) && data.match(/[a-z]/) && data.match(/[0-9]/) && !data.match(/\s/) && data.match(/.{8,}/) ? "bg-successColor w-[150px] sm:w-[180px] rounded-lg" : data.match(/[A-Z]/) && data.match(/[a-z]/) && data.match(/[0-9]/) ? "bg-[#FFBF00] w-[85px] sm:w-[100px]" : password.length >= 3 && data.match(/[a-z]/) ? "bg-defaultRed  w-[30px] sm:w-[45px]" : "bg-[#979797]")
  })), /*#__PURE__*/React.createElement("span", {
    className: "ml-4 text-xs sm:text-sm"
  }, getPasswordStrength())), err && /*#__PURE__*/React.createElement("span", {
    className: "text-defaultRed"
  }, errorMes));
};

var style$2 = {"steps":"Progressstep-module_steps__f9oD4","step__span":"Progressstep-module_step__span__JWvRE","step":"Progressstep-module_step__7yj-n","active":"Progressstep-module_active__Il5T3","span_active":"Progressstep-module_span_active__I2t2G","progress_ripple":"Progressstep-module_progress_ripple__n9BJo","done":"Progressstep-module_done__Ctdtg"};

var ProgressStep = function ProgressStep(_a) {
  var total = _a.total,
    current = _a.current,
    label = _a.label,
    icon = _a.icon,
    customized = _a.customized;
  var totalSteps = Array.apply(null, new Array(total)).map(function (el, i) {
    return ++i;
  });
  var done = function done() {
    return Math.floor(100 / total * current);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, !customized ? /*#__PURE__*/React.createElement("div", {
    className: "m-2 w-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-2 my-1 flex justify-between"
  }, /*#__PURE__*/React.createElement("h6", null, label && label[current - 1]), /*#__PURE__*/React.createElement("h6", null, "Step ", current, " of ", total)), /*#__PURE__*/React.createElement("div", {
    className: "w-auto h-1 rounded-xl bg-slate-600"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "".concat(done(), "%")
    },
    className: "h-1 rounded-s-md bg-[#02b89d] duration-1000  ".concat(done() === 100 ? "rounded-e-md" : "")
  }))) : /*#__PURE__*/React.createElement("div", {
    id: style$2.steps
  }, totalSteps.map(function (step) {
    return /*#__PURE__*/React.createElement("div", {
      key: step,
      className: "".concat(style$2.step, " ").concat(step < current ? style$2.done : step === current ? style$2.active : ""),
      "data-desc": label && label[step - 1]
    }, /*#__PURE__*/React.createElement("span", {
      className: "".concat(style$2.step__span, " ").concat(step === current ? style$2.span_active : "")
    }, icon ? /*#__PURE__*/React.createElement("div", {
      className: "h-4 w-4"
    }, icon) : step));
  })));
};

var styles$2 = {"container":"Radio-module_container__Kv7ki","invalidLabel":"Radio-module_invalidLabel__-6OtP","check":"Radio-module_check__Qr-pR","border":"Radio-module_border__-K-7w","dot":"Radio-module_dot__mw2E9","invalidCheck":"Radio-module_invalidCheck__ErJwp","__radio":"Radio-module___radio__krpCN","checked":"Radio-module_checked__bb2Yi"};

var Radio = function Radio(_a) {
  var id = _a.id,
    label = _a.label,
    variant = _a.variant,
    props = __rest(_a, ["id", "label", "variant"]);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles$2.container, " relative min-w-fit w-full flex")
  }, /*#__PURE__*/React.createElement("input", __assign({
    className: "".concat(styles$2.__radio, " absolute left-5"),
    type: "radio",
    id: id
  }, props)), /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: variant === "invalid" ? styles$2.invalidLabel : ""
  }, /*#__PURE__*/React.createElement("svg", {
    className: "".concat(styles$2.check, " ").concat(variant === "invalid" ? styles$2.invalidCheck : ""),
    viewBox: "0 0 40 40"
  }, /*#__PURE__*/React.createElement("circle", {
    id: styles$2.border,
    r: "18px",
    cx: "20px",
    cy: "20px"
  }), /*#__PURE__*/React.createElement("circle", {
    id: styles$2.dot,
    r: "8px",
    cx: "20px",
    cy: "20px"
  })), label === null || label === void 0 ? void 0 : label.split(" ")));
};

var styles$1 = {"comment_stars_input":"Rating-module_comment_stars_input__pPHNJ","comment_stars_view":"Rating-module_comment_stars_view__uPvM3","comment_stars_input_heart":"Rating-module_comment_stars_input_heart__VUliF","comment_stars_view_heart":"Rating-module_comment_stars_view_heart__EUr2w","is_half":"Rating-module_is_half__04Dnu","is_half_heart":"Rating-module_is_half_heart__zJjBq"};

var Heart = function Heart() {
  return /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 1024 1024",
    height: "19.44px",
    width: "22px",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"
  }));
};
var Star = function Star() {
  return /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 1024 1024",
    height: "19.44px",
    width: "22px",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
  }));
};

var ratings = [{
  value: "5",
  isHalf: false
}, {
  value: "4.5",
  isHalf: true
}, {
  value: "4",
  isHalf: false
}, {
  value: "3.5",
  isHalf: true
}, {
  value: "3",
  isHalf: false
}, {
  value: "2.5",
  isHalf: true
}, {
  value: "2",
  isHalf: false
}, {
  value: "1.5",
  isHalf: true
}, {
  value: "1",
  isHalf: false
}, {
  value: "0.5",
  isHalf: true
}];
var Rating = function Rating(_a) {
  var icon = _a.icon,
    selected = _a.selected,
    _b = _a.editable,
    editable = _b === void 0 ? true : _b,
    rateId = _a.rateId;
    _a.disabled;
  var _c = React.useState("0"),
    rating = _c[0],
    setRating = _c[1];
  React.useEffect(function () {
    if (selected) {
      setRating(selected);
    }
  }, [selected]);
  var handleRatingChange = function handleRatingChange(event) {
    if (editable !== false) {
      setRating(event.target.value);
    }
    console.log(event.target.name);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row-reverse"
  }, ratings.map(function (item, index) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: index
    }, /*#__PURE__*/React.createElement("input", {
      className: "".concat(styles$1.comment_stars_input, " ").concat(item.isHalf ? styles$1.is_half : "", " ").concat(icon === "heart" ? styles$1.comment_stars_input_heart : "", " hidden"),
      type: "radio",
      name: "rating-".concat(item.value, "-").concat(rateId),
      value: item.value,
      id: "rating-".concat(item.value, "-").concat(rateId),
      checked: rating === item.value,
      onChange: handleRatingChange,
      disabled: !editable
    }), /*#__PURE__*/React.createElement("label", {
      className: "".concat(styles$1.comment_stars_view, " ").concat(item.isHalf ? styles$1.is_half : "", " ").concat(icon === "heart" ? styles$1.comment_stars_view_heart : ""),
      htmlFor: "rating-".concat(item.value, "-").concat(rateId)
    }, /*#__PURE__*/React.createElement("svg", {
      className: "icon icon-star"
    }, icon === "heart" ? /*#__PURE__*/React.createElement(Heart, null) : /*#__PURE__*/React.createElement(Star, null))));
  })));
};

var Styles = {"ScrollSpyContainer":"Scrollspy-module_ScrollSpyContainer__Z0sM-","horizontal":"Scrollspy-module_horizontal__IviBW","verticalDrawer":"Scrollspy-module_verticalDrawer__ojqjd","vertical":"Scrollspy-module_vertical__l8HcQ","ScrollSpyItemHorizontal":"Scrollspy-module_ScrollSpyItemHorizontal__PhdUu","ScrollSpyItemVertical":"Scrollspy-module_ScrollSpyItemVertical__0bdmD","ScrollSpyItemVerticalDrawer":"Scrollspy-module_ScrollSpyItemVerticalDrawer__9zhfD","active_verticalDrawer":"Scrollspy-module_active_verticalDrawer__qvZ8D","active_horizontal":"Scrollspy-module_active_horizontal__t7JGA","active_vertical":"Scrollspy-module_active_vertical__gHv0j"};

var ScrollSpy = function ScrollSpy(props) {
  var _a = React.useState(props.targetIds[0]),
    activeId = _a[0],
    setActiveId = _a[1];
  var observerRef = React.useRef(null);
  React.useEffect(function () {
    observerRef.current = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, {
      threshold: 0.5
    } // Adjust the threshold value as needed
    );

    props.targetIds.forEach(function (id) {
      var _a;
      var element = document.getElementById(id);
      if (element) {
        (_a = observerRef.current) === null || _a === void 0 ? void 0 : _a.observe(element);
      }
    });
    return function () {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [props.targetIds]);
  var handleClick = function handleClick(id) {
    var element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
      setActiveId(id);
    }
  };
  var getScrollSpyItemClass = function getScrollSpyItemClass(id) {
    var scrollSpyItemClass = "";
    if (props.position === "verticalDrawer") {
      scrollSpyItemClass = activeId === id ? "".concat(Styles.ScrollSpyItemVerticalDrawer, " ").concat(Styles.active_verticalDrawer) : "".concat(Styles.ScrollSpyItemVerticalDrawer);
    } else if (props.position === "vertical") {
      scrollSpyItemClass = activeId === id ? "".concat(Styles.ScrollSpyItemVertical, " ").concat(Styles.active_vertical) : "".concat(Styles.ScrollSpyItemVertical);
    } else {
      scrollSpyItemClass = activeId === id ? "".concat(Styles.ScrollSpyItemHorizontal, " ").concat(Styles.active_horizontal) : "".concat(Styles.ScrollSpyItemHorizontal);
    }
    return scrollSpyItemClass;
  };
  var positionClass = "";
  switch (props.position) {
    case "verticalDrawer":
      positionClass = Styles.verticalDrawer;
      break;
    case "vertical":
      positionClass = Styles.vertical;
      break;
    case "horizontal":
      positionClass = Styles.horizontal;
      break;
    default:
      positionClass = "";
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(Styles.ScrollSpyContainer, " ").concat(positionClass)
  }, props.targetIds.map(function (id, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      className: getScrollSpyItemClass(id),
      onClick: function onClick() {
        return handleClick(id);
      }
    }, props.icons && props.icons[index], " ", /*#__PURE__*/React.createElement("span", null, props.titles[index]), " ");
  }));
};

function ChevronDown() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
  })));
}

function UserIcon() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"
  })));
}

var Select = function Select(_a) {
  var _b;
  var id = _a.id,
    options = _a.options,
    onSelect = _a.onSelect,
    type = _a.type,
    label = _a.label,
    className = _a.className,
    _c = _a.search,
    search = _c === void 0 ? false : _c,
    _d = _a.validate,
    validate = _d === void 0 ? false : _d;
  var _e = React.useState(""),
    inputValue = _e[0],
    setInputValue = _e[1];
  var _f = React.useState(false),
    open = _f[0],
    setOpen = _f[1];
  var _g = React.useState(false),
    error = _g[0],
    setError = _g[1];
  var selectRef = React.useRef(null);
  React.useEffect(function () {
    document.addEventListener("mousedown", handleDocumentClick);
    return function () {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);
  var handleDocumentClick = function handleDocumentClick(event) {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setOpen(false);
      validateInput();
    }
  };
  var handleToggleOpen = function handleToggleOpen() {
    setOpen(function (prevOpen) {
      return !prevOpen;
    });
    // Clear the error state when opening the dropdown again
    setError(false);
  };
  var handleInputChange = function handleInputChange(e) {
    var inputValue = e.target.value.toLowerCase();
    setInputValue(inputValue);
  };
  var handleSelect = function handleSelect(value) {
    setInputValue(value);
    setOpen(false);
    console.log(value);
    onSelect(value);
    // Call the validation function on select
    validateInput();
  };
  var validateInput = function validateInput() {
    if (validate && !inputValue) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classNames("font-medium w-full flex-row border-b ".concat(error && !inputValue ? "border-defaultRed" : "border-lightSilver hover:border-primary transition-colors duration-300")), " ").concat(className),
    ref: selectRef
  }, label && /*#__PURE__*/React.createElement("label", {
    className: classNames("text-[14px] font-normal", open && "text-primary", error && !inputValue ? "text-defaultRed" : "text-slatyGrey"),
    htmlFor: id
  }, label, validate && "*"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row items-center relative mt-0.5 w-full"
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    onClick: handleToggleOpen,
    onChange: handleInputChange,
    readOnly: open && !search,
    placeholder: "Please Select...",
    value: inputValue.length > 25 ? inputValue.substring(0, 20) + "..." : inputValue,
    className: classNames("flex-grow outline-none bg-white text-darkCharcoal p-2 text-[16px] font-normal w-full", !inputValue && "text-darkCharcoal", open && "text-primary", !open ? "cursor-pointer" : "cursor-default", !open ? "placeholder-darkCharcoal" : "placeholder-primary")
  }), /*#__PURE__*/React.createElement("div", {
    onClick: handleToggleOpen,
    className: classNames("text-[1.5rem] text-darkCharcoal cursor-pointer", {
      "rotate-180": open
    })
  }, /*#__PURE__*/React.createElement(ChevronDown, null))), error && !inputValue && /*#__PURE__*/React.createElement("span", {
    className: "absolute text-defaultRed text-[14px] ml-1"
  }, "Please select a value"), /*#__PURE__*/React.createElement("ul", {
    className: classNames("absolute z-10 bg-pureWhite mt-[1px] overflow-y-auto shadow-md transition-transform", open ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500" : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500", {
      "ease-out": open
    }),
    // Setting the width inline style based on the client width of the parent div
    style: {
      width: (_b = selectRef.current) === null || _b === void 0 ? void 0 : _b.clientWidth
    }
  }, options && options.map(function (option) {
    return /*#__PURE__*/React.createElement("li", {
      key: option.value,
      className: classNames("p-[10px] text-[16px] hover:bg-whiteSmoke font-normal cursor-pointer flex", {
        "bg-whiteSmoke": option.value === inputValue,
        hidden: search && !option.label.toLowerCase().startsWith(inputValue)
      }),
      onClick: function onClick() {
        if (option.value !== inputValue) {
          handleSelect(option.value);
        }
      }
    }, type === "icons" && /*#__PURE__*/React.createElement("div", {
      className: "mr-2 flex-shrink-0 items-center text-[1.5rem] text-darkCharcoal"
    }, /*#__PURE__*/React.createElement(UserIcon, null)), option.label);
  }))));
};

var MultiSelect = function MultiSelect(_a) {
  var id = _a.id,
    options = _a.options,
    onSelect = _a.onSelect,
    label = _a.label,
    type = _a.type,
    className = _a.className;
  var selectRef = React.useRef(null);
  var _b = React.useState([]),
    selectedValues = _b[0],
    setSelectedValues = _b[1];
  var _c = React.useState(""),
    inputValue = _c[0],
    setInputValue = _c[1];
  var _d = React.useState(false),
    open = _d[0],
    setOpen = _d[1];
  React.useEffect(function () {
    var handleOutsideClick = function handleOutsideClick(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return function () {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  var handleToggleOpen = function handleToggleOpen() {
    setOpen(function (prevState) {
      return !prevState;
    });
  };
  var handleInputChange = function handleInputChange(e) {
    var inputValue = e.target.value.toLowerCase();
    setInputValue(inputValue);
  };
  var handleSelect = function handleSelect(value) {
    var updatedValues = __spreadArray([], selectedValues, true);
    var index = updatedValues.indexOf(value);
    if (index > -1) {
      updatedValues.splice(index, 1);
    } else {
      updatedValues.push(value);
    }
    setSelectedValues(updatedValues);
    setInputValue("");
    console.log(updatedValues);
    onSelect(updatedValues);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative font-medium w-full flex-row border-b border-lightSilver hover:border-primary transition-colors duration-300 ".concat(className),
    ref: selectRef
  }, /*#__PURE__*/React.createElement("label", {
    className: classNames("text-[14px] font-normal text-slatyGrey", open && "text-primary"),
    htmlFor: id
  }, label ? label : "label", "*"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row items-center justify-center relative mt-0.5"
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    onClick: handleToggleOpen,
    onChange: handleInputChange,
    readOnly: !open,
    placeholder: selectedValues.length > 0 ? "".concat(selectedValues.length, " selected") : "Please Select...",
    value: inputValue.length > 25 ? inputValue.substring(0, 20) + "..." : inputValue,
    style: {
      width: "191px"
    },
    className: classNames("flex-grow bg-white outline-none text-darkCharcoal p-2 text-[16px] font-normal", !inputValue && "text-darkCharcoal", open && "text-primary", !open ? "cursor-pointer" : "cursor-default", !open ? "placeholder-darkCharcoal" : "placeholder-primary")
  }), /*#__PURE__*/React.createElement("div", {
    onClick: handleToggleOpen,
    className: classNames("text-[1.5rem] text-darkCharcoal cursor-pointer", {
      "rotate-180": open
    })
  }, /*#__PURE__*/React.createElement(ChevronDown, null))), /*#__PURE__*/React.createElement("ul", {
    className: classNames("absolute z-10 w-full bg-pureWhite mt-[1px] overflow-y-auto shadow-md transition-transform", open ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500" : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500", {
      "ease-out": open
    })
  }, options && options.map(function (option) {
    return /*#__PURE__*/React.createElement("li", {
      key: option.value,
      className: classNames("p-[10px] text-[16px] hover:bg-whiteSmoke font-normal cursor-pointer flex", {
        "bg-whiteSmoke": selectedValues.includes(option.value),
        hidden: !option.label.toLowerCase().startsWith(inputValue)
      }),
      onClick: type !== "checkbox" ? function () {
        if (option.value !== inputValue) {
          handleSelect(option.value);
        }
      } : undefined
    }, type === "icons" && /*#__PURE__*/React.createElement("div", {
      className: "mr-2 flex-shrink-0 items-center text-[1.5rem] text-darkCharcoal"
    }, /*#__PURE__*/React.createElement(UserIcon, null)), type === "checkbox" && /*#__PURE__*/React.createElement(CheckBox, {
      id: option.value,
      label: option.label,
      onChange: function onChange(e) {
        e.target.checked ? handleSelect(option.value) : handleSelect(option.value);
      }
    }), type !== "checkbox" && option.label);
  })));
};

function CrossIcon$1() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
  })));
}

var MultiSelectChip = function MultiSelectChip(_a) {
  var _b;
  var options = _a.options,
    defaultValue = _a.defaultValue,
    onSelect = _a.onSelect,
    label = _a.label,
    type = _a.type;
    _a.id;
    var className = _a.className,
    _c = _a.validate,
    validate = _c === void 0 ? false : _c;
  var _d = React.useState(defaultValue || []),
    selected = _d[0],
    setSelected = _d[1];
  var _e = React.useState(false),
    open = _e[0],
    setOpen = _e[1];
  var selectRef = React.useRef(null);
  React.useEffect(function () {
    window.addEventListener("click", handleOutsideClick);
    return function () {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  var handleOutsideClick = function handleOutsideClick(event) {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  var handleSelect = function handleSelect(value) {
    var selectedIndex = selected.indexOf(value);
    var updatedSelected;
    if (selectedIndex === -1) {
      // Value is not selected, add it to the selection
      updatedSelected = __spreadArray(__spreadArray([], selected, true), [value], false);
    } else {
      // Value is already selected, remove it from the selection
      updatedSelected = __spreadArray(__spreadArray([], selected.slice(0, selectedIndex), true), selected.slice(selectedIndex + 1), true);
    }
    setSelected(updatedSelected);
    onSelect(updatedSelected);
  };
  var handleClearAll = function handleClearAll() {
    setSelected([]);
    onSelect([]);
  };
  var handleToggleOpen = function handleToggleOpen() {
    setOpen(function (prevState) {
      return !prevState;
    });
  };
  var selectedDisplay = selected.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center"
  }, selected.slice(0, 2).map(function (option) {
    return /*#__PURE__*/React.createElement("div", {
      key: option,
      className: classNames("flex items-center badge bg-[#E9ECEF] text-[#212529] border border-[#CED4DA] rounded-sm px-1 mr-[5px] mb-2 text-[14px]", option.length > 8 && "max-w-[100px]")
    }, /*#__PURE__*/React.createElement("span", {
      title: option
    }, option.length > 8 ? option.substring(0, 8) + "..." : option), /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return handleSelect(option);
      },
      className: "ml-1 cursor-pointer"
    }, /*#__PURE__*/React.createElement(CrossIcon$1, null)));
  }), selected.length > 2 && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center badge bg-[#E9ECEF] text-darkCharcoal border border-[#CED4DA] rounded-sm px-1 mr-[5px] mb-2 text-[14px]"
  }, "+", selected.length - 2)) : /*#__PURE__*/React.createElement("div", {
    className: classNames("text-darkCharcoal pb-2", {
      "text-primary": open
    })
  }, "Please Select...");
  return /*#__PURE__*/React.createElement("div", {
    className: "relative w-full font-medium flex-row",
    ref: selectRef
  }, label && /*#__PURE__*/React.createElement("label", {
    onClick: handleToggleOpen,
    className: classNames("text-[14px] font-normal text-slatyGrey", {
      "text-primary": open
    })
  }, label, validate && "*"), /*#__PURE__*/React.createElement("div", {
    onClick: handleToggleOpen,
    className: "".concat(classNames("flex justify-between bg-white border-b border-lightSilver text-darkCharcoal pt-2 pl-2 text-[16px] font-normal transition-colors duration-300", {
      "text-darkCharcoal": selected.length === 0
    }, {
      "text-primary": open
    }, !open ? "cursor-pointer" : "cursor-default", "hover:border-primary"), " ").concat(className)
  }, selectedDisplay, /*#__PURE__*/React.createElement("div", {
    onClick: handleToggleOpen,
    className: classNames("text-[1.5rem] text-darkCharcoal cursor-pointer", {
      "rotate-180": open
    })
  }, /*#__PURE__*/React.createElement(ChevronDown, null))), /*#__PURE__*/React.createElement("ul", {
    className: classNames("absolute z-10 bg-pureWhite mt-[1px] overflow-y-auto shadow-md transition-transform", open ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500" : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500", {
      "ease-out": open
    }),
    // Setting the width inline style based on the client width of the parent div
    style: {
      width: (_b = selectRef.current) === null || _b === void 0 ? void 0 : _b.clientWidth
    }
  }, /*#__PURE__*/React.createElement("li", {
    className: classNames("pt-3 pl-3 text-[16px] font-normal text-primary cursor-pointer flex"),
    onClick: handleClearAll
  }, "Clear All"), options && options.map(function (option) {
    return /*#__PURE__*/React.createElement("li", {
      key: option.value,
      className: classNames("p-3 text-[16px] hover:bg-whiteSmoke font-normal cursor-pointer flex", {
        "bg-whiteSmoke": selected.includes(option.value)
      }),
      onClick: type !== "checkbox" ? function () {
        return handleSelect(option.value);
      } : undefined
    }, type === "icons" && /*#__PURE__*/React.createElement("div", {
      className: "mr-2 flex-shrink-0 items-center text-[1.5rem] text-darkCharcoal"
    }, /*#__PURE__*/React.createElement(UserIcon, null)), type === "checkbox" && /*#__PURE__*/React.createElement(CheckBox, {
      id: option.value,
      label: option.label,
      checked: selected.includes(option.value),
      onChange: function onChange(e) {
        e.target.checked ? handleSelect(option.value) : handleSelect(option.value);
      }
    }), type !== "checkbox" && option.label);
  })));
};

var CrossIcon = function CrossIcon(_ref) {
  var icon = _ref.icon;
  return /*#__PURE__*/React.createElement("svg", {
    width: icon ? "20" : "16",
    height: icon ? "20" : "16",
    viewBox: "0 0 17 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.970703",
    y: "7.97021",
    width: "16",
    height: "2",
    rx: "1",
    fill: "white"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "7.9707",
    y: "16.9702",
    width: "16",
    height: "2",
    rx: "1",
    transform: "rotate(-90 7.9707 16.9702)",
    fill: "white"
  }));
};

var styles = {"iconShow":"Speeddial-module_iconShow__0Dh4T","left":"Speeddial-module_left__t5zqk","slideLeft":"Speeddial-module_slideLeft__s6grR","hide":"Speeddial-module_hide__nxsfE","show":"Speeddial-module_show__t1AsX","crossAnimation":"Speeddial-module_crossAnimation__h3e8n","cross":"Speeddial-module_cross__DMPFG","plusAnimation":"Speeddial-module_plusAnimation__MWtqn","plus":"Speeddial-module_plus__lnGWx"};

var SpeedDial = function SpeedDial(_a) {
  var open = _a.open,
    large = _a.large,
    listItems = _a.listItems;
  var _b = React.useState(false),
    isListVisible = _b[0],
    setListVisible = _b[1];
  var _c = React.useState(-1),
    hoveredItemIndex = _c[0],
    setHoveredItemIndex = _c[1];
  var toggleList = function toggleList() {
    setListVisible(!isListVisible);
  };
  var handleItemHover = function handleItemHover(index) {
    setHoveredItemIndex(index);
  };
  var handleItemLeave = function handleItemLeave() {
    setHoveredItemIndex(-1);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "absolute flex items-center justify-center ".concat(large ? "w-fit h-fit text-xl p-[15px]" : "w-fit h-fit text-base p-[10px]", " ").concat(open ? "ml-2" : "mt-2", " ").concat(isListVisible ? "".concat(styles.crossAnimation, " bg-slatyGrey") : "".concat(styles.plusAnimation, " bg-[#00B0AE]"), " text-white border-none outline-none rounded-full"),
    onClick: toggleList
  }, /*#__PURE__*/React.createElement(CrossIcon, {
    icon: large
  }))), isListVisible && /*#__PURE__*/React.createElement("div", {
    className: "absolute ".concat(styles.iconShow, " ").concat(open ? "right-0 -top-2 gap-1" : "bottom-0 flex-col  gap-2", " flex")
  }, listItems.map(function (item, index) {
    if (!open) {
      return /*#__PURE__*/React.createElement("span", {
        key: index,
        className: "flex items-center justify-center ".concat(large ? "w-fit h-fit text-xl p-[15px]" : "w-fit h-fit text-base p-[10px]", " bg-lightSilver hover:bg-slatyGrey text-darkCharcoal hover:text-pureWhite border-none outline-none ").concat(hoveredItemIndex === index && !open ? "".concat(styles.hide) : "rounded-full"),
        onMouseEnter: function onMouseEnter() {
          return handleItemHover(index);
        },
        onMouseLeave: handleItemLeave,
        onClick: item.action
      }, hoveredItemIndex === index && !open && /*#__PURE__*/React.createElement("span", {
        className: "absolute ".concat(styles.left, " flex w-max bg-slatyGrey text-pureWhite pl-3 pr-2 ").concat(large ? "py-[11px] right-[40px]" : "py-[6px] right-[30px]")
      }, item.hoverText), /*#__PURE__*/React.createElement("span", {
        className: "".concat(large ? "w-[20px] h-[20px]" : "w-[16px] h-[16px]")
      }, item.icon));
    } else {
      return /*#__PURE__*/React.createElement(Tooltip, {
        position: "top",
        content: item.hoverText,
        key: index
      }, /*#__PURE__*/React.createElement("span", {
        className: "flex items-center justify-center ".concat(large ? "w-fit h-fit text-xl p-[15px]" : "w-fit h-fit text-base p-[10px]", " bg-lightSilver text-darkCharcoal border-none outline-none ").concat(hoveredItemIndex === index && !open ? "rounded-r-full" : "rounded-full"),
        onMouseEnter: function onMouseEnter() {
          return handleItemHover(index);
        },
        onMouseLeave: handleItemLeave,
        onClick: item.action
      }, item.icon));
    }
  })));
};

var Style = {"lower_half":"Spinner-module_lower_half__KJW5X","lower_half_loading":"Spinner-module_lower_half_loading__6ygnH","lower_half_round":"Spinner-module_lower_half_round__3a2Md","upper_half":"Spinner-module_upper_half__I6kLl","upper_half_loading":"Spinner-module_upper_half_loading__rj-o-","upper_half_round":"Spinner-module_upper_half_round__ZaT-F"};

var Spinner = function Spinner(_a) {
  var size = _a.size;
  var loaderStyle = {
    fontSize: size || "16px"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col relative m-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(Style.upper_half, " text-primary indent-[-9999em] overflow-hidden w-[1em] h-[1em] rounded-full transform translate-z-0"),
    style: loaderStyle
  }, "Loading..."), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Style.lower_half, " absolute text-primary indent-[-9999em] overflow-hidden w-[1em] h-[1em] rounded-full transform translate-z-0"),
    style: loaderStyle
  }, "Loading..."));
};

var Switch = function Switch(_a) {
  var checked = _a.checked,
    disabled = _a.disabled,
    variant = _a.variant;
  var _b = React.useState(checked || false),
    isChecked = _b[0],
    setIsChecked = _b[1];
  var handleClick = function handleClick() {
    if (!disabled) {
      setIsChecked(function (prevChecked) {
        return !prevChecked;
      });
    }
  };
  React.useEffect(function () {
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

var style$1 = {"tab":"Tab-module_tab__ShyYn","active":"Tab-module_active__tB2AH","tab__ripple":"Tab-module_tab__ripple__zQsul","ripple":"Tab-module_ripple__K3GDp"};

var TabBar = function TabBar(_a) {
  var tabs = _a.tabs,
    getTabId = _a.getTabId,
    className = _a.className;
  var _b = React.useState("1"),
    tabId = _b[0],
    setTabId = _b[1];
  var _c = React.useState(false),
    isClicked = _c[0],
    setIsClicked = _c[1];
  var handleClick = function handleClick(e) {
    setTabId(e.target.id);
    getTabId(e.target.id);
    setIsClicked(true);
    setTimeout(function () {
      return setIsClicked(false);
    }, 700);
  };
  return /*#__PURE__*/React.createElement("ul", {
    className: "h-12 flex flex-row bg-transparent overflow-x-auto ".concat(className)
  }, tabs.map(function (tab, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index + 1,
      id: tab.id,
      className: "".concat(style$1.tab, " ").concat(tabId === tab.id ? style$1.active : ""),
      onClick: handleClick
    }, isClicked && tabId === tab.id && /*#__PURE__*/React.createElement("span", {
      className: "".concat(style$1.tab__ripple)
    }), tab.label);
  }));
};

function SortingIcon() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    width: "7",
    height: "10",
    viewBox: "0 0 7 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 0L6.53109 3H0.468911L3.5 0Z",
    fill: "#333333"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 10L0.468911 7L6.53109 7L3.5 10Z",
    fill: "#6E6D7A"
  })));
}

var Table = function Table(props) {
  var _a = React.useState(props.data),
    filteredData = _a[0],
    setFilteredData = _a[1];
  var _b = React.useState(""),
    sortingColumn = _b[0],
    setSortingColumn = _b[1];
  var _c = React.useState("asc"),
    sortingOrder = _c[0],
    setSortingOrder = _c[1];
  var _d = React.useState([]),
    isAllChecked = _d[0],
    setIsAllChecked = _d[1];
  var _e = React.useState(false),
    isChecked = _e[0],
    setIsChecked = _e[1];
  // function for handling select and deselect all
  var handleSelectAll = function handleSelectAll(e) {
    var checked = e.target.checked;
    var updatedArray = filteredData.map(function (_item, index) {
      return checked;
    });
    setIsAllChecked(updatedArray);
    setIsChecked(checked);
  };
  // function for selecting single row
  var handleCheckRow = function handleCheckRow(index, checked) {
    var updatedArray = __spreadArray([], isAllChecked, true);
    updatedArray[index] = checked;
    setIsAllChecked(updatedArray);
  };
  var handleSort = function handleSort(column) {
    var sortedData = __spreadArray([], filteredData, true);
    var newSortingOrder = "asc";
    if (column === sortingColumn && sortingOrder === "asc") {
      newSortingOrder = "desc";
    }
    sortedData.sort(function (a, b) {
      var valueA = a[column];
      var valueB = b[column];
      if (typeof valueA === "string" && typeof valueB === "string") {
        return valueA.localeCompare(valueB);
      } else if (typeof valueA === "number" && typeof valueB === "number") {
        return valueA - valueB;
      } else {
        return 0;
      }
    });
    if (newSortingOrder === "desc") {
      sortedData.reverse();
    }
    setFilteredData(sortedData);
    setSortingColumn(column);
    setSortingOrder(newSortingOrder);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "".concat(props.sticky ? "sticky top-0 z-10 drop-shadow" : "border-y border-b-pureBlack border-t-pureBlack", " bg-pureWhite h-[48px]")
  }, props.selected && /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement(CheckBox, {
    id: "selectAll",
    checked: isChecked,
    onChange: handleSelectAll
  })), props.headers.map(function (header) {
    return /*#__PURE__*/React.createElement("th", {
      key: header,
      className: "cursor-pointer uppercase text-[16px] text-center font-bold",
      onClick: function onClick() {
        props.sortable && handleSort(header);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "flex justify-center items-center"
    }, header, sortingColumn === header && /*#__PURE__*/React.createElement("span", {
      className: "ml-2 ".concat(sortingOrder === "asc" ? "" : "rotate-180")
    }, /*#__PURE__*/React.createElement(SortingIcon, null))));
  }), props.action && /*#__PURE__*/React.createElement("th", {
    className: "cursor-pointer uppercase text-[16px] text-center font-bold"
  }, "Actions"))), /*#__PURE__*/React.createElement("tbody", null, filteredData.map(function (item, index) {
    return /*#__PURE__*/React.createElement("tr", {
      key: index,
      className: "h-[56px] border-b border-b-lightSilver cursor-default hover:bg-whiteSmoke"
    }, props.selected && /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(CheckBox, {
      id: index.toString(),
      checked: isAllChecked[index],
      onChange: function onChange(e) {
        return handleCheckRow(index, e.target.checked);
      }
    })), props.headers.map(function (header) {
      return /*#__PURE__*/React.createElement("td", {
        key: header,
        className: "py-[19px] px-[20px] text-center text-base font-normal"
      }, /*#__PURE__*/React.createElement("span", {
        className: "flex justify-center items-center"
      }, typeof item[header] === "string" && item[header].startsWith("http") ? /*#__PURE__*/React.createElement("img", {
        src: item[header],
        alt: "Item",
        className: "max-w-[50px] max-h-[50px] rounded"
      }) : item[header]));
    }), props.action && props.actions.map(function (action) {
      return /*#__PURE__*/React.createElement("td", {
        key: action,
        className: "text-center"
      }, action);
    }));
  }))));
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
    required = _a.required,
    validate = _a.validate,
    onBlur = _a.onBlur;
    _a.onChange;
    var supportingText = _a.supportingText,
    disabled = _a.disabled,
    getValue = _a.getValue;
    _a.errorMessage;
    var props = __rest(_a, ["label", "className", "id", "name", "required", "validate", "onBlur", "onChange", "supportingText", "disabled", "getValue", "errorMessage"]);
  var inputRef = React.useRef(null);
  var _c = React.useState(false),
    err = _c[0],
    setErr = _c[1];
  var _d = React.useState(false),
    focus = _d[0],
    setFocus = _d[1];
  var _e = React.useState(""),
    value = _e[0],
    setValue = _e[1];
  var _f = React.useState("");
    _f[0];
    var setSelectedCountryCode = _f[1];
  var validateInput = function validateInput(e) {
    if (e.target.value === "") {
      setErr(true);
    } else if (e.target.value.length < 12) {
      setErr(true);
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
    if (err) {
      setErr(false);
    }
    getValue(formattedValue);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col w-full text-sm sm:text-base relative"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "".concat(err ? "text-defaultRed" : focus ? "text-primary" : "text-slatyGrey")
  }, label, required && "*"), /*#__PURE__*/React.createElement("div", {
    className: "flex ".concat(!err ? "w-full relative before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px  before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full" : "w-full")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex border-b outline-none transition duration-600 w-full h-full ".concat(err ? "border-b-defaultRed" : focus ? "border-b-primary" : "border-b-lightSilver")
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[143px]"
  }, /*#__PURE__*/React.createElement(Select, {
    className: "!border-none",
    options: data,
    id: "basic",
    validate: true,
    onSelect: function onSelect(value) {
      return setSelectedCountryCode(value);
    }
  })), /*#__PURE__*/React.createElement("input", __assign({
    className: "".concat(className, " py-2 px-3 outline-none w-full h-full "),
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
  }, props)))), !err && supportingText && /*#__PURE__*/React.createElement("span", {
    className: "text-slatyGrey"
  }, supportingText));
};

var Textarea = function Textarea(_a) {
  var label = _a.label,
    className = _a.className,
    id = _a.id,
    name = _a.name,
    value = _a.value,
    _b = _a.rows,
    rows = _b === void 0 ? "1" : _b,
    required = _a.required,
    validate = _a.validate,
    onBlur = _a.onBlur,
    onChange = _a.onChange,
    supportingText = _a.supportingText;
    _a.disabled;
    var _c = _a.errorMessage,
    errorMessage = _c === void 0 ? "This is a required field!" : _c,
    props = __rest(_a, ["label", "className", "id", "name", "value", "rows", "required", "validate", "onBlur", "onChange", "supportingText", "disabled", "errorMessage"]);
  var textAreaRef = React.useRef(null);
  var _d = React.useState(false),
    err = _d[0],
    setErr = _d[1];
  var _e = React.useState(false),
    focus = _e[0],
    setFocus = _e[1];
  var validateInput = function validateInput(e) {
    if (e.target.value.trim() === "") {
      setErr(true);
    } else {
      setErr(false);
    }
  };
  var handleFocus = function handleFocus() {
    setFocus(true);
  };
  var handleInputChange = function handleInputChange(e) {
    if (onChange) {
      onChange(e);
    }
    if (err) {
      setErr(false);
    }
  };
  var parsedRows = rows;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col w-full text-sm sm:text-base"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "".concat(err ? "text-defaultRed w-full" : focus ? "text-primary w-full" : "text-slatyGrey w-full")
  }, label, required && "*"), /*#__PURE__*/React.createElement("div", {
    className: "".concat(!err ? "flex w-full relative before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full" : "w-full")
  }, /*#__PURE__*/React.createElement("textarea", __assign({
    className: "".concat(className, " py-1 px-3 border-b outline-none transition duration-600 w-full h-full ").concat(err ? "border-b-defaultRed" : focus ? "border-b-primary" : "border-b-lightSilver"),
    ref: textAreaRef,
    rows: parsedRows,
    id: id,
    name: name,
    value: value,
    onBlur: onBlur ? onBlur : validate ? validateInput : undefined,
    onChange: handleInputChange,
    onFocus: handleFocus
  }, props))), !err && supportingText && /*#__PURE__*/React.createElement("span", {
    className: "text-slatyGrey"
  }, supportingText), err && /*#__PURE__*/React.createElement("span", {
    className: "text-defaultRed"
  }, errorMessage));
};

function ClearIcon() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
  })));
}

function CheckIcon() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
  })));
}

var TextField = function TextField(_a) {
  var label = _a.label,
    className = _a.className,
    id = _a.id,
    name = _a.name,
    value = _a.value,
    type = _a.type,
    required = _a.required,
    validate = _a.validate,
    onBlur = _a.onBlur,
    onChange = _a.onChange,
    _b = _a.errorMessage,
    errorMessage = _b === void 0 ? "This is a required field!" : _b,
    supportingText = _a.supportingText,
    disabled = _a.disabled,
    props = __rest(_a, ["label", "className", "id", "name", "value", "type", "required", "validate", "onBlur", "onChange", "errorMessage", "supportingText", "disabled"]);
  var inputRef = React.useRef(null);
  var _c = React.useState(false),
    err = _c[0],
    setErr = _c[1];
  var _d = React.useState(false),
    focus = _d[0],
    setFocus = _d[1];
  var _e = React.useState(false),
    valid = _e[0],
    setValid = _e[1];
  var _f = React.useState(false),
    showEmailError = _f[0],
    setShowEmailError = _f[1];
  var handleFocus = function handleFocus() {
    setFocus(true);
  };
  var handleBlur = function handleBlur(e) {
    if (validate && required && (e.target.value === "" || !e.target.value)) {
      setErr(true);
      setFocus(false);
    } else if (validate && type === "email" && !validateEmail(e.target.value)) {
      setErr(true);
      setShowEmailError(true);
      setFocus(false);
    } else {
      setErr(false);
      setShowEmailError(false);
      setFocus(true);
    }
    if (onBlur) {
      onBlur(e);
    }
  };
  var validateEmail = function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  var handleInputChange = function handleInputChange(e) {
    var inputValue = e.target.value;
    if (onChange) {
      onChange(e);
    }
    if (validate && type === "text") {
      if (inputValue.length < 0) {
        setValid(true);
        setErr(false);
      } else {
        setValid(false);
        setErr(false);
      }
    } else if (validate && type === "email") {
      if (inputValue && validateEmail(inputValue)) {
        setValid(true);
        setErr(false);
        setShowEmailError(false);
      } else {
        setValid(false);
      }
    } else if (err || valid) {
      setErr(false);
      setValid(false);
    }
  };
  var handleClear = function handleClear() {
    if (onChange) {
      onChange({
        target: {
          value: ""
        }
      });
    }
    setErr(false);
    setValid(false);
    setShowEmailError(false);
  };
  var labelClassName = "\n  ".concat(err ? "text-defaultRed" : focus ? "text-primary" : "text-slatyGrey", "\n");
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col text-[14px] laptop:text-base relative"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: labelClassName
  }, label, required && "*"), /*#__PURE__*/React.createElement("div", {
    className: "".concat(!err && "animated-input relative inline-block before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full")
  }, /*#__PURE__*/React.createElement("input", __assign({
    className: "\n\n          ".concat(className, "\n\n          py-1 px-3 border-b outline-none transition duration-600 w-full\n\n          ").concat(err ? "border-b-defaultRed" : focus ? "border-b-primary" : "border-b-lightSilver", "\n\n          ").concat(valid && "text-successColor font-normal text-[14px] font-proxima", "\n\n          ").concat(showEmailError && "text-defaultRed", "\n\n        "),
    ref: inputRef,
    type: type,
    id: id,
    name: name,
    value: value,
    onBlur: handleBlur,
    onChange: handleInputChange,
    onFocus: handleFocus,
    disabled: disabled
  }, props))), err && /*#__PURE__*/React.createElement("span", {
    className: "text-defaultRed absolute right-0 top-0 mt-5 mr-3 cursor-pointer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[20px]",
    onClick: handleClear
  }, /*#__PURE__*/React.createElement(ClearIcon, null))), valid && /*#__PURE__*/React.createElement("span", {
    className: "text-primary bg-white text-[20px] absolute right-0 top-0 mt-6 mr-3"
  }, /*#__PURE__*/React.createElement(CheckIcon, null)), err && /*#__PURE__*/React.createElement("span", {
    className: "text-defaultRed"
  }, errorMessage), !err && supportingText && /*#__PURE__*/React.createElement("span", {
    className: "text-slatyGrey"
  }, supportingText));
};

var style = {"scaleUpAnimation":"Timepicker-module_scaleUpAnimation__Evlm9","scaleDownAnimation":"Timepicker-module_scaleDownAnimation__UCez3","textAnimation":"Timepicker-module_textAnimation__1IWGl"};

var Timepicker = function Timepicker(props) {
  var hourDigits = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  var minuteDigits = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  var inputHourDigits = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var _a = React.useState(12),
    selectedHourDigit = _a[0],
    setSelectedHourDigit = _a[1];
  var _b = React.useState(0),
    selectedMinuteDigit = _b[0],
    setSelectedMinuteDigit = _b[1];
  var _c = React.useState(true),
    isAM = _c[0],
    setIsAM = _c[1];
  var _d = React.useState(true),
    showHourDigits = _d[0],
    setShowHourDigits = _d[1];
  var _e = React.useState(false),
    showMinuteDigits = _e[0],
    setShowMinuteDigits = _e[1];
  var _f = React.useState(''),
    animateHour = _f[0],
    setAnimateHour = _f[1];
  var _g = React.useState(''),
    animateMinute = _g[0],
    setAnimateMinute = _g[1];
  var handleHourSelectDigit = function handleHourSelectDigit(digit) {
    setSelectedHourDigit(digit);
    digit ? setAnimateHour(style.textAnimation) : setAnimateHour('');
    setTimeout(function () {
      setAnimateHour('');
    }, 300);
    var timer = setTimeout(function () {
      setShowMinuteDigits(true);
      setShowHourDigits(false);
    }, 100);
    return function () {
      clearTimeout(timer);
    };
  };
  var handleMinuteSelectDigit = function handleMinuteSelectDigit(digit) {
    setSelectedMinuteDigit(digit);
    digit ? setAnimateMinute(style.textAnimation) : setAnimateMinute('');
    setTimeout(function () {
      setAnimateMinute('');
    }, 300);
  };
  var toggleSetAM = function toggleSetAM() {
    setIsAM(!isAM);
  };
  var showHourClock = function showHourClock() {
    if (showHourDigits) {
      setShowHourDigits(true);
      setShowMinuteDigits(false);
    } else {
      setShowMinuteDigits(false);
      setShowHourDigits(true);
    }
  };
  var showMinuteClock = function showMinuteClock() {
    if (showMinuteDigits) {
      setShowMinuteDigits(true);
      setShowHourDigits(false);
    } else {
      setShowMinuteDigits(true);
      setShowHourDigits(false);
    }
  };
  var renderHourDigits = hourDigits.map(function (digit, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: digit,
      className: "absolute top-1/2 left-1/2 z-10 text-sm cursor-pointer transform -translate-x-1/2 -translate-y-1/2 w-5 flex items-center justify-center ".concat(digit === selectedHourDigit ? 'text-white' : 'text-black'),
      style: {
        transform: "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)"),
        top: '46%',
        left: '47%'
      },
      onClick: function onClick() {
        return handleHourSelectDigit(digit);
      }
    }, digit);
  });
  var renderMinuteDigits = minuteDigits.map(function (digit, index) {
    var formattedDigit = digit < 10 ? "0".concat(digit) : digit;
    return /*#__PURE__*/React.createElement("div", {
      key: digit,
      className: "absolute top-1/2 left-1/2 z-10 text-sm cursor-pointer transform -translate-x-1/2 -translate-y-1/2 w-5 flex items-center justify-center ".concat(digit === selectedMinuteDigit ? 'text-white' : 'text-black'),
      style: {
        transform: "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)"),
        top: '46%',
        left: '47%'
      },
      onClick: function onClick() {
        return handleMinuteSelectDigit(digit);
      }
    }, formattedDigit);
  });
  var renderInputHourDigit = inputHourDigits.slice(0, selectedHourDigit + 1).reverse().map(function (digit, index) {
    return (digit < 10 ? "0".concat(digit) : digit) + " ";
  }).join('');
  var renderInputMinuteDigit = minuteDigits.filter(function (digit) {
    return digit <= selectedMinuteDigit;
  }).reverse().map(function (digit, index) {
    return (digit < 10 ? "0".concat(digit) : digit) + " ";
  }).join('');
  React.useEffect(function () {
    var fullTime = selectedHourDigit + ':' + selectedMinuteDigit + ' ' + (isAM ? 'AM' : 'PM');
    props.onChange(fullTime);
  }, [selectedHourDigit, selectedMinuteDigit, isAM]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: 'flex flex-col items-center justify-center mt-3'
  }, /*#__PURE__*/React.createElement("div", {
    className: 'flex items-center mb-4'
  }, /*#__PURE__*/React.createElement("div", {
    className: 'flex items-center space-x-1'
  }, /*#__PURE__*/React.createElement("div", {
    className: "border w-9 h-8 border-gray-300 rounded bg-slatyGreen overflow-hidden inline-block",
    onClick: showHourClock
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(animateHour, " font-semibold text-lg border border-none rounded text-center cursor-pointer ").concat(showHourDigits === true ? 'bg-slatyGreen text-primary' : 'bg-lightGray')
  }, renderInputHourDigit)), /*#__PURE__*/React.createElement("span", {
    className: 'text-gray-600'
  }, ":"), /*#__PURE__*/React.createElement("div", {
    className: "border w-9 h-8 border-gray-300 rounded bg-slatyGreen overflow-hidden inline-block",
    onClick: showMinuteClock
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(animateMinute, " h-full font-semibold  text-lg border border-none rounded text-center cursor-pointer ").concat(showMinuteDigits === true ? 'bg-slatyGreen text-primary' : 'bg-lightGray')
  }, renderInputMinuteDigit))), /*#__PURE__*/React.createElement("div", {
    className: 'grid grid-cols-2 ml-10 border border-gray-300 rounded-md'
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-8 ".concat(isAM && 'bg-slatyGreen text-primary', " transition-all rounded-l-md font-medium text-sm duration-200 flex items-center justify-center py-1 px-2 cursor-pointer"),
    onClick: toggleSetAM
  }, "AM"), /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-8 ".concat(!isAM && 'bg-slatyGreen text-primary', " transition-all rounded-r-md font-medium text-sm duration-200 flex items-center justify-center py-1 px-2 cursor-pointer"),
    onClick: toggleSetAM
  }, "PM"))), !showMinuteDigits && showHourDigits && /*#__PURE__*/React.createElement("div", {
    className: 'w-56 h-56 bg-lightGray rounded-full relative flex items-center justify-center'
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full relative -left-1"
  }, renderHourDigits, hourDigits.map(function (digit, index) {
    return digit === selectedHourDigit && /*#__PURE__*/React.createElement(React.Fragment, {
      key: digit
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute w-10 h-10 bg-primary rounded-full transform -translate-x-1/2 translate-y-16 cursor-pointer",
      style: {
        top: '41%',
        left: '42.6%',
        transform: "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)")
      },
      onClick: function onClick() {
        return handleHourSelectDigit(selectedHourDigit === 12 ? 1 : selectedHourDigit + 1);
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: 'absolute w-0.5 h-[90px] bg-primary transform -translate-x-1/2 -translate-y-1/2',
      style: {
        top: '51%',
        left: '52%',
        transformOrigin: 'center top',
        transform: "translateX(-50%) rotate(".concat(index * 30, "deg) translateY(-90px)")
      }
    }));
  }), /*#__PURE__*/React.createElement("div", {
    className: 'absolute w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-4',
    style: {
      top: '56.3%',
      left: '52%'
    }
  }))), showMinuteDigits && /*#__PURE__*/React.createElement("div", {
    className: 'w-56 h-56 bg-lightGray rounded-full relative flex items-center justify-center'
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full relative -left-1 ".concat(style.scaleUpAnimation)
  }, renderMinuteDigits, minuteDigits.map(function (digit, index) {
    return digit === selectedMinuteDigit && /*#__PURE__*/React.createElement(React.Fragment, {
      key: digit
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute w-10 h-10 bg-primary rounded-full transform -translate-x-1/2 translate-y-16 cursor-pointer",
      style: {
        top: '41%',
        left: '42.6%',
        transform: "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)")
      },
      onClick: function onClick() {
        return handleMinuteSelectDigit(selectedMinuteDigit === 0 ? 1 : selectedMinuteDigit + 1);
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: 'absolute w-0.5 h-[90px] bg-primary transform -translate-x-1/2 -translate-y-1/2',
      style: {
        top: '51%',
        left: '52%',
        transformOrigin: 'center top',
        transform: "translateX(-50%) rotate(".concat(index * 30, "deg) translateY(-90px)")
      }
    }));
  }), /*#__PURE__*/React.createElement("div", {
    className: 'absolute w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-4',
    style: {
      top: '56.3%',
      left: '52%'
    }
  })))));
};

var Timepicker24Hr = function Timepicker24Hr(props) {
  var hourDigits12 = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  var hourDigits24 = [24, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  var minuteDigits = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  var inputHourDigits12 = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  var _a = React.useState(12) || React.useState(24),
    selectedHourDigit = _a[0],
    setSelectedHourDigit = _a[1];
  var _b = React.useState(0),
    selectedMinuteDigit = _b[0],
    setSelectedMinuteDigit = _b[1];
  var _c = React.useState(false),
    isAM = _c[0],
    setIsAM = _c[1];
  var _d = React.useState(true),
    showHourDigits = _d[0],
    setShowHourDigits = _d[1];
  var _e = React.useState(false),
    showMinuteDigits = _e[0],
    setShowMinuteDigits = _e[1];
  var _f = React.useState(false),
    isHour24Selected = _f[0],
    setIsHour24Selected = _f[1];
  var _g = React.useState(true),
    isDigit12 = _g[0],
    setIsDigit12 = _g[1];
  var _h = React.useState(false),
    isDigit24 = _h[0],
    setIsDigit24 = _h[1];
  var _j = React.useState(''),
    animateHour = _j[0],
    setAnimateHour = _j[1];
  var _k = React.useState(''),
    animateMinute = _k[0],
    setAnimateMinute = _k[1];
  var handleHourSelectDigit = function handleHourSelectDigit(digit) {
    setSelectedHourDigit(digit);
    setIsHour24Selected(true);
    digit ? setAnimateHour(style.textAnimation) : setAnimateHour('');
    if (digit <= 12) {
      setIsDigit12(true);
      setIsDigit24(false);
    } else {
      setIsDigit24(true);
      setIsDigit12(false);
    }
    setTimeout(function () {
      setAnimateHour('');
    }, 300);
    var timer = setTimeout(function () {
      setShowMinuteDigits(true);
      setShowHourDigits(false);
    }, 1500);
    return function () {
      clearTimeout(timer);
    };
  };
  var handleMinuteSelectDigit = function handleMinuteSelectDigit(digit) {
    setSelectedMinuteDigit(digit);
    digit ? setAnimateMinute(style.textAnimation) : setAnimateMinute('');
    setTimeout(function () {
      setAnimateMinute('');
    }, 300);
  };
  var toggleSetAM = function toggleSetAM() {
    setIsAM(!isAM);
  };
  var showHourClock = function showHourClock() {
    setIsHour24Selected(false);
    if (showHourDigits) {
      setShowHourDigits(true);
      setShowMinuteDigits(false);
    } else {
      setShowMinuteDigits(false);
      setShowHourDigits(true);
    }
  };
  var showMinuteClock = function showMinuteClock() {
    if (showMinuteDigits) {
      setShowMinuteDigits(true);
      setShowHourDigits(false);
    } else {
      setShowMinuteDigits(true);
      setShowHourDigits(false);
    }
  };
  var renderHourDigits12 = hourDigits12.map(function (digit, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: digit,
      className: "absolute z-10 text-sm transform -translate-x-1/2 -translate-y-1/2 w-5 flex items-center justify-center cursor-pointer ".concat(digit === selectedHourDigit ? 'text-white' : 'text-black', " ").concat(isDigit12 ? 'text-black' : 'text-[#9ca3af]'),
      style: {
        transform: "".concat(isDigit12 ? "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)") : "rotate(".concat(index * 30, "deg) translate(0, -55px) rotate(").concat(-index * 30, "deg)")),
        top: '46%',
        left: '47%'
      },
      onClick: function onClick() {
        handleHourSelectDigit(digit), setIsHour24Selected(false);
      }
    }, digit);
  });
  var renderHourDigits24 = hourDigits24.map(function (digit, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: digit,
      className: "absolute z-10 text-sm transform -translate-x-1/2 -translate-y-1/2 w-5 flex items-center justify-center cursor-pointer ".concat(isDigit24 ? 'text-black' : 'text-[#9ca3af]', "  ").concat(digit === selectedHourDigit ? 'text-white' : 'text-gray', " "),
      style: {
        transform: "".concat(isDigit24 ? "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)") : "rotate(".concat(index * 30, "deg) translate(0,-55px) rotate(").concat(-index * 30, "deg)")),
        top: "46%",
        left: '47%'
      },
      onClick: function onClick() {
        return handleHourSelectDigit(digit);
      }
    }, digit);
  });
  var renderMinuteDigits = minuteDigits.map(function (digit, index) {
    var formattedDigit = digit < 10 ? "0".concat(digit) : digit;
    return /*#__PURE__*/React.createElement("div", {
      key: digit,
      className: "absolute z-10 text-sm transform -translate-x-1/2 -translate-y-1/2 w-5 flex items-center justify-center cursor-pointer ".concat(digit === selectedMinuteDigit ? 'text-white' : 'text-black'),
      style: {
        transform: "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)"),
        top: '46%',
        left: '47%'
      },
      onClick: function onClick() {
        return handleMinuteSelectDigit(digit);
      }
    }, formattedDigit);
  });
  var renderInputHourDigit = inputHourDigits12.slice(0, selectedHourDigit + 1).reverse().map(function (digit, index) {
    return (digit < 10 ? "0".concat(digit) : digit) + " ";
  }).join('');
  var renderInputMinuteDigit = minuteDigits.filter(function (digit) {
    return digit <= selectedMinuteDigit;
  }).reverse().map(function (digit, index) {
    return (digit < 10 ? "0".concat(digit) : digit) + " ";
  }).join('');
  React.useEffect(function () {
    var fullTime = selectedHourDigit + ':' + selectedMinuteDigit;
    props.onChange(fullTime);
  }, [selectedHourDigit, selectedMinuteDigit]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: 'flex flex-col items-center justify-center mt-3'
  }, /*#__PURE__*/React.createElement("div", {
    className: 'flex items-center mb-4'
  }, /*#__PURE__*/React.createElement("div", {
    className: 'flex items-center space-x-1'
  }, /*#__PURE__*/React.createElement("div", {
    className: "border w-9 h-8 border-gray-300 rounded bg-slatyGreen overflow-hidden inline-block",
    onClick: showHourClock
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(animateHour, " font-semibold text-lg border border-none rounded text-center cursor-pointer ").concat(showHourDigits === true ? 'bg-slatyGreen text-primary' : 'bg-lightGray')
  }, renderInputHourDigit)), /*#__PURE__*/React.createElement("span", {
    className: 'text-gray-600'
  }, ":"), /*#__PURE__*/React.createElement("div", {
    className: "border w-9 h-8 border-gray-300 rounded bg-slatyGreen overflow-hidden inline-block",
    onClick: showMinuteClock
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(animateMinute, " h-full font-semibold  text-lg border border-none rounded text-center cursor-pointer ").concat(showMinuteDigits === true ? 'bg-slatyGreen text-primary' : 'bg-lightGray')
  }, renderInputMinuteDigit))), /*#__PURE__*/React.createElement("div", {
    className: 'grid grid-cols-2 ml-10 border border-gray-300 rounded-md opacity-50'
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-8 ".concat(isAM && 'bg-slatyGreen text-primary', " transition-all rounded-l-md font-medium text-sm duration-200 flex items-center justify-center py-1 px-2 cursor-pointer pointer-events-none "),
    onClick: toggleSetAM
  }, "AM"), /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-8 ".concat(!isAM && 'bg-slatyGreen text-primary', " transition-all rounded-r-md font-medium text-sm duration-200 flex items-center justify-center py-1 px-2 cursor-pointer pointer-events-none"),
    onClick: toggleSetAM
  }, "PM"))), !showMinuteDigits && showHourDigits && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: 'w-56 h-56 bg-lightGray rounded-full overflow-hidden'
  }, !isHour24Selected && /*#__PURE__*/React.createElement("div", {
    className: " w-full h-full relative -left-1 ".concat(style.scaleDownAnimation)
  }, renderHourDigits12, hourDigits12.map(function (digit, index) {
    return digit === selectedHourDigit && /*#__PURE__*/React.createElement(React.Fragment, {
      key: digit
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative w-10 h-10 bg-primary rounded-full transform -translate-x-1/2 translate-y-16 pointer-events-none",
      style: {
        top: '41%',
        left: '42.6%',
        transform: "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)")
      },
      onClick: function onClick() {
        return handleHourSelectDigit(selectedHourDigit === 12 ? 1 : selectedHourDigit + 1);
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: 'absolute w-0.5 h-[92px] bg-primary transform -translate-x-1/2 -translate-y-1/2',
      style: {
        top: '50.5%',
        left: '52%',
        transformOrigin: 'center top',
        transform: "translateX(-50%) rotate(".concat(index * 30, "deg) translateY(-90px)")
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: 'absolute w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-4',
      style: {
        top: '56%',
        left: '52%'
      }
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "".concat(isHour24Selected ? "w-56 h-56 -top-56 ".concat(style.scaleUpAnimation) : " w-32  h-32 -top-[181px] left-0  ".concat(style.scaleDownAnimation), "  bg-lightGray rounded-full relative flex items-center justify-ce  \n                        nter"),
    style: {
      background: "transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full relative ".concat(isHour24Selected ? 'right-1' : '-left-1.5')
  }, renderHourDigits24, hourDigits24.map(function (digit, index) {
    return digit === selectedHourDigit && /*#__PURE__*/React.createElement(React.Fragment, {
      key: digit
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative w-10 h-10 bg-primary rounded-full transform -translate-x-1/2 translate-y-16 pointer-events-none",
      style: {
        top: isDigit24 && !isHour24Selected ? '37%' : '41%',
        left: isDigit24 && !isHour24Selected ? '39.6%' : '42.6%',
        transform: "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)")
      },
      onClick: function onClick() {
        return handleHourSelectDigit(selectedHourDigit === 24 ? 1 : selectedHourDigit + 1);
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: 'absolute w-0.5 h-[92px] bg-primary transform -translate-x-1/2 -translate-y-1/2',
      style: {
        top: isDigit24 && !isHour24Selected ? '53.5%' : '50.5%',
        left: isDigit24 && !isHour24Selected ? '55%' : '52%',
        transformOrigin: 'center top',
        transform: "translateX(-50%) rotate(".concat(index * 30, "deg) translateY(-90px)")
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: 'absolute w-2 h-2 z-10 bg-primary rounded-full transform -translate-x-1/2 -translate-y-4',
      style: {
        top: isDigit24 && !isHour24Selected ? '63%' : '56%',
        left: isDigit24 && !isHour24Selected ? '55%' : '52%'
      }
    }));
  })))), showMinuteDigits && /*#__PURE__*/React.createElement("div", {
    className: 'w-56 h-56 bg-lightGray rounded-full  relative flex items-center justify-center overflow-hidden'
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full relative right-1  ".concat(style.scaleUpAnimation, " ")
  }, renderMinuteDigits, minuteDigits.map(function (digit, index) {
    return digit === selectedMinuteDigit && /*#__PURE__*/React.createElement(React.Fragment, {
      key: digit
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative w-10 h-10 bg-primary rounded-full transform -translate-x-1/2 translate-y-16 pointer-events-none",
      style: {
        top: '41%',
        left: '42.6%',
        transform: "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)")
      },
      onClick: function onClick() {
        return handleMinuteSelectDigit(selectedMinuteDigit === 0 ? 1 : selectedMinuteDigit + 1);
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: 'absolute w-0.5 h-[92px] bg-primary transform -translate-x-1/2 -translate-y-1/2',
      style: {
        top: '50.5%',
        left: '52%',
        transformOrigin: 'center top',
        transform: "translateX(-50%) rotate(".concat(index * 30, "deg) translateY(-90px)")
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: 'absolute w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-4',
      style: {
        top: '56%',
        left: '52%'
      }
    }));
  })))));
};

var Toast = /** @class */function (_super) {
  __extends(Toast, _super);
  function Toast() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Toast.showToast = function (type, message, text, duration) {
    var successIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-4 h-4 sm:w-6 sm:h-6\">\n    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z\" />\n  </svg>\n  ";
    var errorIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-4 h-4 sm:w-6 sm:h-6\">\n    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\" />\n  </svg>\n  ";
    var warningIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-4 h-4 sm:w-6 sm:h-6\">\n    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z\" />\n  </svg>\n  ";
    var infoIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-4 h-4 sm:w-6 sm:h-6\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z\" />\n</svg>\n";
    var toastElement = document.createElement("div");
    toastElement.className = "flex flex-col text-xs sm:text-base m-[6px] p-[12px] px-[16px] rounded-md text-white font-semibold min-w-15rem relative ".concat(type === "error" ? "bg-errorColor !text-defaultRed" : type === "warning" ? "bg-warningColor !text-defaultOrange" : type === "info" ? "bg-infoColor !text-defaultBlue" : "bg-primary !text-pureWhite");
    var closeButton = document.createElement("span");
    closeButton.className = "absolute top-1/4 right-[20px] w-15 h-15 bg-transparent border-none text-base cursor-pointer pl-10 text-xs sm:text-base";
    closeButton.innerHTML = "X";
    closeButton.addEventListener("click", function () {
      Toast.removeToast(toastElement);
    });
    var messageElement = document.createElement("span");
    messageElement.className = "flex flex-start items-center mr-20";
    messageElement.innerHTML = "\n     <span style=\"padding-right:5px\">".concat(type === "error" ? errorIcon : type === "warning" ? warningIcon : type === "info" ? infoIcon : successIcon, "</span>\n     <Typography type=\"h6\">").concat(message, "</Typography>");
    toastElement.appendChild(messageElement);
    toastElement.appendChild(closeButton);
    var textElement = document.createElement("span");
    textElement.className = "flex flex-start items-center ml-[22px] sm:ml-[30px] font-normal";
    textElement.innerHTML = "\n    <Typography type=\"label\">".concat(text, "</Typography>");
    {
      text && toastElement.appendChild(textElement);
    }
    var container = document.getElementById(Toast.containerId);
    if (container) {
      container.appendChild(toastElement);
      setTimeout(function () {
        Toast.removeToast(toastElement);
      }, duration || 5000);
    }
  };
  Toast.success = function (message, text, duration) {
    Toast.showToast("success", message, text, duration);
  };
  Toast.error = function (message, text, duration) {
    Toast.showToast("error", message, text, duration);
  };
  Toast.warning = function (message, text, duration) {
    Toast.showToast("warning", message, text, duration);
  };
  Toast.info = function (message, text, duration) {
    Toast.showToast("info", message, text, duration);
  };
  Toast.removeToast = function (toastElement) {
    if (toastElement && toastElement.parentNode) {
      toastElement.parentNode.removeChild(toastElement);
    }
  };
  Toast.prototype.render = function () {
    var _a = this.props.position,
      position = _a === void 0 ? "top_right" : _a;
    return /*#__PURE__*/React.createElement("div", {
      id: Toast.containerId,
      className: "flex flex-col fixed select-none animate-slideDown ".concat(position === "top_right" && "top-2 right-5", " ").concat(position === "bottom_right" && "bottom-2 right-5", " ").concat(position === "top_left" && "top-2 left-5", " ").concat(position === "bottom_left" && "bottom-2 left-5", " ").concat(position === "top_center" && "left-1/2 transform -translate-x-1/2 top-2", " ").concat(position === "bottom_center" && "left-1/2 transform -translate-x-1/2 bottom-2")
    });
  };
  Toast.containerId = "fixed z-9999";
  return Toast;
}(React.Component);

exports.Accordion = Accordion;
exports.Alert = Alert;
exports.Avatar = Avatar;
exports.AvatarGroup = AvatarGroup;
exports.Badge = Badge;
exports.Breadcrumb = Breadcrumb;
exports.Button = Button;
exports.Calendar = Calendar;
exports.CalendarYear = CalendarYear;
exports.CheckBox = CheckBox;
exports.Close = Close;
exports.ColorPicker = ColorPicker;
exports.InputMask = InputMask;
exports.Loader = Loader;
exports.Modal = Modal;
exports.ModalAction = ModalAction;
exports.ModalContent = ModalContent;
exports.ModalTitle = ModalTitle;
exports.MultiSelect = MultiSelect;
exports.MultiSelectChip = MultiSelectChip;
exports.Pagination = Pagination;
exports.Password = Password;
exports.ProgressBar = ProgressBar;
exports.ProgressStep = ProgressStep;
exports.Radio = Radio;
exports.Rating = Rating;
exports.ScrollSpy = ScrollSpy;
exports.Select = Select;
exports.SpeedDial = SpeedDial;
exports.Spinner = Spinner;
exports.Switch = Switch;
exports.TabBar = TabBar;
exports.Table = Table;
exports.Tel = Tel;
exports.TextField = TextField;
exports.Textarea = Textarea;
exports.Timepicker = Timepicker;
exports.Timepicker24Hr = Timepicker24Hr;
exports.Toast = Toast;
exports.Tooltip = Tooltip;
exports.Typography = Typography;
exports.Uploader = Uploader;
