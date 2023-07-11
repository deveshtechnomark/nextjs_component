import React from "react";
import "../style.css";
interface SwitchProps {
    checked?: boolean;
    disabled?: boolean;
    variant?: "primary" | "invalid";
}
declare const Switch: React.FC<SwitchProps>;
export { Switch };
