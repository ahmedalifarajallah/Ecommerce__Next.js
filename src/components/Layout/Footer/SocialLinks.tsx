import Image from "next/image";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="social-links__footer flex items-center gap-4 mt-5 py-1">
      <Link
        href="https://www.facebook.com/"
        target="_blank"
        className="hover:scale-110 transition-all duration-300 ease-in-out"
      >
        <Image
          src="/facebook.png"
          alt="Facebook"
          width={20}
          height={32}
          className="cursor-pointer"
          loading="lazy"
        />
      </Link>
      <Link
        href="https://www.instagram.com/"
        target="_blank"
        className="hover:scale-110 transition-all duration-300 ease-in-out"
      >
        <Image
          src="/instagram.png"
          alt="Instagram"
          width={20}
          height={32}
          className="cursor-pointer"
          loading="lazy"
        />
      </Link>
      <Link
        href="https://www.youtube.com/"
        target="_blank"
        className="hover:scale-110 transition-all duration-300 ease-in-out"
      >
        <Image
          src="/youtube.png"
          alt="Youtube"
          width={20}
          height={32}
          className="cursor-pointer"
          loading="lazy"
        />
      </Link>
      <Link
        href="https://www.pinterest.com/"
        target="_blank"
        className="hover:scale-110 transition-all duration-300 ease-in-out"
      >
        <Image
          src="/pinterest.png"
          alt="Pinterest"
          width={20}
          height={32}
          className="cursor-pointer"
          loading="lazy"
        />
      </Link>
      <Link
        href="https://twitter.com/"
        target="_blank"
        className="hover:scale-110 transition-all duration-300 ease-in-out"
      >
        <Image
          src="/x.png"
          alt="Twitter"
          width={20}
          height={32}
          className="cursor-pointer"
          loading="lazy"
        />
      </Link>
    </div>
  );
};

export default SocialLinks;
