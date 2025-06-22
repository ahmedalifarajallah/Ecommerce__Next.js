"use client";

import { WixClientContext } from "@/context/wixContext";
import { useContext } from "react";

const useWixClient = () => {
  const wixClient = useContext(WixClientContext);
  return wixClient;
};

export default useWixClient;
