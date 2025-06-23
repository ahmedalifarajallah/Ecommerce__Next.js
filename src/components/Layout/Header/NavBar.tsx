import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import React, { useMemo } from "react";
import { ILink } from "@/interfaces/FooterLinkInterface";

const HYPER_LINKS: ILink[] = [
  { label: "Home", link: "/" },
  { label: "Shop", link: "/products" },
  { label: "Deals", link: "/" },
  { label: "About", link: "/" },
  { label: "Contact", link: "/" },
];

const NavBar = () => {
  const links = useMemo(() => HYPER_LINKS, []);
  return (
    <div className="h-20 container relative">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between md:hidden select-none">
        <Link href={"/"}>
          <div className="text-2xl tracking-wide">AKL</div>
        </Link>
        <Menu />
      </div>
      {/* Bigger Screens */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* Left Side */}
        <div className="w-1/3 lg:w-1/2 lg:flex items-center justify-start gap-8 select-none">
          <Link href={"/"} className="flex items-center gap-3">
            <Image src={"/logo.png"} alt="Logo-Img" height={24} width={24} />
            <div className="text-2xl tracking-wide">AKL</div>
          </Link>
          <div className="hidden lg:flex items-center justify-between gap-4">
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
        </div>
        {/* Right Side */}
        <div className="w-2/3 lg:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
