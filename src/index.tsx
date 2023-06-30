import React, { useRef, useState } from "react";
import "./index.css";

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
    <div className="flex flex-col text-sm laptop:text-base">
      {label && (
        <label
          className={`${
            err ? "text-error" : focus ? "text-success" : "text-defaultColor"
          }`}
        >
          {label}
          {required && "*"}
        </label>
      )}
      <div
        className={`${
          !err &&
          "animated-input relative inline-block before:absolute before:bottom-[1.5px] before:left-0 before:block before:w-0 before:h-px before:bg-success before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full"
        }`}
      >
        <textarea
          className={`${className} py-1 px-3 border-b outline-none transition duration-600 w-full ${
            err
              ? "border-b-error"
              : focus
              ? "border-b-success"
              : "border-b-defaultColor"
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
        <span className="text-defaultColor">{supportingText}</span>
      )}
      {err && <span className="text-error">{errorMessage}</span>}
    </div>
  );
};

export { Textarea };
