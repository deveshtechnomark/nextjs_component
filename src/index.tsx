import React, { useRef, useState } from "react";
import "./index.css";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
  required?: boolean;
  validate?: boolean;
  errorMessage?: string;
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
      <textarea
        className={`${className} py-2 px-3 border-b-2 outline-none ${
          err
            ? "border-b-error"
            : focus
            ? "border-b-success"
            : "hover:border-b-success"
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
      {err && <span className="text-error">{errorMessage}</span>}
    </div>
  );
};

export { Textarea };
