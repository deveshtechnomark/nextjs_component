import React from "react";
import classes from "./Button.module.css";
export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      style,
      className,
      variant,
      type,
      name,
      value,
      children,
      autoFocus,
      disabled,
      form,
      formAction,
      formEncType,
      formMethod,
      formNoValidate,
      formTarget,
      onBlur,
      onClick,
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
      <div className={classes.container__btn}>
        <button
          {...this.props}
          style={{ style }}
          className={
            !className &&
            `${classes.__btn} 
              ${
                (variant === "primary" || !variant || type === "submit") &&
                classes.primary__btn
              } 
              ${
                (variant === "secondary" || type === "reset") &&
                classes.secondary__btn
              }`
          }
          type={type}
          name={name}
          value={value}
          autoFocus={autoFocus}
          disabled={disabled}
          form={form}
          formAction={formAction}
          formEncType={formEncType}
          formMethod={formMethod}
          formNoValidate={formNoValidate}
          formTarget={formTarget}
          onBlur={onBlur}
          onClick={onClick}
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
        </button>
      </div>
    );
  }
}
