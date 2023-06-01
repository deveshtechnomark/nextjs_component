import React from "react";
export default class OptionGroup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { label, style, children } = this.props;
    return (
      <>
        <optgroup
          style={{ ...style, textTransform: "capitalize" }}
          label={label}
          {...this.props}
        >
          {children}
        </optgroup>
      </>
    );
  }
}
