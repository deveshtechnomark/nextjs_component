import React from "react";
interface AlertProps {
    variant: "success" | "error" | "warning" | "info";
    message: string;
}
declare const Alert: React.FC<AlertProps>;
export { Alert };
