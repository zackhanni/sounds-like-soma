import Link from "next/link";
import React from "react";

interface ButtonProps {
  name: string;
  link: string;
}

export default function Button(props: ButtonProps) {
  return (
    <Link href={props.link}>
      <div className="text-xl bg-purple-800 hover:bg-purple-950 py-2 px-4 rounded-md duration-200 max-w-fit">
        {props.name}
      </div>
    </Link>
  );
}
