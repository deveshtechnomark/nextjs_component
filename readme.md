# How to use:

"use client";

import { useState } from "react";
import { Select, MultiSelect, MultiSelectChip } from "select-dropdown";
import "select-dropdown/dist/index.css";
import "tel/dist/index.css";

const options = [
{ label: "Option 1", value: "option 1" },
{ label: "Option 2", value: "option 2" },
{ label: "Option 3", value: "option 3" },
{ label: "Hello 1", value: "Hello 1" },
];

const options2 = [
{ label: "Option 1", value: "option 21" },
{ label: "Option 2", value: "option 22" },
{ label: "Option 3", value: "option 23" },
{ label: "Hello 1", value: "Hello 21" },
];

export default function Home() {
const [selectedValue, setSelectedValue] = useState("");
// console.log("from app",selectedValue);

return (
<div>
<Select
avatar
label="hello"
required
options={options}
id="basic"
onSelect={(value: any) => setSelectedValue(value)}
errorMessage="Please select an option!"
getError={(error) => {
console.log("Select error:", error);
}}
getValue={() => {}}
validate
/>
<MultiSelect
type="checkbox"
options={options}
id="basic"
label="hello"
validate
required
onSelect={(value: any) => setSelectedValue(value)}
getValue={(e) => {
e;
}}
getError={(e) => {
e;
}}
/>
<MultiSelectChip
label="hello"
type="icons"
required
options={options2}
id="basic"
validate
onSelect={(value: any) => setSelectedValue(value)}
getValue={(e) => {e}}
getError={(e) => {e}}
hasError={true}
/>
</div>
);
}
