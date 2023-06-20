import React from 'react';

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

var ExampleComponent = /** @class */function (_super) {
  __extends(ExampleComponent, _super);
  function ExampleComponent(props) {
    var _this = _super.call(this, props) || this;
    _this.state = {
      isOpen: false,
      getValue: "",
      error: "",
      inputStyle: {},
      isFocused: false
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleValidation = _this.handleValidation.bind(_this);
    return _this;
  }
  ExampleComponent.prototype.handleFocus = function () {
    this.setState({
      isFocused: true
    });
  };
  ExampleComponent.prototype.handleChange = function (event) {
    var onChange = this.props.onChange;
    this.setState({
      getValue: event.target.value,
      error: ""
    });
    if (onChange) {
      onChange(event.target.name, event.target.value);
    }
  };
  ExampleComponent.prototype.handleValidation = function (event) {
    var _a = this.props,
      type = _a.type,
      validation = _a.validation;
    var value = this.state.getValue.trim();
    if (type === "text") {
      if (validation && value.length === 0) {
        this.setState({
          error: "".concat(type, " field is required.")
        });
      } else if (validation && /\d/.test(value)) {
        this.setState({
          error: "".concat(type, " field cannot contain numbers.")
        });
      } else if (validation && value.length > 15) {
        this.setState({
          error: "".concat(type, " field cannot exceed 15 characters.")
        });
      } else {
        this.setState({
          error: ""
        });
      }
    }
    if (type === "password") {
      if (validation && value.length === 0) {
        this.setState({
          error: "".concat(type, " field is required.")
        });
      } else if (validation && value.length < 6) {
        this.setState({
          error: "".concat(type, " must be at least 6 characters.")
        });
      } else {
        this.setState({
          error: ""
        });
      }
    }
  };
  ExampleComponent.prototype.render = function () {
    var _a = this.props,
      type = _a.type,
      placeholder = _a.placeholder;
      _a.size;
      var label = _a.label;
      _a.className;
      var min = _a.min,
      max = _a.max,
      id = _a.id,
      name = _a.name,
      value = _a.value,
      hidden = _a.hidden,
      minLength = _a.minLength,
      maxLength = _a.maxLength,
      accept = _a.accept,
      required = _a.required,
      disabled = _a.disabled;
      _a.variant;
    var _b = this.state,
      getValue = _b.getValue,
      error = _b.error,
      isFocused = _b.isFocused;
    var labelClassName = "".concat(label, " ").concat(isFocused ? 'selectedColor' : 'defaultColor', " ").concat(error ? 'errorLabel' : "");
    var inputClassName = "input ".concat('inputStyle' , " ").concat(isFocused ? 'selectedColor' : '', " ").concat(error ? 'errorInput' : "");
    return React.createElement("div", null, React.createElement("label", {
      className: labelClassName
    }, label), React.createElement("input", {
      type: type,
      placeholder: placeholder,
      value: value || getValue,
      onChange: this.handleChange,
      onFocus: this.handleFocus,
      onBlur: this.handleValidation,
      className: inputClassName,
      min: min,
      max: max,
      id: id,
      name: name,
      required: required,
      disabled: disabled,
      minLength: minLength,
      maxLength: maxLength,
      hidden: hidden,
      accept: accept
    }), error && React.createElement("span", {
      className: 'error'
    }, error));
  };
  return ExampleComponent;
}(React.Component);

export { ExampleComponent as default };
