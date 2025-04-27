import { ILink } from "@/interfaces/FooterLinkInterface";
import Link from "next/link";

interface FooterLinksColumnProps {
  title: string;
  links: ILink[];
}

const FooterLinksColumn: React.FC<FooterLinksColumnProps> = ({
  title,
  links,
}) => {
  return (
    <>
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      <ul className="flex flex-col space-y-2 text-sm">
        {links.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer py-1 transition-all duration-300 ease-in-out hover:text-primary"
          >
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterLinksColumn;
