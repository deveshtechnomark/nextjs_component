'use strict';

var React = require('react');

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

var Typography = /*#__PURE__*/function (_React$Component) {
  _inherits(Typography, _React$Component);
  function Typography(props) {
    _classCallCheck(this, Typography);
    return _possibleConstructorReturn(this, _getPrototypeOf(Typography).call(this, props));
  }
  _createClass(Typography, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        style = _this$props.style,
        className = _this$props.className,
        type = _this$props.type,
        children = _this$props.children;
      var styles = '';
      switch (type) {
        case "h1":
          styles = "text-[32px] font-normal md:text-[40px]";
          break;
        case "h2":
          styles = "text-black  text-[28px] font-normal md:text-[32px] ";
          break;
        case "h3":
          styles = "text-black text-[24px] font-normal md:text-[28px]";
          break;
        case "h4":
          styles = "text-black text-[20px] font-normal md:text-[24px] ";
          break;
        case "h5":
          styles = "text-black text-[16px]  font-normal md:text-[20px]";
          break;
        case "h6":
          styles = "text-black text-[14px] font-normal md:text-[16px]";
          break;
        case "title":
          styles = "text-black text-[16px] font-medium md:text-[20px]";
          break;
        case "sub-title":
          styles = "text-black text-[16px] font-medium md:text-[16px] ";
          break;
        case "table-title":
          styles = "text-black text-[14px] font-bold md:text-[16px]";
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
          styles = "text-black text-[10px] font-normal md:text-[10px]";
          break;
        case "badge":
          styles = "text-black text-[10px] font-normal md:text-[10px]";
          break;
        case "tool-tip":
          styles = "text-black text-[16px] font-normal md:text-[14px]";
          break;
        default:
          styles = "text-black text-[14px] font-normal md:text-[16px]";
          break;
      }
      var combinedClassName = "".concat(styles, " ").concat(className);
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: "mx-auto p-0 box-border"
      }, React.createElement("span", Object.assign({}, this.props, {
        style: style,
        className: combinedClassName
      }), children)));
    }
  }]);
  return Typography;
}(React.Component);

exports.Typography = Typography;
