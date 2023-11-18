import React from "react";
import Button from "./Button";
import Image from "next/image";

const imageData = [
  {
    image: "/philadelphia-vocal-recording.webp",
    text: "Recording",
    alt: "",
  },
  {
    image: "/philadelphia-mixing-studios.webp",
    text: "Mixing",
    alt: "",
  },
  {
    image: "/philadelphia-mastering-studios.webp",
    text: "Mastering",
    alt: "",
  },
];

export default function FillerEveryStepOfTheWay() {
  return (
    <div className="bg-[#1c1c1c] py-32 w-full">
      <h3 className="text-2xl text-center">
        We Help You Every Step Of The Way
      </h3>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 py-4">
        {imageData.map((image) => {
          return (
            <div
              key={image.text}
              className="bg-[#fffff0] w-[290px] h-[180px] rounded-lg flex items-center justify-center"
            >
              <div>
                <Image
                  src={image.image}
                  width={80}
                  height={80}
                  alt={image.alt}
                  className=""
                />

                <p className="text-[#1c1c1c] text-2xl font-bold">
                  {image.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <div className="p-4">
          <h3 className="text-2xl">Get The True Soma Sound</h3>
          <p className="max-w-xl">
            Soma Sound is a modern, 4 room creative facility located in the
            Point Breeze district of South Philadelphia, PA 19146. This 3 story
            building can accommodate all of your tracking needs, from bands to
            gospel choirs to voice over recordings. Come and see why some call
            us the best music studios in Philadelphia.
          </p>
        </div>
        <Button
          link="https://square.site/book/VC0MQHN4GS4ND/sls-studio-b-philadelphia-pa"
          name="Book a Studio"
        />
      </div>
    </div>
  );
}
