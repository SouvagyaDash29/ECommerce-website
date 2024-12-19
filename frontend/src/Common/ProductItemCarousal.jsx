import React from 'react';
import { Heart, Star } from "lucide-react";

const ProductItemCarousal = ({name, img, price}) => {
  return (
	<div className='mb-3'>
            <div className="bg-gray-100 w-52 p-3 group">
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <span className="font-inter font-semibold text-xs px-3 py-1 bg-white w-fit rounded mb-1">NEW</span>
                <span className="bg-emerald-400 text-white w-fit px-4 rounded">-50%</span>
              </div>
              <Heart className=" p-2 size-9 bg-white rounded-full"/>
            </div>
            <div className="flex justify-center p-5">
              <img src={img} alt="" className="w-[100%] aspect-square object-contain"/>
            </div>
            <button className="bg-neutral-900 text-white w-full py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Add to cart</button>
            </div>
            <div className=" grid gap-y-1 mt-3 ">
              <p className="flex">
              <Star className="size-4 fill-black" />
              <Star className="size-4 fill-black" />
              <Star className="size-4 fill-black" />
              <Star className="size-4 fill-black" />
              </p>
              <p className="font-inter font-semibold ">{name}</p>
              <span className="flex gap-4">
                <h5>{price}</h5>
                <h5 className="text-neutral-500 line-through">$400.00</h5>
              </span>
            </div>
          </div>
  )
}

export default ProductItemCarousal