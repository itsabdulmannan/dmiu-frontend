import React from "react";
import PublicationEthicsBg from "../../../assets/images/AboutSectionsBg.jpg";
import publicationEthicsData from "./data";

const PublicationEthics = () => {


  return (
    <div>
      <div
        className="bg-cover bg-center min-h-100px flex items-center justify-center"
        style={{ backgroundImage: `url(${PublicationEthicsBg})` }}
      >
        <div className="px-20 py-10">
          <h1 className="text-4xl text-center font-bold">
          Publication Ethics
          </h1>
        </div>
      </div>
      <div className="container-global py-4">
        <div className="flex flex-col md:flex-row items-start text-darkText">
          <div className="w-full md:w-1/4 lg:w-1/5 h-fit bg-fadeBg p-4 rounded-md">
            <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
            <ul className="flex flex-col gap-2">
              {publicationEthicsData.sections.map((section) => (
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
          <div className="flex-1 px-0 py-2 md:py-0 md:px-4">
            {publicationEthicsData.sections.map((section) => (
              <section id={section.id} className="mb-8" key={section.id}>
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <p
                  className="text-gray-700 text-justify"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                ></p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationEthics;