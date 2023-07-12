import React from "react";
interface BadgeProps {
    text?: string;
    badgetype: "dark" | "secondary" | "graph" | "success" | "warning" | "error" | "primary";
    variant: "pill" | "dot";
}
declare const Badge: ({ text, badgetype, variant }: BadgeProps) => React.JSX.Element;
export default Badge;
