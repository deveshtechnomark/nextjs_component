import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import CheckIcon from "./icons/CheckIcon";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  type?: string;
  validate?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
  supportingText?: string;
  disabled?: boolean;
  hasError?: boolean;
  autoComplete?: string;
  minChar?: number;
  maxChar?: number;
  noNumeric?: boolean;
  noSpecialChar?: boolean;
  getValue: (arg1: string) => void;
  getError: (arg1: boolean) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  className,
  type,
  validate,
  onBlur,
  onChange,
  errorMessage,
  supportingText,
  disabled,
  getValue,
  getError,
  hasError,
  autoComplete,
  minChar,
  maxChar,
  noNumeric,
  noSpecialChar,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [err, setErr] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);
  const [showEmailError, setShowEmailError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setErrorMsg(errorMessage ? errorMessage : "This is required field!");
    setErr(hasError);
  }, [hasError, errorMessage]);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (validate && (e.target.value === "" || !e.target.value)) {
      setErr(true);
      setFocus(false);
      setErrorMsg("This field is required!");
    } else if (validate && type === "email" && !validateEmail(e.target.value)) {
      setErr(true);
      setShowEmailError(true);
      setFocus(false);
      setErrorMsg("Please Provide the correct email!");
    } else if (validate && e.target.value.trim().length < minChar) {
      setErr(true);
      setErrorMsg(`Please enter minimum ${minChar} character!`);
    } else if (validate && e.target.value.trim().length > maxChar) {
      setErr(true);
      setErrorMsg(`Please enter minimum ${maxChar} character!`);
    } else if (validate && noNumeric && e.target.value.trim().match(/\d/)) {
      setErr(true);
      setErrorMsg(`Numbers are not allowed`);
    } else if (
      validate &&
      noSpecialChar &&
      e.target.value.trim().match(/[^a-zA-Z0-9]/)
    ) {
      setErr(true);
      setErrorMsg(`Special characters are not allowed!`);
    } else if (
      validate &&
      type === "email" &&
      e.target.value.trim().length < minChar
    ) {
      setErr(true);
      setErrorMsg(`Please enter minimum ${minChar} character!`);
    } else if (
      validate &&
      type === "email" &&
      e.target.value.trim().length > maxChar
    ) {
      setErr(true);
      setErrorMsg(`Please enter minimum ${maxChar} character!`);
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
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Check if noNumeric prop is true and input contains numeric characters
    if (noNumeric && /\d/.test(inputValue)) {
      return;
    }

    // Check if noSpecialChar prop is true and input contains special characters
    if (noSpecialChar && /[^a-zA-Z0-9]/.test(inputValue)) {
      return;
    }

    getValue(inputValue);

    if (onChange) {
      onChange(e);
    }

    if (validate && type === "text") {
      if (inputValue.length < 0) {
        getError(false);
      } else if (inputValue.trim().length < minChar) {
        getError(false);
      } else if (inputValue.trim().length > maxChar) {
        getError(false);
      } else if (
        validate &&
        type === "text" &&
        noNumeric &&
        inputValue.trim().match(/\d/)
      ) {
        getError(false);
      } else if (
        validate &&
        type === "text" &&
        noSpecialChar &&
        e.target.value.trim().match(/[^a-zA-Z0-9]/)
      ) {
        getError(false);
      } else {
        setValid(false);
        setErr(false);
        getError(true);
      }
    } else if (validate && type === "email") {
      if (inputValue && validateEmail(inputValue)) {
        setValid(true);
        setErr(false);
        getError(true);
        setShowEmailError(false);
      } else if (
        validate &&
        type === "email" &&
        inputValue.trim().length < minChar
      ) {
        setValid(true);
        setErr(false);
        getError(false);
        setShowEmailError(false);
      } else if (
        validate &&
        type === "email" &&
        inputValue.trim().length > maxChar
      ) {
        setValid(true);
        setErr(false);
        getError(false);
        setShowEmailError(false);
      } else {
        setValid(false);
        setErr(false);
        setShowEmailError(false);
        getError(false);
      }
    } else if (err || valid) {
      setErr(false);
      setValid(false);
    }
  };

  return (
    <div className="flex flex-col text-[14px] relative">
      {label && (
        <span className="flex">
          <label
            className={`${
              err
                ? "text-defaultRed"
                : focus
                ? "text-primary"
                : "text-slatyGrey"
            }`}
          >
            {label}
          </label>
          {validate && (
            <span
              className={`${disabled ? "text-slatyGrey" : "text-defaultRed"}`}
            >
              &nbsp;*
            </span>
          )}
        </span>
      )}

      <div
        className={`${
          !err &&
          !disabled &&
          "animated-input relative inline-block before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full"
        }`}
      >
        <input
          className={`
          ${className}
          py-1 border-b outline-none transition duration-600 w-full font-normal text-[14px]
          ${type === "email" ? "pr-10" : ""}
          ${
            err
              ? "border-b-defaultRed"
              : focus
              ? "border-b-primary"
              : "border-b-lightSilver"
          }
          ${
            valid && !err
              ? "text-successColor"
              : showEmailError
              ? "text-defaultRed"
              : "text-[#333333]"
          }
        `}
          ref={inputRef}
          type={type}
          onBlur={handleBlur}
          onChange={handleInputChange}
          onFocus={handleFocus}
          disabled={disabled}
          autoComplete={autoComplete}
          {...props}
        />
      </div>

      {valid && !err && (
        <span className="text-primary bg-white text-[20px] absolute right-0 top-0 mt-6 mr-3">
          <CheckIcon />
        </span>
      )}

      {err && (
        <span className="text-defaultRed text-[12px] sm:text-[14px]">
          {errorMessage ? errorMessage : errorMsg}
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
