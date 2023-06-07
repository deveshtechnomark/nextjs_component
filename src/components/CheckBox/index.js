/*
 *** This piece of code is written & styled by Sandeep Yadav ***
 */

import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { variant, variant2, className, label, id } = this.props;
    return (
      <>
        <input
          className={`${className} ${styles.__checkBox} ${
            variant === "invalid" && styles.__checkBoxInvalid
          } `}
          type="checkbox"
          id={id}
          {...this.props}
        />
        <label className={`${styles.__label}`} htmlFor={id}>
          <span
            className={`${styles.__checkBoxDiv} ${
              variant2 === "intermediate" && styles.intermediate
            }`}
          ></span>
          {label}
        </label>
      </>
    );
  }
}

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
};
