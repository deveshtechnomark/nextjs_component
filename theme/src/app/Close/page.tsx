"use client";
import { Close } from "closebuttonlib";
import { Tooltip } from "tooltiplib";

import Layout from "@/components/Layout";
import Card from "@/components/Card";

import "closebuttonlib/dist/index.css";
import "tooltiplib/dist/styles.css";

const page = () => {
  return (
    <Layout>
      <Card title="Basic">
        <div className="flex">
          <Tooltip text="Close">
            <Close />
          </Tooltip>
        </div>
      </Card>
    </Layout>
  );
};

export default page;
