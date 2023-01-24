import React from "react";

const ProjectSub = ({
  thumbnail,
  projectTitle,
  projectDescription,
  flexPosition,
}) => {
  return (
    <div className="flex flex-col space-y-20 xl:flex-row xl:space-x-10  xl:space-y-0 w-full">
      <div className="w-full h-3/6 xl:h-5/6 max-w-xl object-contain cursor-pointer">
        <img
          src={thumbnail}
          alt="The budgeting app sterling thumbnail"
          className="w-full h-full rounded-lg drop-shadow-2xl"
        />
      </div>
      <div className="flex flex-col space-y-5 ">
        <div className="cursor-pointer">
          <h1 className="font-bold text-3xl">{projectTitle}</h1>
        </div>
        <p className="font-light text-xl leading-relaxed">
          {projectDescription}
        </p>
      </div>
    </div>
  );
};

export default ProjectSub;
