import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
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
            });
        } else {
            this.setState({
                selectedOptions: [...selectedOptions, option],
            });
        }
    };

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
                        <div className="container">
                            <div className={styles.cardMain}>
                                <div className="col-auto">
                                    <div className="dropdown">
                                        <label className="sr-only px-md-2" htmlFor="inlineFormInput">{label}</label>
                                        <input
                                            type="text"
                                            className={"form-control mb-2 border-0 border-bottom border-success rounded-0"}
                                            placeholder={selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Please Select'}
                                            value={searchQuery}
                                            onChange={this.handleSearchChange}
                                            onFocus={this.toggleDropdown}
                                        />
                                        {isOpen && (
                                            <ul className={`${styles.dropdownItems} col-12`}>
                                                {filteredOptions.map((option) => (
                                                    <div className={styles.listItem}>
                                                        <li key={option} onClick={() => this.handleOptionClick(option)}>
                                                            <input
                                                                type="checkbox"
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
                            <div className="container">
                                <div className={styles.cardMain}>
                                    <div className="col-auto">
                                        <div className="dropdown">
                                            <label className="sr-only px-md-2" htmlFor="inlineFormInput">{label}</label>
                                            <input
                                                type="text"
                                                className={"form-control mb-2 border-0 border-bottom border-success rounded-0"}
                                                placeholder={selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Please Select'}
                                                value={searchQuery}
                                                onChange={this.handleSearchChange}
                                                onFocus={this.toggleDropdown}
                                            />
                                            {isOpen && (
                                                <ul className={`${styles.dropdownItems} col-12`}>
                                                    {filteredOptions.map((option) => (
                                                        <div className={styles.listItem}>
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
                                <div className="container">
                                    <div className={styles.cardMain}>
                                        <div className="col-auto">
                                            <div className="dropdown">
                                                <label className="sr-only px-md-2" htmlFor="inlineFormInput">{label}</label>
                                                <input
                                                    type="text"
                                                    className={"form-control mb-2 border-0 border-bottom border-success rounded-0"}
                                                    placeholder={selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Please Select'}
                                                    value={searchQuery}
                                                    onChange={this.handleSearchChange}
                                                    onFocus={this.toggleDropdown}
                                                />
                                                {isOpen && (
                                                    <ul className={`${styles.dropdownItems} col-12`}>
                                                        {filteredOptions.map((option) => (
                                                            <div className={styles.listItem}>
                                                                <li key={option} onClick={() => this.handleOptionClick(option)}>
                                                                    <span className={styles.listSpan}> <FaUserCircle size={20} color='black'/>{option}</span>
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
