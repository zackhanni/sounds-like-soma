import Image from "next/image";
import CallBox from "./CallBox";

export default function Hero() {
  return (
    <div className="flex lg:flex-row flex-col-reverse lg:pt-24">
      <div className="px-4 sm:px-16 py-8">
        <h1 className="text-3xl font-bold">
          Music Recording Studios In Philadelphia
        </h1>
        <p className="text-2xl py-8">
          Philadelphia Recording Studios for Professional Audio Editing and
          Music Mixing
        </p>
        <CallBox />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/music-studios-philadelphia.webp"
          width={850}
          height={633}
          alt="Philadelphia's Best Recording Studios"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
