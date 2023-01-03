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

      {/* Sterling */}
      <div className="space-y-16">
        <div className="flex flex-col space-y-5 px-5 font-open">
          <img src={SterlingThumbnail} alt="" />
          <h1 className="font-bold text-3xl">Sterling</h1>
          <p className="font-light text-xl leading-relaxe">
            Building a budgeting using React and firebase. I hope to help people
            build financial accountability and help them track their expenses.
            Shout out to chatgpt.
          </p>
        </div>

        {/* SupaChat */}
        <div className="flex flex-col space-y-8 px-5 font-open">
          <img src={SupachatThumbnail} alt="" />
          <h1 className="font-bold text-3xl">SupaChat</h1>
          <p className="font-light text-xl leading-relaxe">
            Building a budgeting using React and firebase. I hope to help people
            build financial accountability.
          </p>
        </div>

        {/* Grave Go */}
        <div className="flex flex-col space-y-8 px-5 font-open">
          <img src={GravegoThumbnail} alt="" />
          <h1 className="font-bold text-3xl">Grave Go</h1>
          <p className="font-light text-xl leading-relaxe">
            Building a budgeting using React and firebase. I hope to help people
            build financial accountability and help them track their expenses.
            Shout out to chatgpt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
