import { FC } from "react";
import ArrowForward from "../../../../../assets/arrow_forward.png";

const Project: FC<Project> = ({ name, roles, link }: Project) => {
  return (
    <div className="flex items-center justify-between pb-16">
      <div className="p-0 m-0">
        <a
          href={link}
          className="text-6xl font-normal text-left leading-[72px]"
        >
          {name}
        </a>
        <div className="text-lg font-normal leading-7 text-left">
          {roles.map((role, index) => (
            <>
              <span key={index}>{role}</span>
              {index < roles.length - 1 && <span> - </span>}
            </>
          ))}
        </div>
      </div>

      <div className="project-link">
        <a href={link} target="_blank" rel="noreferrer">
          <img
            src={ArrowForward}
            alt="Arrow Forward Link"
            className="border-solid border-2 border-[#3C3D3E] p-2 rounded-full hover:invert hover:bg-white"
          />
        </a>
      </div>
    </div>
  );
};

export default Project;
