import React from "react";

const Bio = () => {
  return (
    <div className="font-open w-full h-screen flex flex-row-reverse items-center justify-center mb-10">
      <div className="h-full flex flex-col items-start">
        <div className="bg-gray-300 w-60 h-60 hidden md:flex md:m-10">
          Image Placeholder
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-3/6 ">
        <h1 className="text-5xl font-semibold py-10">Finney Koshy</h1>
        <p className="text-xl leading-loose">
          I found out about programming through a korean tv drama called
          'Startups' (defintly worth the watch). Spolier alert: After seeing the
          tech nerd win the girl and create a succesful tech company. I realize
          I have been doing life all wrong. I now aspire to be the coolest nerd
          ever.
          <br />
          <br />
          The first step in my software developer journey was very ardouse. It
          took several months to master Stack Overflow & Google but after that
          front end was a breeze. Needless to say, I now know how to npm install
          any website with just html, css, css framework, postcss, sass, and the
          current, most popular javascript framework, and the most current,
          popular framew
          <br />
          <br />
          And no, I didn't just stop with front end. I like pain. That's why
          learned python and also ruby for some reason. And after painstakingly
          months of grinding, coffee adication, and lowerback pain from
          incorrect posture, I've discovered what backend as a services are and
          I now run all my multi billion dollar startups ideas through services
          like firebases. Now is a good time to say, I solely indentify as a
          frontend developer.
        </p>
      </div>
    </div>
  );
};

export default Bio;
