import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const NavBar = () => {
  return (
    <div className="h-20 container relative">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href={"/"}>
          <div className="text-2xl tracking-wide">AKL</div>
        </Link>
        <Menu />
      </div>
      {/* Bigger Screens */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* Left Side */}
        <div className="w-1/3 lg:w-1/2 lg:flex items-center justify-start gap-8">
          <Link href={"/"} className="flex items-center gap-3">
            <Image src={"/logo.png"} alt="Logo-Img" height={24} width={24} />
            <div className="text-2xl tracking-wide">AKL</div>
          </Link>
          <div className="hidden lg:flex items-center justify-between gap-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/list"}>Shop</Link>
            <Link href={"/login"}>Deals</Link>
            <Link href={"/login"}>About</Link>
            <Link href={"/login"}>Contact</Link>
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
