"use client"

import React, { useState } from "react";
import { MultiSelect, Select } from "dropdown-lib";
import "dropdown-lib/dist/index.css";

const page = () => {

  const options = ["Mihir", "Shyam", "Sagar", "Kenil", "Bhavesh Adtani"];
  const [selected, setSelected] = useState([]);
  return (<>
    <div className="container">
      <div className="row">
        <div className="col-md-3" >
          <Select options={options} labelName="Select Option Default" onSelect={(value: any) => setSelected(value)} />
        </div>
        <div className="col-md-3" >
          <MultiSelect options={options} type="checkbox" labelName="Select Option Checkbox" onSelect={(value: any) => setSelected(value)} />
        </div>
        <div className="col-md-3" >
          <MultiSelect options={options} type="icon" iconName="faUserCircle" labelName="Select Option Icon" onSelect={(value: any) => setSelected(value)} />
        </div>
        <div className="col-md-3" >
          <MultiSelect options={options} type="icon" iconName="faUserCircle" labelName="Select Option Icon" onSelect={(value: any) => setSelected(value)} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3" >
          <MultiSelect options={options} type="chip" labelName="Select Option Chip" onSelect={(value: any) => setSelected(value)} />
        </div>
      </div>
    </div>
  </>
  )
}

export default page