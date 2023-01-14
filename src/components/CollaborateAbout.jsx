import React from "react";
import linkedInIcon from "../assets/icons/icons8-linkedin-circled.svg";
import twitterIcon from "../assets/icons/icons8-twitter.svg";

const CollaborateAbout = () => {
  return (
    <div className="w-full flex items-center justify-center mt-20">
      <div className="w-full md:w-11/12 lg:w-9/12 lg:pl-5">
        <div className="font-open font-semibold text-xl">
          Would love to talk more, but I gotta bounce. Hit me up{" "}
        </div>
        <div>
          <h2 className="font-lato font-semibold text-3xl">
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
          <p className="font-open font-light text-xl pt-5">
            Designer & Developer
          </p>
          <p className="font-open font-light text-xl">Dallas, Tx</p>
        </div>
      </div>
    </div>
  );
};

export default CollaborateAbout;
