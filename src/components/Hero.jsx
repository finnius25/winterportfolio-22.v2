import React from "react";
import heroimg from "../assets/heroimg.png";
import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";
import reactIcon from "../assets/skillIcons/react.svg";
import htmlIcon from "../assets/skillIcons/file-type-html.svg";
import cssIcon from "../assets/skillIcons/file-type-css.svg";
import jsIcon from "../assets/skillIcons/javascript-js.svg";
import pyIcon from "../assets/skillIcons/python.svg";
import rubyIcon from "../assets/skillIcons/file-type-ruby.svg";
import nodeIcon from "../assets/skillIcons/node-js.svg";
import tailwindIcon from "../assets/skillIcons/tailwind-css.svg";
import sanityIcon from "../assets/skillIcons/sanity.svg";
import mySQLIcon from "../assets/skillIcons/mysql-original-wordmark.svg";
import nextIcon from "../assets/skillIcons/next-js.svg";
import rubyOnRailsIcon from "../assets/skillIcons/language-ruby-on-rails.svg";
import githubIcon from "../assets/skillIcons/github.svg";
import gitIcon from "../assets/skillIcons/git.svg";
import djangoIcon from "../assets/skillIcons/file-type-django.svg";
import bashIcon from "../assets/skillIcons/bash.svg";
import firebaseIcon from "../assets/skillIcons/file-type-firebase.svg";

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-150 h-50 hidden lg:flex">
        <img src={heroimg} alt="" className="w-full h-full object-contain" />
      </div>
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="lg:m-10 flex flex-col font-open space-y-5 w-5/6 md:w-4/6 lg:w-6/12"
      >
        <div>
          <h1 className="text-5xl leading-normal font-semibold">
            Hi, I’m Finney Koshy{" "}
            <motion.div
              animate={{ rotate: [null, 5, -5, 5, 0] }}
              transition={{ duration: 0.6, delay: 2 }}
              className="inline-block"
            >
              👋
            </motion.div>
          </h1>
        </div>

        <div>
          <p className="text-xl font-light leading-loose md:w-8/12 ">
            <em>Exploring</em> aesthetic designs, <em>Constructing</em> creative
            solutions, and <em>Dabbling</em> in entrepreneurialism. Based in
            Dallas, TX.
          </p>
        </div>
        <div className="bg-black w-full h-0.5 border-black my-3" />
        <div className="flex flex-wrap gap-3">
          <SkillIcon title={"React"} src={reactIcon} />
          <SkillIcon title={"Next"} src={nextIcon} />
          <SkillIcon title={"HTML"} src={htmlIcon} />
          <SkillIcon title={"CSS"} src={cssIcon} />
          <SkillIcon title={"JavaScript"} src={jsIcon} />
          <SkillIcon title={"Python"} src={pyIcon} />
          <SkillIcon title={"Ruby"} src={rubyIcon} />
          <SkillIcon title={"NodeJS"} src={nodeIcon} />
          <SkillIcon title={"Tailwind"} src={tailwindIcon} />
          <SkillIcon title={"Sanity"} src={sanityIcon} />
          <SkillIcon title={"mySQL"} src={mySQLIcon} />
          <SkillIcon title={"Ruby On rails"} src={rubyOnRailsIcon} />
          <SkillIcon title={"Django"} src={djangoIcon} />
          <SkillIcon title={"Git"} src={gitIcon} />
          <SkillIcon title={"Github"} src={githubIcon} />
          <SkillIcon title={"Bash"} src={bashIcon} />
          <SkillIcon title={"Firebase"} src={firebaseIcon} />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
