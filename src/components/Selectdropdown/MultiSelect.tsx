import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames";

// Icons Componnents
import ChevronDown from "./icons/ChevronDown.js";
import UserIcon from "./icons/UserIcon.js";

import  CheckBox  from "../Checkbox/Checkbox"

interface MultiSelectProps {
  id: string;
  options: { value: string; label: string }[];
  onSelect: (selectedValues: string[]) => void;
  label?: string;
  type?: string;
  className?: string;
  required?: boolean;
  defaultValue?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  id,
  options,
  onSelect,
  label,
  type,
  className,
  required = false,
  defaultValue,
}) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleToggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();
    setInputValue(inputValue);
  };

  const handleSelect = (value: string) => {
    const updatedValues = [...selectedValues];
    const index = updatedValues.indexOf(value);

    if (index > -1) {
      updatedValues.splice(index, 1);
    } else {
      updatedValues.push(value);
    }

    setSelectedValues(updatedValues);
    setInputValue("");

    console.log(updatedValues);
    onSelect(updatedValues);
  };

  return (
    <div
      className={`relative font-medium w-full flex-row border-b  hover:border-primary transition-colors duration-300 ${selectedValues.length > 0 ? "border-primary" : "border-lightSilver"} ${className}`}
      ref={selectRef}
    >
      <label
        className={classNames(
          "text-[14px] font-normal",
          open ? "text-primary" : selectedValues.length > 0 ? "text-primary" : "text-slatyGrey",
        )}
        htmlFor={id}
      >
        {label ? label : "label"}
        {required && <span className="text-defaultRed">&nbsp;*</span>}
      </label>

      <div className="flex flex-row items-center justify-center relative">
        <input
          id={id}
          onClick={handleToggleOpen}
          onChange={handleInputChange}
          readOnly={!open}
          placeholder={
            selectedValues.length > 0
              ? `${selectedValues.length} selected`
              : (defaultValue || "Please select")
          }
          value={
            inputValue.length > 25
              ? inputValue.substring(0, 20) + "..."
              : inputValue
          }
          style={{ width: "191px" }}
          className={classNames(
            "flex-grow bg-white outline-none text-darkCharcoal text-[14px] font-normal",
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
          "absolute z-10 w-full bg-pureWhite mt-[1px] overflow-y-auto shadow-md transition-transform",
          open
            ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500"
            : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500",
          {
            "ease-out": open,
          }
        )}
      >
        {options &&
          options.map((option, index) => (
            <li
              key={index}
              className={classNames(
                "p-[10px] text-[14px] hover:bg-whiteSmoke font-normal cursor-pointer flex",
                {
                  "bg-whiteSmoke": selectedValues.includes(option.value),
                  hidden: !option.label.toLowerCase().startsWith(inputValue),
                }
              )}
              onClick={
                type !== "checkbox"
                  ? () => {
                    if (option.value !== inputValue) {
                      handleSelect(option.value);
                    }
                  }
                  : undefined
              }
            >
              {type === "icons" && (
                <div className="mr-2 flex-shrink-0 items-center text-[1.5rem] text-darkCharcoal">
                  <UserIcon />
                </div>
              )}
              {type === "checkbox" && (
                <CheckBox
                  id={option.value}
                  label={option.label}
                  onChange={(e: any) => {
                    e.target.checked
                      ? handleSelect(option.value)
                      : handleSelect(option.value);
                  }}
                />
              )}
              {type !== "checkbox" && option.label}
            </li>
          ))}
      </ul>
    </div>
  );
};

export { MultiSelect };