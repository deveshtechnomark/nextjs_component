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

var Breadcrumb = /*#__PURE__*/function (_React$Component) {
  _inherits(Breadcrumb, _React$Component);
  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);
    return _possibleConstructorReturn(this, _getPrototypeOf(Breadcrumb).apply(this, arguments));
  }
  _createClass(Breadcrumb, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        items = _this$props.items,
        variant = _this$props.variant,
        className = _this$props.className,
        style = _this$props.style;
      var separator = variant === '>' ? '>' : '/';
      var linkStyle = {
        fontSize: style && style.fontSize ? style.fontSize : 'inherit'
      };
      var containerStyle = Object.assign({
        fontSize: style && style.fontSize ? style.fontSize : 'inherit'
      }, style);
      var iconStyle = {
        fontSize: style && style.fontSize ? style.fontSize : 'inherit'
      };
      return React.createElement("nav", {
        className: "flex ".concat(className),
        style: containerStyle,
        "aria-label": "Breadcrumb"
      }, React.createElement("ol", {
        className: "inline-flex items-center"
      }, React.createElement("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: iconStyle
      }, React.createElement("path", {
        d: "M6.66667 3.33333V0.666667C6.66667 0.477778 6.73056 0.319444 6.85833 0.191667C6.98611 0.0638889 7.14445 0 7.33333 0H11.3333C11.5222 0 11.6806 0.0638889 11.8083 0.191667C11.9361 0.319444 12 0.477778 12 0.666667V3.33333C12 3.52222 11.9361 3.68056 11.8083 3.80833C11.6806 3.93611 11.5222 4 11.3333 4H7.33333C7.14445 4 6.98611 3.93611 6.85833 3.80833C6.73056 3.68056 6.66667 3.52222 6.66667 3.33333ZM0 6V0.666667C0 0.477778 0.0638889 0.319444 0.191667 0.191667C0.319444 0.0638889 0.477778 0 0.666667 0H4.66667C4.85556 0 5.01389 0.0638889 5.14167 0.191667C5.26944 0.319444 5.33333 0.477778 5.33333 0.666667V6C5.33333 6.18889 5.26944 6.34722 5.14167 6.475C5.01389 6.60278 4.85556 6.66667 4.66667 6.66667H0.666667C0.477778 6.66667 0.319444 6.60278 0.191667 6.475C0.0638889 6.34722 0 6.18889 0 6ZM6.66667 11.3333V6C6.66667 5.81111 6.73056 5.65278 6.85833 5.525C6.98611 5.39722 7.14445 5.33333 7.33333 5.33333H11.3333C11.5222 5.33333 11.6806 5.39722 11.8083 5.525C11.9361 5.65278 12 5.81111 12 6V11.3333C12 11.5222 11.9361 11.6806 11.8083 11.8083C11.6806 11.9361 11.5222 12 11.3333 12H7.33333C7.14445 12 6.98611 11.9361 6.85833 11.8083C6.73056 11.6806 6.66667 11.5222 6.66667 11.3333ZM0 11.3333V8.66667C0 8.47778 0.0638889 8.31945 0.191667 8.19167C0.319444 8.06389 0.477778 8 0.666667 8H4.66667C4.85556 8 5.01389 8.06389 5.14167 8.19167C5.26944 8.31945 5.33333 8.47778 5.33333 8.66667V11.3333C5.33333 11.5222 5.26944 11.6806 5.14167 11.8083C5.01389 11.9361 4.85556 12 4.66667 12H0.666667C0.477778 12 0.319444 11.9361 0.191667 11.8083C0.0638889 11.6806 0 11.5222 0 11.3333ZM1.33333 5.33333H4V1.33333H1.33333V5.33333ZM8 10.6667H10.6667V6.66667H8V10.6667ZM8 2.66667H10.6667V1.33333H8V2.66667ZM1.33333 10.6667H4V9.33333H1.33333V10.6667Z",
        fill: items.length > 1 ? "#02B89D" : "#6E6D7A"
      })), items.map(function (item, index) {
        return React.createElement("li", {
          key: index,
          className: "inline-flex items-center"
        }, index > 0 && React.createElement("span", {
          style: linkStyle,
          className: "w-2 mx-2 h-6 text-primary"
        }, separator), React.createElement("a", {
          href: item.url,
          className: "ml-1 text-sm font-medium ".concat(index === items.length - 1 ? "text-slatyGrey" : "text-primary"),
          style: linkStyle
        }, item.label));
      })));
    }
  }]);
  return Breadcrumb;
}(React.Component);

export { Breadcrumb };
