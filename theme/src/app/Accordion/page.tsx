"use client";
import { Accordion } from "accordionlib";

import Card from "@/components/Card";
import Layout from "@/components/Layout";

import "accordionlib/dist/styles.css";

const dataCollection = [
  {
    question: "What makes blockchain trustworthy?",
    answer:
      "There are three sides to this answer. Firstly, nobody but the owner of the data can access it without permission. Thus, it is a safe way to protect data from third parties who should not see the information. Secondly, the data can be tracked at any time. It comes with a timestamp which indicates when the information was written on the blockchain and it is always available for fetching. ",
  },
  {
    question: "Why Do You Want to Work at This Company?",
    answer:
      "Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. ",
  },
  {
    question: "What Are Your Greatest Strengths?",
    answer:
      "Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. ",
  },
];

export default function page() {
  return (
    <Layout>
      <div className="flex flex-row gap-2.5">
        <Card title="Basic">
          <Accordion dataCollection={dataCollection} label="Label" />
        </Card>
        <Card title="Basic with icon">
          <Accordion dataCollection={dataCollection} label="Label" icon />
        </Card>
      </div>
      <div className="flex flex-row gap-2.5">
        <Card title="Basic One">
          <Accordion dataCollection={dataCollection} label="Label" one />
        </Card>
        <Card title="Basic One with icon">
          <Accordion dataCollection={dataCollection} label="Label" icon one />
        </Card>
      </div>
    </Layout>
  );
}
