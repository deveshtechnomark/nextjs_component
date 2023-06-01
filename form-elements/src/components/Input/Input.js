import React from "react";
import PropTypes from "prop-types";

import { Eye, EyeSlash } from "./icons/icons";
import classes from "./Input.module.css";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false, err: false, errortext: "" };
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
    this.validate = this.validate.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validatePhone = this.validatePhone.bind(this);
  }

  togglePasswordVisibility() {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
  }

  validate(e) {
    if (e.target.value === "")
      return this.setState({ err: true, errortext: "This is required field!" });
    else return this.setState({ err: false, errortext: "" });
  }

  validateEmail(e) {
    if (e.target.value === "")
      return this.setState({ err: true, errortext: "This is required field!" });
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value))
      return this.setState({ err: true, errortext: "Email is not valid!" });
    else return this.setState({ err: false, errortext: "" });
  }

  validatePassword(e) {
    if (e.target.value === "")
      return this.setState({ err: true, errortext: "This is required field!" });
    else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,15}$/.test(
        e.target.value
      )
    )
      return this.setState({
        err: true,
        errortext:
          "It must contains atleast 1-uppercase,lowercase,number and 8-15 characters!",
      });
    else return this.setState({ err: false, errortext: "" });
  }

  validatePhone(e) {
    if (e.target.value === "")
      return this.setState({ err: true, errortext: "This is required field!" });
    else if (!/^\d{10}$/.test(e.target.value))
      return this.setState({
        err: true,
        errortext: "Phone Number is not valid!",
      });
    else return this.setState({ err: false, errortext: "" });
  }

  render() {
    const {
      haslabel,
      type,
      title,
      style,
      className,
      id,
      name,
      value,
      placeholder,
      size,
      min,
      max,
      maxLength,
      step,
      alt,
      height,
      width,
      list,
      autoComplete,
      passwordvisibility,
      autoFocus,
      readOnly,
      disabled,
      multiple,
      multiline,
      wrap,
      rows,
      form,
      dirname,
      cols,
      required,
      validate,
      onBlur,
      onChange,
      onContextMenu,
      onFocus,
      onInput,
      onInvalid,
      onReset,
      onSelect,
      onSubmit,
    } = this.props;
    const { isVisible, err, errortext } = this.state;

    return (
      <>
        {haslabel && (
          <div style={{ width: "80%" }}>
            <label className={classes.label__input}>
              {haslabel}
              {required && "*"}
            </label>
          </div>
        )}
        {(multiline && type === "text") || (multiline && !type) ? (
          <div>
            <textarea
              {...this.props}
              id={id}
              className={className}
              style={style}
              name={name}
              title={title}
              value={value}
              rows={rows}
              cols={cols}
              wrap={wrap}
              form={form}
              dirname={dirname}
              onBlur={onBlur ? onBlur : validate ? this.validate : undefined}
              onChange={onChange}
              onContextMenu={onContextMenu}
              onFocus={onFocus}
              onInput={onInput}
              onInvalid={onInvalid}
              onReset={onReset}
              onSelect={onSelect}
              onSubmit={onSubmit}
            ></textarea>
            {err && <span>{errortext}</span>}
          </div>
        ) : (
          <div
            className={
              type === "hidden"
                ? classes.hidden__input
                : classes.container__input
            }
          >
            <input
              {...this.props}
              type={type === "" ? "text" : isVisible ? "text" : type}
              title={title}
              style={
                type !== "password" || passwordvisibility === "off"
                  ? { ...style, width: "96%" }
                  : { ...style }
              }
              className={className}
              id={id}
              name={name}
              value={value}
              placeholder={placeholder}
              size={size}
              min={min}
              max={max}
              maxLength={
                type === "tel" ? 10 : maxLength ? maxLength : undefined
              }
              step={step}
              alt={alt}
              height={height}
              width={width}
              list={list}
              autoComplete={autoComplete}
              autoFocus={autoFocus}
              readOnly={readOnly}
              disabled={disabled}
              multiple={multiple}
              required={required}
              onBlur={
                onBlur
                  ? onBlur
                  : (validate && type === "email"
                      ? this.validateEmail
                      : undefined) ||
                    (validate && type === "password"
                      ? this.validatePassword
                      : undefined) ||
                    (validate && type === "tel"
                      ? this.validatePhone
                      : undefined) ||
                    (validate ? this.validate : undefined)
              }
              onChange={onChange}
              onContextMenu={onContextMenu}
              onFocus={onFocus}
              onInput={onInput}
              onInvalid={onInvalid}
              onReset={onReset}
              onSelect={onSelect}
              onSubmit={onSubmit}
            />
            {passwordvisibility === "on" && type === "password" && (
              <span
                title={isVisible ? "hide" : "show"}
                className={classes.icons__input}
                onClick={this.togglePasswordVisibility}
              >
                {isVisible ? <Eye /> : <EyeSlash />}
              </span>
            )}
            {err && <span className={classes.error__input}>{errortext}</span>}
          </div>
        )}
      </>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf([
    "button",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "month",
    "number",
    "password",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "url",
    "week",
  ]),
};
