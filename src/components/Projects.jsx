import React from "react";
import SterlingThumbnail from "../assets/SterlingThumbnail.png";
import SupachatThumbnail from "../assets/SupachatThumbnail.png";
import GravegoThumbnail from "../assets/GravegoThumbnail.png";

const Projects = () => {
  return (
    <div>
      <div className="pl-3 space-x-4 flex">
        <div className="bg-black h-8 w-0.5"></div>
        <h2 className="text-sm py-2 font-lato font-normal">PROJECTS</h2>
      </div>

      <div className="space-y-16 md:space-y-40 mb-32">
        {/* Sterling */}
        <div className="flex flex-col space-y-5 px-5 font-open md:flex-row ">
          <img
            src={SterlingThumbnail}
            alt="Thumbnail for app called Sterling"
            className="w-full h-full"
          />
          <div className="flex flex-col px-10 space-y-5">
            <h1 className="font-bold text-3xl">Sterling</h1>
            <p className="font-light text-xl leading-relaxed">
              Building a budgeting using React and firebase. I hope to help
              people build financial accountability and help them track their
              expenses. Shout out to chatgpt.
            </p>
          </div>
        </div>

        {/* SupaChat */}
        <div className="flex flex-col space-y-8 px-5 font-open md:flex-row-reverse">
          <img
            src={SupachatThumbnail}
            alt="Thumbnail for an app called SupaChat"
            className="w-full h-full"
          />
          <div className="flex flex-col px-10 space-y-5">
            <h1 className="font-bold text-3xl">SupaChat</h1>
            <p className="font-light text-xl leading-relaxed">
              Building a budgeting using React and firebase. I hope to help
              people build financial accountability.
            </p>
          </div>
        </div>

        {/* Grave Go */}
        <div className="flex flex-col space-y-8 px-5 font-open md:flex-row">
          <img
            src={GravegoThumbnail}
            alt="Thumbnail for an app called GraveGo"
            className="w-full h-full"
          />
          <div className="flex flex-col px-10 space-y-5">
            <h1 className="font-bold text-3xl">Grave Go</h1>
            <p className="font-light text-xl leading-relaxed">
              Building a budgeting using React and firebase. I hope to help
              people build financial accountability and help them track their
              expenses. Shout out to chatgpt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
