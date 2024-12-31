import React from 'react';
import ShopImg from "../../../Assets/Image Placeholder header.png"
import Dropdown from '../../../Common/Dropdown';
import { Grip, LayoutGrid, StretchHorizontal, StretchVertical } from 'lucide-react';

const categoryItems = ["Living Room", "Drawing Room", "Kitchen"];
const priceRange = ["100-200", "200-300", "300-400"];

const Shop = () => {
  return (
    <div className='w-[80%] mx-auto space-y-8'>
      <div class="bg-hero-pattern bg-no-repeat bg-cover bg-top  h-[25rem] flex flex-col gap-4 justify-center items-center">
        <span className='font-poppins'>{`Home > Shop `}</span>
        <h1 className='font-poppins lg:text-5xl font-medium'>Shop Page</h1>
        <span className='font-inter lg:text-xl'>Let’s design the place you always imagined.</span>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-4">
          <Dropdown items={categoryItems} tittle="CATEGORIES" placeholder="Select Room"/>
          <Dropdown items={priceRange} tittle="PRICE" placeholder="Select Price Range"/>
        </div>
        <div className="flex self-end gap-4">
        <Grip className='size-5 fill-gray-500 stroke-gray-500'/>
        <LayoutGrid className='size-5 fill-gray-500 stroke-gray-500'/>
        <StretchVertical className='size-5 fill-gray-500 stroke-gray-500'/>
        <StretchHorizontal className='size-5 fill-gray-500 stroke-gray-500'/>
        </div>
      </div>

    </div>
  )
}

export default Shop