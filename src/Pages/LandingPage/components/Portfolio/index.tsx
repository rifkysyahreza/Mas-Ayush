import { FC } from "react";
import { DUMMY_PROJECTS } from "../../../../constants/projectList";
import Project from "./components/Project";

const Index: FC = () => {
  return (
    <div className="flex w-[calc(100% - 160px)] p-20">
      <div className="text-5xl font-medium basis-[30%]">Recent Work</div>

      <div className="text-3xl font-normal leading-10 text-left basis-[70%] text-primary-text">
        {DUMMY_PROJECTS.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Index;
