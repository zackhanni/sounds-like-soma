import Link from "next/link";
import React from "react";

interface ButtonProps {
  name: string;
  link: string;
}

export default function Button(props: ButtonProps) {
  return (
    <Link href={props.link}>
      <div className="text-black text-xl font-bold bg-amber-400 hover:bg-amber-500 py-3 px-6 rounded-md">
        {props.name}
      </div>
    </Link>
  );
}
