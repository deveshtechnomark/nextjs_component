"use client";

import Toast from "toastlib/dist";

const page = () => {
  const successToast = () => {
    Toast.success("Success message!");
  };

  const errorToast = () => {
    Toast.error("error message!");
  };

  const warningToast = () => {
    Toast.warning("Warning message!");
  };

  const infoToast = () => {
    Toast.info("Info message!");
  };

  return (
    <div className="main">
      <div className="card">
        <Toast position="top_right" />
        <button className="btn success" onClick={successToast}>
          Success
        </button>
        <button className="btn error" onClick={errorToast}>
          Error
        </button>
        <button className="btn warning" onClick={warningToast}>
          Warning
        </button>
        <button className="btn info" onClick={infoToast}>
          Info
        </button>
      </div>
    </div>
  );
};

export default page;
