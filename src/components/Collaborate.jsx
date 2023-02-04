import React from "react";
import linkedInIcon from "../assets/icons/icons8-linkedin-circled.svg";
import twitterIcon from "../assets/icons/icons8-twitter.svg";

const Collaborate = () => {
  return (
    <div className="w-full flex flex-col lg:items-center lg:justify-center mt-20 px-4 lg:px-0">
      <div className="lg:w-9/12">
        <div className="space-x-4 flex mb-2">
          <div className="bg-black h-8 w-0.5"></div>
          <h2 className="text-sm py-2 font-lato font-normal">COLLABORATE</h2>
        </div>

        <div>
          <h2 className="font-lato font-semibold text-3xl md:text-4xl lg:text-5xl">
            finneykoshy@gmail.com
          </h2>
          <div className="flex space-x-3">
            <div className="w-8 h-8 m-1">
              <a
                href="https://www.linkedin.com/in/finney-koshy-73913b248"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedInIcon} alt="LinkedIn Icon" />
              </a>
            </div>
            <div className="w-8 h-8 m-1 mt-2">
              <a
                href="https://twitter.com/Finnius25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="Twitter Icon" />
              </a>
            </div>
          </div>
          {/* <p className="py-5 leading-relaxed text-xl font-open font-light">
            Let’s talk. I want to get a job as software engineer. So hire me.
            Thank you
          </p> */}
          {/* <div className="w-20">
            <Link to="/About" className="underline">
              <p className="font-open font-light text-base">About Me</p>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
