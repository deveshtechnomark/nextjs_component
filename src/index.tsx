import React from "react";
import "./index.scss";

const Close: React.FC = () => {
  return (
    <>
      <div className="main">
        <button className="fromMiddle circle scaleUp" data-animation="minimize">
          <span></span>
        </button>
      </div>
    </>
  );
};

export { Close };
