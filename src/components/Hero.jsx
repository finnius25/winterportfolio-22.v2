import React from "react";
import heroimg from "../assets/heroimg.png";

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-150 h-50 hidden lg:flex">
        <img src={heroimg} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="lg:m-10 flex flex-col font-open space-y-5 w-5/6 md:w-4/6 lg:w-6/12">
        <h1 className="text-5xl leading-normal font-semibold">
          Hi, I’m Finney Koshy 👋
        </h1>
        <p className="text-xl font-light leading-loose md:w-8/12 ">
          <em>Exploring</em> aesthetic designs, <em>Constructing</em> creative
          solutions, and <em>Dabbling</em> in entrepreneurialism. Based in
          Dallas, TX. Currenltly building <strong>Sterling</strong>.
        </p>
      </div>
    </div>
  );
};

export default Hero;
