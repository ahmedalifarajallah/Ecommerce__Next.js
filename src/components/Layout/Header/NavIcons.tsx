"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Cart from "../../Cart/Cart";
import DropDown from "./DropDown";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggerIn] = useState(true);

  const handleProfileClick = () => {
    setIsNotificationsOpen(false);
    setIsCartOpen(false);
    setIsProfileOpen(!isProfileOpen);
  };

  const handleCartClick = () => {
    setIsProfileOpen(false);
    setIsNotificationsOpen(false);
    setIsCartOpen(!isCartOpen);
  };

  const handleNotificationsClick = () => {
    setIsProfileOpen(false);
    setIsCartOpen(false);
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      {/* Profile */}
      <Image
        src={"/profile.png"}
        alt={"Profile-Img"}
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={handleProfileClick}
      />
      {isProfileOpen && isLoggedIn ? (
        <DropDown>
          <div className="mx-4">
            <Link href={"/profile"}>Profile</Link>
            <div className="mt-2 cursor-pointer">Logout</div>
          </div>
        </DropDown>
      ) : (
        isProfileOpen &&
        !isLoggedIn && (
          <DropDown>
            <Link href={"/profile"}>Login</Link>
          </DropDown>
        )
      )}
      {/* Notifications */}
      <Image
        src={"/notification.png"}
        alt={"Profile-Img"}
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={handleNotificationsClick}
      />
      {isNotificationsOpen && (
        <DropDown>
          <p className="text-center w-max text-sm">No notifications</p>
        </DropDown>
      )}
      {/* Cart */}
      <Image
        src={"/cart.png"}
        alt={"Profile-Img"}
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={handleCartClick}
      />
      {isCartOpen && (
        <DropDown>
          <Cart />
        </DropDown>
      )}
    </div>
  );
};

export default NavIcons;
