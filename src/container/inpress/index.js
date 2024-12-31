import React from "react";
import InpressBg from "../../assets/images/AboutSectionsBg.jpg";

const Inpress = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center min-h-100px flex items-center justify-center"
        style={{ backgroundImage: `url(${InpressBg})` }}
      >
        <div className="px-20 py-10">
          <h1 className="text-4xl text-center font-bold">
          Inpress
          </h1>
        </div>
      </div>
      <div className="h-[50vh]">
        <h1 className="text-xl text-center font-bold mt-5">
        Inpress
        </h1>
      </div>
    </div>
  );
};

export default Inpress;

