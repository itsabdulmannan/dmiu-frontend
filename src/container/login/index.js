import React from "react";
import { useForm } from "react-hook-form";
import Logo from "../../assets/images/logo.png";
import arrowBack from "../../assets/images/svgs/arrowBack.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const goToHome = () => {
    navigate("/");
  };
  const goToSignup = () => {
    navigate("/signup");
  };
 

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 overflow-y-auto sm:overflow-hidden">
      <button
        onClick={goToHome}
        className="text-gray-600 hover:text-gray-800 flex items-center p-2"
      >
        <span className="">
          <img className="w-8" src={arrowBack} alt="arrowBack" />
        </span>
        Back
      </button>

      <div className="flex flex-1 justify-center items-center px-4">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-custom px-4">
        <div className="flex justify-center">
          <img src={Logo} alt="Logo" className="mx-auto w-1/2" />
          </div>
          <h3 className="text-xl font-semibold text-center">Sign In</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email*
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password*
              </label>
              <input
                id="password"
                type="password"
                placeholder="Your Password"
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 bg-secondary text-white rounded-md hover:bg-primary focus:outline-none"
            >
              Sign in →
            </button>
          </form>
          <div className="text-center text-sm text-gray-500">
            <p>
              Forgot password?
              <a href="" className="ms-2 text-secondaryText hover:underline cursor-pointer">
                Reset Now
              </a>
            </p>
            <p>
              Don't have an account?
              <a onClick={goToSignup} className="ms-2 text-secondaryText hover:underline cursor-pointer">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
