"use client";
import { useState } from "react";
import Accordion from "./components/Accordion";

import Hero from "./components/Hero";
import Services from "./components/Services";
import AccordionDataHome from "./components/AccordionDataHome";
import FillerDataHome from "./components/FillerDataHome";
import Contact from "./components/Contact";
import FillerParagraph from "./components/FillerParagraph";
import Button from "./components/Button";
import FillerEveryStepOfTheWay from "./components/FillerEveryStepOfTheWay";

export default function Home() {
  const [open, setOpen] = useState<number | false>(false);

  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(false);
    }
    setOpen(index);
  };

  return (
    <div className="bg-[#2E2E2E] flex flex-col justify-center items-center">
      <Hero />
      <Services />
      <FillerEveryStepOfTheWay />
      <FillerParagraph useData={FillerDataHome} />
      <Contact />
      <Accordion useData={AccordionDataHome} />
    </div>
  );
}
