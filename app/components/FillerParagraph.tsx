import React from "react";
import FillerDataHome from "./FillerDataHome";

interface FillerParagraphProps {
  useData: {
    title: string;
    paragraph: string;
  }[];
}

export default function FillerParagraph(props: FillerParagraphProps) {
  return (
    <div className="max-w-[90%] sm:max-w-[75%] 2xl:max-w-[50%]">
      {props.useData.map((filler) => {
        return (
          <div key={filler.title} className="py-4">
            <h3 className="text-2xl">{filler.title}</h3>
            <p>{filler.paragraph}</p>
          </div>
        );
      })}
    </div>
  );
}
