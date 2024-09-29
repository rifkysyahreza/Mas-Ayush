import { FC } from "react";

interface ReviewProps {
  name: string;
  position: string;
  image: string;
  testimonial: string;
}

const Review: FC<ReviewProps> = ({ name, position, image, testimonial }) => {
  return (
    <div className="flex flex-col items-start gap-7">
      <div>"{testimonial}"</div>

      <div className="flex gap-3 items-center">
        <img src={image} alt={name} className="w-16 h-16 rounded-full" />
        <div>
          <div className="text-lg font-medium leading-7">
            <b>{name}</b>
          </div>
          <div className="font-normal text-sm text-[#0B0C0E]">{position}</div>
        </div>
      </div>
    </div>
  );
};

export default Review;
