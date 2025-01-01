import React from "react";
import EditorsBg from "../../../assets/images/AboutSectionsBg.jpg";

const Editors = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center min-h-[100px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${EditorsBg})`,
        }}
      >
        <div className="py-10">
          <h1 className="text-4xl text-center font-semibold text-white">
            Editors Guidelines
          </h1>
        </div>
      </div>
      <div className="h-[50vh]">
        <h1 className="text-xl text-center font-bold ">Editors Guidelines</h1>
      </div>
    </div>
  );
};

export default Editors;
