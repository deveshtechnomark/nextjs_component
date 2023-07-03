import React from "react";
import "./Switch.css";
type SwitchProps = {
    checked?: boolean;
    disabled?: boolean;
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    info?: boolean;
    warning?: boolean;
    error?: boolean;
};
declare const Switch: React.FC<SwitchProps>;
export { Switch };
