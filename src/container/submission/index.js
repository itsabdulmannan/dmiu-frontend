import React from "react";
import submissionBg from "../../assets/images/AboutSectionsBg.jpg";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Submission = () => {
  const navigate = useNavigate();
  const goToNewSubmission = () => {
    navigate("/submission/new");
  };
  return (
    <div>
      <div
        className="bg-cover bg-center min-h-[100px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${submissionBg})`,
        }}
      >
        <div className="py-10">
          <h1 className="text-4xl text-center font-semibold text-white">
            Dashboard
          </h1>
        </div>
      </div>
      <div className="container-global ">
        <div className="grid grid-cols-4 gap-6 py-4 ">
          {/* Left Section */}
          <div className="grid col-span-3">
            <div className="h-fit border border-gray-300 rounded-md ">
              <div className="bg-fadeBg py-2 rounded-t-md border-b border-gray-300">
                <h2 className="text-lg font-semibold text-center">
                  All Submission
                </h2>
              </div>
              <div className="p-6 text-center">
                <p className="text-gray-500">No Data</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid col-span-1 gap-y-3 h-fit">
            {/* Quick Links */}
            <div className="bg-fadeBg rounded-lg p-4">
              <div className="">
                <h2 className="text-lg font-semibold text-center">
                  Quick Links
                </h2>
              </div>
              <div className="mt-2">
                <a href="#" className="flex items-center gap-2">
                  <span className="text-sm">⟶</span> All Submissions
                </a>
              </div>
            </div>
            <div className="bg-fadeBg flex flex-col gap-3 justify-center text-center px-4 py-4 rounded-lg">
              <span className="flex justify-center w-full">
                <img className="w-2/3 " src={logo} alt="logo" />
              </span>
              <button onClick={goToNewSubmission} className="bg-secondary py-3 rounded-md text-white font-semibold text-sm">
                Online Submission
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submission;
