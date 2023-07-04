import React, { ReactNode } from "react";
import styles from "./index.module.scss";
import "./index.css";

interface TooltipProps {
  content?: ReactNode;
  position: "top" | "bottom" | "left" | "right";
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, position, children }) => {
  const text = content?.toString();
  const textLength = text ? text.length : 0;
  return (
    <div
      className={`${styles.tooltip} relative cursor-pointer p-2 text-sm sm:text-base max-w-fit`}
    >
      <span
        className={`${
          styles.tool
        } flex justify-center items-center min-w-[300px] ${
          textLength <= 6 && "!min-w-[80px]"
        } tooltipText absolute bg-[#bcf1e8] text-[#333333] whitespace-nowrap p-[10px] border border-[#02b89d] rounded-md opacity-0 before:absolute before:w-3 before:h-3 before:bg-[#bcf1e8] before:border-t before:border-[#02b89d] before:border-r ${
          position === "top" &&
          `${styles.top} left-1/2 transform -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:bottom-[-7px] before:transform before:rotate-[135deg]`
        } 
        ${
          position === "bottom" &&
          `${styles.bottom} left-1/2 transform -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:top-[-7px] before:transform before:rotate-[-45deg]`
        } 
        ${
          position === "left" &&
          `${
            styles.left
          } top-1/2 transform -translate-y-1/2 before:top-1/2 before:-translate-y-1/2 before:right-[-2.2%] ${
            textLength <= 6 && "before:right-[-7%]"
          } before:transform before:rotate-[45deg]`
        } 
        ${
          position === "right" &&
          `${
            styles.right
          } top-1/2 transform -translate-y-1/2 before:top-1/2 before:-translate-y-1/2 before:left-[-2.2%] ${
            textLength <= 6 && "before:left-[-7%]"
          } before:transform before:rotate-[-135deg]`
        }`}
      >
        {content}
      </span>
      <span>{children}</span>
    </div>
  );
};

export { Tooltip };
