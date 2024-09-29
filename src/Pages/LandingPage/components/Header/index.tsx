import { FC } from "react";
import NavigationList from "./NavigationList";

const Header: FC = () => {
  return (
    <header className="absolute top-0 left-0 py-7 px-20 w-full z-10">
      <nav className="flex justify-between items-center text-lg text-left font-normal">
        <div>@Ayush Barnwal</div>

        <div className="grid grid-cols-3 gap-10">
          <NavigationList route="/public" text="About" />
          <NavigationList route="#work" text="Work" />
          <NavigationList route="/contact" text="Contact" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
