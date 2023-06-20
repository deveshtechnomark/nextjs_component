import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown, BiUserCircle } from "react-icons/bi";
import classNames from "classnames";
import PropTypes from "prop-types";
// import "./style.css"

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
}

const Select: React.FC<SelectProps> = ({
  id,
  options,
  onSelect,
  type,
  label
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
    console.log(value);
    onSelect(value); // Calling the onSelect callback prop for fetching value
  };

  return (
    <>
      <div
        className={classNames(
          "relative font-medium w-full flex-row border-b border-gray-300 hover:border-CSgreen transition-colors duration-300"
        )}
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
            placeholder="Please Select..."
            value={
              inputValue.length > 25
                ? inputValue.substring(0, 20) + "..."
                : inputValue
            }
            style={{ width: "191px" }}
            className={classNames(
              "flex-grow outline-none bg-white text-CSDarkGray p-2 text-[16px] font-normal font-proxima",
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
              "ease-out": open
            }
          )}
        >
          {options &&
            options.map((option) => (
              <li
                key={option.value}
                className={classNames(
                  "p-[10px] text-[16px] font-proxima hover:bg-CSListHover font-normal cursor-pointer flex",
                  {
                    "bg-CSListHover": option.value === inputValue,
                    hidden: !option.label.toLowerCase().startsWith(inputValue)
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
                {option.label}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export { Select };

Select.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};
