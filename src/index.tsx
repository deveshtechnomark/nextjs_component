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
          <Typography type="h6">
            <div
              key={index}
              className={`border border-transparent ${
                activeAccordions.includes(index)
                  ? "border-b-textColor"
                  : "border-b-gray-300"
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
                <p
                  className={`${
                    activeAccordions.includes(index)
                      ? "text-textColor "
                      : "text-textColor"
                  } font-medium`}
                >
                  {item.question}
                </p>
                <span className="flex justify-center items-center ml-6">
                  {activeAccordions.includes(index) ? (
                    <span>{icon ? <FiMinus /> : <BsChevronUp />}</span>
                  ) : (
                    <span>{icon ? <BsPlusLg /> : <BsChevronDown />}</span>
                  )}
                </span>
              </div>
              <div>
                <p
                  className={`text-textColor px-3 ${
                    activeAccordions.includes(index)
                      ? "my-2 transition-all duration-300"
                      : ""
                  }`}
                >
                  {activeAccordions.includes(index) ? `${item.answer}` : ""}
                </p>
              </div>
            </div>
          </Typography>
        ))}
      </div>
    </div>
  );
};

export { Accordion };
