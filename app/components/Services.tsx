"use client";

import { useInView } from "react-intersection-observer";
import React from "react";
import ServicesData from "./ServicesData";
import Link from "next/link";
import Button from "./Button";

export default function Services() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 py-32 overflow-hidden 2xl:max-w-[68%]">
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
            className={`hover:-translate-y-1 bg-[#1c1c1c] flex flex-row flex-wrap rounded-lg shadow-2xl p-4 max-w-[400px] min-w-[300px] ${
              inView ? "show" : "hide"
            }`}
          >
            <Link href={service.link}>
              <h2 className="text-3xl pb-4 text-purple-800 font-bold">
                {service.title}
              </h2>
              <p className="pb-4">{service.description}</p>
              <div className="grid place-items-center">
                <Button link={service.link} name="Learn More" />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
