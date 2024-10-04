import { FC } from "react";
import { useState } from "react";
import HeroImage from "../../../../assets/ayush.png";
import CTAButton from "./components/CTAButton";
import MenuOnClick from "./components/MenuOnClick";
import BurgerButton from "./components/BurgerButton";

const Index: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" caret-transparent" id="hero">
      <div className="">
        <div className="flex justify-center bg-[#c7d0d9] w-full h-screen">
          <img src={HeroImage} alt="Hero" className="hero-image" />
        </div>
        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="">
          {isMenuOpen ? <MenuOnClick /> : <CTAButton />}
        </div>
      </div>
      <div className="">
        <BurgerButton />
      </div>
    </div>
  );
};

export default Index;
