import React, { ReactNode } from "react";
import "./index.css";

interface TooltipProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  position = "top",
  children,
}) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`relative before:z-10 before:absolute before:w-max before:max-w-xs before:bg-bgColor before:border before:border-borderColor before:text-textColor  before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:h-3 after:w-3 after:bg-bgColor after:border after:border-transparent after:invisible hover:before:visible hover:after:visible md:text-2xl ${
          position === "top" &&
          "tooltip_animateSlideDown before:left-1/2 before:-top-[45px] before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:px-2 before:py-1.5 after:left-1/2 after:-top-[8px] after:-translate-x-1/2 after:border-t-borderColor after:border-r-borderColor after:mt-[-6px]"
        } ${
          position === "bottom" &&
          "tooltip_animateSlideUp before:left-1/2 before:-bottom-[45px] before:-translate-x-1/2 before:translate-y-full before:rounded-lg before:px-2 before:py-1.5 after:left-1/2 after:-bottom-[8px] after:-translate-x-1/2 after:border-t-borderColor after:border-r-borderColor after:mb-[-6px]"
        } ${
          position === "left" &&
          "tooltip_animateSlideRight before:-left-[150px] before:top-1/2 before:-translate-x-full before:-translate-y-1/2 before:rounded-md before:px-3 before:py-2 after:left-[1px] after:top-1/2 after:translate-x-0 after:-translate-y-1/2 after:border-t-borderColor after:border-r-borderColor after:ml-[-6px]"
        } ${
          position === "right" &&
          "tooltip_animateSlideLeft before:-right-[160px] before:top-1/2 before:translate-x-full before:-translate-y-1/2 before:rounded-md before:px-3 before:py-2 after:-right-[-2px] after:top-1/2 after:translate-x-0 after:-translate-y-1/2 after:border-t-borderColor after:border-r-borderColor after:mr-[-6px]"
        }`}
        data-tip={text}
      >
        {children}
      </div>
    </div>
  );
};

export { Tooltip };
