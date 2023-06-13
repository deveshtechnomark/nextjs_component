import React from "react";
import "./index.css";

class Alert extends React.Component {
  static containerId = "fixed z-9999";

  static showAlert(type, message) {
    const alertElement = document.createElement("div");
    alertElement.className = `flex flex-col text-base m-[6px] p-[12px] px-[16px] rounded-md text-white font-semibold relative ${
      type === "error"
        ? "bg-rose-200 !text-red-500"
        : type === "warning"
        ? "bg-amber-100 !text-yellow-900"
        : type === "info"
        ? "bg-indigo-50 !text-blue-700"
        : "bg-teal-500 !text-white"
    }`;

    const closeButton = document.createElement("span");
    closeButton.className =
      "absolute top-1/4 right-[20px] w-15 h-15 bg-transparent border-none text-base cursor-pointer pl-10";
    closeButton.innerHTML = "X";
    closeButton.addEventListener("click", () => {
      Alert.removeAlert(alertElement);
    });

    const messageElement = document.createElement("span");
    messageElement.className = "flex flex-start items-center mr-20";
    messageElement.innerHTML = `<span style="padding-left:5px">${message}</span>`;

    alertElement.appendChild(messageElement);
    alertElement.appendChild(closeButton);

    document.getElementById(Alert.containerId).appendChild(alertElement);
  }

  static success(message) {
    Alert.showAlert("success", message);
  }

  static error(message) {
    Alert.showAlert("error", message);
  }

  static warning(message) {
    Alert.showAlert("warning", message);
  }

  static info(message) {
    Alert.showAlert("info", message);
  }

  static removeAlert(alertElement) {
    if (alertElement && alertElement.parentNode) {
      alertElement.parentNode.removeChild(alertElement);
    }
  }

  render() {
    const { position = "top_right" } = this.props;

    return (
      <div
        id={Alert.containerId}
        className={`fixed select-none animate-slideDown ${
          position === "top_right" && "top-2 right-5"
        } ${position === "bottom_right" && "bottom-2 right-5"} ${
          position === "top_left" && "top-2 left-5"
        } ${position === "bottom_left" && "bottom-2 left-5"} ${
          position === "top_center" && "left-1/2 transform -translate-x-1/2"
        } ${
          position === "bottom_center" &&
          "left-1/2 transform -translate-x-1/2 bottom-2"
        }`}
      >
        {/* Alert container */}
      </div>
    );
  }
}

export { Alert };
