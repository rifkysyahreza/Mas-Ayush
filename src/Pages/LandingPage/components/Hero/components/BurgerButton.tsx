import { useState } from "react";
import MenuOnClick from "./MenuOnClick";

const BurgerButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? (
        <MenuOnClick />
      ) : (
        <div className="flex flex-col items-end pr-14 pt-14 fixed top-10 right-10 z-30">
          <img src="/BURGER.png" alt="Close Button" className="w-20 h-20" />
        </div>
      )}
    </div>
  );
};

export default BurgerButton;
