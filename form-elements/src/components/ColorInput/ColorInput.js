import React from "react";
import classes from "./ColorInput.module.css";

export default class ColorInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { value, label } = this.props;
    return (
      <>
        <label>{label}</label>
        <div className={classes.color__input__wrapper}>
          <input type="color" {...this.props} value={value} />
        </div>
      </>
    );
  }
}
