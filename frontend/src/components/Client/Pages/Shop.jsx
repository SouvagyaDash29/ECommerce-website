import React from 'react';
import ShopImg from "../../../Assets/Image Placeholder header.png"
import Dropdown from '../../../Common/Dropdown';
const Shop = () => {
  return (
    <div className='w-[80%] mx-auto'>
      <div class="bg-hero-pattern bg-no-repeat bg-cover bg-top  h-[25rem] flex flex-col gap-4 justify-center items-center">
        <span className='font-poppins'>{`Home > Shop `}</span>
        <h1 className='font-poppins lg:text-5xl font-medium'>Shop Page</h1>
        <span className='font-inter lg:text-xl'>Let’s design the place you always imagined.</span>
      </div>

      <div className="flex gap-4">
        <Dropdown />
        <Dropdown />
      </div>

    </div>
  )
}

export default Shop