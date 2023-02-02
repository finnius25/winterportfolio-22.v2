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
        thumbnail={AloaThumbnail}
        projectTitle={aloaTitle}
        projectDescription={aloaDescription}
        flexRow={true}
        projectAction={"Coming Soon!"}
      />
    </div>
  );
};

export default Projects;
