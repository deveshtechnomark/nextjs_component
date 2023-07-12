import React from "react";
interface SwitchProps {
    checked?: boolean;
    disabled?: boolean;
    variant?: "primary" | "invalid";
}
declare const Switch: React.FC<SwitchProps>;
export { Switch };
