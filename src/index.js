import React from "react";
import styles from  "./styles.scss";
  import { Tooltip } from 'bootstrap';


class ToolTip extends React.Component {

  tooltipRef = React.createRef();
  tooltipInstance = null;

  componentDidMount() {
    if (this.tooltipRef.current) {
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
      <div>
        <button ref={this.tooltipRef} data-bs-toggle="tooltip"  data-bs-custom-class={styles.custom_tooltip} data-bs-placement={position} title={title} >{children}</button>
      </div>

    )

    // return (
    //   <div className={styles.tooltip}>
    //     <span className={`${className}  ${position === "top" ? styles.tooltipTextTop : ''} ${position === "bottom" ? styles.tooltipTextBottom : ''}  ${position === "left" ? styles.tooltipTextLeft : ''}
    //     ${position === "right" ? styles.tooltipTextRight : ''}`}>{message}</span>
    //     <span>{children}</span>
    //   </div>
    // );
  }
}

export { ToolTip }
