import React, { useRef, useEffect, useState } from "react";
import { BiChevronDown, BiUserCircle } from "react-icons/bi";
import classNames from "classnames";
import PropTypes from "prop-types";
// import "./style.css"

interface MultiSelectProps {
  id: string;
  options: { value: string; label: string }[];
  onSelect: (selectedValues: string[]) => void;
  label?: string;
  type?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  id,
  options,
  onSelect,
  label,
  type,
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
      updatedValues.splice(index, 1); // Remove the value if already selected
    } else {
      updatedValues.push(value); // Add the value if not selected
    }

    setSelectedValues(updatedValues);
    setInputValue("");

    console.log(updatedValues);
    onSelect(updatedValues); // Calling the onSelect callback prop
  };

  return (
    <div
      className="relative font-medium w-full flex-row border-b border-gray-300 hover:border-CSgreen transition-colors duration-300"
      ref={selectRef}
    >
      <label
        className={classNames(
          "text-[14px] font-normal font-proxima text-CSSecondaryGray",
          open && "text-CSgreen"
        )}
        htmlFor={id}
      >
        {label ? label : "label"}*
      </label>

      <div className="flex flex-row items-center justify-center relative mt-0.5">
        <input
          id={id}
          onClick={handleToggleOpen}
          onChange={handleInputChange}
          readOnly={!open}
          placeholder={
            selectedValues.length > 0
              ? `${selectedValues.length} selected`
              : "Please Select..."
          }
          value={
            inputValue.length > 25
              ? inputValue.substring(0, 20) + "..."
              : inputValue
          }
          style={{ width: "191px" }}
          className={classNames(
            "flex-grow bg-white outline-none text-CSDarkGray p-2 text-[16px] font-normal font-proxima",
            !inputValue && "text-CSDarkGray",
            open && "text-CSgreen",
            !open ? "cursor-pointer" : "cursor-default",
            !open ? "placeholder-CSDarkGray" : "placeholder-CSgreen"
          )}
        />

        <BiChevronDown
          size={24}
          color="#333333"
          onClick={handleToggleOpen}
          className={classNames({ "rotate-180": open }, "cursor-pointer")}
        />
      </div>

      <ul
        className={classNames(
          "absolute z-10 w-full bg-CSDropDownBG mt-[1px] overflow-y-auto shadow-md transition-transform",
          open
            ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500"
            : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500",
          {
            "ease-out": open,
          }
        )}
      >
        {options &&
          options.map((option) => (
            <li
              key={option.value}
              className={classNames(
                "p-[10px] text-[16px] hover:bg-CSListHover font-normal font-proxima cursor-pointer flex",
                {
                  "bg-CSListHover": selectedValues.includes(option.value),
                  hidden: !option.label.toLowerCase().startsWith(inputValue),
                }
              )}
              onClick={() => {
                if (option.value !== inputValue) {
                  handleSelect(option.value);
                }
              }}
            >
              {type === "icons" && (
                <span className="mr-2 flex-shrink-0 items-center">
                  <BiUserCircle size={20} color="#333333" />
                </span>
              )}
              {type === "checkbox" && (
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedValues.includes(option.value)}
                  readOnly
                />
              )}
              {option.label}
            </li>
          ))}
      </ul>
    </div>
  );
};

export { MultiSelect };

MultiSelect.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
};
