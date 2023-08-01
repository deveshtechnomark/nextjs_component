import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

// Icon Components
import ChevronDown from "./icons/ChevronDown.js";
// Library Components
import { Avatar } from "../Avatar/Avatar.js";
 
interface Option {
  value: string;
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
  avatar?: boolean;
  avatarName?: string;
  avatarImgUrl?: string;
  errorMessage?: string;
  hasError?: boolean;
  getValue: (value: string) => void;
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
      getValue(inputValue);
      setInputValue(inputValue);
    }
  };

  const handleSelect = (value: string) => {
    setInputValue(value);
    setOpen(false);

    if (value.trim() === "") {
      setError(true);
      getError(false);
      setErrMsg("Please select a valid option.");
    } else {
      setError(false);
      setErrMsg("");
      getValue(value);
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
        className={classNames(
          `relative font-medium w-full flex-row border-b ${
            inputValue ? "border-primary" : "border-lightSilver"
          } hover:border-primary transition-colors duration-300 ${className}`,
          {
            "border-defaultRed": error,
          }
        )}
        ref={selectRef}
      >
        {label && (
          <label
            className={classNames(
              "text-[14px] font-normal font-proxima",
              open
                ? "text-primary"
                : inputValue
                ? "text-primary"
                : "text-slatyGrey"
            )}
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
              inputValue.length > 25
                ? inputValue.substring(0, 20) + "..."
                : inputValue
            }
            autoComplete="off"
            className={classNames(
              "flex-grow outline-none bg-white text-darkCharcoal text-[14px] font-normal font-proxima w-full",
              open && "text-primary",
              !open ? "cursor-pointer" : "cursor-default",
              !open ? "placeholder-darkCharcoal" : "placeholder-primary"
            )}
          />

          <div
            onClick={handleToggleOpen}
            className={classNames(
              "text-[1.5rem] text-darkCharcoal cursor-pointer",
              {
                "rotate-180": open,
              }
            )}
          >
            <ChevronDown />
          </div>
        </div>

        <ul
          className={classNames(
            "absolute z-10 bg-pureWhite mt-[1px] overflow-y-auto shadow-md transition-transform w-full",
            open
              ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500"
              : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500",

            {
              "ease-out": open,
            }
          )}
          // Setting the width inline style based on the client width of the parent div
          style={{ width: selectRef.current?.clientWidth }}
        >
          {options &&
            options.map((option, index) => (
              <li
                key={index}
                className={classNames(
                  "p-[10px] text-[14px] font-proxima hover:bg-whiteSmoke font-normal cursor-pointer flex items-center",
                  {
                    "bg-whiteSmoke": option.value === inputValue,
                    hidden:
                      search &&
                      !option.label.toLowerCase().startsWith(inputValue),
                  }
                )}
                onClick={() => {
                  if (option.value !== inputValue) {
                    handleSelect(option.value);
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
        <span className={`text-defaultRed text-[12px] sm:text-[14px] ${errorClass}`}>
          {errMsg}
        </span>
      )}
    </>
  );
};

export { Select };