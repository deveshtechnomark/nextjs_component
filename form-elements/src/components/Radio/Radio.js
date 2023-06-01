import React from "react";
import classes from "./Radio.module.css";
export default class Radio extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { label, name, id } = this.props;
    return (
      <div className={classes.container__radio}>
        <input {...this.props} type="radio" id={id ? id : label} name={name} />
        {label && <label htmlFor={id ? id : label}>{label}</label>}
      </div>
    );
  }
}
