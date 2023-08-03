import React, { useEffect, useRef, useState } from "react";

// Icon Components
import ChevronDown from "./icons/ChevronDown.js";
// Library Components
import { Avatar } from "../Avatar/Avatar.js";

interface Option {
  value: any;
  label: string;
}

interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  options: Option[];
  type?: string;
  label?: string;
  className?: string;
  search?: boolean;
  validate?: boolean;
  defaultValue?: string;
  value?: any;
  avatar?: boolean;
  avatarName?: string;
  avatarImgUrl?: string;
  errorMessage?: string;
  hasError?: boolean;
  getValue: (value: any, label?: any) => void;
  getError: (arg1: boolean) => void;
  supportingText?: string;
  errorClass?: string;
}

const Select: React.FC<SelectProps> = ({
  id,
  options,
  getValue,
  type,
  label,
  className,
  search = false,
  validate,
  defaultValue,
  value,
  avatar,
  avatarName,
  avatarImgUrl,
  errorMessage = "This is a required field.",
  supportingText,
  hasError,
  getError,
  errorClass,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  {
    validate &&
      useEffect(() => {
        setErrMsg(errorMessage);
        setError(hasError);
        hasError && getError(false);
      }, [errorMessage, hasError]);
  }

  // {
  //   value !== -1 && options
  //     ? useEffect(() => {
  //         options.map((option, index) => {
  //           // if (option.value === value) {
  //           //   setInputValue(option.label);
  //           console.log("option", value, option.label, option.value);
  //           // }
  //         });
  //       }, [])
  //     : "";
  // }

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  const handleToggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();
    if (validate && inputValue.trim() === "") {
      setError(true);
      setErrMsg("Please select a valid option.");
    } else {
      setError(false);
      setErrMsg("");
      setInputValue(inputValue);
    }
  };

  const handleSelect = (label: string, value: any) => {
    setInputValue(label);
    setOpen(false);

    if (label.trim() === "") {
      setError(true);
      getError(false);
      setErrMsg("Please select a valid option.");
    } else {
      setError(false);
      setErrMsg("");
      getValue(value, label);
      getError(true);
    }
  };

  const handleBlur = () => {
    if (validate) {
      if (inputValue.trim() === "") {
        setError(true);
        setErrMsg("Please select a valid option.");
        getError(false);
      } else {
        setError(false);
        setErrMsg("");
        getError(true);
      }
    }
  };

  return (
    <>
      <div
        className={`relative font-medium w-full flex-row border-b ${
          inputValue
            ? "border-primary"
            : error
            ? "border-defaultRed"
            : "border-lightSilver hover:border-primary transition-colors duration-300"
        } ${className}`}
        ref={selectRef}
      >
        {label && (
          <label
            className={`text-[14px] font-normal ${
              open
                ? "text-primary"
                : inputValue
                ? "text-primary"
                : error
                ? "text-defaultRed"
                : "text-slatyGrey"
            }`}
            htmlFor={id}
          >
            {label}
            {validate && <span className="text-defaultRed">&nbsp;*</span>}
          </label>
        )}

        <div className="flex flex-row items-center relative w-full mb-0">
          <input
            id={id}
            onBlur={handleBlur}
            onClick={handleToggleOpen}
            onChange={handleInputChange}
            readOnly={!search}
            placeholder={defaultValue || "Please select"}
            value={
              value
                ? value
                : inputValue.length > 25
                ? inputValue.substring(0, 20) + "..."
                : inputValue
            }
            autoComplete="off"
            className={`flex-grow outline-none bg-white text-darkCharcoal text-[14px] font-normal w-full ${
              open ? "text-primary" : ""
            } ${!open ? "cursor-pointer" : "cursor-default"} ${
              !open ? "placeholder-darkCharcoal" : "placeholder-primary"
            }`}
          />

          <div
            onClick={handleToggleOpen}
            className={`text-[1.5rem] text-darkCharcoal cursor-pointer ${
              open ? "rotate-180" : ""
            }`}
          >
            <ChevronDown />
          </div>
        </div>

        <ul
          className={`absolute z-10 bg-pureWhite mt-[1px] overflow-y-auto shadow-md transition-transform w-full ${
            open
              ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500"
              : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500"
          } ${open ? "ease-out" : ""}`}
          style={{ width: selectRef.current?.clientWidth }}
        >
          {options.length > 0 &&
            options.map((option, index) => (
              <li
                key={index}
                className={`p-[10px] text-[14px] hover:bg-whiteSmoke font-normal cursor-pointer flex items-center ${
                  option.value === inputValue ? "bg-whiteSmoke" : ""
                } ${
                  search && !option.label.toLowerCase().startsWith(inputValue)
                    ? "hidden"
                    : ""
                }`}
                onClick={() => {
                  if (option.label !== inputValue) {
                    handleSelect(option.label, option.value);
                  }
                }}
              >
                {avatar && (
                  <div className="mr-2 flex-shrink-0 items-center text-[1.5rem] text-darkCharcoal">
                    <Avatar
                      variant="x-small"
                      name={avatarName}
                      imageUrl={avatarImgUrl}
                    />
                  </div>
                )}

                {option.label}
              </li>
            ))}
        </ul>
      </div>
      {!error && supportingText && (
        <span className="text-slatyGrey text-[12px] sm:text-[14px] -mt-[20px]">
          {supportingText}
        </span>
      )}
      {error && (
        <span
          className={`text-defaultRed text-[12px] sm:text-[14px] ${errorClass}`}
        >
          {errMsg}
        </span>
      )}
    </>
  );
};

export { Select };