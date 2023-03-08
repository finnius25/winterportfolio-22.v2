import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../assets/icons/arrow.svg";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="w-full px-10 py-5 flex justify-center font-lato font-normal">
      <div className="w-11/12 flex justify-between">
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/">
            <h1 className="underline decoration-2 underline-offset-8 text-3xl">
              F
            </h1>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/About" className="flex items-center">
            <h1 className="text-xl pt-2">Me</h1>
            <img src={arrowIcon} alt="" className="w-6 h-6 mt-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
