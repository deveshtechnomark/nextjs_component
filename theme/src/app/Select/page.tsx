"use client";
import { useState } from "react";
import { Select, MultiSelectChip, MultiSelectSearch } from "select-dropdown-tw";

import Layout from "@/components/Layout";
import Card from "@/components/Card";

import "select-dropdown-tw/dist/styles.css";

const options = [
  { label: "Option 1", value: "option 1" },
  { label: "Option 2", value: "option 2" },
  { label: "Option 3", value: "option 3" },
  { label: "Option 4", value: "option 4" },
];

const page = () => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <Layout>
      <Card title="Basic">
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <Select
            options={options}
            label="Basic"
            onSelect={(value) => setSelectedValue(value)}
          />
          <Select
            options={options}
            label="Icons"
            type="icons"
            onSelect={(value) => setSelectedValue(value)}
          />
        </div>
      </Card>

      <Card title="Customized">
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <MultiSelectSearch
            options={options}
            label="Basic"
            onSelect={(value) => setSelectedValue(value)}
          />
          <MultiSelectSearch
            options={options}
            type="checkbox"
            label="Checkbox"
            onSelect={(value) => setSelectedValue(value)}
          />
          <MultiSelectSearch
            options={options}
            type="icons"
            label="Icons"
            onSelect={(value) => setSelectedValue(value)}
          />
        </div>
      </Card>
      
      <Card title="Multiselect with chip">
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <MultiSelectChip
            options={options}
            label="Basic"
            onSelect={(value) => setSelectedValue(value)}
          />
          <MultiSelectChip
            options={options}
            type="checkbox"
            label="Checkbox"
            onSelect={(value) => setSelectedValue(value)}
          />
          <MultiSelectChip
            options={options}
            type="icons"
            label="Icons"
            onSelect={(value) => setSelectedValue(value)}
          />
        </div>
      </Card>
    </Layout>
  );
};

export default page;
