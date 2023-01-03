import React from "react";

const CollaborateAbout = () => {
  return (
    <div className="pt-10 px-5 space-y-10">
      <div className="font-open font-semibold text-xl">
        Would love to talk more, but I gotta bounce. Hit me up{" "}
      </div>
      <div>
        <h2 className="font-lato font-semibold text-3xl">
          finneykoshy@gmail.com
        </h2>
        <div className="flex space-x-3">
          <div className="w-8 h-8 bg-gray-300">L</div>
          <div className="w-8 h-8 bg-gray-300">T</div>
        </div>
        <p className="font-open font-light text-xl pt-5">
          Designer & Developer
        </p>
        <p className="font-open font-light text-xl">Dallas, Tx</p>
      </div>
    </div>
  );
};

export default CollaborateAbout;
