"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Cart from "../../Cart/Cart";
import DropDown from "./DropDown";
import useWixClient from "@/hooks/useWixClient";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/hooks/useCartStore";

const NavIcons = () => {
  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { cart, getCart } = useCartStore();

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

  useEffect(() => {
    if (isLoggedIn) {
      getCart(wixClient); // load cart as soon as user is logged in
    }
  }, [wixClient, isLoggedIn, getCart]);

  // Logout
  const logout = async () => {
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    router.push(logoutUrl);
  };

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
              <div
                className="mt-2 cursor-pointer"
                onClick={logout}
                aria-label="Logout"
                role="button"
              >
                Logout
              </div>
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
      <div className="cart-icon relative">
        <Image
          src={"/cart.png"}
          alt={"cart-Img"}
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={() => toggleDropdown("cart")}
        />
        <span className="absolute top-[-10px] right-[-10px] w-5 h-5 bg-primary text-xs flex items-center justify-center text-white rounded-full">
          {cart.lineItems?.length || 0}
        </span>
      </div>
      {openDropdown === "cart" && (
        <DropDown>
          <Cart />
        </DropDown>
      )}
    </div>
  );
};

export default NavIcons;
