import { FC } from "react";

const MenuOnClick: FC = () => {
  return (
    <div className="flex flex-row-reverse absolute top-0 z-20">
      <div className="h-screen w-[50vw] bg-black">
        <div className="w-10 bg-white p-4 border-8 border-red-500">
          <hr />
        </div>

        <div className="flex flex-col gap-7 pl-24 justify-start text-[#F4F7FA] font-medium text-6xl leading-[72px]">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Work</a>
          <a href="">Contact</a>
        </div>
      </div>
      <div className="h-screen w-[50vw] bg-black z-20 top-0 opacity-30"></div>
    </div>
  );
};

export default MenuOnClick;
