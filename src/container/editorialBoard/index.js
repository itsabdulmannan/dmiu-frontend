import React from "react";
import EditorialBoardBg from "../../assets/images/AboutSectionsBg.jpg";

const EditorialBoard = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center min-h-[100px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${EditorialBoardBg})`,
        }}
      >
        <div className="py-10">
          <h1 className="text-4xl text-center font-semibold text-white">
            Editorial Board
          </h1>
        </div>
      </div>
      <div className="h-[50vh]">
        <h1 className="text-xl text-center font-bold mt-5">Editorial Board</h1>
      </div>
    </div>
  );
};

export default EditorialBoard;
