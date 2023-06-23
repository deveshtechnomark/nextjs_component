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
          } ${
            variant === "btn-primary" &&
            "!bg-[#02B89D] !text-white hover:!bg-[#029882]"
          } ${variant === "btn-secondary" && "!bg-[#069CDE] !text-white hover:!bg-[#0281B9]"} ${
            variant === "btn-success" && "!bg-[#198754] !text-white hover:!bg-[#146C43]"
          } ${variant === "btn-error" && "!bg-[#DC3545] !text-white hover:!bg-[#B02A37]"} ${
            variant === "btn-warning" && "!bg-[#FFC107] !text-white hover:!bg-[#CC9A06]"
          } ${variant === "primary" && "!text-[#02B89D]"} ${
            variant === "secondary" && "!text-[#069CDE]"
          } ${variant === "success" && "!text-[#198754]"} ${
            variant === "error" && "!text-[#DC3545]"
          } ${variant === "warning" && "!text-[#FFC107]"} ${
            variant === "btn-outline" && "btn-outline"
          } ${variant === "btn-outline-primary" && "btn-outline-primary hover:!bg-[#E0F8F4]"} ${
            variant === "btn-outline-secondary" && "btn-outline-secondary hover:!bg-[#E5F5FC]"
          } ${variant === "btn-outline-success" && "btn-outline-success hover:!bg-[#D1E7DD]"} ${
            variant === "btn-outline-error" && "btn-outline-error hover:!bg-[#F8D7DA]"
          } ${variant === "btn-outline-warning" && "btn-outline-warning hover:!bg-[#FFF3CD]"}`}
          type={type}
          disabled={disabled}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          onSubmit={onSubmit}
          onClick={handleClick}
        >
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
