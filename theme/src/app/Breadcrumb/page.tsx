"use client";
import { Breadcrumb } from "Breadcrumb";

import Layout from "@/components/Layout";
import Card from "@/components/Card";

import "Breadcrumb/dist/tailwind.css";

const items = [
  { label: "Home", url: "/" },
  { label: "Breadcrumb", url: "/Breadcrumb" },
];

const page = () => {
  return (
    <Layout>
      <Card title="Basic">
        <Breadcrumb items={items} />
      </Card>
      <Card title="Customized">
        <Breadcrumb items={items} variant=">" />
      </Card>
    </Layout>
  );
};

export default page;
