import React from "react";
import AbstractingIndexingBg from "../../../assets/images/AboutSectionsBg.jpg";

const AbstractingIndexing = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center min-h-100px flex items-center justify-center"
        style={{ backgroundImage: `url(${AbstractingIndexingBg})` }}
      >
        <div className="px-20 py-10">
          <h1 className="text-4xl text-center font-bold">
            Abstracting Indexing
          </h1>
        </div>
      </div>
      <div className="h-[50vh]">
        <h1 className="text-xl text-center font-bold ">
        Abstracting Indexing
        </h1>
      </div>
    </div>
  );
};

export default AbstractingIndexing;
