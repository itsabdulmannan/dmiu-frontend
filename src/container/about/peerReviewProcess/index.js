import React from "react";
import PeerReviewProcessBg from "../../../assets/images/AboutSectionsBg.jpg";
const PeerReviewProcess = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center min-h-[100px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${PeerReviewProcessBg})`,
        }}
      >
        <div className="py-10">
          <h1 className="text-4xl text-center font-semibold text-white">
            Peer Review Process
          </h1>
        </div>
      </div>
      <div className="container-global py-4 min-h-screen">
        <div className="flex flex-col md:flex-row items-start text-darkText">
          <div className="w-full md:w-1/4 lg:w-1/5 h-fit bg-fadeBg p-4 rounded-md">
            <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li>
                <a href="#overview" className="hover:text-secondaryText">
                  Peer Review Process
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 px-4">
            <section id="overview" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Peer Review Process</h2>
              <p className="text-gray-700 text-justify">
                Peer review process is the base of good science and rigorous
                review of any submitted manuscript identify high quality science
                to be presented to scientific community. Advancement in
                Humanities and Social Science Research has transparent and
                unbiased peer review process where a manuscript pass through the
                hands of at least five researchers belongs to existing
                scientific community from submission to publishing. The complete
                editorial work is accomplished using semi-online review system.
                The submitted manuscripts for publication, editorial office
                check it to ensure the meta data and manuscript files.
                Afterwards manuscript is sent to managing editor for peer review
                process. It is three phase peer review system to identify high
                quality research to be published in the journal.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeerReviewProcess;
