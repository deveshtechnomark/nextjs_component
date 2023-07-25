import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

// Icon Components
import CrossIcon from "./icons/CrossIcon.js";
import ChevronDown from "./icons/ChevronDown.js";
import UserIcon from "./icons/UserIcon.js";

import  CheckBox  from "../Checkbox/Checkbox";

interface MultiSelectChipProps {
  options: { value: string; label: string }[];
  defaultValue?: string[];
  onSelect: (selected: string[]) => void;
  id?: string;
  label?: string;
  type?: string;
  className?: string;
  required?: boolean;
}

const MultiSelectChip: React.FC<MultiSelectChipProps> = ({
  options,
  defaultValue,
  onSelect,
  label,
  type,
  id,
  className,
  required = false,
}) => {
  const [selected, setSelected] = useState<string[]>(defaultValue || []);
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

  const handleSelect = (value: string) => {
    const selectedIndex = selected.indexOf(value);
    let updatedSelected: string[];

    if (selectedIndex === -1) {
      // Value is not selected, add it to the selection
      updatedSelected = [...selected, value];
    } else {
      // Value is already selected, remove it from the selection
      updatedSelected = [
        ...selected.slice(0, selectedIndex),
        ...selected.slice(selectedIndex + 1),
      ];
    }

    setSelected(updatedSelected);
    onSelect(updatedSelected);
  };

  const handleClearAll = () => {
    setSelected([]);
    onSelect([]);
  };

  const handleToggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  const selectedDisplay =
    selected.length > 0 ? (
      <div className="flex flex-wrap items-center">
        {selected.slice(0, 2).map((option) => (
          <div
            key={option}
            className={classNames(
              "flex items-center badge bg-[#E9ECEF] text-[#212529] border border-[#CED4DA] rounded-sm px-1 mr-[5px] mb-2 text-[14px] ",
              option.length > 8 && "max-w-[100px]"
            )}
          >
            <span title={option}>
              {option.length > 8 ? option.substring(0, 8) + "..." : option}
            </span>
            <div
              onClick={() => handleSelect(option)}
              className="ml-1 cursor-pointer"
            >
              <CrossIcon />
            </div>
          </div>
        ))}
        {selected.length > 2 && (
          <div className="flex items-center badge bg-[#E9ECEF] text-darkCharcoal border border-[#CED4DA] rounded-sm px-1 mr-[5px] mb-2 text-[14px] ">
            +{selected.length - 2}
          </div>
        )}
      </div>
    ) : (
      <div
        className={classNames("text-darkCharcoal", {
          "text-primary": open,
        })}
      >
        Please Select...
      </div>
    );

  return (
    <div className="relative w-full font-medium flex-row" ref={selectRef}>
      {label && (
        <label
          onClick={handleToggleOpen}
          className={classNames(
            "text-[14px] font-normal ",
            open ? "text-primary" : selected.length > 0 ? "text-primary" : "text-slatyGrey"
          )}
        >
          {label}
          {required && "*"}
        </label>
      )}
      <div
        onClick={handleToggleOpen}
        className={`${classNames(
          "flex justify-between bg-white border-b py-1 pl-2 text-[14px] font-normal  transition-colors duration-300",
          open ? "text-primary cursor-default" : selected.length === 0 && "text-darkCharcoal cursor-pointer",
          selected.length > 0 ? "border-primary" : "border-lightSilver",
          "hover:border-primary"
        )} ${className}`}
      >
        {selectedDisplay}

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
          { "ease-out": open }
        )}
        // Setting the width inline style based on the client width of the parent div
        style={{ width: selectRef.current?.clientWidth }}
      >
        <li
          className={classNames(
            "pt-3 pl-3 text-[14px] font-normal text-primary cursor-pointer flex"
          )}
          onClick={handleClearAll}
        >
          Clear All
        </li>
        {options &&
          options.map((option, index) => (
            <li
              key={index}
              className={classNames(
                "p-3 text-[14px] hover:bg-whiteSmoke font-normal cursor-pointer flex",
                { "bg-whiteSmoke": selected.includes(option.value) }
              )}
              onClick={
                type !== "checkbox"
                  ? () => handleSelect(option.value)
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
                  checked={selected.includes(option.value)}
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

export { MultiSelectChip };