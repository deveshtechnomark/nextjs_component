import React from 'react';
import styles from '../scss/styles.scss';
import '../css/bootstrapCustom.css';
import 'bootstrap/js/dist/dropdown';
import { BiUserCircle } from 'react-icons/bi';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      searchQuery: '',
      singleSelect: '',
      selectedOption: null,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
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
      selectedOption: option,
      open: false,
    });
  }

  render() {
    const { open, searchQuery, singleSelect, selectedOption } = this.state;
    const { options, type, label } = this.props;
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
      <div className="container">
        <div className={styles.cardMain}>
          <div className="col-auto">
            <div className="dropdown">
              <label className="sr-only px-md-2" htmlFor="inlineFormInput">{label}</label>
              <input 
                type="text"
                className={"form-control ml-0 border-0 border-bottom border-success rounded-0"}
                placeholder={singleSelect !== '' ? singleSelect : 'Please Select'}
                value={searchQuery}
                onChange={this.handleSearchChange}
                onFocus={this.toggleDropdown}
                onClick={this.toggleDropdown}
              />
              {/* <BiUserCircle size={30} color='black' /> */}
              {
                open && (
                  <ul className={`${styles.dropdownItems} col-12`}>
                    {filteredOptions.map((option) => (
                      <div className={styles.listItem} key={option}>
                        <li
                          className={`dropdown-item ${option === selectedOption ? styles.activeItem : ''}`}
                          onClick={() => this.handleSingleOptionClick(option)}
                        >
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
