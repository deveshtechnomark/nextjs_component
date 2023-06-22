import React, { useRef, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import classnames from "classnames";

interface TextFieldProps {
  label?: string;
  className?: string;
  id?: string;
  name?: string;
  value?: string;
  type?: string;
  required?: boolean;
  validate?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
  supportingText?: string;
  disabled?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  className,
  id,
  name,
  value,
  type,
  required,
  validate,
  onBlur,
  onChange,
  errorMessage = "This is a required field!",
  supportingText,
  disabled,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [err, setErr] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (validate && (value === "" || !value)) {
      setErr(true);
    } else if (type === "email" && value && !validateEmail(value)) {
      setEmailError(true);
      setErr(true);
      setValid(false);
    } else {
      setEmailError(false);
      setErr(false);
    }
    setFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (onChange) {
      onChange(e);
    }
    if (validate && type === "email") {
      if (inputValue && validateEmail(inputValue)) {
        setValid(true);
        setErr(false);
      } else {
        setValid(false);
      }
    } else if (err || valid) {
      setErr(false);
      setValid(false);
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleClear = () => {
    if (onChange) {
      onChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    }
    setErr(false);
    setValid(false);
  };

  const inputClassName = classnames(
    className,
    "py-2 px-3 border-b outline-none duration-300",
    !err && !disabled && "hover:border-b-CSgreen",
    err
      ? "border-b-CSError"
      : focus
      ? "border-b-CSgreen"
      : "border-b-CSSecondaryGray",
    valid && "text-CSEmailSuccess font-normal text-[14px] font-proxima",
    emailError && "text-CSError"
  );

  const labelClassName = classnames(
    err ? "text-CSError" : focus ? "text-CSgreen" : "text-CSSecondaryGray"
  );

  return (
    <div className="flex flex-col text-[14px] laptop:text-base relative font-proxima">
      {label && (
        <label className={labelClassName}>
          {label}
          {required && "*"}
        </label>
      )}
      <input
        className={inputClassName}
        ref={inputRef}
        type={type}
        id={id}
        name={name}
        value={value}
        onBlur={handleBlur}
        onChange={handleInputChange}
        onFocus={handleFocus}
        disabled={disabled}
        {...props}
      />
      {err && (
        <span
          className="text-CSError absolute right-0 top-0 mt-5 mr-3 cursor-pointer"
          onClick={handleClear}
        >
          <ClearIcon />
        </span>
      )}
      {valid && focus && (
        <span className="text-CSgreen absolute right-0 top-0 mt-5 mr-3">
          <CheckIcon />
        </span>
      )}
      {err && <span className="text-CSError">{errorMessage}</span>}
      {!err && supportingText && (
        <span className="text-CSSecondaryGray">{supportingText}</span>
      )}
    </div>
  );
};

export { TextField };
