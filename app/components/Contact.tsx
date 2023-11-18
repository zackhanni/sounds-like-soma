import React from "react";
import Button from "./Button";

export default function Contact() {
  return (
    <div className="text-center bg-[#1c1c1c] py-32 w-full ">
      <h2>Contact us</h2>
      <p className="text-6xl py-4">Want to learn more?</p>
      <p className="pb-8">
        Reach out for a no obligation, initial conversation
      </p>
      <Button link="/contact" name="Let's talk" />
    </div>
  );
}
