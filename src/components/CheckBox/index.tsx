import React, { InputHTMLAttributes, useState } from "react";

import style from "./styles.module.scss";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  className?: string;
  invalid?: boolean;
  intermediate?: boolean;
}

const CheckBox = ({
  id,
  label,
  invalid,
  className,
  intermediate,
  ...props
}: CheckBoxProps) => {
  return (
    <div
      className={`h-5 m-0 p-0 w-fit relative flex justify-start items-center ${className}`}
    >
      {!intermediate ? (
        <>
          <input
            className={`${style.checkBox} ${
              invalid && style.invalidcheckBox
            } absolute left-3`}
            type="checkbox"
            id={id}
            {...props}
          />
          <label
            className={`${style.checkBoxLabel} flex items-center`}
            htmlFor={id}
          >
            <span className={`${style.checkBoxSpan}`}></span>
            {label}
          </label>
        </>
      ) : (
        <>
          <input
            className={`${style.i__checkBox} ${
              invalid && style.i__invalidcheckBox
            } absolute left-3`}
            type="checkbox"
            id={id}
            {...props}
          />
          <label
            className={`${style.i__checkBoxLabel} h-6 w-full flex items-center`}
            htmlFor={id}
          >
            <span className={`${style.i__checkBoxSpan}`}></span>
            {label}
          </label>
        </>
      )}
    </div>
  );
};

export default CheckBox;
