import React from 'react';
import styles from './styles.css';

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || false,
      disabled: props.disabled || false,
      invalid: props.invalid || false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { onChange } = this.props;
    this.setState(
      (prevState) => ({
        checked: !prevState.checked,
        disabled: !prevState.disabled,
        invalid: this.props.invalid && !prevState.checked,
      }),
      () => {
        if (onChange) {
          onChange(this.state.checked);
        }
      }
    );
  }

  render() {
    const { label, id, disabled, invalid, customClassName } = this.props;
    const { checked } = this.state;
    const uniqueId = `${id}_${label}`;

    const labelClassName = [
      styles.radio_label,
      disabled ? styles.disabled_label : '',
      invalid ? styles.invalid_label : '',
      customClassName || '',
    ].join(' ');

    return (
      <React.Fragment>
        <input
          type="radio"
          id={uniqueId}
          checked={checked}
          onChange={this.handleChange}
          disabled={disabled}
        />
        <label htmlFor={uniqueId} className={labelClassName}>
          <svg
            className={`${styles.radio_check} ${invalid ? styles.invalid_check : ''}`}
            viewBox="0 0 40 40"
          >
            <defs>
              <linearGradient id="radio_gradient" x1="0" y1="0" x2="0" y2="100%">
                <stop offset="0%" stopColor="#25be9b"></stop>
                <stop offset="100%" stopColor="#25be9b"></stop>
              </linearGradient>
              <linearGradient id="invalid_gradient" x1="0" y1="0" x2="0" y2="100%">
                <stop offset="0%" stopColor="red"></stop>
                <stop offset="100%" stopColor="red"></stop>
              </linearGradient>
            </defs>
            <circle
              className={`${styles.radio_border} ${
                invalid ? styles.invalid_border : ''
              }`}
              r="14px"
              cx="20px"
              cy="20px"
            ></circle>
            <circle
              className={`${styles.radio_dot} ${
                invalid ? styles.invalid_dot : ''
              }`}
              r="6px"
              cx="20px"
              cy="20px"
            ></circle>
          </svg>
          {label}
        </label>
      </React.Fragment>
    );
  }
}

export default RadioButton;
