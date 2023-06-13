import React from "react";
import Ripples from "react-ripples";
import "./index.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      style,
      type = "button",
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
      primary,
      secondary,
      success,
      error,
      warning,
      btn,
      btn_primary,
      btn_secondary,
      btn_success,
      btn_error,
      btn_warning,
      btn_outline,
      btn_outline_primary,
      btn_outline_secondary,
      btn_outline_success,
      btn_outline_error,
      btn_outline_warning,
      rounded_md,
      rounded_full,
      btn_lg,
      btn_sm,
    } = this.props;

    return (
      <Ripples color="rgba(255,255,255, 0.3)">
        <button
          {...this.props}
          style={{ style }}
          className={`text-white bg-white relative group overflow-hidden ${
            btn
              ? "!bg-[#D8D8D8] !text-[#6E6D7A]"
              : btn_primary
              ? "!bg-[#02B89D]"
              : btn_secondary
              ? "!bg-[#069CDE]"
              : btn_success
              ? "!bg-[#198754]"
              : btn_error
              ? "!bg-[#DC3545]"
              : btn_warning
              ? "!bg-[#FFC107]"
              : primary
              ? "!text-[#02B89D]"
              : secondary
              ? "!text-[#069CDE]"
              : success
              ? "!text-[#198754]"
              : error
              ? "!text-[#DC3545]"
              : warning
              ? "!text-[#FFC107]"
              : "!text-[#6E6D7A]"
          } ${
            btn_outline
              ? "!text-[#6E6D7A] border border-[#6E6D7A]"
              : btn_outline_primary
              ? "!text-[#02B89D] hover:!text-[#029882] border border-[#02B89D] hover:border-[#029882]"
              : btn_outline_secondary
              ? "!text-[#069CDE] hover:!text-[#0281B9] border border-[#069CDE] hover:border-[#0281B9]"
              : btn_outline_success
              ? "!text-[#198754] hover:!text-[#146C43] border border-[#198754] hover:border-[#146C43]"
              : btn_outline_error
              ? "!text-[#DC3545] hover:!text-[#B02A37] border border-[#DC3545] hover:border-[#B02A37]"
              : btn_outline_warning &&
                "!text-[#FFC107] hover:!text-[#CC9A06] border border-[#FFC107] hover:border-[#CC9A06]"
          } ${rounded_md ? "rounded-md" : rounded_full && "rounded-full"} ${
            btn_lg
              ? "py-[12px] px-[20px] text-base"
              : btn_sm
              ? "py-[3.5px] px-[10px] text-sm"
              : "py-[6px] px-[15px] text-base"
          }`}
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
          <span
            className={`absolute w-0 group-hover:w-[60%] transition-all duration-1000 ease-in-out h-full left-[50%] top-0 ${
              btn_primary
                ? "!bg-[#029882]"
                : btn_secondary
                ? "!bg-[#0281B9]"
                : btn_success
                ? "!bg-[#146C43]"
                : btn_error
                ? "!bg-[#B02A37]"
                : btn_warning
                ? "!bg-[#CC9A06]"
                : ""
            } ${
              btn_outline_primary
                ? "!bg-[#E0F8F4]"
                : btn_outline_secondary
                ? "!bg-[#E5F5FC]"
                : btn_outline_success
                ? "!bg-[#D1E7DD]"
                : btn_outline_error
                ? "!bg-[#F8D7DA]"
                : btn_outline_warning && "!bg-[#FFF3CD]"
            }`}
          ></span>
          <span
            className={`absolute w-0 group-hover:w-[60%] transition-all duration-1000 ease-in-out h-full right-[50%] top-0 ${
              btn_primary
                ? "!bg-[#029882]"
                : btn_secondary
                ? "!bg-[#0281B9]"
                : btn_success
                ? "!bg-[#146C43]"
                : btn_error
                ? "!bg-[#B02A37]"
                : btn_warning
                ? "!bg-[#CC9A06]"
                : ""
            } ${
              btn_outline_primary
                ? "!bg-[#E0F8F4]"
                : btn_outline_secondary
                ? "!bg-[#E5F5FC]"
                : btn_outline_success
                ? "!bg-[#D1E7DD]"
                : btn_outline_error
                ? "!bg-[#F8D7DA]"
                : btn_outline_warning && "!bg-[#FFF3CD]"
            }`}
          ></span>
          <span className="relative">{children}</span>
        </button>
      </Ripples>
    );
  }
}

export { Button };
