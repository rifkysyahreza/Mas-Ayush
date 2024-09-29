import { FC } from "react";

const CTAButton: FC = () => {
  return (
    <div className="flex items-center justify-end gap-7 absolute -right-60 hover:-right-6 top-2/4 bg-black px-8 py-5 rounded-l-full cursor-pointer caret-transparent">
      <img src="/waving-hand.png" alt="Hi!" className="w-14 h-14" />
      <div className="text-white font-normal text-4xl leading-[48px]">
        Hi I’m Ayush
      </div>
    </div>
  );
};

export default CTAButton;
