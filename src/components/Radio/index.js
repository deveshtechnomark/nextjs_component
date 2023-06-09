/*
 *** This piece of code is written & styled by Sandeep Yadav ***
 */

import React from "react";
import PropTypes from "prop-types";
import { Typography } from "Typography";
import "Typography/dist/tailwind.css";

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
          className={variant === "invalid" ? styles.invalidLabel : ""}
        >
          <svg
            className={`${styles.check} ${
              variant === "invalid" ? styles.invalidCheck : ""
            }`}
            viewBox="0 0 40 40"
          >
            <circle id={styles.border} r="18px" cx="20px" cy="20px"></circle>
            <circle id={styles.dot} r="8px" cx="20px" cy="20px"></circle>
          </svg>
          <Typography type="label">{label}</Typography>
        </label>
      </div>
    );
  }
}

Radio.propTypes = {
  id: PropTypes.string.isRequired,
};
