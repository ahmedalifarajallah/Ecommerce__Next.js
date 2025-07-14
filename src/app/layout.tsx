import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Layout/Header/NavBar";
import Footer from "@/components/Layout/Footer/Footer";
import { WixClientContextProvider } from "@/context/wixContext";
import VerifyAccountWarning from "@/components/VerifyAccount/VerifyAccountWarning";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AKL E-Commerce",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClientContextProvider>
          <VerifyAccountWarning />
          <NavBar />
          {children}
          <Footer />
        </WixClientContextProvider>
      </body>
    </html>
  );
}
