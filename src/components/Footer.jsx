import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-28 bg-black text-white mt-20 flex items-center justify-center space-x-14">
      <div>Designed & Built By Finney Koshy</div>
      <div className="flex flex-col space-y-2 font-semibold">
        <Link to="/">Portfolio</Link>
        <Link to="/About">About Me</Link>
      </div>
    </div>
  );
};

export default Footer;
