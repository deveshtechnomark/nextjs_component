"use client";
import { CheckBox } from "form-elements";

import Layout from "@/components/Layout";
import Card from "@/components/Card";

import "form-elements/dist/index.css";

const page = () => {
  return (
    <Layout>
      <Card title="Basic">
        <div className="flex flex-row-reverse justify-end">
          <CheckBox
            id="5"
            name="checkbox"
            label="Checked Disabled"
            defaultChecked
            disabled
          />
          <CheckBox id="4" name="checkbox" label="Disabled" disabled />
          <CheckBox id="3" name="checkbox" label="Focused" autoFocus />
          <CheckBox id="2" name="checkbox" label="Unchecked" />
          <CheckBox id="1" name="checkbox" label="Checked" defaultChecked />
        </div>
      </Card>

      <Card title="Invalid">
        <div className="flex flex-row-reverse justify-end">
          <CheckBox
            id="i4"
            name="invalid_checkbox"
            variant="invalid"
            label="Checked Disabled"
            defaultChecked
            disabled
          />
          <CheckBox
            id="i3"
            name="invalid_checkbox"
            variant="invalid"
            label="Disabled"
            disabled
          />
          <CheckBox
            id="i2"
            name="invalid_checkbox"
            variant="invalid"
            label="Unchecked"
          />
          <CheckBox
            id="i1"
            name="invalid_checkbox"
            variant="invalid"
            label="Checked"
            defaultChecked
          />
        </div>
      </Card>

      <Card title="Intermediate">
        <div className="flex flex-row-reverse justify-end">
          <CheckBox
            id="id4"
            variant2="intermediate"
            name="inter_checkbox"
            label="Checked Disabled"
            defaultChecked
            disabled
          />
          <CheckBox
            id="id3"
            variant2="intermediate"
            name="inter_checkbox"
            label="Disabled"
            disabled
          />
          <CheckBox
            id="id2"
            variant2="intermediate"
            name="inter_checkbox"
            label="Unchecked"
          />
          <CheckBox
            id="id1"
            variant2="intermediate"
            name="inter_checkbox"
            label="Checked"
            defaultChecked
          />
        </div>
      </Card>

      <Card title="Invalid Intermediate">
        <div className="flex flex-row-reverse justify-end">
          <CheckBox
            id="iid4"
            variant="invalid"
            variant2="intermediate"
            name="invalid_inter_checkbox"
            label="Checked Disabled"
            defaultChecked
            disabled
          />
          <CheckBox
            id="iid3"
            variant="invalid"
            variant2="intermediate"
            name="invalid_inter_checkbox"
            label="Disabled"
            disabled
          />
          <CheckBox
            id="iid2"
            variant="invalid"
            variant2="intermediate"
            name="invalid_inter_checkbox"
            label="Unchecked"
          />
          <CheckBox
            id="iid1"
            variant="invalid"
            variant2="intermediate"
            name="invalid_inter_checkbox"
            label="Checked"
            defaultChecked
          />
        </div>
      </Card>
    </Layout>
  );
};

export default page;
