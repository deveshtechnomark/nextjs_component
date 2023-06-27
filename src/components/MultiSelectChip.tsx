import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown, BiX, BiUserCircle } from "react-icons/bi";
import classNames from "classnames";

interface MultiSelectChipProps {
  options: { value: string; label: string }[];
  defaultValue?: string[];
  onSelect: (selected: string[]) => void;
  id?: string;
  label?: string;
  type?: string;
}

const MultiSelectChip: React.FC<MultiSelectChipProps> = ({
  options,
  defaultValue,
  onSelect,
  label,
  type,
  id,
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
              "flex items-center badge bg-CSChipBG text-CSGrayChip border border-CSChipBorder rounded-sm px-1 mr-[5px] mb-2 text-[14px] font-proxima",
              option.length > 8 && "max-w-[100px]"
            )}
          >
            <span title={option}>
              {option.length > 8 ? option.substring(0, 8) + "..." : option}
            </span>
            <BiX
              size={12}
              className="ml-1 cursor-pointer"
              onClick={() => handleSelect(option)}
            />
          </div>
        ))}
        {selected.length > 2 && (
          <div className="flex items-center badge bg-CSChipBG text-CSDarkGray border border-CSChipBorder rounded-sm px-1 mr-[5px] mb-2 text-[14px] font-proxima">
            +{selected.length - 2}
          </div>
        )}
      </div>
    ) : (
      <div
        className={classNames("text-CSDarkGray pb-2 font-proxima", {
          "text-CSgreen": open,
        })}
      >
        Please Select...
      </div>
    );

  return (
    <div className="relative w-full font-medium flex-row" ref={selectRef}>
      <label
        onClick={handleToggleOpen}
        className={classNames(
          "text-[14px] font-normal font-proxima text-CSSecondaryGray",
          { "text-CSgreen": open }
        )}
      >
        {label ? label : "label"}*
      </label>
      <div
        onClick={handleToggleOpen}
        className={classNames(
          "flex justify-between bg-white border-b border-gray-300 text-CSDarkGray pt-2 pl-2 text-[16px] font-normal font-proxima transition-colors duration-300",
          { "text-CSDarkGray": selected.length === 0 },
          { "text-CSgreen": open },
          !open ? "cursor-pointer" : "cursor-default",
          "hover:border-CSgreen"
        )}
      >
        {selectedDisplay}
        <BiChevronDown
          size={24}
          color="black"
          className={classNames({
            "rotate-180": open,
          })}
        />
      </div>

      <ul
        className={classNames(
          "absolute z-10 w-full bg-CSDropDownBG mt-[1px] overflow-y-auto shadow-md transition-transform",
          open
            ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500"
            : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500",
          { "ease-out": open }
        )}
      >
        <li
          className={classNames(
            "pt-3 pl-3 text-[16px] font-normal font-proxima text-CSgreen cursor-pointer flex"
          )}
          onClick={handleClearAll}
        >
          Clear All
        </li>
        {options &&
          options.map((option) => (
            <li
              key={option.value}
              className={classNames(
                "p-3 text-[16px] hover:bg-CSListHover font-normal font-proxima cursor-pointer flex",
                { "bg-CSListHover": selected.includes(option.value) }
              )}
              onClick={() => handleSelect(option.value)}
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
                  checked={selected.includes(option.value)}
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

export { MultiSelectChip };
