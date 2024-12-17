import React from 'react'
import { NavLink } from 'react-router'

const Signin = () => {
  return (
    <div className=" m-auto max-md:mt-20">

    <form className="text-neutral-500 w-80 flex flex-col gap-8">
      <div className="">
      <h1 className="text-neutral-900 text-3xl font-poppins font-medium -tracking-wider pb-2">
              Sign in
            </h1>
            <span className="text-sm">
              Don't have an account yet?
              <NavLink to='/Sign-up' className="text-emerald-400"> Sign up</NavLink>
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
            <div className="flex justify-between">
              <span><input type="checkbox" name="" id="" /> Remember me</span>
                 <NavLink className="text-neutral-900 font-semibold">Forget password?</NavLink>
              </div>
            </div>
            <button type="button" className="bg-neutral-900 text-white py-2 rounded-md">Sign In</button>

    </form>
    </div>
  )
}

export default Signin