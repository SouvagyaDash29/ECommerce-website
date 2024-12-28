import React from 'react';
import ShopImg from "../../../Assets/Image Placeholder header.png"
import Dropdown from '../../../Common/Dropdown';
const Shop = () => {
  return (
    <div>
      <div class="bg-hero-pattern bg-no-repeat bg-cover bg-top w-[80%] h-[25rem] mx-auto flex flex-col gap-4 justify-center items-center">
        <span className='font-poppins'>{`Home > Shop `}</span>
        <h1 className='font-poppins lg:text-5xl font-medium'>Shop Page</h1>
        <span className='font-inter lg:text-xl'>Let’s design the place you always imagined.</span>
      </div>

      <div className="">
        <Dropdown />
      </div>

    </div>
  )
}

export default Shop