import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center md:m-32 lg:mb-40">
      <div className="bg-gray-800 w-96 h-96 hidden lg:flex text-white">
        Image Placeholder
      </div>
      <div className="m-10 md:mr-0 mb-32 flex flex-col font-open space-y-5">
        <h1 className="text-5xl leading-normal font-semibold">
          Hi, I’m Finney Koshy 👋
        </h1>
        <p className="text-xl font-light leading-relaxed md:w-8/12 lg:w-6/12">
          Developer & Designer looking to build 🔥 products. Based in Dallas,
          Texas, currently building{" "}
          <span className="font-semibold">Sterling.</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
