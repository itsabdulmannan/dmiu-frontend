import React from "react";
import AuthorsBg from "../../../assets/images/AboutSectionsBg.jpg";
import authorsData from "./data";

const Authors = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center min-h-100px flex items-center justify-center"
        style={{ backgroundImage: `url(${AuthorsBg})` }}
      >
        <div className="px-20 py-10">
          <h1 className="text-4xl text-center font-bold">
         Authors
          </h1>
        </div>
      </div>
      <div className="container-global py-4">
        <div className="flex flex-col md:flex-row items-start text-darkText">
          <div className="w-full md:w-1/4 lg:w-1/5 h-fit bg-fadeBg p-4 rounded-md">
            <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              {authorsData.sections.map((section) => (
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
          <div className="flex-1 px-4">
            {authorsData.sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{section.title}:</h2>
                <p className="text-gray-700 text-justify">{section.content}</p>
                {section.details && (
                  <ul className="flex flex-col gap-1 list-disc my-3">
                    {section.details.map((detail, index) => (
                      <li key={index} className="flex gap-2 text-sm">
                        <span className="font-semibold">{detail.label}:</span>
                        <p>{detail.value}</p>
                      </li>
                    ))}
                  </ul>
                )}
                {section.additionalContent && (
                  <div>
                    {section.additionalContent.map((content, index) => (
                      <p
                        key={index}
                        className="text-gray-700 text-justify mt-2"
                      >
                        {content}
                      </p>
                    ))}
                  </div>
                )}
                {section.experimentalData &&(
                    <ol className="ml-4">
                    {section.experimentalData.map((item, index) => (
                      <li className="list-decimal my-2" key={index}>{item}</li>
                    ))}
                  </ol>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;
