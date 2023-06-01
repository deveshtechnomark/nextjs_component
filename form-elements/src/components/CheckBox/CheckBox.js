import React from "react";
import classes from "./CheckBox.module.css";
export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { label, name, id } = this.props;
    return (
      <div className={classes.container__checkbox}>
        <input
          {...this.props}
          type="checkbox"
          id={id ? id : label}
          name={name}
        />
        {label && <label htmlFor={id ? id : label}>{label}</label>}
      </div>
    );
  }
}
