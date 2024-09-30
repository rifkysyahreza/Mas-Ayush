import { FC } from "react";
import About from "../../About";
import { DUMMY_PROJECTS } from "../../../../../constants/projectList";
import Project from "../../Portfolio/components/Project";

const AboutMini: FC = () => {
  return (
    <div className="bg-white">
      <About />

      <div className="flex w-[calc(100% - 160px)] p-20">
        <div className="text-5xl font-medium basis-[30%]">Recent Work</div>

        <div className="text-3xl font-normal leading-10 text-left basis-[70%] text-primary-text">
          <Project {...DUMMY_PROJECTS[0]} />
        </div>
      </div>
    </div>
  );
};

export default AboutMini;
