import React, { useRef } from "react";
import useRipple from "./useRipple";
import "./index.css";
import { Typography } from "Typography";
import "Typography/dist/index.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "btn"
    | "btn-primary"
    | "btn-secondary"
    | "btn-success"
    | "btn-error"
    | "btn-warning"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "btn-outline"
    | "btn-outline-primary"
    | "btn-outline-secondary"
    | "btn-outline-success"
    | "btn-outline-error"
    | "btn-outline-warning";
}

const Button: React.FC<ButtonProps> = ({
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
  ...props
}) => {
  const handleClick = () => {};
  const ref = useRef(null);
  const ripples = useRipple(ref);

  return (
    <>
      <Typography type="button">
        <button
          {...props}
          ref={ref}
          style={style}
          className={`${className} button group ${
            variant === "btn" && "!bg-[#D8D8D8] !text-[#6E6D7A]"
          } ${variant === "btn-primary" && "!bg-[#02B89D] !text-white"} ${
            variant === "btn-secondary" && "!bg-[#069CDE] !text-white"
          } ${variant === "btn-success" && "!bg-[#198754] !text-white"} ${
            variant === "btn-error" && "!bg-[#DC3545] !text-white"
          } ${variant === "btn-warning" && "!bg-[#FFC107] !text-white"} ${
            variant === "primary" && "!text-[#02B89D]"
          } ${variant === "secondary" && "!text-[#069CDE]"} ${
            variant === "success" && "!text-[#198754]"
          } ${variant === "error" && "!text-[#DC3545]"} ${
            variant === "warning" && "!text-[#FFC107]"
          } ${variant === "btn-outline" && "btn-outline"} ${
            variant === "btn-outline-primary" && "btn-outline-primary"
          } ${variant === "btn-outline-secondary" && "btn-outline-secondary"} ${
            variant === "btn-outline-success" && "btn-outline-success"
          } ${variant === "btn-outline-error" && "btn-outline-error"} ${
            variant === "btn-outline-warning" && "btn-outline-warning"
          }`}
          type={type}
          disabled={disabled}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          onSubmit={onSubmit}
          onClick={handleClick}
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
          {ripples}
          <span className="relative" onClick={handleClick}>
            {children}
          </span>
        </button>
      </Typography>
    </>
  );
};

export { Button };
