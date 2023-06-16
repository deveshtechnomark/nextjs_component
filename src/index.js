import React from "react";
import styles from  "./styles.scss";
  import { Tooltip } from 'bootstrap';


class ToolTip extends React.Component {

  tooltipRef = React.createRef();
  tooltipInstance = null;

  componentDidMount() {
     if (typeof window !== 'undefined' && this.tooltipRef.current) {
      this.tooltipInstance = new Tooltip(this.tooltipRef.current);
    }
  }

  componentWillUnmount() {
    if (this.tooltipInstance) {
      this.tooltipInstance.dispose();
    }
  }

  render() {
    const { title, position, children, className } = this.props;
    console.log(title)
    return (
      <span ref={this.tooltipRef} className={`${className}`} data-bs-toggle="tooltip" data-bs-custom-class={styles.custom_tooltip} data-bs-placement={position} title={title}>
      {children}
      </span>
    )

  }
}

export { ToolTip }
