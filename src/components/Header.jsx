import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../assets/icons/arrow.svg";

const Header = () => {
  return (
    <div className="w-full px-10 py-5 flex justify-between font-lato font-normal ">
      <div>
        <Link to="/">
          <h1 className="underline decoration-2 underline-offset-8 text-3xl">
            F
          </h1>
        </Link>
      </div>
      <div>
        <Link to="/About" className="flex items-center">
          <h1 className="text-xl pt-2">Me</h1>
          <img src={arrowIcon} alt="" className="w-6 h-6 mt-2" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
