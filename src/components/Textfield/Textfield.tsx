import React, { useEffect, useRef, useState } from "react";
import ClearIcon from "./icons/ClearIcon";
import CheckIcon from "./icons/CheckIcon";

interface TextFieldProps {
  label?: string;
  className?: string;
  id?: string;
  name?: string;
  value?: string;
  type?: string;
  validate?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
  supportingText?: string;
  disabled?: boolean;
  hasError?: boolean;
  getValue: (arg1: string) => void;
  autoComplete?: string;
  props?: any;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  className,
  id,
  name,
  value,
  type,
  validate,
  onBlur,
  onChange,
  errorMessage = "This is a required field!",
  supportingText,
  disabled,
  getValue,
  hasError,
  autoComplete,
  props,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [err, setErr] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);
  const [showEmailError, setShowEmailError] = useState<boolean>(false);

  useEffect(() => {
    setErr(hasError);
  }, [hasError, errorMessage]);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (validate && (e.target.value === "" || !e.target.value)) {
      setErr(true);
      setFocus(false);
    } else if (validate && type === "email" && !validateEmail(e.target.value)) {
      setErr(true);
      setShowEmailError(true);
      setFocus(false);
    } else if (validateEmail(e.target.value)) {
      setErr(false);
      setShowEmailError(false);
      setFocus(true);
    } else {
      setErr(false);
      setShowEmailError(false);
      setFocus(true);
    }

    if (e.target.value === "") {
      setFocus(false);
    }

    if (onBlur) {
      onBlur(e);
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    getValue(inputValue);

    if (onChange) {
      onChange(e);
    }

    if (validate && type === "text") {
      if (inputValue.length < 0) {
        setValid(true);
        setErr(false);
      } else {
        setValid(false);
        setErr(false);
      }
    } else if (validate && type === "email") {
      if (inputValue && validateEmail(inputValue)) {
        setValid(true);
        setErr(false);
        setShowEmailError(false);
      } else if (inputValue) {
        setErr(false);
        setShowEmailError(false);
      } else {
        setValid(false);
      }
    } else if (err || valid) {
      setErr(false);
      setValid(false);
    }
  };

  const handleClear = () => {
    if (onChange) {
      onChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    }
    setErr(false);
    setValid(false);
    setShowEmailError(false);
  };

  return (
    <div className="flex flex-col text-sm sm:text-base relative">
      {label && (
        <span className="flex">
          <label
            className={`${err
                ? "text-defaultRed"
                : focus
                  ? "text-primary"
                  : "text-slatyGrey"
              }`}
          >
            {label}
          </label>
          {validate && <span className="text-defaultRed">&nbsp;*</span>}
        </span>
      )}

      <div
        className={`${!err &&
          "animated-input relative inline-block before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full"
          }`}
      >
        <input
          className={`
          ${className}
          py-1 px-3 border-b outline-none transition duration-600 w-full font-normal text-[14px]
          ${err
              ? "border-b-defaultRed"
              : focus
                ? "border-b-primary"
                : "border-b-lightSilver"
            }

          ${valid && !err ? "text-successColor" : "text-[#333333]"}

        `}
          ref={inputRef}
          type={type}
          id={id}
          name={name}
          value={value}
          onBlur={handleBlur}
          onChange={handleInputChange}
          onFocus={handleFocus}
          disabled={disabled}
          autoComplete={autoComplete}
          {...props}
        />
      </div>

      {err && (
        <span className="text-defaultRed absolute right-0 top-0 mt-5 mr-3 cursor-pointer">
          <div className="text-[20px]" onClick={handleClear}>
            <ClearIcon />
          </div>
        </span>
      )}

      {valid && !err && (
        <span className="text-primary bg-white text-[20px] absolute right-0 top-0 mt-6 mr-3">
          <CheckIcon />
        </span>
      )}

      {err && (
        <span className="text-defaultRed text-[12px] sm:text-[14px]">
          {errorMessage}
        </span>
      )}

      {!err && supportingText && (
        <span className="text-slatyGrey text-[12px] sm:text-[14px]">
          {supportingText}
        </span>
      )}
    </div>
  );
};

export { TextField };