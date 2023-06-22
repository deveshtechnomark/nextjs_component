import React from "react";
import "./index.scss";
import { Tooltip } from "tooltip";
import "tooltip/dist/index.css";

const Close: React.FC = () => {
  return (
    <>
      <Tooltip position="top" text="Close">
        <div className="main">
          <button
            className="fromMiddle circle scaleUp"
            data-animation="minimize"
          >
            <span></span>
          </button>
        </div>
      </Tooltip>
    </>
  );
};

export { Close };
