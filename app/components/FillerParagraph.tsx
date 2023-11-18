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
    <div className="max-w-[1450px]">
      {props.useData.map((filler) => {
        return (
          <div key={filler.title} className="p-4">
            <h3 className="text-2xl">{filler.title}</h3>
            <p>{filler.paragraph}</p>
          </div>
        );
      })}
    </div>
  );
}
