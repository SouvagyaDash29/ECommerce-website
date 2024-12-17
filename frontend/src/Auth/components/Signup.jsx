import React from "react";
import { NavLink } from "react-router";

const Signup = () => {
  return (
      <div className="w-80 m-auto max-md:mt-20 ">
        <form className="text-neutral-500 flex flex-col gap-8">
          <div className="">
            <h1 className="text-neutral-900 text-3xl font-poppins font-medium -tracking-wider pb-2">
              Sign up
            </h1>
            <span className="text-sm">
              Already have an account?{" "}
              <NavLink to="/Sign-in" className="text-emerald-400"> Sign in</NavLink>
            </span>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your Name"
                required
              />
            </div>
            <div>
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Username"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter you email address"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <div><input type="checkbox" name="" id="" /> I agree with{" "}
            <NavLink className="text-neutral-900 font-semibold">Privacy Policy</NavLink> and{" "}
            <NavLink className="text-neutral-900 font-semibold">Terms of Use.</NavLink></div>
            <button type="button" className="bg-neutral-900 text-white py-2 rounded-md">Sign Up</button>
          </div>
        </form>
      </div>
  );
};

export default Signup;
