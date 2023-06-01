import React from "react";
import classes from "./Form.module.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { action, method, children } = this.props;
    return (
      <>
        <form
          className={classes.__form}
          action={action}
          method={method}
          {...this.props}
        >
          {children}
        </form>
      </>
    );
  }
}
