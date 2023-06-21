import React, { ReactNode } from "react";
import "./index.css";
import "Typography/dist/index.css";
interface ToastProps {
    position?: "top_right" | "bottom_right" | "top_left" | "bottom_left" | "top_center" | "bottom_center";
}
declare class Toast extends React.Component<ToastProps> {
    static containerId: string;
    static showToast(type: "success" | "error" | "warning" | "info", message: string, text: string, duration?: number): void;
    static success(message: string, text: string, duration?: number): void;
    static error(message: string, text: string, duration?: number): void;
    static warning(message: string, text: string, duration?: number): void;
    static info(message: string, text: string, duration?: number): void;
    static removeToast(toastElement: HTMLElement): void;
    render(): ReactNode;
}
export { Toast };
