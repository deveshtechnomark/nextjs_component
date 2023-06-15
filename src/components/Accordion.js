import React from 'react';
import { FaAngleDown, FaAngleUp, FaPlus, FaMinus } from 'react-icons/fa';
import '../css/bootstrap.css';
import '../js/bootstrap.js';
import styles from '../scss/styles.scss';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openIndexes: []
    };
    this.accordionRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.accordionRef.current && !this.accordionRef.current.contains(event.target)) {
      this.setState({ openIndexes: [] });
    }
  };

  handleAccordionClick = (index) => {
    this.setState((prevState) => {
      const { openIndexes } = prevState;
      const indexPosition = openIndexes.indexOf(index);
      const newOpenIndexes = indexPosition === -1
        ? [...openIndexes, index]
        : openIndexes.filter((item) => item !== index);

      return { openIndexes: newOpenIndexes };
    });
  };

  isAccordionOpen = (index) => {
    const { openIndexes } = this.state;
    return openIndexes.includes(index);
  };

  renderIcon = (index) => {
    const { icon } = this.props;
    const isAccordionOpen = this.isAccordionOpen(index);

    if (icon === 'plus') {
      return isAccordionOpen ? <FaMinus /> : <FaPlus />;
    } else {
      return isAccordionOpen ? <FaAngleUp /> : <FaAngleDown />;
    }
  };

  render() {
    const { heading, description, index } = this.props;
    const isAccordionOpen = this.isAccordionOpen(index);

    return (
      <div className='row' ref={this.accordionRef}>
        <div className='col-12'>
          <div className="accordion" >
            <div className={`accordion-item ${isAccordionOpen ? 'open' : ''}`}>
              <h2 className="accordion-header">
                <div className={styles.acordianHeaderIcon}>
                  <button
                    className={`accordion-button ${isAccordionOpen ? 'active' : ''}`}
                    type="button"
                    onClick={() => this.handleAccordionClick(index)}
                  >
                    {heading}
                    {this.renderIcon(index)}
                  </button>
                </div>
              </h2>
              {isAccordionOpen && (
                <div className="accordion-collapse">
                  <div className="accordion-body">{description}</div>
                </div>
              )}
            </div>
          </div>
        </div></div>
    );
  }
}
