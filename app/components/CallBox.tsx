import React from "react";
import Button from "./Button";
import Link from "next/link";
import CallBoxData from "./CallBoxData";

export default function CallBox() {
  return (
    <div className="bg-[#1c1c1c] rounded-lg p-4">
      <div className="text-xl font-bold pb-4">
        {CallBoxData.map((item) => {
          return (
            <div key={item.label} className="flex">
              <p className="pr-2">{item.label}</p>
              <Link
                href={item.link}
                className="text-purple-800 hover:text-purple-950 "
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="py-2">
        <Button
          name="Book a Studio Session"
          link="https://square.site/book/VC0MQHN4GS4ND/sls-studio-b-philadelphia-pa"
        />
      </div>
      <p>Note: To book a session with Zack, contact him directly.</p>
    </div>
  );
}
