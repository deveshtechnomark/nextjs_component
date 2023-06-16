import React from "react";
import styles from "../scss/styles.scss";
import "../css/bootstrapCustom.css";
import "bootstrap/js/dist/dropdown";
import { CheckBox } from "checkbox";
import Typography from "typography";
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
    };

    componentDidMount() {
        window.addEventListener("click", this.handleCliclOutSide);
    };
    componentWillMount() {
        window.addEventListener("click", this.handleCliclOutSide);
    };

    handleCliclOutSide = (e) => {
        if (this.selectRef.current && !this.selectRef.current.contains(e.target)) {
            this.setState({ isOpen: false })
        }
    };

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

    selectedItems = (arrayItem) => {
        const items = arrayItem.map((item) => (item.length > 5 ? item.slice(0, 5) + '...' : item));
        let selectedElements = 2;
        if (items.length <= selectedElements) {
            return items.join(", ");
        } else {
            let displayElements = items.slice(0, selectedElements);
            displayElements.push("...");
            return displayElements.join(", ");
        }
    };

    optionLength = (arrayItem) => {
        if (arrayItem.length > 2) {
            return " +".concat(arrayItem.length - 2, "  ");
        }
    };

    clearSelectedOptions = () => {
        this.setState({ selectedOptions: [] });
    };


    handleCheckboxChange = (event) => {
        const value = event.target.name;
        const isChecked = event.target.checked;
        const { selectedOptions } = this.state;

        if (isChecked) {
            this.setState((prevState) => ({
                selectedOptions: [...prevState.selectedOptions, value],
                searchQuery: "",
            }), () => {
                this.props.onSelect(selectedOptions)
            });
        } else {
            this.setState((prevState) => ({
                selectedOptions: prevState.selectedOptions.filter((item) => item !== value),
                searchQuery: "",
            }), () => {
                this.props.onSelect(selectedOptions)
            });
        }
    };

    handleOptionClick = (option) => {
        const { selectedOptions } = this.state;
        if (selectedOptions.includes(option)) {
            this.setState({
                selectedOptions: selectedOptions.filter((item) => item !== option),
                searchQuery: "",
            }, () => {
                this.props.onSelect(selectedOptions)
            });
        } else {
            this.setState({
                selectedOptions: [...selectedOptions, option],
                searchQuery: "",
            }, () => {
                this.props.onSelect(selectedOptions)
            });
        }
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
                    <div className={styles.cardMain} ref={this.selectRef}>
                        <div className="col-auto">
                            <div className="dropdown">
                                <Typography htmlFor="checkboxInput" type="h6" className={isOpen === true ? `${styles.labelSelected} ${styles.tabView}` : `${styles.labelDefault} ${styles.tabView}`}>{labelName}</Typography>
                                <div className={`input-group ${styles.borderBottom}`}>
                                    <input
                                        type="text"
                                        id="checkboxInput"
                                        className={isOpen === true ? `form-control mb-2 border-0  border-bottom rounded-0 ${styles.placeholderSelected} ${styles.tabView}` : `form-control mb-2 border-0 border-bottom rounded-0 ${styles.placeholderDefault} ${styles.tabView}`}
                                        placeholder={selectedOptions.length > 0 ? this.selectedItems(selectedOptions) : "Please Select"}
                                        value={searchQuery}
                                        onChange={this.handleSearchChange}
                                        onClick={this.toggleDropdown}
                                    />
                                    <div className={`${styles.spanIcon} ${styles.tabView}`} onClick={this.toggleDropdown}>{this.optionLength(selectedOptions)}<FontAwesomeIcon icon={Icon.faChevronDown} className={`${isOpen && styles.spanIconRotate}`} size="sm" /></div>
                                </div>
                                {isOpen && (
                                    <ul className={`${styles.dropdownItems} col-12`} htmlFor="listInput">
                                        {filteredOptions.map((option) => (
                                            <div key={option}
                                                className={selectedOptions.includes(option) ? `${styles.listItem} ${styles.activeItem}` : `${styles.listItem}`}
                                                htmlFor="listInput">
                                                <li key={option} id="listInput">
                                                    <CheckBox style={{ width: "15px" }} id={option} label={option.length > 15 ? `${option.slice(0, 15)}...` : option} name={option} onChange={this.handleCheckboxChange} checked={selectedOptions.includes(option)} />
                                                </li>
                                            </div>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>

                    : type === "icon" ?
                        <div className={styles.cardMain} ref={this.selectRef}>
                            <div className="col-auto">
                                <div className="dropdown">
                                    <Typography htmlFor="iconInput" type="h6" className={isOpen === true ? `${styles.labelSelected} ${styles.tabView}` : `${styles.labelDefault} ${styles.tabView}`}>{labelName}</Typography>
                                    <div className={`input-group ${styles.borderBottom}`}>
                                        <input
                                            type="text"
                                            id="iconInput"
                                            className={isOpen === true ? `form-control mb-2 border-0  border-bottom rounded-0 ${styles.placeholderSelected} ${styles.tabView}` : `form-control mb-2 border-0 border-bottom rounded-0 ${styles.placeholderDefault} ${styles.tabView}`}
                                            placeholder={selectedOptions.length > 0 ? this.selectedItems(selectedOptions) : "Please Select"}
                                            value={searchQuery}
                                            onChange={this.handleSearchChange}
                                            onClick={this.toggleDropdown}
                                        />
                                        <div className={`${styles.spanIcon} ${styles.tabView}`} onClick={this.toggleDropdown}>{this.optionLength(selectedOptions)}<FontAwesomeIcon icon={Icon.faChevronDown} className={`${isOpen && styles.spanIconRotate}`} size="sm" /></div>
                                    </div>
                                    {isOpen && (
                                        <ul className={`${styles.dropdownItems} col-12`}>
                                            {isOpen && (
                                                <ul className={`${styles.dropdownItems} col-12`}>
                                                    {filteredOptions.map((option) => (
                                                        <div key={option} className={selectedOptions.includes(option) ? `${styles.listItem} ${styles.activeItem} ${styles.tabView}` : `${styles.listItem} ${styles.tabView}`}>
                                                            <li key={option}
                                                                className={`dropdown-item`}
                                                                onClick={() => this.handleOptionClick(option)}
                                                            >
                                                                <span className={styles.listSpan}> <FontAwesomeIcon icon={Icon[iconName]} size="lg" className={styles.listIcon} color="black" />{option.length > 15 ? `${option.slice(0, 15)}...` : option}</span>
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

                        : type === "chip" ?
                            <div className={styles.cardMain} ref={this.selectRef}>
                                <div className="col-auto">
                                    <div className="dropdown">
                                        <Typography htmlFor="chipInput" type="h6" className={isOpen === true ? `${styles.labelSelected} ${styles.tabView}` : `${styles.labelDefault} ${styles.tabView}`}>{labelName}</Typography>
                                        <div className={`input-group ${styles.borderBottom}`}>
                                            {selectedOptions.length > 0 && (
                                                <div className={styles.chips}>
                                                    {selectedOptions.slice(0, 2).map((option) => (
                                                        <div className={styles.chip} key={option}>
                                                            {option.length > 5 ? `${option.slice(0, 5)}...` : option}
                                                            <span className={styles.chipClose} onClick={() => this.handleOptionClick(option)}>
                                                                &times;
                                                            </span>
                                                        </div>
                                                    ))}
                                                    {this.optionLength(selectedOptions) ? <div className={`${styles.chipCount} ${styles.tabView}`}>
                                                        {this.optionLength(selectedOptions)}
                                                    </div> : ''}
                                                </div>
                                            )}
                                            <input
                                                type="text"
                                                id="chipInput"
                                                className={isOpen === true ? `form-control mb-2 border-0  border-bottom rounded-0 ${styles.placeholderSelected} ${styles.tabView}` : `form-control mb-2 border-0 border-bottom rounded-0 ${styles.placeholderDefault} ${styles.tabView}`}
                                                placeholder={selectedOptions.length > 0 ? '' : "Please Select"}
                                                value={searchQuery}
                                                onChange={this.handleSearchChange}
                                                onClick={this.toggleDropdown}
                                            />
                                            <div className={`${styles.spanIcon} ${styles.tabView}`} onClick={this.toggleDropdown}>
                                                <FontAwesomeIcon icon={Icon.faChevronDown} className={`${isOpen && styles.spanIconRotate}`} size="sm" />
                                            </div>
                                        </div>
                                        {isOpen && (
                                            <ul className={`${styles.dropdownItems} col-12`}>
                                                <span className={`${styles.chipClear} ${styles.listItem} ${styles.tabView}`} onClick={this.clearSelectedOptions}>
                                                    Clear All
                                                </span>
                                                {filteredOptions.map((option) => (
                                                    <div key={option} className={selectedOptions.includes(option) ? `${styles.listItem} ${styles.activeItem}` : `${styles.listItem}`}
                                                        htmlFor="listInput">
                                                        <li key={option}>
                                                            <CheckBox id={option} label={option.length > 15 ? `${option.slice(0, 15)}...` : option} name={option} onChange={this.handleCheckboxChange} checked={selectedOptions.includes(option)} />
                                                        </li>
                                                    </div>
                                                ))}
                                            </ul>
                                        )}
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
