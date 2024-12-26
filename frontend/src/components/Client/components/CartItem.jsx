import { X } from "lucide-react";
import React, { useState } from "react";

const CartItem = ({ img, Title, price, color }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  };

  const decrement = () => {
    setCount(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 1);
      }
    });
  };

  return (
    <div className="flex px-3 gap-3 py-5 ">
      <img src={img} alt="" className="size-24 aspect-video object-contain" />
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-1">
          <span className="font-semibold">{Title}</span>
          <span className="text-neutral-500 text-sm">Color: {color}</span>
          <div className="border-2 border-neutral-500 rounded w-fit">
            <button onClick={increment} className="px-2">
              +
            </button>
            <span>{count}</span>
            <button onClick={decrement} className="px-2">
              -
            </button>
          </div>
        </div>
        <div className="flex flex-col items-end gap-3">
          <span>{price}</span>
          <button className="">
            <X className="stroke-neutral-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
