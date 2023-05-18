"use client";

import * as React from "react";
// import { ToastContainer, toast } from "react-toast";
import { ToastContainer, toast } from "toastlib";
import "toastlib/dist/index.css";

export default function Home() {
  const success = () => toast.success("This is success!");
  const error = () => toast.error("This is error!");
  const info = () => toast.info("This is info!");
  const warn = () => toast.warn("This is warning!");
  return (
    <>
      <ToastContainer position="top-right" delay={10000} />
      <button onClick={success}>Success</button>
      <button onClick={error}>Error</button>
      <button onClick={info}>Info</button>
      <button onClick={warn}>Warn</button>
    </>
  );
}
