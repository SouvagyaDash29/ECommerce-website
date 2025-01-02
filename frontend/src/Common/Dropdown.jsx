import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Dropdown = ({ tittle, items, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onOptionsClick = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col">
      <span className="font-inter font-semibold text-neutral-500  mb-2 pl-1">{tittle}</span>
      <div
        onClick={toggleDropdown}
        className="border-[2px] border-neutral-500 w-48 inline-flex justify-between px-3 py-2 rounded-lg cursor-pointer"
      >
        {selectedOption || placeholder}
        <ChevronDown />
      </div>
      {isOpen && (
        <div className="absolute w-48 top-[4.5rem] bg-white mt-2 rounded-md p-2">
          {items.map((item, i) => (
            <div
              onClick={onOptionsClick(item)}
              key={i}
              className="hover:bg-gray-200 p-1.5 rounded cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
