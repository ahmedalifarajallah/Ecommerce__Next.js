import Link from "next/link";
import React from "react";

const ContactInfo = () => {
  return (
    <ul>
      {[
        { label: "123 Main St, Suite 400, New York, NY 10001", link: "/" },
        { label: "(123) 456-7890", link: "tel:+201555236230" },
        { label: "7mKfD@example.com", link: "mailto:info@ourcompany.com" },
      ].map((item, index) => (
        <li key={index} className="text-sm my-4 font-medium">
          <Link href={item.link}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ContactInfo;
