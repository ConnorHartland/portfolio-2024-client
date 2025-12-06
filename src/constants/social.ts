import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export interface SocialLink {
  platform: string;
  url: string;
  icon: IconType;
  color: string; // Tailwind color class
}

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/ConnorHartland",
    icon: FaGithub,
    color: "text-white hover:text-gray-400"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/connor-hartland-88a34b114/",
    icon: FaLinkedin,
    color: "text-blue-500 hover:text-blue-300"
  },
  {
    platform: "Email",
    url: "mailto:connorhartland@gmail.com",
    icon: FaEnvelope,
    color: "text-red-500 hover:text-red-300"
  }
];
