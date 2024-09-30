import { FC } from "react";

const MenuOnClick: FC = () => {
  return (
    <div className="fixed top-0 w-screen z-30">
      <div className="flex absolute top-0 z-20">
        <div className="h-screen w-[50vw] bg-black z-20 top-0 opacity-30"></div>
        <div className="h-screen w-[50vw] bg-black">
          <div className="flex flex-col items-end pr-14 pt-14">
            <img src="/CLOSE.png" alt="Close Button" className="w-20 h-20" />
          </div>

          <div className="flex flex-col gap-7 pl-24 justify-start text-[#F4F7FA] font-medium text-6xl leading-[72px] pb-32">
            <a href="">Home</a>
            <a href="#about">About</a>
            <a href="">Work</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="flex gap-8 pl-24 font-normal text-lg text-[#F4F7FA]">
            <a href="">LinkedIn</a>
            <a href="">Twitter</a>
            <a href="">instagram</a>
            <a href="">Webflow</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOnClick;
