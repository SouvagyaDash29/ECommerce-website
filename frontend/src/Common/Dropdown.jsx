import React from 'react'

const Dropdown = () => {
  return (
    <form className="w-[20%] text-black">
  <label for="categories" className="block mb-2 font-inter font-semibold text-gray-500 dark:text-white">CATEGORIES</label>
  <select id="categories" className="border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 ">
    <option selected>Living Room</option>
    <option value="US">Drawing Room</option>
    <option value="CA">Bed Room</option>
    <option value="FR">Kitchen</option>
    <option value="DE">Dinning room</option>
  </select>
</form>
  )
}

export default Dropdown