import React, { useEffect, useRef, useState } from "react";
import data from "./data";
import "./index.css"
import { Select } from "select-dropdown";
import "select-dropdown/dist/index.css"

interface TelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  validate?: boolean;
  errorMessage?: string;
  supportingText?: string;
  disabled?: boolean;
  countryCode?: boolean;
  getValue: (arg1: string) => void;
  hasError?: boolean;
}

const Tel: React.FC<TelInputProps> = ({
  label,
  className,
  id,
  name,
  validate,
  onBlur,
  onChange,
  supportingText,
  disabled,
  getValue,
  countryCode = false,
  errorMessage,
  hasError,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [err, setErr] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setErrorMsg(errorMessage);
    setErr(hasError);
  }, [hasError, errorMessage]);

  const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setErr(true);
    } else if (e.target.value.length < 12) {
      setErr(true);
      setErrorMsg("Please Enter valid 10 digits Phone Number.");
    } else {
      setErr(false);
    }
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value || "";
    inputValue = inputValue.replace(/\s/g, "");
    inputValue = inputValue.replace(/[^\d]/g, "");
    inputValue = inputValue.slice(0, 10);

    let formattedValue = "";
    for (let i = 0; i < inputValue.length; i++) {
      if (i === 4 || i === 7) {
        formattedValue += " ";
      }
      formattedValue += inputValue[i];
    }
    setValue(formattedValue);
    if (err) {
      setErr(false);
    }
    getValue(selectedCountryCode + " " + formattedValue);
  };

  return (
    <div className="flex flex-col w-full text-sm sm:text-base relative">
      {label && (
        <label
          className={`${
            err ? "text-defaultRed" : focus ? "text-primary" : "text-slatyGrey"
          }`}
        >
          {label}
          {validate && "*"}
        </label>
      )}
      <div
        className={`flex ${
          !err
            ? "w-full relative before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full"
            : "w-full"
        }`}
      >
        <div
          className={`flex border-b outline-none transition duration-600 w-full h-full ${
            err
              ? "border-b-defaultRed"
              : focus
              ? "border-b-primary"
              : "border-b-lightSilver"
          }`}
        >
          {countryCode && (
            <div className="w-[100px]">
              <Select
                className="!border-none"
                options={data}
                id="basic"
                onSelect={(value: any) => {
                  setSelectedCountryCode(value);
                }}
                defaultValue="+91"
              />
            </div>
          )}
          <input
            className={`${className} py-2 px-3 outline-none w-full h-full mt-[6px]`}
            ref={inputRef}
            type="tel"
            id={id}
            name={name}
            value={value}
            onBlur={onBlur ? onBlur : validate ? validateInput : undefined}
            onChange={handleInputChange}
            onFocus={handleFocus}
            disabled={disabled}
            placeholder="9874 563 214"
            {...props}
          />
        </div>
      </div>
      {!err && supportingText && (
        <span className="text-slatyGrey text-[12px] sm:text-[14px]">{supportingText}</span>
      )}
      {err && <span className="text-defaultRed text-[12px] sm:text-[14px]">{errorMsg}</span>}
    </div>
  );
};

export { Tel };
