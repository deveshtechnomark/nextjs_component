/*
 *** This piece of code is written & styled by Sandeep Yadav ***
 */

import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

export default class Radio extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className, variant, label, id } = this.props;
    return (
      <div className={styles.container}>
        <input
          className={`${className} ${styles.__radio}`}
          type="radio"
          id={id}
          {...this.props}
        />
        <label
          htmlFor={id}
          className={variant === "invalid" ? styles.__invalidLabel : ""}
        >
          <svg
            className={`${styles.check} ${
              variant === "invalid" && styles.invalidCheck
            }`}
            viewBox="0 0 40 40"
          >
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="100%">
                <stop
                  offset="0%"
                  stopColor={variant !== "invalid" ? "#02B89D" : "#dc3545"}
                ></stop>
                <stop
                  offset="100%"
                  stopColor={variant !== "invalid" ? "#02B89D" : "#dc3545"}
                ></stop>
              </linearGradient>
            </defs>
            <circle id={styles.border} r="18px" cx="20px" cy="20px"></circle>
            <circle id={styles.dot} r="8px" cx="20px" cy="20px"></circle>
          </svg>
          {label}
        </label>
      </div>
    );
  }
}

Radio.propTypes = {
  id: PropTypes.string.isRequired,
};
