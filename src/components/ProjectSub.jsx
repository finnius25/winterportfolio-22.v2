import React from "react";

const ProjectSub = ({
  thumbnail,
  projectTitle,
  projectDescription,
  flexRow,
  link,
  projectAction,
}) => {
  return (
    <div
      className={`flex flex-col w-11/12 md:10/12 xl:w-9/12 gap-10 ${
        flexRow ? "xl:flex-row" : "xl:flex-row-reverse"
      }`}
    >
      <div className=" md:w-[35rem] flex flex-col justify-center items-center drop-shadow-2xl">
        <a href={link}>
          <img
            src={thumbnail}
            alt="project thumbnail"
            className="w-full h-auto max-w-full object-contain rounded-2xl"
          />
        </a>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-3xl">{projectTitle}</h1>
        <p className="font-light text-xl leading-relaxed">
          {projectDescription}
        </p>
        <a href={link}>
          <h3 className="font-bold underline">{projectAction}</h3>
        </a>
      </div>
    </div>
  );
};

export default ProjectSub;
