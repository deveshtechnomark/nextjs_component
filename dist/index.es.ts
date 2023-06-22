import React from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

var elementMap = {
  h1: function h1(_ref) {
    var children = _ref.children,
      style = _ref.style,
      className = _ref.className;
    return React.createElement("h1", {
      style: style,
      className: className
    }, children);
  },
  h2: function h2(_ref2) {
    var children = _ref2.children,
      style = _ref2.style,
      className = _ref2.className;
    return React.createElement("h2", {
      style: style,
      className: className
    }, children);
  },
  h3: function h3(_ref3) {
    var children = _ref3.children,
      style = _ref3.style,
      className = _ref3.className;
    return React.createElement("h3", {
      style: style,
      className: className
    }, children);
  },
  h4: function h4(_ref4) {
    var children = _ref4.children,
      style = _ref4.style,
      className = _ref4.className;
    return React.createElement("h4", {
      style: style,
      className: className
    }, children);
  },
  h5: function h5(_ref5) {
    var children = _ref5.children,
      style = _ref5.style,
      className = _ref5.className;
    return React.createElement("h5", {
      style: style,
      className: className
    }, children);
  },
  h6: function h6(_ref6) {
    var children = _ref6.children,
      style = _ref6.style,
      className = _ref6.className;
    return React.createElement("h6", {
      style: style,
      className: className
    }, children);
  },
  title: function title(_ref7) {
    var children = _ref7.children,
      style = _ref7.style,
      className = _ref7.className;
    return React.createElement("title", {
      style: style,
      className: className
    }, children);
  },
  "table-title": function tableTitle(_ref8) {
    var children = _ref8.children,
      style = _ref8.style,
      className = _ref8.className;
    return React.createElement("table", null, React.createElement("caption", {
      style: style,
      className: className
    }, children));
  },
  label: function label(_ref9) {
    var children = _ref9.children,
      style = _ref9.style,
      className = _ref9.className;
    return React.createElement("label", {
      style: style,
      className: className
    }, children);
  },
  body: function body(_ref10) {
    var children = _ref10.children,
      style = _ref10.style,
      className = _ref10.className;
    return React.createElement("p", {
      style: style,
      className: className
    }, children);
  },
  button: function button(_ref11) {
    var children = _ref11.children,
      style = _ref11.style,
      className = _ref11.className;
    return React.createElement("button", {
      style: style,
      className: className
    }, children);
  },
  caption: function caption(_ref12) {
    var children = _ref12.children,
      style = _ref12.style,
      className = _ref12.className;
    return React.createElement("table", null, React.createElement("caption", {
      style: style,
      className: className
    }, children));
  }
};
var Typography = /*#__PURE__*/function (_React$Component) {
  _inherits(Typography, _React$Component);
  function Typography() {
    _classCallCheck(this, Typography);
    return _possibleConstructorReturn(this, _getPrototypeOf(Typography).apply(this, arguments));
  }
  _createClass(Typography, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        style = _this$props.style,
        className = _this$props.className,
        type = _this$props.type,
        children = _this$props.children;
      var Element = elementMap[type] || "span";
      var styles = "";
      switch (type) {
        case "h1":
          styles = "text-[32px] font-normal md:text-[40px]";
          break;
        case "h2":
          styles = "text-black text-[28px] font-normal md:text-[32px]";
          break;
        case "h3":
          styles = "text-black text-[24px] font-normal md:text-[28px]";
          break;
        case "h4":
          styles = "text-black text-[20px] font-normal md:text-[24px]";
          break;
        case "h5":
          styles = "text-black text-[16px] font-normal md:text-[20px]";
          break;
        case "h6":
          styles = "text-black text-[14px] font-normal md:text-[16px]";
          break;
        case "title":
          styles = "text-black text-[16px] font-medium md:text-[20px]";
          break;
        case "sub-title":
          styles = "text-black text-[16px] font-medium md:text-[16px]";
          break;
        case "table-title":
          styles = "text-black text-[14px] width-max-content font-bold md:text-[16px]";
          break;
        case "label":
          styles = "text-black text-[12px] font-normal md:text-[14px]";
          break;
        case "body":
          styles = "text-black text-[14px] font-normal md:text-[16px]";
          break;
        case "button":
          styles = "text-black text-[16px] font-normal md:text-[16px]";
          break;
        case "caption":
          styles = "text-black text-[10px] width-max-content font-normal md:text-[10px]";
          break;
        case "badge":
          styles = "text-black text-[10px] font-normal md:text-[10px]";
          break;
        case "tool-tip":
          styles = "text-black text-[16px] font-normal md:text-[14px] ";
          break;
        default:
          styles = "text-black text-[14px]  font-normal md:text-[16px]";
          break;
      }
      var combinedClassName = "".concat(className, " ").concat(styles);
      return React.createElement(Element, {
        style: style,
        className: "Typography ".concat(combinedClassName)
      }, children);
    }
  }]);
  return Typography;
}(React.Component);

export { Typography };
