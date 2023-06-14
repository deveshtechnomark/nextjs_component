import React from "react";
import "./index.css"

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  handleClose = () => {
    this.setState({ visible: false });
  };

  render() {
    const { variant, message } = this.props;
    const { visible } = this.state;

    let alertClass = "";
    let icon = null;

    switch (variant) {
      case "success":
        alertClass = "bg-teal-500 !text-white";
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
        break;
      case "error":
        alertClass = "bg-rose-200 !text-red-500";
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        );
        break;
      case "warning":
        alertClass = "bg-amber-100 !text-yellow-900";
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        );
        break;
      case "info":
        alertClass = "bg-indigo-50 !text-blue-700";
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        );
        break;
      default:
        alertClass = "bg-teal-500 text-white";
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
        break;
    }

    return (
      <>
        {visible && (
          <div
            className={`flex flex-col text-base m-[6px] p-[12px] px-[16px] rounded-md text-white font-semibold min-w-15rem relative ${alertClass}`}
            role="alert"
          >
            <div className="flex">
              {icon}
              <span className="ml-2 mr-6">{message}</span>
            </div>
            <button
              type="button"
              className="absolute top-1/4 right-[20px] w-15 h-15 bg-transparent border-none text-base cursor-pointer pl-10"
              onClick={this.handleClose}
            >
              X
            </button>
          </div>
        )}
      </>
    );
  }
}

export { Alert };
