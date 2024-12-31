import React, { useState } from "react";
import homebanner from "../../assets/images/homebanner.jpg";
import bookHalf from "../../assets/images/svgs/book-half.svg";
import personSvg from "../../assets/images/svgs/personSvg.svg";
import logo from "../../assets/images/logo.png";
import barChartSvg from "../../assets/images/svgs/barChartSvg.svg";
import arrowDown from "../../assets/images/svgs/arrowDown.svg";
import userIcon from "../../assets/images/user.webp";
import {
  journalProfile,
  editorSpotlight,
  specialIssues,
  articles,
} from "./data.js";

const Home = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle abstract visibility
  const toggleAbstract = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <>
      <div className="container-global py-4">
        <div className="flex flex-wrap sm:flex-nowrap justify-between gap-8 py-8">
          <div className="w-full sm:w-1/2 pr-0 sm:pr-6">
            <h1 className="text-3xl font-bold mb-4">
              Advances in Humanities and Social Sciences Research
            </h1>
            <p className="text-lg mb-4">
              Maximizing the impact of research through openness. Because
              science works best when research is open.
            </p>
            <ol className="list-decimal pl-5 text-lg">
              <li>ISSN:</li>
              <li>(print)</li>
              <li>(online)</li>
              {/* <li>DOI(Prefix): 10.21162/PAKJAS</li> */}
            </ol>
          </div>
          <div className="w-full sm:w-1/2 ">
            <img className="w-full sm:w-10/12" src={logo} alt="logo" />
          </div>
        </div>
        {/* cards block section */}
        <div className=" pb-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-secondaryText">
            {journalProfile.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-[70%,30%] gap-6 text-darkText">
            <section className="flex flex-col gap-2">
              <p className="text-justify leading-relaxed tracking-wide">
                {journalProfile.description1}
              </p>
              <p className="text-justify leading-relaxed tracking-wide">
                {journalProfile.description2}
              </p>
            </section>
            <section className="flex flex-col gap-2">
              <div className="bg-fadeBg flex flex-col gap-3 justify-center text-center px-2 py-4 rounded-lg">
                <span className="flex justify-center w-full">
                  <img className="w-2/3 " src={logo} alt="logo" />
                </span>
                <button className="bg-secondary py-3 rounded-md text-white font-semibold text-sm">
                  Online Submission
                </button>
              </div>
              {/* <div className="bg-fadeBg flex flex-col gap-2 justify-center px-2 py-4 rounded-lg">
             <div className="flex items-end justify-start gap-2">
                <img className="w-9" src={barChartSvg} alt="barChartSvg" />
                <h2 className="font-semibold">About Journal</h2>
              </div>

             <table className="table-auto w-full bg-white border-collapse border border-gray-300 text-sm">
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Acceptance Rate
                    </td>
                    <td className="px-4 py-2 border border-gray-300 font-semibold">
                      22%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Submission to Final Decision
                    </td>
                    <td className="px-4 py-2 border border-gray-300 font-semibold">
                      93 days
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Acceptance to Publication
                    </td>
                    <td className="px-4 py-2 border border-gray-300 font-semibold">
                      48 days
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Impact Factor
                    </td>
                    <td className="px-4 py-2 border border-gray-300 font-semibold">
                      0.856
                    </td>
                  </tr>
                </tbody>
              </table> 
            </div>  */}
            </section>
          </div>
        </div>

        {/* Latest article */}

        <div className="py-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-secondaryText">
            Latest Articles
          </h2>

          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article, index) => (
              <div key={index} className="bg-fadeBg h-fit p-4 rounded-md">
                <div className="flex justify-between items-center ">
                  <p className="bg-primary text-white px-4 py-1 text-sm rounded-full">
                    Research Article
                  </p>
                  <button className="px-[2px] py-1 rounded-md bg-secondary">
                    <img className="w-4" src={arrowDown} alt="arrowDown" />
                  </button>
                </div>
                <h3 className="text-xl font-semibold mt-3 text-darkText">
                  {article.title}
                </h3>
                <p className="font-sans text-[13px] font-bold leading-relaxed tracking-wider my-1 text-primaryText">
                  {article.authors}
                </p>
                <p className="font-sans italic text-[13px] font-bold text-gray-700">
                  {article.journalInfo}
                </p>
                <h6 className="my-2 text-darkText font-sans font-bold">
                  Abstract
                </h6>
                <div className="text-sm  text-darkText text-justify leading-relaxed tracking-wider">
                  <div>
                    {expandedIndex === index ? (
                      <p>{article.abstract}</p>
                    ) : (
                      <p>{article.abstract.slice(0, 220)}...</p>
                    )}
                    <div>
                      <button
                        onClick={() => toggleAbstract(index)}
                        className="text-gray-700 font-sans font-bold whitespace-nowrap"
                      >
                        {expandedIndex === index ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <button className="bg-secondary text-white py-4 px-3 rounded-lg">
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
