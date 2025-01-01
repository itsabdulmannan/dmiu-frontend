import React from "react";
import InpressBg from "../../assets/images/AboutSectionsBg.jpg";

const Inpress = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center min-h-[100px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${InpressBg})`,
        }}
      >
        <div className="py-10">
          <h1 className="text-4xl text-center font-semibold text-white">
            Inpress
          </h1>
        </div>
      </div>
      <div className="h-[50vh]">
        <h1 className="text-xl text-center font-bold mt-5">Inpress</h1>
      </div>
    </div>
  );
};

export default Inpress;
