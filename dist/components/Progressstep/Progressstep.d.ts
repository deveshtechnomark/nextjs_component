import React from "react";
interface ProgressStepProps {
    total: number;
    current: number;
    icon?: JSX.Element;
    customized?: boolean;
    label?: Array<string>;
}
declare const ProgressStep: ({ total, current, label, icon, customized, }: ProgressStepProps) => React.JSX.Element;
export default ProgressStep;
