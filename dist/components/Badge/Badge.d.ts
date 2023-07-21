import React from "react";
interface BadgeProps {
    text?: string;
    badgetype: "dark" | "secondary" | "graph" | "success" | "warning" | "error" | "primary";
    variant: "pill" | "dot";
    effect?: boolean;
}
declare const Badge: ({ text, badgetype, variant, effect }: BadgeProps) => React.JSX.Element;
export default Badge;
