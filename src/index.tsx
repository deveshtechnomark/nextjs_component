import React, { useRef, useState } from "react";
import "./index.css";
import { Typography } from "Typography";
import "Typography/dist/index.css";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
  required?: boolean;
  validate?: boolean;
  errorMessage?: string;
  supportingText?: string;
  disabled?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  className,
  id,
  name,
  value,
  rows = "1",
  required,
  validate,
  onBlur,
  onChange,
  supportingText,
  disabled,
  errorMessage = "This is a required field!",
  ...props
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [err, setErr] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  const validateInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.trim() === "") {
      setErr(true);
    } else {
      setErr(false);
      setFocus(false);
    }
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e);
    }
    if (err) {
      setErr(false);
    }
  };

  const parsedRows = rows as number;

  return (
    <div className="flex flex-col w-full text-sm sm:text-base">
      {label && (
        <Typography
          type="label"
          className={`${
            err
              ? "text-defaultRed w-full"
              : focus
              ? "text-primary w-full"
              : "text-slatyGrey w-full"
          }`}
        >
          {label}

          {required && "*"}
        </Typography>
      )}

      <div
        className={`${
          !err
            ? "flex w-full relative before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full"
            : "w-full"
        }`}
      >
        <textarea
          className={`${className} py-1 px-3 border-b outline-none transition duration-600 w-full h-full ${
            err
              ? "border-b-defaultRed"
              : focus
              ? "border-b-primary"
              : "border-b-slatyGrey"
          }`}
          ref={textAreaRef}
          rows={parsedRows}
          id={id}
          name={name}
          value={value}
          onBlur={onBlur ? onBlur : validate ? validateInput : undefined}
          onChange={handleInputChange}
          onFocus={handleFocus}
          {...props}
        />
      </div>
      {!err && supportingText && (
        <Typography type="h6">
          <span className="text-slatyGrey">{supportingText}</span>
        </Typography>
      )}
      {err && (
        <Typography type="h6">
          <span className="text-defaultRed">{errorMessage}</span>
        </Typography>
      )}
    </div>
  );
};

export { Textarea };
