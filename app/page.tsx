"use client";
import { useState } from "react";
import Accordion from "./components/Accordion";

import Hero from "./components/Hero";
import Services from "./components/Services";
import AccordionDataHome from "./components/AccordionDataHome";

export default function Home() {
  const [open, setOpen] = useState<number | false>(false);

  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(false);
    }
    setOpen(index);
  };

  return (
    <div className="bg-[#2E2E2E] w-full h-full">
      <Hero />
      <Services />
      <Accordion useData={AccordionDataHome} />
    </div>
  );
}
