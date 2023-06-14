import React from "react";
import Ripples from "react-ripples";
import "./index.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      className,
      variant,
      style,
      type = "button",
      children,
      disabled,
      onBlur,
      onChange,
      onFocus,
      onSubmit,
    } = this.props;

    return (
      <Ripples color="rgba(255,255,255, 0.3)">
        <button
          {...this.props}
          style={{ style }}
          className={`${className} button group ${
            variant === "btn" && "btn"
          } ${
            variant === "btn-primary" && "btn-primary"
          } ${variant === "btn-secondary" && "btn-secondary"} ${
            variant === "btn-success" && "btn-success"
          } ${variant === "btn-error" && "btn-error"} ${
            variant === "btn-warning" && "btn-warning"
          } ${variant === "primary" && "primary"} ${
            variant === "secondary" && "secondary"
          } ${variant === "success" && "success"} ${
            variant === "error" && "error"
          } ${variant === "warning" && "warning"} ${
            variant === "btn-outline" && "btn-outline"
          } ${variant === "btn-outline-primary" && "btn-outline-primary"} ${
            variant === "btn-outline-secondary" && "btn-outline-secondary"
          } ${variant === "btn-outline-success" && "btn-outline-success"} ${
            variant === "btn-outline-error" && "btn-outline-error"
          } ${variant === "btn-outline-warning" && "btn-outline-warning"}`}
          type={type}
          disabled={disabled}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          onSubmit={onSubmit}
        >
          <span
            className={`absolute w-0 group-hover:w-[60%] transition-all duration-1000 ease-in-out h-full left-[50%] top-0 ${
              variant === "btn-primary" && "!bg-[#029882]"
            } ${variant === "btn-secondary" && "!bg-[#0281B9]"} ${
              variant === "btn-success" && "!bg-[#146C43]"
            } ${variant === "btn-error" && "!bg-[#B02A37]"} ${
              variant === "btn-warning" && "!bg-[#CC9A06]"
            } ${variant === "btn-outline-primary" && "!bg-[#E0F8F4]"} ${
              variant === "btn-outline-secondary" && "!bg-[#E5F5FC]"
            } ${variant === "btn-outline-success" && "!bg-[#D1E7DD]"} ${
              variant === "btn-outline-error" && "!bg-[#F8D7DA]"
            } ${variant === "btn-outline-warning" && "!bg-[#FFF3CD]"}`}
          ></span>
          <span
            className={`absolute w-0 group-hover:w-[60%] transition-all duration-1000 ease-in-out h-full right-[50%] top-0 ${
              variant === "btn-primary" && "!bg-[#029882]"
            } ${variant === "btn-secondary" && "!bg-[#0281B9]"} ${
              variant === "btn-success" && "!bg-[#146C43]"
            } ${variant === "btn-error" && "!bg-[#B02A37]"} ${
              variant === "btn-warning" && "!bg-[#CC9A06]"
            } ${variant === "btn-outline-primary" && "!bg-[#E0F8F4]"} ${
              variant === "btn-outline-secondary" && "!bg-[#E5F5FC]"
            } ${variant === "btn-outline-success" && "!bg-[#D1E7DD]"} ${
              variant === "btn-outline-error" && "!bg-[#F8D7DA]"
            } ${variant === "btn-outline-warning" && "!bg-[#FFF3CD]"}`}
          ></span>
          <span className="relative" onClick={this.handleClick}>
            {children}
          </span>
        </button>
      </Ripples>
    );
  }
}


export { Button };
