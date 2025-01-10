import React, { useState } from "react";
import settingBg from "../../assets/images/AboutSectionsBg.jpg";
import logo from "../../assets/images/logo.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const NewSubmission = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const goToHome = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
  };

  return (
    <div>
      <div>
        <div
          className="bg-cover bg-center min-h-[100px]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${settingBg})`,
          }}
        >
          <div className="py-10">
            <h1 className="text-4xl text-center font-semibold text-white">
              Name
            </h1>
          </div>
        </div>
        <div className="container-global ">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 py-4">
            {/* Left Section */}
            <div className="grid col-span-1 md:col-span-3">
              <div className="mb-3">
                <h2 className="text-xl font-semibold text-gray-900 ">
                  Profile Settings
                </h2>
                <h1 className="text-base text-gray-700">Update Your Profile</h1>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
                  {/* First Name */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                      className=" block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                      className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: /^\S+@\S+\.\S+$/,
                      })}
                      className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Title */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <select
                      id="title"
                      {...register("title", { required: "Title is required" })}
                      className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                    >
                      <option value="">Select title</option>
                      <option value="Mr">Mr.</option>
                      <option value="Ms">Ms.</option>
                      <option value="Dr">Dr.</option>
                    </select>
                    {errors.title && (
                      <p className="text-red-500 text-sm">
                        {errors.title.message}
                      </p>
                    )}
                  </div>

                  {/* Country */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      {...register("country", {
                        required: "Country is required",
                      })}
                      className=" block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                    >
                      <option value="">Select Country</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Pakistan">Pakistan</option>
                    </select>
                    {errors.country && (
                      <p className="text-red-500 text-sm">
                        {errors.country.message}
                      </p>
                    )}
                  </div>

                  {/* Specialization */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="specialization"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Specialization*
                    </label>
                    <select
                      id="specialization"
                      {...register("specialization", {
                        required: "Specialization is required",
                      })}
                      className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                    >
                      <option value="">Select Specialization</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Graphic Design">Graphic Design</option>
                    </select>
                    {errors.specialization && (
                      <p className="text-red-500 text-sm">
                        {errors.specialization.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
                  {/* Affiliation */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="affiliation"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Affiliation*
                    </label>
                    <input
                      type="text"
                      id="affiliation"
                      {...register("affiliation", {
                        required: "Affiliation is required",
                      })}
                      className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                    />
                    {errors.affiliation && (
                      <p className="text-red-500 text-sm">
                        {errors.affiliation.message}
                      </p>
                    )}
                  </div>
                  {/* Phone */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                      className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  {/* Password */}
                  <div className="flex flex-col gap-1 relative">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password*
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className=" block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-9 text-gray-600 focus:outline-none"
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                    {errors.password && (
                      <p className="text-red-500 text-sm">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Reviewer Toggle */}
                {/* <div className="col-span-2 flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="reviewer"
                    {...register("reviewer")}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="reviewer"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Want to become a reviewer?
                  </label>
                </div> */}

                {/* Sign Up Button */}
                <div className="w-fit py-4">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 bg-secondary text-white rounded-md hover:bg-primary focus:outline-none"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>

            {/* Right Section */}
            <div className="grid col-span-1 gap-y-3 h-fit">
              {/* Quick Links */}
              <div className="bg-fadeBg rounded-lg p-4">
                <div className="">
                  <h2 className="text-lg font-semibold text-center">
                    Quick Links
                  </h2>
                </div>
                <div className="mt-2">
                  <a href="#" className="flex items-center gap-2">
                    <span className="text-sm">⟶</span> All Submissions
                  </a>
                </div>
              </div>
              <div className="bg-fadeBg flex flex-col gap-3 justify-center text-center px-4 py-4 rounded-lg">
                <span className="flex justify-center w-full">
                  <img className="w-2/3 " src={logo} alt="logo" />
                </span>
                <button className="bg-secondary py-3 rounded-md text-white font-semibold text-sm">
                  Online Submission
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSubmission;
