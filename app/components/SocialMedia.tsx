import Link from "next/link";
import { FaLinkedin, FaGithub, FaDribbble, FaGoogle } from "react-icons/fa";

const SocialData = [
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/zackhanni/",
    icon: <FaLinkedin />,
  },
  {
    label: "Github",
    href: "https://github.com/zackhanni",
    icon: <FaGithub />,
  },
  {
    label: "Dribble",
    href: "https://dribbble.com/zackhanni",
    icon: <FaDribbble />,
  },
  {
    label: "Google",
    href: "mailto:zack.hanni@gmail.com",
    icon: <FaGoogle />,
  },
];

export default function SocialMedia() {
  return (
    <div className="social-media flex">
      {SocialData.map((social) => {
        return (
          <Link key={social.label} href={social.href} target="_blank">
            <div className="pr-4 text-3xl hover:text-[#514E6D] duration-300">
              {social.icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
