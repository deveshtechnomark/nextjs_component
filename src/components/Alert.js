import React from 'react';
import styles from "../scss/style.scss";
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineFontSize, AiOutlineWarning } from "react-icons/ai";
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { BiErrorCircle } from 'react-icons/bi';
import Typography  from 'typography';
// import "typography/dist/index.css";

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: true
    };
  }

  handleClose = () => {
    this.setState({ showAlert: false });
  };

  render() {
    const { showAlert } = this.state;
    const { head, variant, message } = this.props;

    let divClass;

    switch (variant) {
      case "success":
        divClass = `${styles.alert_success}`;
        break;
      case "error":
        divClass = `${styles.alert_error}`;
        break;
      case "warning":
        divClass = `${styles.alert_warning}`;
        break;
      case "information":
        divClass = `${styles.alert_information}`;
        break;
    }

    if (!showAlert) {
      return null;
    }

    return (
      <>
        <div className={divClass}>
          <div className={styles.alert_inner}>
            {
              variant == "success" ?
                <AiOutlineCheckCircle size={20}/> :
                variant == "warning" ?
                  <AiOutlineWarning size={20}/> :
                  variant == "error" ?
                    <BiErrorCircle size={20} /> :
                    variant == "information" ?
                      <IoIosInformationCircleOutline size={20}/> :
                      null
            }
            <strong className={styles.strong}>{head}</strong>
            <AiOutlineClose className={styles.close} onClick={this.handleClose} />
          </div>
          {message ? <p className={styles.message}>{message}</p> : null}
        </div>
      </>
    );
  }
}

export { Alert };
