"use client";

import { DataTable } from "next-datatable";
import "next-datatable/dist/index.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import styles from "./Datatable.module.css";

const page = () => {
  const [dummyData, setDummyData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    dummyDataHandler();
  };

  // Fetching data from API
  const dummyDataHandler = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const resData = await response.json();
    setDummyData(resData.products);
    setIsClicked(false);
  };

  useEffect(() => {
    dummyDataHandler();
  }, []);
  const headers = ["id", "thumbnail", "title", "price", "category"];
  const header = (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>Products</h2>
      <button
        className={`${styles.refreshBtn} ${
          isClicked ? `${styles.clicked}` : ""
        }`}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faRotate} />
      </button>
    </div>
  );

  const footer = `In total there are ${
    dummyData ? dummyData.length : 0
  } products.`;

  return (
    <div className="card w-100">
      <h1 className="subTitle">DataTable</h1>
      {dummyData.length > 0 && (
        <DataTable
          data={dummyData}
          headers={headers}
          header={header}
          footer={footer}
        />
      )}
    </div>
  );
};

export default page;
