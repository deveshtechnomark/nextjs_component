import React from "react";

import style from "./Badge.module.scss";

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
  effect?: boolean;
}

const Badge = ({ text, badgetype, variant, effect }: BadgeProps) => {
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
              backgroundColor: `${getColor(badgetype)}0D`,
            }
          : { backgroundColor: `${getColor(badgetype)}` }
      }
      className={`${
        variant === "pill"
          ? `h-[27px] w-[82px] border rounded-[33px] overflow-x-hidden`
          : `h-[18px] w-[18px] border-none rounded-full text-[10px]`
      } flex items-center justify-center text-quickSilver
      `}
    >
      {variant === "dot" ? (
        <>
          <span
            style={
              variant === "dot" && effect
                ? {
                    borderColor: `${getColor(badgetype)}`,
                    boxShadow: `0 0 0 0 ${getColor(badgetype)}`,
                  }
                : {}
            }
            className={style.indicate}
          >
            {parseInt(text) > 99 ? "99+" : text}
            <span className={style.indicateBorder}></span>
          </span>
        </>
      ) : (
        text
      )}
    </div>
  );
};

export default Badge;