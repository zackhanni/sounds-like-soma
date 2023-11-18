"use client";

import { useInView } from "react-intersection-observer";
import React from "react";
import ServicesData from "./ServicesData";
import Link from "next/link";
import Button from "./Button";

export default function Services() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 py-32 overflow-hidden max-w-[1450px]">
      {ServicesData.map((service) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { ref, inView } = useInView({
          threshold: 0.15,
          triggerOnce: true,
        });
        return (
          <div
            key={service.title}
            ref={ref}
            className={`card bg-[#1c1c1c] flex flex-row flex-wrap rounded-lg shadow-2xl p-4 max-w-[600px] min-w-[300px] ${
              inView ? "show" : "hide"
            }`}
          >
            <Link href={service.link}>
              <h2 className="text-3xl pb-4 text-[#7115bc] font-bold">
                {service.title}
              </h2>
              <p className="pb-4">{service.description}</p>
              <Button link={service.link} name="Learn More" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}