import React from "react";

const Footer = () => {
  const companyLinks: string[] = [
    "About Us",
    "Careers",
    "Affiliate",
    "Blog",
    "Contact Us",
  ];

  const ShopLinks: string[] = [
    "New Arrivals",
    "Accessories",
    "Men",
    "All Products",
    "Kids",
  ];

  const helpLinks: string[] = [
    "Shipping",
    "Returns",
    "FAQ",
    "Terms of Use",
    "Privacy Policy",
  ];

  return (
    <footer className="bg-gray-200 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div
          className="grid grid-cols-1 gap-8 
                      grid-cols-1 
                      sm:grid-cols-[2fr_1fr] 
                      md:grid-cols-[2fr_1fr_1fr]
                      lg:grid-cols-[2fr_1fr_1fr_1fr]
                      xl:grid-cols-[2fr_1fr_1fr_1fr_2fr]"
        >
          {/* Brand Column - 2fr on sm/md */}
          <div className="sm:col-span-1 md:col-span-1">
            <h2 className="mb-4 text-2xl font-semibold">AKL</h2>
            <p className="text-sm">Address: 123 Main Street, City, Country</p>
          </div>

          {/* Company Column */}
          <div className="sm:col-span-1">
            <h2 className="mb-4 text-lg font-semibold">Company</h2>
            <ul className="flex flex-col space-y-2 text-sm">
              {companyLinks.map((item, index) => (
                <li key={index} className="cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Column */}
          <div className="sm:col-span-1">
            <h2 className="mb-4 text-lg font-semibold">Shop</h2>
            <ul className="flex flex-col space-y-2 text-sm">
              {ShopLinks.map((item, index) => (
                <li key={index} className="cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div className="sm:col-span-1">
            <h2 className="mb-4 text-lg font-semibold">Help</h2>
            <ul className="flex flex-col space-y-2 text-sm">
              {helpLinks.map((item, index) => (
                <li key={index} className="cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Column - 2fr on sm/md */}
          <div className="sm:col-span-2 md:col-span-2 xl:col-span-1">
            <h2 className="mb-4 text-lg font-semibold">Subscribe</h2>
            <p className="text-sm mb-4">
              Subscribe to our newsletter and stay up-to-date with the latest
              news and updates from our company.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded border p-2 text-sm w-full"
              />
              <button className="rounded bg-black px-4 py-2 text-sm text-white hover:bg-gray-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
