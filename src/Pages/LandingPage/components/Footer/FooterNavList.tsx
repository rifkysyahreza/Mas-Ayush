import { FC } from "react";

interface FooterNavListProps {
  link: string;
  name: string;
}

const FooterNavList: FC<FooterNavListProps> = ({ link, name }) => {
  return (
    <a href={link} className="w-16  hover:font-bold">
      {name}
    </a>
  );
};

export default FooterNavList;
