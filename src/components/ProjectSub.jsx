import React from "react";

const ProjectSub = ({
  thumbnail,
  projectTitle,
  projectDescription,
  flexRow,
}) => {
  return (
    <div
      className={`flex flex-col w-11/12 md:10/12 xl:w-9/12 items-center justify-center ${
        flexRow ? "xl:flex-row" : "xl:flex-row-reverse"
      }`}
    >
      <div className=" md:w-[35rem] md:h-[35rem] flex flex-col justify-center items-center drop-shadow-2xl cursor-pointer p-4">
        <img
          src={thumbnail}
          alt="The budgeting app sterling thumbnail"
          className="w-full h-auto max-w-full object-contain rounded-2xl"
        />
      </div>
      <div className="flex flex-col justify-around">
        <h1 className="font-bold text-3xl">{projectTitle}</h1>
        <p className="font-light text-xl leading-relaxed">
          {projectDescription}
        </p>
      </div>
    </div>
  );
};

export default ProjectSub;
