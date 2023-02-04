import React from "react";
import bioPic from "../assets/bio.jpeg";

const Bio = () => {
  return (
    <div className="font-open w-full flex flex-row-reverse justify-center my-20 lg:my-32 px-2">
      <div className="h-full flex flex-col items-start">
        <div className="w-80 h-auto hidden md:flex md:m-10 md:mt-32">
          <img
            src={bioPic}
            alt="Profile"
            className="object-contain w-full h-full rounded-2xl"
          />
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-3/6 ">
        <h1 className="text-5xl font-semibold py-10">Finney Koshy</h1>
        <p className="text-xl leading-loose">
          I was inspiried to learn coding after years of watching movies of
          hackers shutting down power grids and opening vaults. Little did I
          know, I would spend my days centering divs. Turns out I'm better at
          building websites than breaking into banks. I haven't tried the latter
          yet...
          <br />
          <br />
          I'm currently building my first bootstrapped project, a budgeting app
          called <strong>Sterling</strong>. With rising inflation, my goal is
          help people build good financial habits with this app. I also do
          software freelancing, for example I recently built a headless CMS,
          with Sanity and Next. I didn't know blogs were so cool until I learned
          SEO. Now my <em>life's</em> mission is to nail the algorithm.
          <br />
          <br />I love eating cereal and playing video games. My favorite food
          is chicken curry. If you have a multi-million dollar app idea, hit me
          up!
        </p>
      </div>
    </div>
  );
};

export default Bio;
