import { FC } from "react";
import ContactForm from "./ContactForm";

const Body: FC = () => {
  return (
    <div className="flex pt-56 pb-24 px-20 w-screen">
      {/* This is Left */}
      <div className="flex flex-col justify-start gap-14 basis-[50vw]">
        <div>
          <img src="/MasAyush.png" alt="Ayush Profile" className="w-72 h-72" />
        </div>

        <div>
          <div className="pb-3 font-normal text-lg leading-7 text-primary-text">
            Contact Details
          </div>

          <div className="flex flex-col gap-2 justify-start font-normal text-3xl">
            <div>ayush.barnwal@brightscout.com</div>
            <div>+91 8651447521</div>
          </div>
        </div>

        <div>
          <div className="pb-3 font-normal text-lg leading-7 text-primary-text">
            Social
          </div>

          <div className="flex flex-col gap-2 justify-start font-normal text-3xl">
            <a href="">LinkedIn</a>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
            <a href="">Webflow</a>
            <a href="">Figma</a>
          </div>
        </div>
      </div>

      {/* This is Right */}
      <div className="flex flex-col justify-start items-start gap-9 basis-[50vw]">
        <div className="font-medium text-6xl leading-[72px]">
          <div>Let’s build something</div>
          <div> cool together</div>
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-8 pb-8">
            <ContactForm label="Name" placeholder="Enter your name" />
            <ContactForm label="Email" placeholder="Enter your email" />
            <ContactForm label="Subject" placeholder="Enter the subject" />
            <ContactForm label="Message" placeholder="Type your message" />
          </div>
          <button className="px-16 py-6 bg-black rounded-full text-[#F4F7FA] font-medium text-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
