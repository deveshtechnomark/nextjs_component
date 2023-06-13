import React from "react";
import styles from "../scss/styles.scss";
import "../css/bootstrapCustom.css";
import "bootstrap/js/dist/dropdown";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icon from "@fortawesome/free-solid-svg-icons";

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
            isOpen: !prevState.isOpen
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
            let displayElements = arrayItem.slice(0, selectedElements);
            displayElements.push("...");
            return displayElements.join(", ");
        }
    }
    optionLength = (arrayItem) => {
        if (arrayItem.length > 2) {
            return " +".concat(arrayItem.length - 2, "  ");
        }
    }
    clearSelectedOptions = () => {
        this.setState({ selectedOptions: [] });
    };


    render() {

        const { isOpen, searchQuery, selectedOptions } = this.state;
        const { options, type, labelName, iconName } = this.props;

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
                                    <label htmlFor="checkboxInput" className={isOpen === true ? `${styles.labelSelected}` : `${styles.labelDefault}`} >{labelName}</label>
                                    <div className={`input-group ${styles.borderBottom}`}>
                                        <input
                                            type="text"
                                            id="checkboxInput"
                                            className={isOpen === true ? `form-control mb-2 border-0  border-bottom rounded-0 ${styles.placeholderSelected}` : `form-control mb-2 border-0 border-bottom rounded-0 ${styles.placeholderDefault}`}
                                            placeholder={selectedOptions.length > 0 ? this.selectedItems(selectedOptions) : "Please Select"}
                                            value={searchQuery}
                                            onChange={this.handleSearchChange}
                                            onClick={this.toggleDropdown}
                                        />
                                        <div className={styles.spanIcon} onClick={this.toggleDropdown}>{this.optionLength(selectedOptions)}<FontAwesomeIcon icon={Icon.faChevronDown} className={`${isOpen && styles.spanIconRotate}`} size="sm" /></div>
                                    </div>

                                    {isOpen && (
                                        <ul className={`${styles.dropdownItems} col-12`} htmlFor="listInput">
                                            {filteredOptions.map((option) => (

                                                <div key={option}
                                                    className={selectedOptions.includes(option) ? `${styles.listItem} ${styles.activeItem}` : `${styles.listItem}`}
                                                    htmlFor="listInput">
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
                                        <label htmlFor="radioInput" className={isOpen === true ? `${styles.labelSelected}` : `${styles.labelDefault}`} >{labelName}</label>
                                        <div className={`input-group ${styles.borderBottom}`}>
                                            <input
                                                type="text"
                                                id="radioInput"
                                                className={isOpen === true ? `form-control mb-2 border-0  border-bottom rounded-0 ${styles.placeholderSelected}` : `form-control mb-2 border-0 border-bottom rounded-0 ${styles.placeholderDefault}`}
                                                placeholder={selectedOptions.length > 0 ? this.selectedItems(selectedOptions) : "Please Select"}
                                                value={searchQuery}
                                                onChange={this.handleSearchChange}
                                                onClick={this.toggleDropdown}
                                            />
                                            <div className={styles.spanIcon} onClick={this.toggleDropdown}>{this.optionLength(selectedOptions)}<FontAwesomeIcon icon={Icon.faChevronDown} className={`${isOpen && styles.spanIconRotate}`} size="sm" /></div>
                                        </div>
                                        {isOpen && (
                                            <ul className={`${styles.dropdownItems} col-12`}>
                                                {filteredOptions.map((option) => (
                                                    <div key={option} className={selectedOptions.includes(option) ? `${styles.listItem} ${styles.activeItem}` : `${styles.listItem}`}
                                                        htmlFor="listInput">
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
                                            <label htmlFor="iconInput" className={isOpen === true ? `${styles.labelSelected}` : `${styles.labelDefault}`} >{labelName}</label>
                                            <div className={`input-group ${styles.borderBottom}`}>
                                                <input
                                                    type="text"
                                                    id="iconInput"
                                                    className={isOpen === true ? `form-control mb-2 border-0  border-bottom rounded-0 ${styles.placeholderSelected}` : `form-control mb-2 border-0 border-bottom rounded-0 ${styles.placeholderDefault}`}
                                                    placeholder={selectedOptions.length > 0 ? this.selectedItems(selectedOptions) : "Please Select"}
                                                    value={searchQuery}
                                                    onChange={this.handleSearchChange}
                                                    onClick={this.toggleDropdown}
                                                />
                                                <div className={styles.spanIcon} onClick={this.toggleDropdown}>{this.optionLength(selectedOptions)}<FontAwesomeIcon icon={Icon.faChevronDown} className={`${isOpen && styles.spanIconRotate}`} size="sm" /></div>
                                            </div>

                                            {isOpen && (
                                                <ul className={`${styles.dropdownItems} col-12`}>
                                                    {isOpen && (
                                                        <ul className={`${styles.dropdownItems} col-12`}>
                                                            {filteredOptions.map((option) => (
                                                                <div key={option} className={selectedOptions.includes(option) ? `${styles.listItem} ${styles.activeItem}` : `${styles.listItem}`}
                                                                >
                                                                    <li key={option}
                                                                        className={`dropdown-item`}
                                                                        onClick={() => this.handleOptionClick(option)}>
                                                                        <span className={styles.listSpan}> <FontAwesomeIcon icon={Icon[iconName]} size="lg" className={styles.listIcon} color="black" />{option}</span>
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
                                                <label htmlFor="chipInput" className={isOpen === true ? `${styles.labelSelected}` : `${styles.labelDefault}`} >{labelName}</label>
                                                <div className={`input-group ${styles.borderBottom}`}>
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
                                                            {this.optionLength(selectedOptions) ? <div className={styles.chipCount}>
                                                                {this.optionLength(selectedOptions)}
                                                            </div> : ''}
                                                        </div>
                                                    )}
                                                    <input
                                                        type="text"
                                                        id="chipInput"
                                                        className={isOpen === true ? `form-control mb-2 border-0  border-bottom rounded-0 ${styles.placeholderSelected}` : `form-control mb-2 border-0 border-bottom rounded-0 ${styles.placeholderDefault}`}
                                                        placeholder={selectedOptions.length > 0 ? '' : "Please Select"}
                                                        value={searchQuery}
                                                        onChange={this.handleSearchChange}
                                                        onClick={this.toggleDropdown}
                                                    />
                                                    <div className={styles.spanIcon} onClick={this.toggleDropdown}>
                                                        <FontAwesomeIcon icon={Icon.faChevronDown} className={`${isOpen && styles.spanIconRotate}`} size="sm" />
                                                    </div>

                                                </div>
                                                {isOpen && (
                                                    <ul className={`${styles.dropdownItems} col-12`}>
                                                        <span className={`${styles.chipClear} ${styles.listItem}`} onClick={this.clearSelectedOptions}>
                                                            Clear All
                                                        </span>
                                                        {filteredOptions.map((option) => (
                                                            <div key={option} className={selectedOptions.includes(option) ? `${styles.listItem} ${styles.activeItem}` : `${styles.listItem}`}
                                                                htmlFor="listInput">
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
