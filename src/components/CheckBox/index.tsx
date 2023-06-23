import React, { HTMLAttributes, InputHTMLAttributes } from "react";

import style from "./styles.module.scss";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  variant?: string;
  variant2?: string;
}

const CheckBox = ({
  id,
  variant,
  variant2,
  label,
  ...props
}: CheckBoxProps) => {
  return (
    <div className={`m-0 p-0 relative flex justify-start items-center`}>
      <input
        className={`${style.checkBox} ${
          variant === "invalid" && style.invalidcheckBox
        } absolute left-3`}
        type="checkbox"
        id={id}
        {...props}
      />
      <label
        className={`${style.checkBoxLabel} h-6 w-full flex items-center`}
        htmlFor={id}
      >
        <span className={style.checkBoxSpan}></span>
        {label?.split(" ")}
        {/* <Typography>{label}</Typography> */}
      </label>
    </div>
  );
};

export default CheckBox;
