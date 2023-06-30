import React from "react";

interface BadgeProps {
  text?: string;
  color:
    | "dark"
    | "secondary"
    | "graph"
    | "success"
    | "warning"
    | "danger"
    | "primary";
  variant: "pill" | "dot";
}

const Badge = ({ text, color, variant }: BadgeProps) => {
  return (
    <div
      className={`${
        variant === "pill"
          ? `h-[27px] w-[82px] border rounded-[33px] border-${color} text-${color}`
          : `h-[18px] w-[18px] border-none rounded-full bg-${color} text-white text-[10px]`
      } flex items-center justify-center overflow-x-hidden`}
    >
      {variant === "dot" ? (parseInt(text) > 99 ? "99+" : text) : text}
    </div>
  );
};

export default Badge;
