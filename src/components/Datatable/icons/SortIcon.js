import React from "react";

function SortIcon({ order }) {
  return (
    <div>
      <svg
        width="7"
        height="10"
        viewBox="0 0 7 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 0L6.53109 3H0.468911L3.5 0Z"
          fill={order === "asc" ? "#333" : "#6E6D7A"}
        />
        <path
          d="M3.5 10L0.468911 7L6.53109 7L3.5 10Z"
          fill={order === "desc" ? "#333" : "#6E6D7A"}
        />
      </svg>
    </div>
  );
}

export default SortIcon;