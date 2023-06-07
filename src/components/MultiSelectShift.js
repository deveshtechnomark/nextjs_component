import React from "react";
import { BiChevronDown } from "react-icons/bi";
import classNames from "classnames";
import "../styles/styles.css";

class MultiSelectShift extends React.Component {
  constructor(props) {
    super(props);
    const { defaultValue } = props;
    this.state = {
      selected: defaultValue || [],
      open: false,
      lastSelectedIndex: -1, // Track the last selected index when using Shift key
    };
  }

  handleSelect = (value, index, shiftKey) => {
    const { selected, lastSelectedIndex } = this.state;
    const selectedIndex = selected.indexOf(value);
    let updatedSelected = [];

    if (shiftKey) {
      // If Shift key is pressed, select a range of options
      const start = Math.min(index, lastSelectedIndex);
      const end = Math.max(index, lastSelectedIndex);
      const { options } = this.props; // Access options from props
      updatedSelected = options
        .slice(start, end + 1)
        .map((option) => option.value);
    } else if (selectedIndex === -1) {
      // Value is not selected, add it to the selection
      updatedSelected = [...selected, value];
    } else {
      // Value is already selected, remove it from the selection
      updatedSelected = [
        ...selected.slice(0, selectedIndex),
        ...selected.slice(selectedIndex + 1),
      ];
    }

    this.setState({
      selected: updatedSelected,
      lastSelectedIndex: index, // Update the last selected index
    });
  };

  handleToggleOpen = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  render() {
    const { options, label } = this.props;
    const { selected, open } = this.state;

    const selectedDisplay =
      selected.length > 0 ? (
        selected.length > 2 ? (
          <>
            {selected.slice(0, 2).join(", ")}
            <span className="ml-2">+{selected.length - 2}</span>
          </>
        ) : (
          selected.join(", ")
        )
      ) : (
        "Select.."
      );

    return (
      <div className="w-full md:w-72 font-medium flex-row">
        <label
          className={classNames(
            "text-sm font-normal text-gray-700",
            open && "text-green-700"
          )}
          htmlFor="select"
        >
          {label}
        </label>
        <div
          onClick={this.handleToggleOpen}
          id="select"
          className={classNames(
            "flex justify-between bg-white border-b border-gray-300 text-gray-800 p-2 text-base font-normal transition-colors duration-300",
            selected.length === 0 && "text-gray-800",
            open && "text-green-700",
            !open ? "cursor-pointer" : "cursor-default",
            "hover:border-green-700"
          )}
        >
          {selectedDisplay}
          <BiChevronDown
            size={20}
            color="black"
            className={classNames({
              "rotate-180": open,
            })}
          />
        </div>

        <ul
          className={classNames(
            "bg-white mt-2 overflow-y-auto shadow-md transition-transform",
            open
              ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-300"
              : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-300",
            {
              "ease-out": open,
            }
          )}
        >
          {options &&
            options.map((option, index) => (
              <li
                key={option.value}
                className={classNames(
                  "p-3 text-sm hover:bg-gray-200 font-normal cursor-pointer",
                  {
                    "bg-gray-200": selected.includes(option.value),
                  }
                )}
                onClick={(event) =>
                  this.handleSelect(option.value, index, event.shiftKey)
                }
              >
                {option.label}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export { MultiSelectShift };
