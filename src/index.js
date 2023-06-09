import React from "react";
import "./index.css";
import { BsChevronDown, BsChevronUp, BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAccordions: [],
      accordion: -1,
    };
  }

  toggleAccordion = (index) => {
    const { activeAccordions } = this.state;
    const isActive = activeAccordions.includes(index);

    if (isActive) {
      this.setState({
        activeAccordions: activeAccordions.filter((i) => i !== index),
      });
    } else {
      this.setState({ activeAccordions: [...activeAccordions, index] });
    }
  };

  toggleAccordionOne = (index) => {
    const { activeAccordions } = this.state;

    if (activeAccordions.includes(index)) {
      this.setState({ activeAccordions: [] }); // Close all accordions
    } else {
      this.setState({ activeAccordions: [index] }); // Open the clicked accordion
    }
  };

  render() {
    const { activeAccordions } = this.state;
    const { dataCollection, label, icon, one } = this.props;

    return (
      <div className="bg-white border border-gray-500 rounded p-10 mx-auto">
        {label && <div className="text-md md:text-xl font-semibold">{label}</div>}
        <div className="w-full">
          {dataCollection.map((item, index) => (
            <div
              key={index}
              className={`border border-transparent text-[14px] md:text-[16px] ${
                activeAccordions.includes(index) ? "border-b-textColor" : "border-b-gray-300"
              } cursor-pointer`}
              onClick={
                one
                  ? () => this.toggleAccordionOne(index)
                  : () => this.toggleAccordion(index)
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
                <span className="flex justify-center items-center">
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
                    activeAccordions.includes(index) ? "my-2" : ""
                  }`}
                >
                  {activeAccordions.includes(index) ? `${item.answer}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export { Accordion };
