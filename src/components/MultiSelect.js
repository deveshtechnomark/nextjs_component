import React from "react";
import styles from "../scss/styles.scss";
import "../css/bootstrapCustom.css";
import "bootstrap/js/dist/dropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faUserCircle } from "@fortawesome/free-solid-svg-icons";

class MultiSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            searchQuery: "",
            selectedOptions: [],
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

    handleOptionClick = (option) => {
        const { selectedOptions } = this.state;
        if (selectedOptions.includes(option)) {
            this.setState({
                selectedOptions: selectedOptions.filter((item) => item !== option),
            }, () => {
                this.props.onSelect(selectedOptions)
            });
        } else {
            this.setState({
                selectedOptions: [...selectedOptions, option],
            }, () => {
                this.props.onSelect(selectedOptions)
            });
        }
    };

    selectedItems = (arrayItem) => {
        let selectedElements = 2;
        if (arrayItem.length <= selectedElements) {
            return arrayItem.join(", ");
        } else {
            let displayedElements = arrayItem.slice(0, selectedElements);
            displayedElements.push("...");
            return displayedElements.join(", ");
        }
    }
    optionLength = (arrayItem) => {
        if (arrayItem.length > 2) {
            return " +".concat(arrayItem.length - 2, "  ");
        }
    }

    render() {

        const { isOpen, searchQuery, selectedOptions } = this.state;
        const { options, type, label } = this.props;
        const filteredOptions = options.filter((option) =>
            option.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return (
            <>
                {type === "checkbox" ?
                    <div className="container" ref={this.selectRef}>
                        <div className={styles.cardMain}>
                            <div className="col-auto">
                                <div className="dropdown">
                                    <label htmlFor="checkboxInput">{label}</label>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            id="checkboxInput"
                                            className={"form-control mb-2 border-0 border-bottom border-success rounded-0"}
                                            placeholder={selectedOptions.length > 0 ? this.selectedItems(selectedOptions) : "Please Select"}
                                            value={searchQuery}
                                            onChange={this.handleSearchChange}
                                            onClick={this.toggleDropdown}
                                        />
                                        <div className={styles.spanIcon} onClick={this.toggleDropdown}>{this.optionLength(selectedOptions)}<FontAwesomeIcon icon={faChevronDown} className={`${isOpen && styles.spanIconRotate}`} size="sm" /></div>

                                    </div>

                                    {isOpen && (
                                        <ul className={`${styles.dropdownItems} col-12`}>
                                            {filteredOptions.map((option) => (
                                                <div key={option} className={styles.listItem} htmlFor="listInput">
                                                    <li key={option} onClick={() => this.handleOptionClick(option)}>
                                                        <input
                                                            type="checkbox"
                                                            id="listInput"
                                                            className={styles.dropdownCheckbox}
                                                            checked={selectedOptions.includes(option)}
                                                        />
                                                        <span>{option}</span>
                                                    </li>
                                                </div>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    : type === "radio" ?
                        <div className="container" ref={this.selectRef}>
                            <div className={styles.cardMain}>
                                <div className="col-auto">
                                    <div className="dropdown">
                                        <label htmlFor="radioInput">{label}</label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                id="radioInput"
                                                className={"form-control mb-2 border-0 border-bottom border-success rounded-0"}
                                                placeholder={selectedOptions.length > 0 ? this.selectedItems(selectedOptions) : "Please Select"}
                                                value={searchQuery}
                                                onChange={this.handleSearchChange}
                                                onClick={this.toggleDropdown}
                                            />
                                            <div className={styles.spanIcon} onClick={this.toggleDropdown}>{this.optionLength(selectedOptions)}<FontAwesomeIcon icon={faChevronDown} className={`${isOpen && styles.spanIconRotate}`} size="sm" /></div>

                                        </div>

                                        {isOpen && (
                                            <ul className={`${styles.dropdownItems} col-12`}>
                                                {filteredOptions.map((option) => (
                                                    <div key={option} className={styles.listItem} htmlFor="listInput">
                                                        <li key={option} onClick={() => this.handleOptionClick(option)}>
                                                            <input
                                                                type="radio"
                                                                id="listInput"
                                                                className={styles.dropdownCheckbox}
                                                                checked={selectedOptions.includes(option)}
                                                            />
                                                            <span>{option}</span>
                                                        </li>
                                                    </div>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        : type === "icon" ?
                            <div className="container" ref={this.selectRef}>
                                <div className={styles.cardMain}>
                                    <div className="col-auto">
                                        <div className="dropdown">
                                            <label htmlFor="iconInput">{label}</label>
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    id="iconInput"
                                                    className={"form-control mb-2 border-0 border-bottom border-success rounded-0"}
                                                    placeholder={selectedOptions.length > 0 ? this.selectedItems(selectedOptions) : "Please Select"}
                                                    value={searchQuery}
                                                    onChange={this.handleSearchChange}
                                                    onClick={this.toggleDropdown}
                                                />
                                                <div className={styles.spanIcon} onClick={this.toggleDropdown}>{this.optionLength(selectedOptions)}<FontAwesomeIcon icon={faChevronDown} className={`${isOpen && styles.spanIconRotate}`} size="sm" /></div>

                                            </div>

                                            {isOpen && (
                                                <ul className={`${styles.dropdownItems} col-12`}>
                                                    {isOpen && (
                                                        <ul className={`${styles.dropdownItems} col-12`}>
                                                            {filteredOptions.map((option) => (
                                                                <div key={option} className={styles.listItem}>
                                                                    <li key={option}
                                                                        className={`dropdown-item`}
                                                                        onClick={() => this.handleOptionClick(option)}>
                                                                        <span className={styles.listSpan}> <FontAwesomeIcon icon={faUserCircle} size="lg" className={styles.listIcon} color="black" />{option}</span>
                                                                    </li>
                                                                </div>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : type === "chip" ?
                                <div className="container" ref={this.selectRef}>
                                    <div className={styles.cardMain}>
                                        <div className="col-auto">
                                            <div className="dropdown">
                                                <label htmlFor="chipInput">
                                                    {label}
                                                </label>
                                                <div className="input-group">
                                                    {selectedOptions.length > 0 && (
                                                        <div className={styles.chips}>
                                                            {selectedOptions.slice(0, 2).map((option) => (
                                                                <div className={styles.chip} key={option}>
                                                                    {option}
                                                                    <span className={styles.chipClose} onClick={() => this.handleOptionClick(option)}>
                                                                        &times;
                                                                    </span>
                                                                </div>
                                                            ))}
                                                            {<div className={styles.chipCount}>
                                                                {this.optionLength(selectedOptions)}
                                                            </div>}
                                                        </div>
                                                    )}
                                                    <input
                                                        type="text"
                                                        id="chipInput"
                                                        className="form-control mb-2 border-0 border-bottom border-success rounded-0"
                                                        placeholder={selectedOptions.length > 0 ? "" : "Please Select"}
                                                        value={searchQuery}
                                                        onChange={this.handleSearchChange}
                                                        onClick={this.toggleDropdown}
                                                    />
                                                    <div className={styles.spanIcon} onClick={this.toggleDropdown}>
                                                        <FontAwesomeIcon icon={faChevronDown} className={`${isOpen && styles.spanIconRotate}`} size="sm" />
                                                    </div>

                                                </div>
                                                {isOpen && (
                                                    <ul className={`${styles.dropdownItems} col-12`}>
                                                        {filteredOptions.map((option) => (
                                                            <div key={option} className={styles.listItem} htmlFor="listInput">
                                                                <li key={option} onClick={() => this.handleOptionClick(option)}>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="listInput"
                                                                        className={styles.dropdownCheckbox}
                                                                        checked={selectedOptions.includes(option)}
                                                                    />
                                                                    <span>{option}</span>
                                                                </li>
                                                            </div>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : "Invalid option"
                }
            </>
        );
    }
}

export { MultiSelect };
