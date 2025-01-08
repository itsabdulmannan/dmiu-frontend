import React, { useState } from "react";
import submissionBg from "../../assets/images/AboutSectionsBg.jpg";
import logo from "../../assets/images/logo.png";
import FormSectionOne from "../../components/multiStep-submission-form/FormSectionOne";
import FormSectionTwo from "../../components/multiStep-submission-form/FormSectionTwo";
import FormSectionThree from "../../components/multiStep-submission-form/FormSectionThree";
import FormSectionFour from "../../components/multiStep-submission-form/FormSectionFour";

const NewSubmission = () => {
  const [activeSection, setActiveSection] = useState("FormOne");

  const sections = ["FormOne", "FormTwo", "FormThree", "FormFour"];

  const handleNextSection = () => {
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1]);
    }
  };

  const handlePreviousSection = () => {
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1]);
    }
  };

  return (
    <div>
      <div>
        <div
          className="bg-cover bg-center min-h-[100px]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${submissionBg})`,
          }}
        >
          <div className="py-10">
            <h1 className="text-4xl text-center font-semibold text-white">
              Submission
            </h1>
          </div>
        </div>
        <div className="container-global ">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 py-4">
            {/* Left Section */}
            <div className="grid col-span-1 md:col-span-3">
              <div>
                {activeSection === "FormOne" && (
                  <FormSectionOne onNext={handleNextSection} />
                )}
                {activeSection === "FormTwo" && (
                  <FormSectionTwo
                    onNext={handleNextSection}
                    onPrevious={handlePreviousSection}
                  />
                )}
                {activeSection === "FormThree" && (
                  <FormSectionThree
                    onNext={handleNextSection}
                    onPrevious={handlePreviousSection}
                  />
                )}
                {activeSection === "FormFour" && (
                  <FormSectionFour onPrevious={handlePreviousSection} />
                )}
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
                <button className="bg-secondary py-3 rounded-md text-white font-semibold text-sm">
                  Online Submission
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSubmission;
