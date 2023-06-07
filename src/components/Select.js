import React from "react";
import { BiChevronDown } from "react-icons/bi";
import classNames from "classnames";
import "../styles/styles.css";

class Select extends React.Component {
  constructor(props) {
    super(props);
    const { defaultValue } = props;
    this.state = {
      selected: defaultValue || "",
      open: false
    };
  }

  handleSelect = (value) => {
    this.setState(
      {
        selected: value,
        open: false
      },
      () => {
        console.log(value);
        this.props.onSelect(value); // Call the onSelect callback prop
      }
    );
  };


  handleToggleOpen = () => {
    this.setState((prevState) => ({
      open: !prevState.open
    }));
  };

  render() {
    const { options, label } = this.props;
    const { selected, open } = this.state;

    return (
      <div className="w-72 md:w-72 font-medium flex-row">
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
            !selected && "text-gray-800",
            open && "text-green-700",
            !open ? "cursor-pointer" : "cursor-default",
            "hover:border-green-700"
          )}
        >
          {selected ? (
            selected.length > 25 ? (
              selected.substring(0, 25) + "..."
            ) : (
              selected
            )
          ) : (
            "Select.."
          )}
          <BiChevronDown
            size={20}
            color="black"
            className={classNames({
              "rotate-180": open
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
              "ease-out": open
            }
          )}
        >
          {options &&
            options.map((option) => (
              <li
                key={option.value}
                className={classNames(
                  "p-3 text-sm hover:bg-gray-200 font-normal cursor-pointer",
                  {
                    "bg-gray-200": option.value === selected
                  }
                )}
                onClick={() => {
                  if (option.value !== selected) {
                    this.handleSelect(option.value);
                  }
                }}
              >
                {option.label}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export { Select };
