## how to use:-

"use client";

import { useEffect, useState } from "react";
import Table from "table";
import "table/dist/index.css";

import AcceptIcon from "./icons/AcceptIcon";
import DeleteIcon from "./icons/DeleteIcon";

export default function Home() {
const [dummyData, setDummyData] = useState([]);

// Fetching data from API
const dummyDataHandler = async () => {
const response = await fetch("https://dummyjson.com/products");
const resData = await response.json();
setDummyData(resData.products);
};
console.log(Object.values(dummyData));

useEffect(() => {
dummyDataHandler();
}, []);

const headers = ["id", "thumbnail", "title", "price", "category"];

const actions: any[] | undefined = [];

const acceptButton = <button type="button">hello</button>;

actions.push(acceptButton);

return (

<div>
{dummyData.length > 0 && (
<Table
          data={dummyData}
          headers={headers}
          actions={actions}
          sortable
          sticky
          selected
          action
        />
)}
</div>
);
}
