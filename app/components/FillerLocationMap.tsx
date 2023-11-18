import Image from "next/image";
import Link from "next/link";

export default function FillerLocationMap() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="sm:max-w-[50%]">
        <h2 className="text-2xl font-bold">Music Studios in Philadelphia</h2>
        <p>
          Sounds Like Soma is located in South Philadelphia, Point Breeze
          neighborhood. This area is rich in history and natural beauty. We are
          located 10 minutes from Center city and only a few blocks from Broad
          Street. Also, if you are coming from the Delaware or New Jersey area,
          we are only a quick drive away from your bridge of choice via the
          Schuylkill Expressway. If you are looking for a
          <b>philadelphia music studio</b> in the tri-state area or beyond, we
          are ready to work with you!
        </p>
      </div>
      <Link
        href="https://maps.google.com/maps?ll=39.932041,-75.179406&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=3588667047185604349"
        target="blank"
      >
        <Image
          src="/soma-studios-google-maps.webp"
          width={350}
          height={275}
          alt="Find Soma on Google Maps"
        />
      </Link>
    </div>
  );
}
