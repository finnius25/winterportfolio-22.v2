import React from "react";
import SterlingThumbnail from "../assets/sterlingthumb.png";

const Projects = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center lg:justify-center px-5">
      <div className="flex flex-col w-full md:w-4/6 lg:w-5/6 space-y-20">
        <div className=" flex space-x-4 items-center">
          <div className="bg-black h-8 w-0.5"></div>
          <h2 className="text-md py-2 font-lato font-normal">PROJECTS</h2>
        </div>
        <div className="flex flex-col space-y-20 xl:flex-row xl:space-x-10 xl:space-y-0 w-full ">
          <div className="w-full h-3/6 xl:h-5/6 max-w-xl object-contain">
            <div className="cursor-pointer">
              <img
                src={SterlingThumbnail}
                alt="The budgeting app sterling thumbnail"
                className="w-full h-full rounded-lg drop-shadow-2xl transition hover:ease-linear duration-300"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-5 ">
            <div className="cursor-pointer">
              <h1 className="font-bold text-3xl">Sterling</h1>
            </div>
            <p className="font-light text-xl leading-relaxed">
              A budgeting app to help you build financial habits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
