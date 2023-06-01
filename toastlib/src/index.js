import React from "react";
import styles from "./style.module.css";

class Toast extends React.Component {
  static defaultProps = {
    position: "bottom-right",
  };

  static containerId = "toast-container";

  static showToast(type, message, duration = 5000) {
    const toastElement = document.createElement("div");
    toastElement.className = `${styles.toast} ${styles[`toast-${type}`]}`;

    const closeButton = document.createElement("icon");
    closeButton.className = styles.closeButton;
    closeButton.innerHTML = "x";
    closeButton.addEventListener("click", () => {
      Toast.removeToast(toastElement);
    });

    const messageElement = document.createElement("div");
    messageElement.className = styles.message;
    messageElement.textContent = message;

    toastElement.appendChild(messageElement);
    toastElement.appendChild(closeButton);

    document.getElementById(Toast.containerId).appendChild(toastElement);

    setTimeout(() => {
      Toast.removeToast(toastElement);
    }, duration);
  }

  static success(message, duration) {
    Toast.showToast("success", message, duration);
  }

  static error(message, duration) {
    Toast.showToast("error", message, duration);
  }

  static warning(message, duration) {
    Toast.showToast("warning", message, duration);
  }

  static info(message, duration) {
    Toast.showToast("info", message, duration);
  }

  static removeToast(toastElement) {
    if (toastElement && toastElement.parentNode) {
      toastElement.parentNode.removeChild(toastElement);
    }
  }

  static removeAllToasts() {
    const container = document.getElementById(Toast.containerId);
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  render() {
    const { position } = this.props;

    return (
      <div
        id={Toast.containerId}
        className={`${styles["toast-container"]} ${styles[position]}`}
      >
        {/* Toast container */}
      </div>
    );
  }
}

export default Toast;
