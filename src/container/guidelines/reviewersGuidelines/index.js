import React from "react";
import ReviewersGuidelinesBg from "../../../assets/images/AboutSectionsBg.jpg";
import { ReviewersGuidelinesData } from "./data";

const ReviewersGuidelines = () => {
  return (
    <div>
      {/* Background Section */}

      <div
        className="bg-cover bg-center min-h-[100px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${ReviewersGuidelinesBg})`,
        }}
      >
        <div className="py-10">
          <h1 className="text-4xl text-center font-semibold text-white">
            Reviewers Guidelines
          </h1>
        </div>
      </div>
      {/* Main Content */}
      <div className="container-global py-4">
        <div className="flex flex-col md:flex-row items-start text-darkText">
          {/* Table of Contents */}
          <div className="w-full md:w-1/4 lg:w-1/5 h-fit bg-fadeBg p-4 rounded-md">
            <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
            <ul className="flex flex-col gap-2">
              {ReviewersGuidelinesData.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="hover:text-secondaryText"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Sections */}
          <div className="flex-1 px-0 py-2 md:py-0 md:px-4">
            {ReviewersGuidelinesData.sections.map((section) => (
              <section id={section.id} className="mb-8" key={section.id}>
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                {section.questions && (
                  <ol className="list-decimal pl-5">
                    {section.questions.map((question, index) => (
                      <li key={index} className="mb-2">
                        {question}
                      </li>
                    ))}
                  </ol>
                )}
                {section.content && (
                  <p className="text-gray-700 text-justify my-4">
                    {section.content}
                  </p>
                )}
                {section.finalDecisionOptions && (
                  <ul className="list-disc pl-5">
                    {section.finalDecisionOptions.map((option, index) => (
                      <li key={index} className="mb-2">
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewersGuidelines;
