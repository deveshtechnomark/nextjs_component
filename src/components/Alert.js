import React from 'react';
import styles from "../scss/style.scss";
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineFontSize, AiOutlineWarning } from "react-icons/ai";
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { BiErrorCircle } from 'react-icons/bi';


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
    const { head, varient, message } = this.props;

    let divClass;

    switch (varient) {
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
              varient == "success" ?
                <AiOutlineCheckCircle size={20}/> :
                varient == "warning" ?
                  <AiOutlineWarning size={20}/> :
                  varient == "error" ?
                    <BiErrorCircle size={20} /> :
                    varient == "information" ?
                      <IoIosInformationCircleOutline size={20}/> :
                      null
            }
            <strong>{head}</strong>
            <AiOutlineClose className={styles.close} onClick={this.handleClose} />
          </div>
          {message ? <p className={styles.message}>{message}</p> : null}
        </div>
      </>
    );
  }
}

export { Alert };
