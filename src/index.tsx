import React, { useState } from "react";
import "./index.css";
import { BsChevronDown, BsChevronUp, BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { Typography } from "Typography";
import "Typography/dist/index.css";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  dataCollection: AccordionItem[];
  label?: string;
  icon?: boolean;
  one?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  dataCollection,
  label,
  icon,
  one,
}) => {
  const [activeAccordions, setActiveAccordions] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    if (activeAccordions.includes(index)) {
      setActiveAccordions(activeAccordions.filter((i) => i !== index));
    } else {
      setActiveAccordions([...activeAccordions, index]);
    }
  };

  const toggleAccordionOne = (index: number) => {
    if (activeAccordions.includes(index)) {
      setActiveAccordions([]);
    } else {
      setActiveAccordions([index]);
    }
  };

  return (
    <div className="px-10 py-5 mx-auto">
      {label && (
        <div>
          <Typography type="label">{label}</Typography>
        </div>
      )}
      <div className="w-full">
        {dataCollection.map((item, index) => (
          <div
            key={index}
            className={`border border-transparent ${
              activeAccordions.includes(index)
                ? "border-b-textColor"
                : "border-b-borderBottomColor"
            } cursor-pointer`}
            onClick={
              one
                ? () => toggleAccordionOne(index)
                : () => toggleAccordion(index)
            }
          >
            <div
              className={`flex justify-between py-4 px-3 hover:bg-hoverColor ${
                activeAccordions.includes(index) ? "bg-bgColor" : ""
              }`}
            >
              <Typography
                type="h6"
                className={`${
                  activeAccordions.includes(index)
                    ? "text-textColor "
                    : "text-textColor"
                }`}
              >
                {item.question}
              </Typography>
              <span className="flex justify-center items-center ml-6">
                {icon ? (
                  <div>
                    <div className="w-[16px] h-[2px] bg-textColor"></div>
                    <div
                      className={`w-[16px] bg-textColor transition-all duration-500 ${
                        activeAccordions.includes(index)
                          ? "plus h-0"
                          : "transform translate-x-0 -translate-y-0.5 -rotate-90 h-[2px]"
                      }`}
                    ></div>
                  </div>
                ) : (
                  <span
                    className={`transition-all duration-500 ${
                      activeAccordions.includes(index)
                        ? "default active -rotate-180"
                        : "default"
                    }`}
                  >
                    <BsChevronDown />
                  </span>
                )}
              </span>
            </div>
            <div>
              <Typography
                type="h6"
                className={`text-textColor px-3 ${
                  activeAccordions.includes(index)
                    ? "my-2 transition-all duration-300"
                    : ""
                }`}
              >
                {activeAccordions.includes(index) ? `${item.answer}` : ""}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Accordion };
