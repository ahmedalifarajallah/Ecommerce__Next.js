import FooterLinksColumn from "./FooterLinksColumn";
import { ILink } from "@/interfaces/FooterLinkInterface";
import SubscriptionForm from "./SubscriptionForm";
import Payments from "./Payments";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const COMPANY_LINKS: ILink[] = [
    {
      label: "About Us",
      link: "/",
    },
    {
      label: "Careers",
      link: "/",
    },
    {
      label: "Affiliate",
      link: "/",
    },
    {
      label: "Blog",
      link: "/",
    },
    {
      label: "Contact Us",
      link: "/",
    },
  ];
  const SHOP_LINKS: ILink[] = [
    {
      label: "New Arrivals",
      link: "/",
    },
    {
      label: "Accessories",
      link: "/",
    },
    {
      label: "Men",
      link: "/",
    },
    {
      label: "All Products",
      link: "/",
    },
    {
      label: "Kids",
      link: "/",
    },
  ];
  const HELP_LINKS: ILink[] = [
    {
      label: "Shipping",
      link: "/",
    },
    {
      label: "Returns",
      link: "/",
    },
    {
      label: "FAQ",
      link: "/",
    },
    {
      label: "Terms of Use",
      link: "/",
    },
    {
      label: "Privacy Policy",
      link: "/",
    },
  ];

  return (
    <footer className="bg-gray-200 py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Top */}
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
            <ContactInfo />
            <SocialLinks />
          </div>

          {/* Company Column */}
          <div className="sm:col-span-1">
            <FooterLinksColumn title="Company" links={COMPANY_LINKS} />
          </div>

          {/* Shop Column */}
          <div className="sm:col-span-1">
            <FooterLinksColumn title="Shop" links={SHOP_LINKS} />
          </div>

          {/* Help Column */}
          <div className="sm:col-span-1">
            <FooterLinksColumn title="Help" links={HELP_LINKS} />
          </div>

          {/* Subscribe Column - 2fr on sm/md */}
          <div className="sm:col-span-2 md:col-span-2 xl:col-span-1">
            <h2 className="mb-4 text-lg font-semibold">Subscribe</h2>
            <p className="text-sm">
              Subscribe to our newsletter and stay up-to-date with the latest
              news and updates from our company.
            </p>
            <SubscriptionForm />
            <Payments />
          </div>
        </div>
        {/* Bottom */}
        <div className="bottom-footer mt-16">
          <div className="bottom-footer__container flex flex-col sm:flex-row items-start md:items-center justify-between">
            {/* left */}
            <div className="copyrights text-sm ">
              <p>&copy; 2025 AKL. All rights reserved.</p>
            </div>
            {/* Right */}
            <div className="flex items-center flex items-center flex-wrap gap-2 flex-wrap sm:flex-nowrap md:gap-6 mt-2 sm:mt-0 ">
              {/* Language */}
              <div className="language_prefer flex items-center">
                <span className="mx-0 sm:mx-3 text-gray-600 text-sm">
                  Language
                </span>
                <select
                  name="language"
                  id="language"
                  className="text-sm bg-transparent"
                >
                  <option value="en">English</option>
                  <option value="ar">Arabic</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                </select>
              </div>
              <span className="">|</span>
              {/* Currency */}
              <div className="currency_prefer flex items-center">
                <span className="mx-3 text-gray-600 text-sm">Currency</span>
                <select
                  name="currency"
                  id="currency"
                  className="text-sm bg-transparent"
                >
                  <option value="usd">USD</option>
                  <option value="egp">EGP</option>
                  <option value="eur">EUR</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
