import React from "react";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Footer from "../components/Footer";
import CollaborateAbout from "../components/CollaborateAbout";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <Header />
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: [0, 0, 1] }}
        transition={{ duration: 1 }}
      >
        <Bio />
        <CollaborateAbout />
      </motion.div>
      <Footer />
    </div>
  );
};

export default About;
