import React, { useEffect, useRef, useState } from "react";
import "./index.css";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
  validate?: boolean;
  errorMessage?: string;
  supportingText?: string;
  disabled?: boolean;
  getValue: (arg1: string) => void;
  hasError?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  className,
  id,
  name,
  value,
  rows = "1",
  validate,
  onBlur,
  onChange,
  supportingText,
  disabled,
  getValue,
  hasError,
  errorMessage = "This is a required field!",
  ...props
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [err, setErr] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  useEffect(() => {
    setErr(hasError);
  }, [hasError, errorMessage]);

  const validateInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.trim() === "") {
      setErr(true);
    } else {
      setErr(false);
    }
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const focusHandler = () => {
    setFocus(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    getValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
    if (err) {
      setErr(false);
    }
  };

  const parsedRows = rows as number;

  return (
    <div className="flex flex-col w-full text-[14px]">
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
          !err
            ? "flex w-full relative before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full"
            : "w-full"
        }`}
      >
        <textarea
          className={`${className} py-1 border-b outline-none transition duration-600 w-full h-full text-darkCharcoal ${
            err
              ? "border-b-defaultRed"
              : focus
              ? "border-b-primary"
              : "border-b-lightSilver"
          }`}
          ref={textAreaRef}
          rows={parsedRows}
          id={id}
          name={name}
          value={value}
          onBlur={onBlur ? onBlur : validate ? validateInput : focusHandler}
          onChange={handleInputChange}
          onFocus={handleFocus}
          {...props}
        />
      </div>
      {!err && supportingText && (
        <span className="text-slatyGrey text-[12px] sm:text-[14px]">
          {supportingText}
        </span>
      )}
      {err && (
        <span className="text-defaultRed text-[12px] sm:text-[14px]">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export { Textarea };
