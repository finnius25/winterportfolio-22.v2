import React from "react";
import SterlingThumbnail from "../assets/Dribbble shot HD - 7.png";

const Projects = () => {
  return (
    <div className="xl:px-10">
      <div className="pl-3 space-x-4 flex items-center">
        <div className="bg-black h-2 w-2 rounded-xl"></div>
        <h2 className="text-md py-2 font-lato font-normal">PROJECTS</h2>
      </div>

      <div className="space-y-16 md:space-y-40 mb-32">
        {/* Sterling */}
        {/* <div className="flex flex-col space-y-5 px-5 font-open md:flex-row ">
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
        </div> */}
        <div className="flex justify-center">
          <div className="w-6/12 object-contain">
            <a href="#" className="relative">
              <img
                src={SterlingThumbnail}
                alt=""
                className="w-full hover:blur-lg "
              />
              <h1 className="absolute top-2 text-2xl">Sterling</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
