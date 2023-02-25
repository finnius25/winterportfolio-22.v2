import React from "react";
import SterlingThumbnail from "../assets/sterlingthumb.png";
import ProjectSub from "./ProjectSub";
import theStartupGlossary from "../assets/theStartupGlossary.png";

const Projects = () => {
  const sterlingDescription = (
    <p className="font-light text-xl leading-relaxed">
      An all in one budgeting app to help you build financial habits. Built
      using React.js & Firebase
    </p>
  );
  const sterlingTitle = (
    <p className="font-light text-xl leading-relaxed">Sterling</p>
  );
  const aloaTitle = (
    <p className="font-light text-xl leading-relaxed">The Startup Glossary</p>
  );
  const aloaDescription = (
    <p className="font-light text-xl leading-relaxed">
      A non-technical startup guide to everything software. Built using{" "}
      <strong className="font-bold">Next.js</strong> &{" "}
      <strong className="font-bold">Sanity.io</strong>
    </p>
  );
  return (
    <div className="flex flex-col items-center justify-around gap-44 py-20">
      {/* Section Divider */}
      <div className="w-11/12 md:10/12 xl:w-9/12">
        <div className=" flex space-x-4 items-center">
          <div className="bg-black h-8 w-0.5"></div>
          <h2 className="text-md py-2 font-lato font-normal">PROJECTS</h2>
        </div>
      </div>
      {/* Sterling */}
      <ProjectSub
        thumbnail={SterlingThumbnail}
        projectTitle={sterlingTitle}
        projectDescription={sterlingDescription}
        flexRow={false}
        projectAction={"Coming Soon!"}
      />
      {/* The Startup Glossary */}
      <ProjectSub
        thumbnail={theStartupGlossary}
        projectTitle={aloaTitle}
        projectDescription={aloaDescription}
        flexRow={true}
        projectAction={"Check it out"}
        link={"https://the-startup-glossary.vercel.app/"}
      />
    </div>
  );
};

export default Projects;
