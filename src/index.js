import React from "react";
import styles from "./styles.scss"


class Tooltip extends React.Component {
  render() {
    const { message, position = "top", children } = this.props;

    return (
      <div className={styles.tooltip}>
        <span className={`${position === "top" ? styles.tooltipTextTop : ''} ${position === "bottom" ? styles.tooltipTextBottom : ''}  ${position === "left" ? styles.tooltipTextLeft : ''}
        ${position === "right" ? styles.tooltipTextRight : ''}`}>{message}</span>
        <span>{children}</span>
      </div>
    );
  }
}

export { Tooltip }
