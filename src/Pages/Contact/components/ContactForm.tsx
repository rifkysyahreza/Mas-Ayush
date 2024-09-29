import { FC } from "react";

interface ContactFormProps {
  label: string;
  placeholder: string;
}

const ContactForm: FC<ContactFormProps> = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col justify-start gap-3">
      <div className="text-[#0B0C0E] font-normal text-lg leading-7">
        {label}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="py-3 border-b-2 border-black text-primary-text font-normal text-3xl leading-9"
      />
    </div>
  );
};

export default ContactForm;
