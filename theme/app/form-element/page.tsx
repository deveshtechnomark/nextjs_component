"use client";

import {
  Input,
  CheckBox,
  Radio,
  ImageButton,
  DropDown,
  ColorInput,
  Label,
  Button,
  Form,
  FieldSet,
} from "form-elements";

import "form-elements/dist/index.css";

const page = () => {
  const options = [
    { value: "guj", label: "gujarat" },
    { value: "mh", label: "maharashtra" },
    { value: "bg", label: "banglore" },
  ];
  return (
    <>
      <div className="card w-100">
        <Form>
          <FieldSet field="Form Elements">
            <div className="row">
              <div className="col-6">
                <Label>Name:</Label>
                <Input type="text" />
              </div>
              <div className="col-6">
                <Input type="email" validate="on" haslabel="Email" />
              </div>
              <div className="col-6">
                <Input
                  type="password"
                  passwordvisibility="on"
                  validate="on"
                  haslabel="password"
                />
              </div>
              <div className="col-6">
                <DropDown options={options} label="Select Dropdown" />
              </div>
              <div className="col-6">
                <div className="d-flex flex-wrap w-100 justify-content-between">
                  <CheckBox label="ReactJs" />
                  <CheckBox label="Angular" />
                  <CheckBox label="NodeJs" />
                  <CheckBox label=".Net" />
                  <CheckBox label="ROR" />
                  <CheckBox label="Wordress" />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-wrap w-100 align-items-center">
                  <Radio label="Male" />
                  <Radio label="Female" />
                </div>
              </div>
              <div className="col-6">
                <ColorInput label="Select Color" />
              </div>
              {/* <div className="col-6">
                <ImageButton src="/" />
              </div> */}
            </div>
            <Button type="submit">Submit</Button>
          </FieldSet>
        </Form>
      </div>
    </>
  );
};

export default page;
