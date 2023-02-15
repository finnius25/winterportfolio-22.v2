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
        <h1 className="text-5xl font-semibold py-10 px-3 xl:px-0">
          Finney Koshy
        </h1>
        <p className="text-xl leading-loose px-4 xl:px-0">
          I was inspired to learn coding after years of watching movies of
          hackers shutting down power grids and opening vaults. Little did I
          know, I would spend my days centering divs. Turns out I'm better at
          building web applications than breaking into banks. I haven't tried
          the latter yet...
          <br />
          <br />
          My journey started on a coding website called{" "}
          <span>
            <a href="https://www.theodinproject.com/">
              <em>The Odin Project</em>
            </a>
          </span>{" "}
          where I learned how to write my first 'Hello World'. Fast forward 2
          years later, I'm currently building my first bootstrapped company, a
          budgeting app called Sterling. My aim is to tackle problems people
          have with managing money by helping them accumulate good financial
          habits through accountability, visibility, and repetition.
          <br />
          <br />
          As a growing developer, I also do freelancing and contribute,
          constantly improving my skills and knowledge, like this headless CMS I
          built with Sanity and Next.
          <span>
            <a href="https://the-startup-glossary.vercel.app/">
              {" "}
              <strong>Check it out here.</strong>
            </a>
          </span>
          <br />
          <br />
          My hobbies are hitting the gym and coding. If you have an interesting
          app idea, hit me up!
        </p>
      </div>
    </div>
  );
};

export default Bio;
