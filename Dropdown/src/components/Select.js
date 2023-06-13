import React from "react";
import { BiChevronDown, BiUserCircle } from "react-icons/bi";
import classNames from "classnames";
import "../styles/styles.css";

// importing another custom library
import { Typography } from "Typography";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
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

  handleToggleOpen = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  handleInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    this.setState({ inputValue });
  };

  handleSelect = (value) => {
    this.setState({
      inputValue: value,
      open: false,
    });
  };

  render() {
    const { options, label, type } = this.props;
    const { open, inputValue } = this.state;

    return (
      <>
        <div
          className="relative font-medium w-full flex-row border-b border-gray-300 hover:border-CSgreen transition-colors duration-300"
          ref={this.selectRef}
        >
          <label
            className={classNames(
              "text-[14px] font-normal font-proxima text-CSSecondaryGray",
              open && "text-CSgreen"
            )}
            htmlFor="select"
          >
            <Typography type="label">{label}*</Typography>
          </label>

          <div className="flex flex-row items-center justify-center relative mt-0.5">
            <input
              id="select"
              onClick={this.handleToggleOpen}
              onChange={this.handleInputChange}
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
              onClick={this.handleToggleOpen}
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
                    "p-[10px] text-[16px] font-proxima hover:bg-CSListHover font-normal cursor-pointer flex",
                    {
                      "bg-CSListHover": option.value === inputValue,
                      hidden: !option.label
                        .toLowerCase()
                        .startsWith(inputValue),
                    }
                  )}
                  onClick={() => {
                    if (option.value !== inputValue) {
                      this.handleSelect(option.value);
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
  }
}

export { Select };
