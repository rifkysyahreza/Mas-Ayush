import { FC } from "react";
import AboutMini from "../LandingPage/components/Hero/components/AboutMini";

const Index: FC = () => {
  return (
    <div className="flex absolute top-0 z-20">
      <div className="h-screen w-screen top-0 bg-white">
        <div className="flex flex-col items-end pr-14 pt-14">
          <img src="/BURGER.png" alt="Close Button" className="w-20 h-20" />
        </div>

        <div>
          <AboutMini />
        </div>
      </div>
    </div>
  );
};

export default Index;
