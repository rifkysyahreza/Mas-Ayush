import { FC } from "react";

interface NavigationListProps {
  route: string;
  text: string;
}

const NavigationList: FC<NavigationListProps> = ({ route, text }) => {
  return (
    <a href={route} className=" text-black no-underline hover:font-bold w-16">
      {text}
    </a>
  );
};

export default NavigationList;
