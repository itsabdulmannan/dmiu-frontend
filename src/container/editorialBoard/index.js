import React from "react";
import EditorialBoardBg from "../../assets/images/AboutSectionsBg.jpg";
import EditorialBoardData from "./data";

const EditorialBoard = () => {
  const { tableOfContents } = EditorialBoardData;

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

      <div className="container-global py-4">
        <div className="flex flex-col md:flex-row items-start text-darkText">
          {/* Sidebar */}
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

          {/* Static Content */}
          <div className="flex-1 space-y-4 px-4">
            <section id="EditorInChief">
              <h2 className="text-2xl font-bold ">Editor In chief</h2>
              <div className="flex flex-row gap-2 my-2">
                <h3 className="font-bold italic text text-gray-700">
                  Prof. Dr. Iqrar Ahmad Khan(H.I., S.I),
                </h3>
                <p>Vice Chancellor, University of Agriculture Faisalabad</p>
              </div>
            </section>
            <section id="ManagingEditor">
              <h2 className="text-2xl font-bold ">Managing Editor</h2>
              <div className="flex flex-row gap-2 my-2">
                <h3 className="font-bold italic text text-gray-700">
                  Dr. Siddra Ijaz,
                </h3>
                <p>
                  Centre of Agricultural Biochemistry and Biotechnology,
                  University of Agriculture Faisalabad
                </p>
              </div>
            </section>

            <section id="DeputyME">
              <h2 className="text-2xl font-bold ">Deputy Managing Editor</h2>
              <div className="flex flex-row gap-2 my-2">
                <h3 className="font-bold italic text text-gray-700">
                  Dr. Saddam Hussain,
                </h3>
                <p>
                  Department of Agronomy, University of Agriculture Faisalabad
                </p>
              </div>
            </section>

            <section id="SectionEditor">
              <h2 className="text-2xl font-bold mb-2">Section Editors</h2>

              <ul className="">
                <li className="flex justify-between items-start border-b border-gray-200 py-2 px-2 text-base hover:bg-fadeBg">
                  <h3 className="font-bold text-gray-700 w-[20%]">
                    Dr. Abdul Ghafoor
                  </h3>
                  <p className="w-[80%]">
                    Department of Farm Machinery and Power, Faculty of
                    Agricultural Engineering & Technology, UAF, Pakistan
                  </p>
                </li>
                <li className="flex justify-between items-start border-b border-gray-200 py-2 px-2 text-base hover:bg-fadeBg">
                  <h3 className="font-bold text-gray-700 w-[20%]">
                    Dr. Abdul Ghafoor
                  </h3>
                  <p className="w-[80%]">
                    Department of Farm Machinery and Power, Faculty of
                    Agricultural Engineering & Technology, UAF, Pakistan
                  </p>
                </li>
                
              </ul>
            </section>

            <section id="Editors">
              <h2 className="text-2xl font-bold mb-2">Editors</h2>

              <ul className="">
                <li className="flex justify-between items-start border-b border-gray-200 py-2 px-2 text-base hover:bg-fadeBg">
                  <h3 className="font-bold text-gray-700 w-[25%]">
                  Dr. Ahmad H. El-Ghorab
                  </h3>
                  <p className="w-[80%]">
                  Flavour and Aroma Department, National Research Center, Giza, Egypt
                  </p>
                </li>
                <li className="flex justify-between items-start border-b border-gray-200 py-2 px-2 text-base hover:bg-fadeBg">
                  <h3 className="font-bold text-gray-700 w-[25%]">
                  Dr. Bernhard Huchzermeyer
                  </h3>
                  <p className="w-[75%]">
                  University of Hannover, Germany
                  </p>
                </li>
                
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorialBoard;
