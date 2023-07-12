import React from "react";
interface AccordionItem {
    question: string;
    answer: string;
}
interface AccordionProps {
    dataCollection: AccordionItem[];
    label?: string;
    icon?: boolean;
    one?: boolean;
}
declare const Accordion: React.FC<AccordionProps>;
export { Accordion };
