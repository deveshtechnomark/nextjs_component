/* 

CREATED BY :-
===============
-> Anas Memon
-> Devesh Sheth
-> Kenil Mendpara

*/

import React from "react";
import styles from './index.css';

export default class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getValue: "",
      error: "",
      inputStyle: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }


  handleChange(event) {
    const { onChange } = this.props;
    this.setState({ getValue: event.target.value, error: "" });
    if (onChange) {
      onChange(event.target.name, event.target.value);
    }
  }

  handleValidation(event) {
    const { type, validation } = this.props;
    const value = this.state.getValue.trim();


    if (type == "text") {
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


    if (type == "email") {
      if (validation && value.length === 0) {
        this.setState({ error: `${type} field is required.` });
      } else if (validation && !/\S+@\S+\.\S+/.test(value)) {
        this.setState({ error: `${type} field must be a valid email address.` });
      } else {
        this.setState({ error: "" });
      }
    }

    if (type == "password") {
      if (validation && value.length === 0) {
        this.setState({ error: `${type} field is required.` });
      }
      else if (validation && value.length < 6) {
        this.setState({ error: `${type} must be atleast 6 characters.` });
      } else {
        this.setState({ error: "" });
      }
    }

    if (validation && type === "date") {
      const today = new Date();
      const birthDate = new Date(value);
      var age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      if (age < 18) {
        this.setState({ error: "You must be 18 years or older." });
      } else {
        this.setState({ error: "" });
      }
    }

    if (type === "file" && event.target.files && event.target.files.length > 0) {
      if (event.target.files[0].size <= 1000000) {
        this.setState({ error: "" });
      } else {
        this.setState({ error: `${type} size cannot exceed 1MB.` });
      }
    }

  }
  render() {
    const { type, placeholder, size, label, className, onClick, min, max, id, name, value, hidden, minLength, maxLength, accept, required, disabled, variant } = this.props;
    const { getValue, error } = this.state;
    let inputClassName = '';

    switch (size) {
      case 'sm':
        inputClassName = styles.sm;
        break;
      case 'md':
        inputClassName = styles.md;
        break;
      case 'lg':
        inputClassName = styles.lg;
        break;
      default:
        break;
    }

    if (variant) {
      inputClassName += ` ${styles[variant]}`;
    }

    return (
      <div className="inputBox">
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className={inputClassName}
          value={value || getValue}
          onChange={this.handleChange}
          onBlur={this.handleValidation}
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
          onClick={onClick}
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    );
  }
}