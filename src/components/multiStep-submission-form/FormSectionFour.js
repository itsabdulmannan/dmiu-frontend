import React, { useState } from "react";

const FormSectionFour = ({ onNext, onPrevious }) => {
  const [mainManuscript, setMainManuscript] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);
  const [supplementaryFile, setSupplementaryFile] = useState(null);
  const [isUploadingMain, setIsUploadingMain] = useState(false);
  const [isUploadingCover, setIsUploadingCover] = useState(false);
  const [isUploadingSupplementary, setIsUploadingSupplementary] =
    useState(false);
  const [isFormValid, setIsFormValid] = useState(true); // to track form validation
  const [errorMessage, setErrorMessage] = useState(""); // for error message

  const handleFileChange = (e, setFile, setUploading, fileType) => {
    const file = e.target.files[0];
    if (file) {
      setUploading(true);
      setTimeout(() => {
        setFile(file);
        setUploading(false);
      }, 2000);
    }
  };

  const handleRemoveFile = (setFile) => {
    setFile(null);
  };

  const validateForm = () => {
    if (!mainManuscript) {
      setIsFormValid(false); // Set form invalid if main manuscript is not uploaded
      setErrorMessage("Main Manuscript is required.");
    } else {
      setIsFormValid(true); // Reset form validity if main manuscript is uploaded
      setErrorMessage(""); // Reset error message
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();

    // If form is valid, reset fields and display success (or proceed to next step)
    if (isFormValid) {
      // Clear file inputs
      setMainManuscript(null);
      setCoverLetter(null);
      setSupplementaryFile(null);
      // You can proceed with the form submission logic here
      console.log("Form Submitted Successfully");
    }
  };

  // Function to limit file name length to 20 characters
  const truncateFileName = (fileName) => {
    return fileName.length > 20 ? fileName.slice(0, 20) + "..." : fileName;
  };

  return (
    <div>
      <div className="flex flex-wrap gap-6">
        {/* Main Manuscript Upload (Required) */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Main Manuscript*</h3>
          <div className="flex flex-col items-center gap-2">
            {!mainManuscript && (
              <input
                type="file"
                className="hidden"
                id="mainManuscript"
                onChange={(e) =>
                  handleFileChange(e, setMainManuscript, setIsUploadingMain)
                }
                required
              />
            )}
            <div className="flex flex-row items-center border border-gray-300 rounded-md">
              <label
                htmlFor="mainManuscript"
                className="bg-gray-100 text-sm text-gray-700 px-2 py-3 whitespace-nowrap border-r border-gray-300 rounded-s-md cursor-pointer"
              >
                Choose File
              </label>
              <span className="px-4 py-2 w-56 text-gray-500">
                {mainManuscript
                  ? truncateFileName(mainManuscript.name)
                  : "No file chosen"}
              </span>
            </div>
            {mainManuscript && (
              <div className="flex items-center gap-2">
                {isUploadingMain ? (
                  <span className="text-blue-500">Uploading...</span>
                ) : (
                  <div className="text-gray-500">{mainManuscript.name}</div>
                )}
                <button
                  className="text-red-500 font-bold cursor-pointer"
                  onClick={() => handleRemoveFile(setMainManuscript)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Cover Letter Upload */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Cover Letter</h3>
          <div className="flex flex-col items-center gap-2">
            {!coverLetter && (
              <input
                type="file"
                className="hidden"
                id="coverLetter"
                onChange={(e) =>
                  handleFileChange(e, setCoverLetter, setIsUploadingCover)
                }
              />
            )}
            <div className="flex flex-row items-center border border-gray-300 rounded-md">
              <label
                htmlFor="coverLetter"
                className="bg-gray-100 text-sm text-gray-700 px-2 py-3 whitespace-nowrap border-r border-gray-300 rounded-s-md cursor-pointer"
              >
                Choose File
              </label>
              <span className="px-4 py-2 w-56 text-gray-500">
                {coverLetter
                  ? truncateFileName(coverLetter.name)
                  : "No file chosen"}
              </span>
            </div>
            {coverLetter && (
              <div className="flex items-center gap-2">
                {isUploadingCover ? (
                  <span className="text-blue-500">Uploading...</span>
                ) : (
                  <div className="text-gray-500">{coverLetter.name}</div>
                )}
                <button
                  className="text-red-500 font-bold cursor-pointer"
                  onClick={() => handleRemoveFile(setCoverLetter)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Supplementary File Upload */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Supplementary File</h3>
          <div className="flex flex-col items-center gap-2">
            {!supplementaryFile && (
              <input
                type="file"
                className="hidden"
                id="supplementaryFile"
                onChange={(e) =>
                  handleFileChange(
                    e,
                    setSupplementaryFile,
                    setIsUploadingSupplementary
                  )
                }
              />
            )}
            <div className="flex flex-row items-center border border-gray-300 rounded-md">
              <label
                htmlFor="supplementaryFile"
                className="bg-gray-100 text-sm text-gray-700 px-2 py-3 whitespace-nowrap border-r border-gray-300 rounded-s-md cursor-pointer"
              >
                Choose File
              </label>
              <span className="px-4 py-2 w-56 text-gray-500">
                {supplementaryFile
                  ? truncateFileName(supplementaryFile.name)
                  : "No file chosen"}
              </span>
            </div>
            {supplementaryFile && (
              <div className="flex items-center gap-2">
                {isUploadingSupplementary ? (
                  <span className="text-blue-500">Uploading...</span>
                ) : (
                  <div className="text-gray-500">{supplementaryFile.name}</div>
                )}
                <button
                  className="text-red-500 font-bold cursor-pointer"
                  onClick={() => handleRemoveFile(setSupplementaryFile)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Error Message */}
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

      <div className="flex gap-3 mt-4">
        <button
          type="button"
          onClick={onPrevious}
          className="px-4 py-2 bg-primary text-white rounded text-base font-normal"
        >
          Previous
        </button>
        <button
          type="button"
          className={`px-4 py-2 bg-secondary text-white rounded ${
            !isFormValid ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormSectionFour;
