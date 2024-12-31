import React from "react";
import aimsAndScopeData from "./data"; 
import AimsAndScopeBg from "../../../assets/images/AboutSectionsBg.jpg";
const AimsAndScope = () => {
  const { tableOfContents, sections } = aimsAndScopeData;

  return (
    <div>
      <div
        className="bg-cover bg-center min-h-100px flex items-center justify-center"
        style={{ backgroundImage: `url(${AimsAndScopeBg})` }}
      >
        <div className="px-20 py-10">
          <h1 className="text-4xl text-center font-bold ">Aims & Scope</h1>
        </div>
      </div>
      <div className="container-global py-4">
        <div className="flex flex-col md:flex-row items-start text-darkText">
          <div className="w-full md:w-1/4 lg:w-1/5 h-fit bg-fadeBg p-4 rounded-md">
            <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              {tableOfContents.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="hover:text-secondaryText">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 px-4">
            {Object.entries(sections).map(([id, section]) => (
              <section id={id} className="mb-8" key={id}>
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                {section.content && (
                  <p className="text-gray-700 text-justify">
                    {section.content}
                  </p>
                )}
                {section.details && Array.isArray(section.details) && (
                  <ul className="text-gray-700 flex flex-col gap-2">
                    {section.details.map((detail, index) => (
                      <li key={index}>
                        <strong>{detail.label}:</strong> {detail.value}
                      </li>
                    ))}
                  </ul>
                )}
                {section.details && !Array.isArray(section.details) && (
                  <p className="text-gray-700 ">
                    <strong>Mailing Address:</strong>
                    <br />
                    {section.details.address}
                  </p>
                )}
                {section.details?.phone && (
                  <p className="text-gray-700 mt-4">
                    <strong>Phone:</strong> {section.details.phone}
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AimsAndScope;
