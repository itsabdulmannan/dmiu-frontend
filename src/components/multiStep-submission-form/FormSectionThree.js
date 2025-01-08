import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const FormSectionThree = ({ onNext, onPrevious }) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  // Watch the value of the "conflicts" radio input
  const conflicts = watch("conflicts");
  const [reviewers, setReviewers] = useState([
    { id: 1, name: "", affiliation: "", country: "", email: "" },
  ]);

  const handleAddReviewer = () => {
    if (reviewers.length < 3) {
      setReviewers([
        ...reviewers,
        { id: Date.now(), name: "", affiliation: "", country: "", email: "" },
      ]);
    }
  };

  const handleRemoveReviewer = (id) => {
    setReviewers(reviewers.filter((reviewer) => reviewer.id !== id));
  };

  const onSubmit = (data) => {
    console.log(data);
    onNext(); 
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-lg font-semibold mb-4">Step 3/4</h2>
      <h3 className="text-xl font-bold mb-2">
        Reviewers Details
        <span className="text-red-500 text-xs">
          At least 3 reviewers are required
        </span>
      </h3>
      <p className="mb-4 text-gray-700">
        Provide the details of all the reviewers of this manuscript, in the
        order that they appear on the manuscript.
      </p>

      {/* Reviewer Rows */}
      {reviewers.map((reviewer, index) => (
        <div className="flex flex-wrap gap-4 mb-4" key={reviewer.id}>
          <div className="w-full sm:w-[20%]">
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              {...register(`reviewers[${index}].name`, {
                required: "Full Name is required",
              })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.reviewers?.[index]?.name && (
              <p className="text-red-500 text-sm">
                {errors.reviewers[index].name.message}
              </p>
            )}
          </div>
          <div className="w-full sm:w-[20%]">
            <label className="block text-sm font-medium mb-1">
              Affiliation
            </label>
            <input
              {...register(`reviewers[${index}].affiliation`, {
                required: "Affiliation is required",
              })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.reviewers?.[index]?.affiliation && (
              <p className="text-red-500 text-sm">
                {errors.reviewers[index].affiliation.message}
              </p>
            )}
          </div>
          <div className="w-full sm:w-[20%]">
            <label className="block text-sm font-medium mb-1">Country</label>
            <Controller
              name={`reviewers[${index}].country`}
              control={control}
              rules={{ required: "Country is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              )}
            />
            {errors.reviewers?.[index]?.country && (
              <p className="text-red-500 text-sm">
                {errors.reviewers[index].country.message}
              </p>
            )}
          </div>
          <div className="w-full sm:w-[20%]">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              {...register(`reviewers[${index}].email`, {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.reviewers?.[index]?.email && (
              <p className="text-red-500 text-sm">
                {errors.reviewers[index].email.message}
              </p>
            )}
          </div>
          <div className="w-full sm:w-[10%] flex items-center gap-2">
            {index === reviewers.length - 1 && reviewers.length < 3 && (
              <button
                type="button"
                onClick={handleAddReviewer}
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                <span className="text-lg">+</span>
              </button>
            )}
            {reviewers.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveReviewer(reviewer.id)}
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 text-red-500"
              >
                <span className="text-lg">-</span>
              </button>
            )}
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-3">
        <h4 className="font-bold">
        Do any authors have Conflicts of Interest to declare?*
        </h4>
        <p>Please describe any of the authors’ potential conflicts of interest, such as financial interests, affiliations, or personal interests or beliefs, that could be perceived to affect the objectivity or neutrality of the manuscript</p>
        <div className="flex items-center gap-4 mt-3">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Yes"
              {...register("conflicts", { required: "This field is required" })}
            />
            <span>Yes</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="No"
              {...register("conflicts", { required: "This field is required" })}
            />
            <span>No</span>
          </label>
        </div>
        {errors.conflicts && (
          <p className="text-red-500 text-sm">{errors.conflicts.message}</p>
        )}

        {/* Show textarea if "Yes" is selected */}
        {conflicts === "Yes" && (
          <div className="mt-4">
            <label className="block text-sm font-medium mb-2">
            Reason
            </label>
            <textarea
              {...register("conflictDetails", {
                required:
                  "Please provide details about the conflict of interest.",
              })}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            ></textarea>
            {errors.conflictDetails && (
              <p className="text-red-500 text-sm">
                {errors.conflictDetails.message}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Data Availability Statement */}
      <div className="flex flex-col gap-2">
        <h4 className="font-bold ">Data Availability Statement</h4>
        <p>Please describe where the underlying data supporting the results of your study can be found, including, where applicable, hyperlinks to publicly archived datasets analysed or generated during the study.</p>
        <textarea
          {...register("dataAvailability", {
            required: "This field is required",
          })}
          rows="4"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
        ></textarea>
        {errors.dataAvailability && (
          <p className="text-red-500 text-sm">
            {errors.dataAvailability.message}
          </p>
        )}
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

export default FormSectionThree;
