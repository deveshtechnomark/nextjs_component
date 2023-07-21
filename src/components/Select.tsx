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
  required?: boolean;
  defaultValue?: string;
}

const Select: React.FC<SelectProps> = ({
  id,
  options,
  onSelect,
  type,
  label,
  className,
  search = false,
  required = false,
  defaultValue,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

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
    setInputValue(inputValue);
  };

  const handleSelect = (value: string) => {
    setInputValue(value);
    setOpen(false);
    onSelect(value);
  };

  return (
    <>
      <div
        className={classNames(
          `relative font-medium w-full flex-row border-b ${inputValue ? "border-primary" : "border-lightSilver"} hover:border-primary transition-colors duration-300 ${className}`,
          )}
          ref={selectRef}
          >
        {label && (
          <label
            className={classNames(
              "text-[14px] font-normal font-proxima",
              open ? "text-primary" : inputValue ? "text-primary" : "text-slatyGrey",
              
            )}
            htmlFor={id}
          >
            {label}
            {required && "*"}
          </label>
        )}

        <div className="flex flex-row items-center relative w-full">
          <input
            id={id}
            onClick={handleToggleOpen}
            onChange={handleInputChange}
            readOnly={!search}
            placeholder={defaultValue || "Please select"}
            value={
              inputValue.length > 25
                ? inputValue.substring(0, 20) + "..."
                : inputValue
            }
            className={classNames(
              "flex-grow outline-none bg-white text-darkCharcoal px-2 text-[14px] font-normal font-proxima w-full",
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
            options.map((option, index) => (
              <li
                key={index}
                className={classNames(
                  "p-[10px] text-[14px] font-proxima hover:bg-whiteSmoke font-normal cursor-pointer flex",
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
