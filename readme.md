# How to Use it:

"use client";

import { useEffect, useState } from "react";
import Table from "table";
import "table/dist/index.css";

import AcceptIcon from "@/app/icons/AcceptIcon";
import DeleteIcon from "@/app/icons/DeleteIcon";
import RejectIcon from "@/app/icons/RejectIcon";

export default function Home() {
const [dummyData, setDummyData] = useState([]);

// Fetching data from API
const dummyDataHandler = async () => {
const response = await fetch("https://dummyjson.com/products");
const resData = await response.json();
setDummyData(resData.products);
};

useEffect(() => {
dummyDataHandler();
}, []);

const headers = [
{
heading: "ID",
field: "id",
sort: true,
},
{
heading: "Title",
field: "title",
sort: true,
},
{
heading: "Thumbnail",
field: "thumbnail",
sort: false,
},
{
heading: "Price",
field: "price",
sort: true,
},
{
heading: "Category",
field: "category",
sort: true,
},
];

const handleAccept = (rowId: any) => {
console.log("Accepted row with ID:", rowId);
};

const handleDelete = (rowId: any) => {
console.log("Deleted row with ID:", rowId);
};

const handleReject = (rowId: any) => {
console.log("Rejected row with ID:", rowId);
};

const actionButtons = (
<span className="flex items-center justify-evenly">
<span>
<AcceptIcon />
</span>
<span>
<DeleteIcon />
</span>
<span>
<RejectIcon />
</span>
</span>
);

const actions = [actionButtons];

return (

<div>
{dummyData.length > 0 && (
<Table
          data={dummyData}
          headers={headers}
          actions={actions}
          sortable
          action
          expandable
          sticky
          selected
        />
)}
</div>
);
}
