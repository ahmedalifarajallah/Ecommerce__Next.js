import Image from "next/image";
import Link from "next/link";
import { socials } from "@/data/SocialLinks";

const SocialLinks = () => {
  return (
    <div className="social-links__footer flex items-center gap-4 mt-5 py-1">
      {socials.map((social, index) => (
        <Link
          href={social.url}
          target="_blank"
          key={index}
          className="hover:scale-110 transition-all duration-300 ease-in-out"
          rel="noopener noreferrer"
          aria-label={`Visit our ${social.name} page`}
        >
          <div className="relative w-5 h-5">
            <Image
              src={social.icon}
              alt={social.name}
              fill
              sizes="24px"
              className="object-contain cursor-pointer"
              loading="lazy"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
