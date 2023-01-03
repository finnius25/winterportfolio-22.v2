import React from "react";

const Collaborate = () => {
  return (
    <div>
      <div className="pl-3 space-x-4 flex mb-2">
        <div className="bg-black h-8 w-0.5"></div>
        <h2 className="text-sm py-2 font-lato font-normal">COLLABORATE</h2>
      </div>

      <div className="px-7">
        <h2 className="font-lato font-semibold text-3xl">
          finneykoshy@gmail.com
        </h2>
        <div className="flex space-x-3">
          <div className="w-8 h-8 bg-gray-300">L</div>
          <div className="w-8 h-8 bg-gray-300">T</div>
        </div>
        <p className="py-5 leading-relaxed text-xl font-open font-light">
          Let’s talk. I want to get a job as software. So hire me. Thank you
        </p>
        <div>
          <p className="font-open font-light text-base">About Me</p>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
