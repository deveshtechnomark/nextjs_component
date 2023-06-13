import React from "react";

const Card = ({ children, title }) => {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        margin: "30px 0px",
        width: "100%",
        borderRadius: "7px",
        padding: "20px",
        boxShadow: "1px 1px 1px 1px gray",
      }}
    >
      <h5 className="mb-[20px] text-lg font-light">{title}</h5>
      {children}
    </div>
  );
};

export default Card;
