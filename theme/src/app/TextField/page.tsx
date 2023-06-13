"use client";
import { TextField } from "form-elements";

import Card from "@/components/Card";
import Layout from "@/components/Layout";

import "form-elements/dist/index.css";

const page = () => {
  return (
    <Layout>
      <Card title="Basic">
        <TextField />
      </Card>
    </Layout>
  );
};

export default page;
