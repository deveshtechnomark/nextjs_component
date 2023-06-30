import React, { InputHTMLAttributes } from "react";

import style from "./styles.module.scss";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  variant?: "invalid";
  variant2?: "intermediate";
}

const CheckBox = ({
  id,
  variant,
  variant2,
  label,
  ...props
}: CheckBoxProps) => {
  return (
    <div
      className={`m-0 p-0 w-full min-w-fit bg-red-400 relative flex justify-start items-center`}
    >
      {!variant2 ? (
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
