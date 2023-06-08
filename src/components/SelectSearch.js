import React from "react";
import { BiChevronDown } from "react-icons/bi";
import classNames from "classnames";
import "../styles/styles.css";

class SelectSearch extends React.Component {
  constructor(props) {
    super(props);
    const { defaultValue, select } = props;
    this.state = {
      inputValue: "",
      selected: defaultValue || "",
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
    this.setState({
      selected: value,
      open: false,
      inputValue: "",
    },
    () => {
      console.log(value);
    });
  };

  handleToggleOpen = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value.toLowerCase(),
    });
  };

  render() {
    const { options, label } = this.props;
    const { inputValue, selected, open } = this.state;

    return (
      <div
        className="relative font-medium flex-row"
        ref={this.selectRef}
        style={{width:"215px"}}
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
            "flex justify-between bg-white border-b border-gray-300 text-gray-800 p-2 text-base font-normal transition-colors duration-300",
            !selected && "text-gray-800",
            open && "text-green-700",
            !open ? "cursor-pointer" : "cursor-default",
            "hover:border-green-700"
          )}
        >
          {selected
            ? selected.length > 25
              ? selected.substring(0, 25) + "..."
              : selected
            : "Select.."}
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
            "absolute z-10 bg-white mt-2 w-full overflow-y-auto shadow-md transition-transform",
            open
              ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-300"
              : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-300",
            {
              "ease-out": open,
            }
          )}
        >
          <div className="flex items-center px-1 sticky top-0 bg-white">
            {/* <AiOutlineSearch size={18} className="text-gray-700" /> */}
            <input
              type="text"
              placeholder="Search..."
              className="placeholder:text-gray-700 p-2 outline-none text-sm font-normal"
              value={inputValue}
              onChange={this.handleInputChange}
            />
          </div>

          {options &&
            options.map((option) => (
              <li
                key={option.value}
                className={classNames(
                  "p-3 text-sm hover:bg-gray-200 font-normal cursor-pointer",
                  {
                    "bg-gray-200": option.value === selected,
                    hidden:
                      !option.label.toLowerCase().startsWith(inputValue) &&
                      !option.label.toLowerCase().includes(inputValue),
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

export { SelectSearch };
