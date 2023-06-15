/*
 *** This piece of code is written & styled by Sandeep Yadav ***
 */

import React from "react";
import PropTypes from "prop-types";
import { Typography } from "Typography";

import styles from "./styles.module.css";
import "Typography/dist/tailwind.css";

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { variant, variant2, label, id } = this.props;
    return (
      <div>
        <input
          className={`${styles.__checkBox} ${
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
          <Typography>{label}</Typography>
        </label>
      </div>
    );
  }
}

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
};
