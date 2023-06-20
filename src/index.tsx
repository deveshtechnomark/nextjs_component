import React, { ChangeEvent, FocusEvent } from "react";
import './index.module.scss';

interface ExampleComponentProps {
  type: string;
  placeholder?: string;
  size?: string;
  label: string;
  className?: string;
  min?: string;
  max?: string;
  id?: string;
  name?: string;
  value?: string;
  hidden?: boolean;
  minLength?: number;
  maxLength?: number;
  accept?: string;
  required?: boolean;
  disabled?: boolean;
  variant?: string;
  validation?: boolean;
  onChange?(name: string, value: string): void;
}

interface ExampleComponentState {
  isOpen: boolean;
  getValue: string;
  error: string;
  inputStyle: object;
  isFocused: boolean;
}

export default class ExampleComponent extends React.Component<ExampleComponentProps, ExampleComponentState> {
  constructor(props: ExampleComponentProps) {
    super(props);
    this.state = {
      isOpen: false,
      getValue: "",
      error: "",
      inputStyle: {},
      isFocused: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleFocus() {
    this.setState({ isFocused: true });
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { onChange } = this.props;
    this.setState({ getValue: event.target.value, error: "" });
    if (onChange) {
      onChange(event.target.name, event.target.value);
    }
  }

  handleValidation(event: FocusEvent<HTMLInputElement>) {
    const { type, validation } = this.props;
    const value = this.state.getValue.trim();

    if (type === "text") {
      if (validation && value.length === 0) {
        this.setState({ error: `${type} field is required.` });
      } else if (validation && /\d/.test(value)) {
        this.setState({ error: `${type} field cannot contain numbers.` });
      } else if (validation && value.length > 15) {
        this.setState({ error: `${type} field cannot exceed 15 characters.` });
      } else {
        this.setState({ error: "" });
      }
    }

    if (type === "password") {
      if (validation && value.length === 0) {
        this.setState({ error: `${type} field is required.` });
      } else if (validation && value.length < 6) {
        this.setState({ error: `${type} must be at least 6 characters.` });
      } else {
        this.setState({ error: "" });
      }
    }
  }

  render() {
    const { type, placeholder, size, label, className, min, max, id, name, value, hidden, minLength, maxLength, accept, required, disabled, variant } = this.props;
    const { getValue, error, isFocused } = this.state;

    let labelClassName = `${label} ${isFocused ? 'selectedColor' : 'defaultColor'} ${error ? 'errorLabel' : ""}`;
    let inputClassName = `input ${'inputStyle' || className} ${isFocused ? 'selectedColor' : ''} ${error ? 'errorInput' : ""}`;

    return (
      <div>
        <label className={labelClassName}>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={value || getValue}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleValidation}
          className={inputClassName}
          min={min}
          max={max}
          id={id}
          name={name}
          required={required}
          disabled={disabled}
          minLength={minLength}
          maxLength={maxLength}
          hidden={hidden}
          accept={accept}
        />
        {error && <span className='error'>{error}</span>}
      </div>
    );
  }
}
