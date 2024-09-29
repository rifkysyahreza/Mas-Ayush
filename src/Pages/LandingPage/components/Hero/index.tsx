import { FC } from "react";
import { useState } from "react";
import HeroImage from "../../../../assets/ayush.png";
import CTAButton from "./components/CTAButton";
import MenuOnClick from "./components/MenuOnClick";

const Index: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" caret-transparent">
      <div className="flex justify-center bg-[#c7d0d9] w-full h-screen">
        <img src={HeroImage} alt="Hero" className="hero-image" />
      </div>
      <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <MenuOnClick /> : <CTAButton />}
      </div>
    </div>
  );
};

export default Index;
