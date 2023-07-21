import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "btn" | "btn-primary" | "btn-secondary" | "btn-success" | "btn-error" | "btn-warning" | "primary" | "secondary" | "success" | "error" | "warning" | "btn-outline" | "btn-outline-primary" | "btn-outline-secondary" | "btn-outline-success" | "btn-outline-error" | "btn-outline-warning";
}
declare const Button: React.FC<ButtonProps>;
export { Button };
