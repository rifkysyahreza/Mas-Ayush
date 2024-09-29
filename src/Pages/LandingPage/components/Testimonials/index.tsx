import { FC } from "react";
import { DUMMY_TESTIMONIAL } from "../../../../constants/testimonialList";
import Review from "./components/Review";

const Index: FC = () => {
  return (
    <div className="flex w-[calc(100% - 160px)] p-20">
      <div className="text-5xl font-medium basis-[30%]">Testimonials</div>

      <div className="flex flex-col gap-16 text-3xl font-normal leading-9 basis-[70%] text-primary-text">
        {DUMMY_TESTIMONIAL.map((testimonial, index) => (
          <Review key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Index;
