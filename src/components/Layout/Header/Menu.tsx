"use client";
import { ILink } from "@/interfaces/FooterLinkInterface";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
const HYPER_LINKS: ILink[] = [
  { label: "Home", link: "/" },
  { label: "Shop", link: "/" },
  { label: "Deals", link: "/" },
  { label: "About", link: "/" },
  { label: "Contact", link: "/" },
  { label: "Cart(1)", link: "/" },
  { label: "Logout", link: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const links = useMemo(() => HYPER_LINKS, []);

  return (
    <div className="">
      <Image
        src={"/menu.png"}
        alt="Menu-Icon"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
        role="button"
        aria-label="Toggle navigation menu"
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-50">
          {links.map((link, index) => (
            <Link
              href={link.link}
              key={index}
              className="transition duration-300 ease-in-out hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(Menu);
