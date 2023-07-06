import React from "react";

interface BadgeProps {
  text?: string;
  badgetype:
    | "dark"
    | "secondary"
    | "graph"
    | "success"
    | "warning"
    | "error"
    | "primary";
  variant: "pill" | "dot";
}

const Badge = ({ text, badgetype, variant }: BadgeProps) => {
  const getColor = (type: string) => {
    switch (type) {
      case "dark":
        return "#333333";
        break;
      case "secondary":
        return "#069CDE";
        break;
      case "graph":
        return "#EA6A47";
        break;
      case "success":
        return "#198754";
        break;
      case "warning":
        return "#FFC107";
        break;
      case "error":
        return "#DC3545";
        break;
      default:
        return "#02B89D";
        break;
    }
  };
  return (
    <div
      style={
        variant === "pill"
          ? {
              borderColor: `${getColor(badgetype)}`,
              color: `${getColor(badgetype)}`,
            }
          : { backgroundColor: `${getColor(badgetype)}` }
      }
      className={`${
        variant === "pill"
          ? `h-[27px] w-[82px] border rounded-[33px]`
          : `h-[18px] w-[18px] border-none rounded-full text-white text-[10px]`
      } flex items-center justify-center overflow-x-hidden`}
    >
      {variant === "dot" ? (parseInt(text) > 99 ? "99+" : text) : text}
    </div>
  );
};

export default Badge;
