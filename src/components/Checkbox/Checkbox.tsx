import React, { InputHTMLAttributes } from "react";

import style from "./checkbox.module.scss";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  variant?: "invalid";
  className?: string;
  intermediate?: boolean;
}

const CheckBox = ({
  id,
  label,
  variant,
  className,
  intermediate,
  ...props
}: CheckBoxProps) => {
  return (
    <div
      className={`m-0 p-0 w-fit h-5 relative flex justify-start items-center ${className}`}
    >
      {!intermediate ? (
        <>
          <input
            className={`${style.checkBox} ${
              variant === "invalid" && style.invalidcheckBox
            } absolute left-3`}
            type="checkbox"
            id={id}
            {...props}
          />
          <label
            className={`${style.checkBoxLabel} h-6 flex items-center`}
            htmlFor={id}
          >
            <span className={style.checkBoxSpan}></span>
            {label}
            {/* <Typography>{label}</Typography> */}
          </label>
        </>
      ) : (
        <>
          <input
            className={`${style.i__checkBox} ${
              variant === "invalid" && style.i__invalidcheckBox
            } absolute left-3`}
            type="checkbox"
            id={id}
            {...props}
          />
          <label
            className={`${style.i__checkBoxLabel} h-6 w-full flex items-center`}
            htmlFor={id}
          >
            <span className={style.i__checkBoxSpan}></span>
            {label?.split(" ")}
            {/* <Typography>{label}</Typography> */}
          </label>
        </>
      )}
    </div>
  );
};

export default CheckBox;