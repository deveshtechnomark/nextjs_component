"use client";
import { Radio } from "form-elements";

import Layout from "@/components/Layout";
import Card from "../../components/Card";

import "form-elements/dist/index.css";

const page = () => {
  return (
    <Layout>
      <Card title="Basic">
        <div className="flex flex-row-reverse justify-end">
          <Radio
            id="dc1"
            label="Checked Disabled"
            name="checked_radio"
            defaultChecked
            disabled
          />
          <Radio id="4" label="Disabled" name="radio" disabled />
          <Radio id="3" label="Focused" name="radio" autoFocus />
          <Radio id="2" label="Unchecked" name="radio" />
          <Radio id="1" label="Checked" name="radio" defaultChecked />
        </div>
      </Card>

      <Card title="Invalid">
        <div className="flex flex-row-reverse justify-end">
          <Radio
            variant="invalid"
            id="dc2"
            label="Checked Disabled"
            name="inavalid_checked_radio"
            defaultChecked
            disabled
          />
          <Radio
            variant="invalid"
            id="i4"
            label="Disabled"
            name="invalid_radio"
            disabled
          />
          <Radio
            variant="invalid"
            id="i2"
            label="Unchecked"
            name="invalid_radio"
          />
          <Radio
            variant="invalid"
            id="i1"
            label="Checked"
            name="invalid_radio"
            defaultChecked
          />
        </div>
      </Card>
    </Layout>
  );
};

export default page;
