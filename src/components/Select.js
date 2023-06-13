import React from "react";
import styles from "../scss/styles.scss";
import "../css/bootstrapCustom.css";
import "bootstrap/js/dist/dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faUserCircle } from "@fortawesome/free-solid-svg-icons";



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
    console.log();
    window.addEventListener("click", this.handleCliclOutSide);
  }
  componentWillMount() {
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
    });
  };

  handleSingleOptionClick = (option) => {
    this.setState({
      singleSelect: option,
      activeOption: option,
      isOpen: false,
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
      <div className="container1" ref={this.selectRef}>
        <div className={styles.cardMain}>
          <div className="col-auto">
            <div className="dropdown">
              <label htmlFor="inlineFormInput" className={isOpen === true ? `${styles.labelSelected}` : `${styles.labelDefault}`} >{labelName}</label>
              <div className={`input-group ${styles.borderBottom}`}>
                <input
                  type="text"
                  id="inlineFormInput"
                  className={isOpen === true ? `form-control mb-2 border-0 rounded-0 ${styles.placeholderSelected}` : `form-control mb-2 border-0 border-bottom rounded-0 ${styles.placeholderDefault}`}
                  placeholder={singleSelect !== "" ? singleSelect : "Please Select"}
                  value={searchQuery}
                  onChange={this.handleSearchChange}
                  onClick={this.toggleDropdown}
                />
                <div className={styles.spanIcon} onClick={this.toggleDropdown}><FontAwesomeIcon icon={faChevronDown} className={`${isOpen && styles.spanIconRotate}`} size="sm" /></div>
              </div>
              {
                isOpen && (
                  <ul className={`${styles.dropdownItems} col-12`}>
                    {filteredOptions.map((option) => (
                      <div className={styles.listItem} key={option}>
                        <li style={{ padding: "5px" }}
                          className={`dropdown-item ${option === activeOption ? styles.activeItem : ""}`}
                          onClick={() => this.handleSingleOptionClick(option)}>
                          {option}
                        </li>
                      </div>
                    ))}
                  </ul>
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Select };
