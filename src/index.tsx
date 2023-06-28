import React, { useRef } from "react";
import useRipple from "./useRipple";
import "./index.css";

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
      <button
        {...props}
        ref={ref}
        style={style}
        className={`${className} ${
          className?.includes("btn-sm") && "py-[3.5px] px-[10px] text-sm"
        } ${
          className?.includes("btn-lg") && "py-[12px] px-[20px]"
        } bg-white text-[#6E6D7A] relative overflow-hidden py-[6px] px-[15px] text-base group ${
          variant === "btn" && "!bg-[#D8D8D8] !text-[#6E6D7A]"
        } ${
          variant === "btn-primary" &&
          "!bg-[#02B89D] !text-white hover:!bg-[#029882]"
        } ${
          variant === "btn-secondary" &&
          "!bg-[#069CDE] !text-white hover:!bg-[#0281B9]"
        } ${
          variant === "btn-success" &&
          "!bg-[#198754] !text-white hover:!bg-[#146C43]"
        } ${
          variant === "btn-error" &&
          "!bg-[#DC3545] !text-white hover:!bg-[#B02A37]"
        } ${
          variant === "btn-warning" &&
          "!bg-[#FFC107] !text-white hover:!bg-[#CC9A06]"
        } ${variant === "primary" && "!text-[#02B89D]"} ${
          variant === "secondary" && "!text-[#069CDE]"
        } ${variant === "success" && "!text-[#198754]"} ${
          variant === "error" && "!text-[#DC3545]"
        } ${variant === "warning" && "!text-[#FFC107]"} ${
          variant === "btn-outline" && "!text-[#6E6D7A] border border-[#6E6D7A]"
        } ${
          variant === "btn-outline-primary" &&
          "!text-[#02B89D] hover:!text-[#029882] border border-[#02B89D] hover:border-[#029882] hover:!bg-[#E0F8F4]"
        } ${
          variant === "btn-outline-secondary" &&
          "!text-[#069CDE] hover:!text-[#0281B9] border border-[#069CDE] hover:border-[#0281B9] hover:!bg-[#E5F5FC]"
        } ${
          variant === "btn-outline-success" &&
          "!text-[#198754] hover:!text-[#146C43] border border-[#198754] hover:border-[#146C43] hover:!bg-[#D1E7DD]"
        } ${
          variant === "btn-outline-error" &&
          "!text-[#DC3545] hover:!text-[#B02A37] border border-[#DC3545] hover:border-[#B02A37] hover:!bg-[#F8D7DA]"
        } ${
          variant === "btn-outline-warning" &&
          "!text-[#FFC107] hover:!text-[#CC9A06] border border-[#FFC107] hover:border-[#CC9A06] hover:!bg-[#FFF3CD]"
        }`}
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
    </>
  );
};

export { Button };
