import React from "react";
import SocialMedia from "./SocialMedia";
import Link from "next/link";
import FooterData from "./FooterData";

export default function Footer() {
  return (
    <footer className=" bg-[#7115bc] text-[#fffff0] flex justify-center w-full">
      <div className="py-8">
        <div className="">
          <Link href={"/"}>
            <h2 className="text-2xl">Sounds Like Soma</h2>
          </Link>
        </div>

        <hr className="py-8" />
        <div className="">
          <div className="flex flex-row justify-between flex-wrap w-full text-left mb-8 ">
            {FooterData.map((section) => {
              return (
                <div key={section.heading} className="footer-links">
                  <div>
                    <h3 className="font-bold pb-2">{section.heading}</h3>
                    {section.links.map((links) => {
                      return (
                        <div key={links.name}>
                          <Link href={links.link} target="_blank">
                            {links.name}
                          </Link>
                          <br />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="font-bold">
            ©{new Date().getFullYear()} Sounds Like Soma, LLC
          </p>
          <p className="p-8">Recording Studios South Philadelphia, PA 19146</p>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
}
