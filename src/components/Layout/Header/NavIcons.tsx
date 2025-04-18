"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Cart from "../../Cart/Cart";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggerIn] = useState(true);

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src={"/profile.png"}
        alt={"Profile-Img"}
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={handleProfileClick}
      />
      {isProfileOpen && isLoggedIn ? (
        <div className="absolute top-12 left-0 w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-md text-sm z-20">
          <Link href={"/profile"}>Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      ) : (
        isProfileOpen &&
        !isLoggedIn && (
          <div className="absolute top-12 left-0 w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 rounded-md text-sm z-20">
            <Link href={"/profile"}>Login</Link>
          </div>
        )
      )}
      <Image
        src={"/notification.png"}
        alt={"Profile-Img"}
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
      />
      <Image
        src={"/cart.png"}
        alt={"Profile-Img"}
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={() => setIsCartOpen(!isCartOpen)}
      />
      {isCartOpen && (
        <div className="absolute top-12 right-0 w-max shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 rounded-md text-sm z-20">
          <Cart />
        </div>
      )}
    </div>
  );
};

export default NavIcons;
