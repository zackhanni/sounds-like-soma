"use client";

import Link from "next/link";
import NavigationData from "./NavigationData";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navigation() {
  const [click, setClick] = useState(false);
  // const handleClick = setClick(!click);

  return (
    <div className="text-purple-800 bg-[#1c1c1c] font-medium flex justify-between px-8">
      <div className="p-4">
        <h2 className="font-bold text-4xl">Sounds Like Soma</h2>
      </div>

      <nav>
        <ul className="flex items-center">
          {NavigationData.map((nav) => {
            return (
              <li key={nav.name} className={`p-4 hover:underline`}>
                <Link href={nav.link}>{nav.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="hidden lg:flex items-center">
        <Button
          name="Book Now"
          link="https://square.site/book/VC0MQHN4GS4ND/sls-studio-b-philadelphia-pa"
        />
      </div>
      <div className="lg:hidden">{click ? <FaBars /> : <FaTimes />}</div>
    </div>
  );
}
