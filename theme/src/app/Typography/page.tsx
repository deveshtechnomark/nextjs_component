"use client";
import { Typography } from "Typography";

import Layout from "@/components/Layout";
import Card from "@/components/Card";

import "Typography/dist/tailwind.css";

const Desc = ({ fs, fw }: { fs: string; fw?: string }) => {
  return (
    <p>
      font-size:{fs}
      {fw && ` / font-weight:${fw}`}
    </p>
  );
};

const page = () => {
  return (
    <Layout>
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <Card title="Heading - Regular">
          <div>
            <Typography type="h1">Heading 1</Typography>
            <Desc fs="40px" />
            <Typography type="h2">Heading 2</Typography>
            <Desc fs="32px" />
            <Typography type="h3">Heading 3</Typography>
            <Desc fs="28px" />
            <Typography type="h4">Heading 4</Typography>
            <Desc fs="24px" />
            <Typography type="h5">Heading 5</Typography>
            <Desc fs="20px" />
            <Typography type="h6">Heading 6</Typography>
            <Desc fs="16px" />
          </div>
        </Card>

        <Card title="Body - Texts">
          <div>
            <Typography type="title">Title</Typography>
            <Desc fs="20px" fw="Medium" />
            <Typography type="sub-title">Sub-Title</Typography>
            <Desc fs="16px" fw="Medium" />
            <Typography type="table-title">TABLE TITLE</Typography>
            <Desc fs="16px" fw="Bold" />
            <Typography type="body">Body</Typography>
            <Desc fs="16px" fw="Regular" />
            <Typography type="button">Button</Typography>
            <Desc fs="16px" fw="Regular" />
            <Typography type="label">Label</Typography>
            <Desc fs="14px" fw="Regular" />
            <Typography type="tool-tip">Tool Tip</Typography>
            <Desc fs="14px" fw="Regular" />
            <Typography type="badge">Badge</Typography>
            <Desc fs="10px" fw="Regular" />
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default page;
