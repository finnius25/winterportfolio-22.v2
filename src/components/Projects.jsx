import React from "react";
import SterlingThumbnail from "../assets/sterlingthumb.png";
import ProjectSub from "./ProjectSub";
import AloaThumbnail from "../assets/StartupGlossary.png";

const Projects = () => {
  const sterlingDescription =
    "A budgeting app to help you build financial habits.";
  const sterlingTitle = "Sterling";
  const aloaTitle = "The Startup Glossary";
  const aloaDescription = "Headless CMS built with Next.js & Sanity";
  return (
    <div className="w-screen flex flex-col items-center lg:justify-center px-5 mb-32">
      <div className="flex flex-col w-full md:w-4/6 lg:w-5/6 space-y-32">
        <div className=" flex space-x-4 items-center">
          <div className="bg-black h-8 w-0.5"></div>
          <h2 className="text-md py-2 font-lato font-normal">PROJECTS</h2>
        </div>
        {/* Sterling */}
        <ProjectSub
          thumbnail={SterlingThumbnail}
          projectTitle={sterlingTitle}
          projectDescription={sterlingDescription}
          flexRow={true}
        />
        {/* The Startup Glossary */}
        <ProjectSub
          thumbnail={AloaThumbnail}
          projectTitle={aloaTitle}
          projectDescription={aloaDescription}
          flexRow={false}
        />
      </div>
    </div>
  );
};

export default Projects;
