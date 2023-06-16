import React from "react";
import styles from "../scss/styles.scss";
import "../css/bootstrapCustom.css";
import "bootstrap/js/dist/dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icon from "@fortawesome/free-solid-svg-icons";
class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      searchQuery: "",
      singleSelect: "",
      activeOption: null,
    };
    this.selectRef = React.createRef();
  }
  componentDidMount() {
    window.addEventListener("click", this.handleCliclOutSide);
  }

  handleCliclOutSide = (e) => {
    if (this.selectRef.current && !this.selectRef.current.contains(e.target)) {
      this.setState({ isOpen: false })
    }
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleSearchChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
      isOpen: e.target.value !== ""
    });
  };

  handleSingleOptionClick = (option) => {
    this.setState({
      singleSelect: option,
      activeOption: option,
      isOpen: false,
      searchQuery: "",
    }, () => {
      this.props.onSelect(option)
    });
  }

  render() {
    const { isOpen, searchQuery, singleSelect, activeOption } = this.state;
    const { options, type, labelName } = this.props;
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
      <div className={styles.cardMain} ref={this.selectRef}>
        <div className="col-auto">
          <div className="dropdown">
            <label htmlFor="inlineFormInput" className={isOpen === true ? `${styles.selectedColor} ${styles.tabView}` : `${styles.defaultColor} ${styles.tabView}`}>{labelName}</label>
            <div className={`input-group ${styles.borderBottom}`}>
              <input
                type="text"
                id="inlineFormInput"
                className={isOpen === true ? `form-control mb-2 border-0 rounded-0 ${styles.selectedColor} ${styles.tabView}` : `form-control mb-2 border-0 border-bottom rounded-0 ${styles.defaultColor} ${styles.tabView}`}
                placeholder={singleSelect !== "" ? (singleSelect.length > 10 ? singleSelect.slice(0, 10) + '...' : singleSelect) : "Please Select"}
                value={searchQuery}
                onChange={this.handleSearchChange}
                onClick={this.toggleDropdown}
              />
              <div className={`${styles.spanIcon} ${styles.tabView}`} onClick={this.toggleDropdown}><FontAwesomeIcon icon={Icon.faChevronDown} className={`${isOpen && styles.spanIconRotate}`} size="sm" /></div>
            </div>
            {
              isOpen && (
                <ul className={`${styles.dropdownItems} col-12`}>
                  {filteredOptions.map((option) => (
                    <div className={`${styles.listItem} ${styles.tabView}`} key={option}>
                      <li style={{ padding: "5px" }}
                        className={`dropdown-item ${option === activeOption ? styles.activeItem : ""}`}
                        onClick={() => this.handleSingleOptionClick(option)}>
                        {option.length > 20 ? `${option.slice(0, 20)}...` : option}
                      </li>
                    </div>
                  ))}
                </ul>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export { Select };
