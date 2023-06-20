import React from "react";
import "./index.css";
interface AlertProps {
    variant: "success" | "error" | "warning" | "info";
    message: string;
}
declare const Alert: React.FC<AlertProps>;
export { Alert };
