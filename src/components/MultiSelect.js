import React from 'react';
import { FaUserCircle, FaChevronDown } from 'react-icons/fa';
import styles from '../scss/styles.scss';
import '../css/bootstrapCustom.css';
import 'bootstrap/js/dist/dropdown';

class MultiSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            searchQuery: '',
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

    selectedItems = (array) => {
        let selectedElements = 3;
        if (array.length <= selectedElements) {
            return array.join(', ');
        } else {
            let displayedElements = array.slice(0, selectedElements);
            displayedElements.push('...');
            return displayedElements.join(', ');
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
                    //type = checkbox
                    <>
                        <div className="container" ref={this.selectRef}>
                            <div className={styles.cardMain}>
                                <div className="col-auto">
                                    <div className="dropdown">
                                        <label className="sr-only px-md-2" htmlFor="inlineFormInput">{label}</label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                id="inlineFormInput"
                                                className={"form-control mb-2 border-0 border-bottom border-success rounded-0"}
                                                placeholder={selectedOptions.length > 0 ? this.selectedItems(selectedOptions) : 'Please Select'}
                                                value={searchQuery}
                                                onChange={this.handleSearchChange}
                                                onClick={this.toggleDropdown}
                                            />
                                            <div className={styles.spanIcon}><FaChevronDown className={`${isOpen && styles.spanIcon_rotate}`} size={15} /></div>
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
                                                                onChange={() => { }}
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

                    </> :
                    type === "radio" ?
                        //type = radio
                        <>
                            <div className="container" ref={this.selectRef}>
                                <div className={styles.cardMain}>
                                    <div className="col-auto">
                                        <div className="dropdown">
                                            <label className="sr-only px-md-2" htmlFor="inlineFormInput">{label}</label>
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className={"form-control mb-2 border-0 border-bottom border-success rounded-0"}
                                                    placeholder={selectedOptions.length > 0 ? this.selectedItems(selectedOptions) : 'Please Select'}
                                                    value={searchQuery}
                                                    onChange={this.handleSearchChange}
                                                    onClick={this.toggleDropdown}
                                                />
                                                <div className={styles.spanIcon}><FaChevronDown className={`${isOpen && styles.spanIcon_rotate}`} size={15} /></div>
                                            </div>
                                            {isOpen && (
                                                <ul className={`${styles.dropdownItems} col-12`}>
                                                    {filteredOptions.map((option) => (
                                                        <div key={option} className={styles.listItem}>
                                                            <li key={option} onClick={() => this.handleOptionClick(option)}>
                                                                <input
                                                                    type="radio"
                                                                    className={styles.dropdownCheckbox}
                                                                    checked={selectedOptions.includes(option)}
                                                                    onChange={() => { }}
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
                        </> : type === "icon" ?
                            //type = icon
                            <>
                                <div className="container" ref={this.selectRef}>
                                    <div className={styles.cardMain}>
                                        <div className="col-auto">
                                            <div className="dropdown">
                                                <label className="sr-only px-md-2" htmlFor="inlineFormInput">{label}</label>
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className={"form-control mb-2 border-0 border-bottom border-success rounded-0"}
                                                        placeholder={selectedOptions.length > 0 ? this.selectedItems(selectedOptions) : 'Please Select'}
                                                        value={searchQuery}
                                                        onChange={this.handleSearchChange}
                                                        onClick={this.toggleDropdown}
                                                    />
                                                    <div className={styles.spanIcon}><FaChevronDown className={`${isOpen && styles.spanIcon_rotate}`} size={15} /></div>
                                                </div>
                                                {isOpen && (
                                                    <ul className={`${styles.dropdownItems} col-12`}>
                                                        {filteredOptions.map((option) => (
                                                            <div key={option} className={styles.listItem}>
                                                                <li key={option}
                                                                    className={`dropdown-item`}
                                                                    onClick={() => this.handleOptionClick(option)}>
                                                                    <span className={styles.listSpan}> <FaUserCircle size={20} className={styles.listIcon} color='black' />{option}</span>
                                                                </li>
                                                            </div>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            : "No data"
                }
            </>
        );
    }
}

export { MultiSelect };
