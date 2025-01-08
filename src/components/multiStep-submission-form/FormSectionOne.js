import React from "react";

const FormSectionOne = ({ onNext }) => {
  return (
    <div>
      <div className="">
        <h2 className="text-lg font-semibold text-gray-700">Step 1/4</h2>
        <h1 className="text-xl font-bold text-gray-900">
          Pre-Submission Checklist
        </h1>
      </div>
      <div className="h-[400px] overflow-y-auto rounded-lg bg-fadeBg px-10 py-4">
        <ul className="list-disc text-gray-700">
          <li>
            Manuscript contains original data and has not been submitted or
            published anywhere and the submitted manuscript or data will not be
            submitted anywhere during the review process.
          </li>
          <li>
            The instructions to authors have been noted and the format of the
            manuscript is as per given guidelines, especially ‘Results and
            Discussion’ are presented in separate sections and Figures’ legends
            and table titles are self-explanatory and have sufficient
            information.
          </li>
          <li>
            The cited material is published in high-quality journals and no
            citation manipulation has been done. Furthermore, recently published
            relevant manuscripts of this journal may be reviewed.
          </li>
          <li>Adapted figures and illustrations are referenced properly.</li>
          <li>
            There is no plagiarism regarding text (19% similarity index with 5%
            from any single source) or data or figure or illustration.
          </li>
          <li>
            The publication ethics of the scientific publications have been
            followed.
          </li>
          <li>
            Authors’ contribution and statement of ‘conflict of interest’ have
            been mentioned before the references in the manuscript.
          </li>
          <li>
            Editor has right to reject or send back the manuscript without
            reviewing process if it is not up to mark of the journal standards.
          </li>
          <li>
            All coauthors consented to submit the articles in this journal and
            agreed to transfer copyrights to the journal if it is accepted for
            the publication.
          </li>
          <li>Decision of the editor should be accepted open heartedly.</li>
          <li>
            Author list is as per contribution, and after acceptance of the
            manuscript author list will not be altered. However, at the time of
            revision authors’ list can be modified with the permission of
            managing editor, although not encouraged.
          </li>
          <li>
            The publishing time is 3 to 6 months; therefore, author can inquire
            the status three months after submission only through email:
            pakjas@uaf.edu.pk, use of any other mean (telephone or physical
            inquiry from the office or email to the personal email of any
            editor) will be considered as unethical and can lead to return of
            the manuscript to authors without further processing.
          </li>
        </ul>
      </div>
      <div className="flex items-start space-x-2 text-sm mt-4">
        <input
          id="agreement"
          type="checkbox"
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <label htmlFor="agreement" className="text-red-500">
          I agreed to pay the article processing charges (APCs) at the rate of
          300 $ per an accepted manuscript. Note: Research work submitted from
          public sector academic or research institutions of Pakistan has
          reduced APCs i.e. 25000 PKR per an accepted manuscript.
        </label>
      </div>
      <div className="flex items-start space-x-2 text-sm my-4">
        <input
          id="agreement"
          type="checkbox"
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <label htmlFor="agreement" className="text-gray-700">
          I have studied and understood all of the above instructions.*
        </label>
      </div>
      <button
        className="px-4 py-2 bg-secondary text-white rounded"
        onClick={onNext}
      >
     Next Step
      </button>
    </div>
  );
};

export default FormSectionOne;
