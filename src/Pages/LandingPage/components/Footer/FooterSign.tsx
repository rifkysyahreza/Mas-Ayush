import { FC } from "react";
import FooterNavList from "./FooterNavList";

const FooterSign: FC = () => {
  return (
    <div className="flex justify-between text-[#C7D0D9]">
      <div>Build with 💖 by Brightscout & Ayush</div>
      <div className="flex gap-8">
        <FooterNavList link="" name="LinkedIn" />
        <FooterNavList link="" name="Twitter" />
        <FooterNavList link="" name="Instagram" />
        <FooterNavList link="" name="Webflow" />
      </div>
    </div>
  );
};

export default FooterSign;
