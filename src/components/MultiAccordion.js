import React from 'react';
import { FaAngleDown, FaAngleUp, FaPlus, FaMinus } from 'react-icons/fa';
import '../css/bootstrap.css';
import '../js/bootstrap.js';
import styles from '../scss/styles.scss';

export default class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeAccordionId: null,
        };
        this.accordionRef = React.createRef();
    }

    handleAccordionClick = (id) => {
        this.setState((prevState) => ({
            activeAccordionId: prevState.activeAccordionId === id ? null : id,
        }));
    };

    renderIcon = (id) => {
        const { icon } = this.props;
        const { activeAccordionId } = this.state;

        const isActive = activeAccordionId === id;

        if (icon === 'plus') {
            return isActive ? <FaMinus /> : <FaPlus />;
        } else {
            return isActive ? <FaAngleUp /> : <FaAngleDown />;
        }
    };

    render() {
        const { heading, description } = this.props;
        const { activeAccordionId } = this.state;

        const isActive = activeAccordionId === heading;

        return (
            <div className='row' ref={this.accordionRef}>
                <div className='col-12'>
                    <div className="accordion" >
                        <div className={`accordion-item ${isActive ? 'open' : ''}`}>
                            <h2 className="accordion-header">
                                <div className={styles.acordianHeaderIcon}>
                                    <button
                                        className={`accordion-button ${isActive ? 'active' : ''}`}
                                        type="button"
                                        onClick={() => this.handleAccordionClick(heading)}
                                    >
                                        {heading}
                                        {this.renderIcon(heading)}
                                    </button>
                                </div>
                            </h2>
                            {isActive && (
                                <div className="accordion-collapse">
                                    <div className="accordion-body">{description}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
