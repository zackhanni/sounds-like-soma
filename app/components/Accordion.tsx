"use client";
import { useState } from "react";
import { AccordionItem } from "./AccordionItem";

interface AccordionProps {
  useData: {
    title: string;
    description: string;
  }[];
}

export default function Accordion(props: AccordionProps) {
  const [open, setOpen] = useState<number | false>(false);

  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(false);
    }
    setOpen(index);
  };

  return (
    <div className="py-24 overflow-hidden max-w-[1450px]">
      <h2 className="text-3xl font-bold px-12">FAQ</h2>
      {props.useData.map((data, index) => {
        return (
          <AccordionItem
            key={index}
            open={index === open}
            title={data.title}
            description={data.description}
            toggle={() => toggle(index)}
          />
        );
      })}
    </div>
  );
}
