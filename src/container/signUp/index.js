import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "../../assets/images/logo.png";

import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import arrowBack from "../../assets/images/svgs/arrowBack.svg";
const Signup = () => {
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
    <div className="min-h-[100%] flex flex-col overflow-y-auto sm:overflow-hidden">
      <button
        onClick={goToHome}
        className="text-gray-600 hover:text-gray-800 flex items-center p-2"
      >
        <span className="">
          <img className="w-8" src={arrowBack} alt="arrowBack" />
        </span>
        Back
      </button>

      <div className="flex flex-1 justify-center items-center px-4 mb-6">
        <div className="w-full lg:w-2/4  space-y-3 bg-white rounded-lg shadow-custom px-6 py-4">
          <div className="flex justify-center">
            <img cla src={Logo} alt="Logo" className="mx-auto w-[40%] h-[80px]" />
          </div>
          <h3 className="text-xl font-semibold text-center">Sign In</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
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
                  {...register("country", { required: "Country is required" })}
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
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
                  placeholder="e.g. ABC"
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
                  {...register("lastName")}
                  placeholder="e.g. ABC"
                  className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
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
                  placeholder="Your Affiliation"
                  className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                />
                {errors.affiliation && (
                  <p className="text-red-500 text-sm">
                    {errors.affiliation.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
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
                  placeholder="Your Email"
                  className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
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
                  placeholder="0304-1111111"
                  className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
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
                  placeholder="Your Password"
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

              {/* Confirm Password */}
              <div className="flex flex-col gap-1 relative">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password*
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                  })}
                  placeholder="Confirm your Password"
                  className=" block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-9 text-gray-600 focus:outline-none"
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
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
            <div className="col-span-2 mt-4">
              <button
                type="submit"
                className="w-full flex justify-center mt-4 py-2 px-4 bg-secondary text-white rounded-md hover:bg-primary focus:outline-none"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div>
            <p className=" text-sm text-gray-600 ">
              Already have an account?
              <a
                href="/login"
                className="pl-1 text-secondaryText hover:underline"
              >
                Login Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
