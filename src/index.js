import React from 'react';
import styles from './scss/styles.scss';
import './bootstrapCustom.css';
import 'bootstrap/js/dist/dropdown';

export default class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      searchQuery: '',
      selectedOptions: [],
      singleSelect: ''
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
  handleSingleOptionClick = (option) => {
    const { singleSelect } = this.state;
    this.setState({ singleSelect: option });
  }

  render() {

    const { isOpen, searchQuery, selectedOptions, singleSelect } = this.state;
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
              <div className="card">
                <div className="col-3">
                  <div className="dropdown">
                    <label className="sr-only" htmlFor="inlineFormInput">{label}</label>
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
          //type = icon
          type === "icon" ?
            <>
              <div className="container">
                <div className="card">
                  <div className="col-3">
                    <div className="dropdown">
                      <label className="sr-only" htmlFor="inlineFormInput">{label}</label>
                      <input
                        type="text"
                        className={"form-control mb-2 border-0 border-bottom border-success rounded-0"}
                        placeholder={singleSelect.length > 0 ? singleSelect.join(', ') : 'Please Select'}
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
            </> :

            //type Default
            <>
              <div className="container">
                <div className="card">
                  <div className="col-3">
                    <div className="dropdown">
                      <label className="sr-only px-md-2" htmlFor="inlineFormInput">{label}</label>
                      <input
                        type="text"
                        className={"form-control ml-0 border-0 border-bottom border-success rounded-0"}
                        placeholder={singleSelect != '' ? singleSelect : 'Please Select'}
                        value={searchQuery}
                        onChange={this.handleSearchChange}
                        onFocus={this.toggleDropdown}
                      />
                      {isOpen && (
                        <ul className={`${styles.dropdownItems} col-12`}>
                          {options.map((option) => (
                            <div className={styles.listItem}>
                              <li key={option}><button className="dropdown-item" type="button" onClick={() => this.handleSingleOptionClick(option)}> {option}</button></li>
                            </div>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
        }
      </>
    );
  }
}
