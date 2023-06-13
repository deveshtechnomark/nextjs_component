"use client";
import { Tooltip } from "tooltiplib";

import Layout from "@/components/Layout";
import Card from "@/components/Card";

import "tooltiplib/dist/styles.css";

const page = () => {
  return (
    <Layout>
      <Card title="Basic">
        <div className="flex flex-row gap-2.5">
          <Card title="Top">
            <Tooltip text="I'm top tooltip" position="top">
              Hover me
            </Tooltip>
          </Card>
          <Card title="Right">
            <Tooltip text="I'm right tooltip" position="right">
              Hover Me
            </Tooltip>
          </Card>
          <Card title="Bottom">
            <Tooltip text="I'm bottom tooltip" position="bottom">
              Hover Me
            </Tooltip>
          </Card>
          <Card title="Left">
            <Tooltip text="I'm left tooltip" position="left">
              Hover Me
            </Tooltip>
          </Card>
        </div>
      </Card>
    </Layout>
  );
};

export default page;
