"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Image
        src={"/menu.png"}
        alt="Menu-Icon"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/list"}>Shop</Link>
          <Link href={"/login"}>Deals</Link>
          <Link href={"/login"}>About</Link>
          <Link href={"/login"}>Contact</Link>
          <Link href={"/login"}>Cart(1)</Link>
          <Link href={"/login"}>Logout</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
