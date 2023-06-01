import React from "react";
import classes from "./ImageButton.module.css";

export default class ImageButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className } = this.props;
    return (
      <input
        {...this.props}
        type="image"
        className={`${className} ${classes.__imageBtn}`}
      />
    );
  }
}
