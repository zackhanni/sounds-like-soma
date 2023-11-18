import Image from "next/image";
import CallBox from "./CallBox";

export default function Hero() {
  return (
    <div className="flex">
      <div>
        <h1 className="text-4xl font-bold">
          Music Recording Studios In Philadelphia
        </h1>
        <p className="text-2xl py-8">
          Philadelphia Recording Studios for Professional Audio Editing and
          Music Mixing
        </p>
        <CallBox />
      </div>
      <div>
        <Image
          src="/music-studios-philadelphia.webp"
          width={850}
          height={633}
          alt="Philadelphia's Best Recording Studios"
        />
      </div>
    </div>
  );
}
