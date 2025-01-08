import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormSectionTwo = ({ onNext, onPrevious }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    onNext(); // Proceed to the next step
  };

  const [numAuthors, setNumAuthors] = useState(1);
  const [authorFields, setAuthorFields] = useState([
    { name: "", affiliation: "", country: "", email: "" },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedFields = [...authorFields];
    updatedFields[index][field] = value;
    setAuthorFields(updatedFields);
  };

  const handleNumAuthorsChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setNumAuthors(value);

    // Clear the input field
    e.target.value = "";
  };

  const addAuthorRow = () => {
    if (authorFields.length < numAuthors) {
      setAuthorFields([
        ...authorFields,
        { name: "", affiliation: "", country: "", email: "" },
      ]);
    }
  };

  const removeAuthorRow = (index) => {
    if (authorFields.length > 1) {
      const updatedFields = authorFields.filter((_, i) => i !== index);
      setAuthorFields(updatedFields);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="py-2">
        <h2 className="text-lg font-semibold text-gray-700">Step 2/4</h2>
        <h1 className="text-xl font-bold text-gray-900">Manuscript Details</h1>
      </div>

      {/* Manuscript Title */}
      <div className="flex flex-wrap sm:flex-nowrap gap-4 ">
        <div className="w-full sm:min-w-[48%]">
          <label className="block font-medium mb-1">Manuscript Title*</label>
          <input
            type="text"
            {...register("manuscriptTitle", {
              required: "Manuscript Title is required",
            })}
            className={`w-full p-2 border ${
              errors.manuscriptTitle ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.manuscriptTitle && (
            <span className="text-red-500 text-sm">
              {errors.manuscriptTitle.message}
            </span>
          )}
        </div>

        {/* Manuscript Type */}
        <div className="w-full sm:min-w-[48%]">
          <label className="block font-medium mb-1">Manuscript Type*</label>
          <select
            {...register("manuscriptType", {
              required: "Manuscript Type is required",
            })}
            className={`w-full p-2 border ${
              errors.manuscriptType ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          >
            <option value="">Select Type</option>
            <option value="Research">Research</option>
            <option value="Review">Review</option>
          </select>
          {errors.manuscriptType && (
            <span className="text-red-500 text-sm">
              {errors.manuscriptType.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap gap-4">
        {/* Running Title */}
        <div className="w-full sm:min-w-[48%]">
          <label className="block font-medium mb-1">Running Title*</label>
          <input
            type="text"
            {...register("runningTitle", {
              required: "Running Title is required",
            })}
            className={`w-full p-2 border ${
              errors.runningTitle ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.runningTitle && (
            <span className="text-red-500 text-sm">
              {errors.runningTitle.message}
            </span>
          )}
        </div>

        {/* Subject */}
        <div className="w-full sm:min-w-[48%]">
          <label className="block font-medium mb-1">Subject*</label>
          <select
            {...register("subject", { required: "Subject is required" })}
            className={`w-full p-2 border ${
              errors.subject ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          >
            <option value="">Select Subject</option>
            <option value="Biology">Biology</option>
            <option value="Physics">Physics</option>
          </select>
          {errors.subject && (
            <span className="text-red-500 text-sm">
              {errors.subject.message}
            </span>
          )}
        </div>
      </div>

      {/* Abstract */}
      <div className="w-full">
        <label className="block font-medium mb-1">Abstract*</label>
        <textarea
          {...register("abstract", { required: "Abstract is required" })}
          className={`w-full p-2 border ${
            errors.abstract ? "border-red-500" : "border-gray-300"
          } rounded-md`}
        />
        {errors.abstract && (
          <span className="text-red-500 text-sm">
            {errors.abstract.message}
          </span>
        )}
      </div>

      <div className="flex flex-wrap sm:flex-nowrap gap-4">
        {/* Corresponding Author Name */}
        <div className="w-full sm:min-w-[48%]">
          <label className="block font-medium mb-1 whitespace-nowrap">
            Corresponding Author Name*
          </label>
          <input
            type="text"
            {...register("correspondingAuthorName", {
              required: "Corresponding Author Name is required",
            })}
            className={`w-full p-2 border ${
              errors.correspondingAuthorName
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md`}
          />
          {errors.correspondingAuthorName && (
            <span className="text-red-500 text-sm">
              {errors.correspondingAuthorName.message}
            </span>
          )}
        </div>

        {/* Corresponding Author Email */}
        <div className="w-full sm:min-w-[48%]">
          <label className="block font-medium mb-1 whitespace-nowrap">
            Corresponding Author Email*
          </label>
          <input
            type="email"
            {...register("correspondingAuthorEmail", {
              required: "Corresponding Author Email is required",
            })}
            className={`w-full p-2 border ${
              errors.correspondingAuthorEmail
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md`}
          />
          {errors.correspondingAuthorEmail && (
            <span className="text-red-500 text-sm">
              {errors.correspondingAuthorEmail.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold">Authors Information</h2>
        <p>
          Provide the details of all the authors of this manuscript, in the
          order that they appear on the manuscript. Your details have been
          prefilled as the submitting author.
        </p>

        {/* Input for "No. of Authors" */}
        <div className="w-full sm:w-[25%] mt-4">
          <label className="block font-medium mb-1">No. Of Authors*</label>
          <input
            type="number"
            className="w-full p-2 border rounded-md"
            value={numAuthors}
            onChange={handleNumAuthorsChange}
            min={1}
          />
        </div>

        {/* Render dynamic author inputs */}
        {authorFields.map((author, index) => (
          <div key={index} className="mt-4 flex flex-wrap md:flex-nowrap gap-4 items-center">
            <div className="w-full sm:w-[20%]">
              <label className="block font-medium mb-1">Full Name</label>
              <input
                {...register(`authors.${index}.name`, {
                  required: "Full Name is required",
                })}
                type="text"
                className={`w-full p-2 border ${
                  errors?.authors?.[index]?.name
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md`}
                value={author.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
              />
              {errors?.authors?.[index]?.name && (
                <span className="text-red-500 text-sm">
                  {errors.authors[index].name.message}
                </span>
              )}
            </div>

            <div className="w-full sm:w-[20%]">
              <label className="block font-medium mb-1">Affiliation</label>
              <input
                {...register(`authors.${index}.affiliation`, {
                  required: "Affiliation is required",
                })}
                type="text"
                className={`w-full p-2 border ${
                  errors?.authors?.[index]?.affiliation
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md`}
                value={author.affiliation}
                onChange={(e) =>
                  handleInputChange(index, "affiliation", e.target.value)
                }
              />
              {errors?.authors?.[index]?.affiliation && (
                <span className="text-red-500 text-sm">
                  {errors.authors[index].affiliation.message}
                </span>
              )}
            </div>

            <div className="w-full sm:w-[20%]">
              <label className="block font-medium mb-1">Country</label>
              <select
                {...register(`authors.${index}.country`, {
                  required: "Country is required",
                })}
                className={`w-full p-2 border ${
                  errors?.authors?.[index]?.country
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md`}
                value={author.country}
                onChange={(e) =>
                  handleInputChange(index, "country", e.target.value)
                }
              >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              {errors?.authors?.[index]?.country && (
                <span className="text-red-500 text-sm">
                  {errors.authors[index].country.message}
                </span>
              )}
            </div>

            <div className="w-full sm:w-[20%]">
              <label className="block font-medium mb-1">Email</label>
              <input
                {...register(`authors.${index}.email`, {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                type="email"
                className={`w-full p-2 border ${
                  errors?.authors?.[index]?.email
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md`}
                value={author.email}
                onChange={(e) =>
                  handleInputChange(index, "email", e.target.value)
                }
              />
              {errors?.authors?.[index]?.email && (
                <span className="text-red-500 text-sm">
                  {errors.authors[index].email.message}
                </span>
              )}
            </div>

            {/* Add "minus" button for each row */}
            <button
              type="button"
              className="text-red-500 font-bold p-2"
              onClick={() => removeAuthorRow(index)}
              disabled={authorFields.length === 1}
            >
              -
            </button>

            {/* Add "plus" button only in the last row */}
            {index === authorFields.length - 1 &&
              authorFields.length < numAuthors && (
                <button
                  type="button"
                  className="text-green-500 font-bold p-2"
                  onClick={addAuthorRow}
                >
                  +
                </button>
              )}
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-4">
        <button
          type="button"
          onClick={onPrevious}
          className="px-4 py-2 bg-primary text-white rounded text-base font-normal"
        >
          Previous
        </button>
        <button
          type="submit"
          
          className="px-4 py-2 bg-secondary text-white rounded"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default FormSectionTwo;
