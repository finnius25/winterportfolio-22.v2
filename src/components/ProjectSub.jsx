import React from "react";
import { motion } from "framer-motion";

const ProjectSub = ({
  thumbnail,
  projectTitle,
  projectDescription,
  flexRow,
  link,
  projectAction,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.3 }}
      viewport={{ once: true }}
      className={`flex flex-col w-11/12 md:10/12 xl:w-9/12 gap-10 ${
        flexRow ? "xl:flex-row" : "xl:flex-row-reverse"
      } items-center`}
    >
      <motion.div
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        className=" sm:w-5/12 flex flex-col justify-center items-center drop-shadow-2xl"
      >
        <a href={link} target="_blank" rel="noreferrer">
          <img
            src={thumbnail}
            alt="project thumbnail"
            className="sm:w-[35rem] sm:h-[20rem] object-contain rounded-2xl"
          />
        </a>
      </motion.div>
      <div className="flex flex-col gap-3 sm:w-7/12">
        <a href={link} target="_blank" rel="noreferrer">
          {projectTitle}
        </a>

        {projectDescription}

        <a href={link} target="_blank" rel="noreferrer">
          <h3 className="font-bold underline">{projectAction}</h3>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectSub;
