import React, { useRef, useState } from "react";
import ClearIcon from "./icons/ClearIcon";
import CheckIcon from "./icons/CheckIcon";

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
  const [showEmailError, setShowEmailError] = useState<boolean>(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (validate && required && (e.target.value === "" || !e.target.value)) {
      setErr(true);
    } else if (validate && type === "email" && !validateEmail(e.target.value)) {
      setErr(true);
      setShowEmailError(true);
    } else {
      setErr(false);
      setShowEmailError(false);
    }
    setFocus(false);
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

  const inputClassName = `
  ${className}
  py-1 px-3 border-b outline-none transition duration-600 w-full
  ${err ? "border-b-defaultRed" : focus ? "border-b-primary" : "border-b-slatyGrey"}
  ${valid && "text-successColor font-normal text-[14px] font-proxima"}
  ${showEmailError && "text-defaultRed"}
`;

  const labelClassName = `
  ${err ? "text-defaultRed" : focus ? "text-primary" : "text-slatyGrey"}
`;


  return (
    <div className="flex flex-col text-[14px] laptop:text-base relative font-proxima">
      {label && (
        <label className={labelClassName}>
          {label}
          {required && "*"}
        </label>
      )}
      <div
        className={`${!err &&
          "animated-input relative inline-block before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full"
          }`}
      >
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
      </div>
      {err && (
        <span
          className="text-defaultRed absolute right-0 top-0 mt-5 mr-3 cursor-pointer"
          
        >
          <div className="text-[20px]" onClick={handleClear}>
            <ClearIcon />
          </div>

        </span>
      )}
      {valid && (
        <span className="text-primary text-[20px] absolute right-0 top-0 mt-5 mr-3">
          <CheckIcon />
        </span>
      )}
      {err && <span className="text-defaultRed">{errorMessage}</span>}
      {!err && supportingText && (
        <span className="text-slatyGrey">{supportingText}</span>
      )}
    </div>
  );
};

export { TextField };
