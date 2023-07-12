import React from "react";
import "typography-ts/dist/index.css";
import '../style.css';
interface ProgressBarProps {
    progress?: number;
    label: string;
    variant: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
    striped?: boolean;
    progressDigit?: boolean;
}
declare const ProgressBar: React.FC<ProgressBarProps>;
export { ProgressBar };
