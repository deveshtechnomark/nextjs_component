import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

// Icon Components
import ChevronDown from "./icons/ChevronDown.js";
import UserIcon from "./icons/UserIcon.js";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  options: Option[];
  onSelect: (value: string) => void;
  type?: string;
  label?: string;
  className?: string;
  search?: boolean;
  validate?: boolean;
}

const Select: React.FC<SelectProps> = ({
  id,
  options,
  onSelect,
  type,
  label,
  className,
  search = false,
  validate = false,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
      validateInput();
    }
  };

  const handleToggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
    // Clear the error state when opening the dropdown again
    setError(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();
    setInputValue(inputValue);
  };

  const handleSelect = (value: string) => {
    setInputValue(value);
    setOpen(false);
    console.log(value);
    onSelect(value);
    // Call the validation function on select
    validateInput();
  };

  const validateInput = () => {
    if (validate && !inputValue) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <>
      <div
        className={`${classNames(
          `font-medium w-full flex-row border-b ${
            error && !inputValue
              ? "border-defaultRed"
              : "border-lightSilver hover:border-primary transition-colors duration-300"
          }`
        )} ${className}`}
        ref={selectRef}
      >
        {label && (
          <label
            className={classNames(
              "text-[14px] font-normal font-proxima",
              open && "text-primary",
              error && !inputValue ? "text-defaultRed" : "text-slatyGrey"
            )}
            htmlFor={id}
          >
            {label}
            {validate && "*"}
          </label>
        )}

        <div className="flex flex-row items-center relative mt-0.5 w-full">
          <input
            id={id}
            onClick={handleToggleOpen}
            onChange={handleInputChange}
            readOnly={open && !search}
            placeholder="Please Select..."
            value={
              inputValue.length > 25
                ? inputValue.substring(0, 20) + "..."
                : inputValue
            }
            className={classNames(
              "flex-grow outline-none bg-white text-darkCharcoal p-2 text-[16px] font-normal font-proxima w-full",
              !inputValue && "text-darkCharcoal",
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

        {error && !inputValue && (
          <span className="absolute text-defaultRed text-[14px] font-proxima ml-1">
            Please select a value
          </span>
        )}

        <ul
          className={classNames(
            "absolute z-10 bg-pureWhite mt-[1px] overflow-y-auto shadow-md transition-transform",
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
            options.map((option) => (
              <li
                key={option.value}
                className={classNames(
                  "p-[10px] text-[16px] font-proxima hover:bg-whiteSmoke font-normal cursor-pointer flex",
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
                {type === "icons" && (
                  <div className="mr-2 flex-shrink-0 items-center text-[1.5rem] text-darkCharcoal">
                    <UserIcon />
                  </div>
                )}
                {option.label}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export { Select };
