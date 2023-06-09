import React from "react";
import "./index.css";

class Alert extends React.Component {
  static containerId = "fixed z-9999";

  static showAlert(type, message, text, duration = 5000) {
    const successIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  `;
    const errorIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
  </svg>
  `;
    const warningIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
  `;
    const infoIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>
`;
    const alertElement = document.createElement("div");
    alertElement.className = `flex flex-col text-base m-[6px] p-[12px] px-[16px] rounded-md text-white font-semibold min-w-15rem relative ${
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
    messageElement.innerHTML = `
     <span>${
       type === "error"
         ? errorIcon
         : type === "warning"
         ? warningIcon
         : type === "info"
         ? infoIcon
         : successIcon
     }</span>
     <span style="padding-left:5px">${message}</span>`;

    alertElement.appendChild(messageElement);
    alertElement.appendChild(closeButton);

    const textElement = document.createElement("span");
    textElement.className =
      "flex flex-start items-center ml-[30px] text-sm font-normal";
    textElement.innerHTML = `
     <span>${text}</span>`;
    {
      text && alertElement.appendChild(textElement);
    }

    document.getElementById(Alert.containerId).appendChild(alertElement);

    setTimeout(() => {
      Alert.removeAlert(alertElement);
    }, duration);
  }

  static success(message, text, duration) {
    Alert.showAlert("success", message, text, duration);
  }

  static error(message, text, duration) {
    Alert.showAlert("error", message, text, duration);
  }

  static warning(message, text, duration) {
    Alert.showAlert("warning", message, text, duration);
  }

  static info(message, text, duration) {
    Alert.showAlert("info", message, text, duration);
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
        className={`flex flex-col fixed select-none animate-slideDown ${
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
