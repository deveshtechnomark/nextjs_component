import React from "react";
import { BiChevronDown, BiX, BiUserCircle } from "react-icons/bi";
import classNames from "classnames";
import "../styles/styles.css";

class MultiSelectChip extends React.Component {
  constructor(props) {
    super(props);
    const { defaultValue } = props;
    this.state = {
      selected: defaultValue || [],
      open: false,
    };
    this.selectRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("click", this.handleOutsideClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleOutsideClick);
  }

  handleOutsideClick = (event) => {
    if (
      this.selectRef.current &&
      !this.selectRef.current.contains(event.target)
    ) {
      this.setState({ open: false });
    }
  };

  handleSelect = (value) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(value);
    let updatedSelected = [];

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

    this.setState(
      {
        selected: updatedSelected,
      },
      () => {
        console.log(updatedSelected);
        this.props.onSelect(updatedSelected); // Pass updated selected values to onSelect callback prop
      }
    );
  };

  handleToggleOpen = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  render() {
    const { options, label, type } = this.props;
    const { selected, open } = this.state;

    const selectedDisplay =
      selected.length > 0 ? (
        <div className="flex flex-wrap items-center">
          {selected.slice(0, 2).map((option) => (
            <div
              key={option}
              className={classNames(
                "flex items-center badge bg-gray-200 text-black border border-gray-400 rounded-sm px-1 mr-[5px] mb-2 text-[12px]",
                option.length > 6 && "max-w-[70px]"
              )}
            >
              <span title={option}>
                {option.length > 6 ? option.substring(0, 6) + "..." : option}
              </span>
              <BiX
                size={12}
                className="ml-1 cursor-pointer"
                onClick={() => this.handleSelect(option)}
              />
            </div>
          ))}
          {selected.length > 2 && (
            <div className="flex items-center badge bg-gray-200 text-black border border-gray-400 rounded-sm px-1 mr-[5px] mb-2 text-[12px]">
              +{selected.length - 2}
            </div>
          )}
        </div>
      ) : (
        <div className="text-gray-600 pb-2">Please Select...</div>
      );

    return (
      <div
        className="relative font-medium flex-row"
        ref={this.selectRef}
        style={{ width: "215px" }}
      >
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
            "flex justify-between bg-white border-b border-gray-300 text-gray-800 pt-2 pl-2 text-base font-normal transition-colors duration-300",
            selected.length === 0 && "text-gray-800",
            open && "text-green-700",
            !open ? "cursor-pointer" : "cursor-default",
            "hover:border-green-700"
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
            "absolute z-10 w-full bg-white mt-[1px] overflow-y-auto shadow-md transition-transform",
            open
              ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-300"
              : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-300",
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
                  "p-3 text-sm hover:bg-gray-200 font-normal cursor-pointer flex",
                  {
                    "bg-gray-200": selected.includes(option.value),
                  }
                )}
                onClick={() => this.handleSelect(option.value)}
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
  }
}

export { MultiSelectChip };
