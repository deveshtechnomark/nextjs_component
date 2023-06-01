import React from "react";
import classes from "./Label.module.css";
export default class Label extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      style,
      className,
      required,
      htmlFor,
      form,
      children,
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
    return (
      <label
        {...this.props}
        style={style}
        className={`${className} ${classes.__label}`}
        required={required}
        htmlFor={htmlFor}
        form={form}
        onBlur={onBlur}
        onChange={onChange}
        onContextMenu={onContextMenu}
        onFocus={onFocus}
        onInput={onInput}
        onInvalid={onInvalid}
        onReset={onReset}
        onSelect={onSelect}
        onSubmit={onSubmit}
      >
        {children}
        {required && <span>*</span>}
      </label>
    );
  }
}
