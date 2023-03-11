import React from "react";
import SterlingThumbnail from "../assets/sterlingthumb.png";
import ProjectSub from "./ProjectSub";
import theStartupGlossary from "../assets/theStartupGlossary.png";
import daddyThumbnail from "../assets/daddyIssues.png";

const Projects = () => {
  const sterlingDescription = (
    <p className="font-light text-xl leading-relaxed">
      An all in one budgeting app to help you build financial habits. Built
      using <strong className="font-bold">React.js</strong> &{" "}
      <strong className="font-bold">Firebase</strong>
    </p>
  );
  const sterlingTitle = (
    <h3 className="font-bold text-2xl leading-relaxed">Sterling</h3>
  );
  const aloaTitle = (
    <h3 className="font-bold text-2xl leading-relaxed">The Startup Glossary</h3>
  );
  const aloaDescription = (
    <p className="font-light text-xl leading-relaxed">
      A non-technical startup guide to everything software. Built using{" "}
      <strong className="font-bold">Next.js</strong> &{" "}
      <strong className="font-bold">Sanity.io</strong>
    </p>
  );
  const DaddyIssuesTitle = (
    <h3 className="font-bold text-2xl leading-relaxed">Daddy Issues</h3>
  );
  const DaddyIssuesDescription = (
    <p className="font-light text-xl leading-relaxed">
      Feeling stressed? Overwhelmed with no one to talk to? Look no further!
      Vent to your own AI generated father. 24/7 available and no judgement.
      Built using <strong className="font-bold">OpenAI</strong> &{" "}
      <strong className="font-bold">Next.js</strong>
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
      {/* Daddy Issues */}
      <ProjectSub
        thumbnail={daddyThumbnail}
        projectTitle={DaddyIssuesTitle}
        projectDescription={DaddyIssuesDescription}
        flexRow={false}
        projectAction={"Check it out"}
        link={"https://daddy-issues.vercel.app/"}
      />
    </div>
  );
};

export default Projects;
