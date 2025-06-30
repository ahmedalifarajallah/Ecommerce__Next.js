"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Cart from "../../Cart/Cart";
import DropDown from "./DropDown";

const NavIcons = () => {
  const [isLoggedIn, setIsLoggerIn] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown
  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="flex items-center gap-4 xl:gap-6 relative"
      ref={containerRef}
    >
      {/* Profile */}
      <Image
        src={"/profile.png"}
        alt={"Profile-Img"}
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={() => toggleDropdown("profile")}
      />
      {openDropdown === "profile" && (
        <DropDown>
          {isLoggedIn ? (
            <div className="mx-4">
              <Link href={"/profile"}>Profile</Link>
              <div className="mt-2 cursor-pointer">Logout</div>
            </div>
          ) : (
            <Link href={"/auth/login"}>Login</Link>
          )}
        </DropDown>
      )}
      {/* Notifications */}
      <Image
        src={"/notification.png"}
        alt={"notification-Img"}
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={() => toggleDropdown("notifications")}
      />
      {openDropdown === "notifications" && (
        <DropDown>
          <p className="text-center w-max text-sm">No notifications</p>
        </DropDown>
      )}
      {/* Cart */}
      <Image
        src={"/cart.png"}
        alt={"cart-Img"}
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={() => toggleDropdown("cart")}
      />
      {openDropdown === "cart" && (
        <DropDown>
          <Cart />
        </DropDown>
      )}
    </div>
  );
};

export default NavIcons;
