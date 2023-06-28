import React from 'react';

var Tooltip = function Tooltip(_a) {
  var text = _a.text,
    _b = _a.position,
    position = _b === void 0 ? "top" : _b,
    children = _a.children;
  return React.createElement("div", {
    className: "flex flex-col items-center gap-3"
  }, React.createElement("div", {
    className: "relative before:z-10 before:absolute before:w-max before:max-w-xs before:bg-bgColor before:border before:border-borderColor before:text-textColor  before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:h-3 after:w-3 after:bg-bgColor after:border after:border-transparent after:invisible  after:border-t-borderColor after:border-r-borderColor hover:before:visible hover:after:visible md:text-2xl ".concat(position === "top" && "tooltip_animateSlideDown before:left-1/2 before:-top-[45px] before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:px-2 before:py-1.5 after:left-1/2 after:-top-[8px] after:-translate-x-1/2 after:mt-[-6px]", " ").concat(position === "bottom" && "tooltip_animateSlideUp before:left-1/2 before:-bottom-[45px] before:-translate-x-1/2 before:translate-y-full before:rounded-lg before:px-2 before:py-1.5 after:left-1/2 after:-bottom-[8px] after:-translate-x-1/2 after:mb-[-6px]", " ").concat(position === "left" && "tooltip_animateSlideRight before:-left-[150px] before:top-1/2 before:-translate-x-full before:-translate-y-1/2 before:rounded-md before:px-3 before:py-2 after:left-[1px] after:top-1/2 after:translate-x-0 after:-translate-y-1/2 after:ml-[-6px]", " ").concat(position === "right" && "tooltip_animateSlideLeft before:-right-[160px] before:top-1/2 before:translate-x-full before:-translate-y-1/2 before:rounded-md before:px-3 before:py-2 after:-right-[-2px] after:top-1/2 after:translate-x-0 after:-translate-y-1/2 after:mr-[-6px]"),
    "data-tip": text
  }, children));
};

export { Tooltip };
