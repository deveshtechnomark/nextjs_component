import React from "react";
import classes from "./DropDown.module.css";
export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSelect: true,
      searchValue: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleFocus() {
    this.setState({ showSelect: false });
  }
  handleBlur() {
    this.setState({ showSelect: true });
  }
  handleSearch(event) {
    this.setState({ searchValue: event.target.value });
  }
  render() {
    const { name, id, size, multiple, options, issearchable, label } = this.props;
    const { showSelect, searchValue } = this.state;
    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
      <>
      <label className={classes.dropdown_label}>{label}</label>
      <div className={classes.container__select}>
        {!showSelect && issearchable === "on" && (
          <>
            <input
              placeholder="Search..."
              list={id ? id : "list"}
              value={searchValue}
              onChange={this.handleSearch}
              onBlur={this.handleBlur}
            />
            <datalist id={id ? id : "list"}>
              {filteredOptions.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  onClick={this.handleSearch}
                >
                  {opt.label}
                </option>
              ))}
            </datalist>
          </>
        )}
        {showSelect && (
          <select
            {...this.props}
            name={name}
            id={id}
            size={size}
            multiple={multiple}
            value={searchValue}
            onChange={this.handleSearch}
            onFocus={issearchable === "on" ? this.handleFocus : undefined}
            onBlur={issearchable === "on" ? this.handleBlur : undefined}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}
      </div>
      </>
    );
  }
}
