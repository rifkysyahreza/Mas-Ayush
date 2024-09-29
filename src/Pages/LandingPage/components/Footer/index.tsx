import { FC } from "react";
import MasAyush from "../../../../assets/MasAyush.png";
import FooterSign from "./FooterSign";

const Index: FC = () => {
  return (
    <div className="flex flex-col gap-36 text-white bg-black px-20 pt-20">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <div className="font-medium text-7xl leading-[72px]">
            Have something in mind?
          </div>
          <div className="flex items-center font-medium text-7xl leading-[72px]">
            <img src={MasAyush} alt="" className="w-20 h-20" />
            let’s build it together.
          </div>
        </div>

        <div>
          <a
            href=""
            className="text-[#0B0C0E] px-12 py-6 bg-[#F4F7FA] rounded-full"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="pb-8">
        <FooterSign />
      </div>
    </div>
  );
};

export default Index;
