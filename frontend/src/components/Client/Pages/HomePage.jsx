import React from "react";

import Carousel from "../Common/Carousel";
import ProductItemCarousal from "../Common/ProductItemCarousal";

import { Link } from "react-router";
import { ArrowRight, Heart, Star } from "lucide-react";

import Chair2 from "../../../Assets/Chair2.png";
import Table from "../../../Assets/table.png";
import Toster from "../../../Assets/toster.png";
import BambooBasket from "../../../Assets/Bamboo Basket.png";
import BeigeTableLamp from "../../../Assets/Beige Table Lamp.png";
import TableLamp from "../../../Assets/Table Lamp.jpg";
import LoveseatSofa from "../../../Assets/Loveseat Sofa.png";

const FurnitureCard = ({ title, image, className = '' }) => {
  return (
    <div className={`bg-gray-50 p-6 rounded-lg ${className}`}>
      <div className="flex flex-col h-full">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="relative group cursor-pointer">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="mt-4">
            <button className="flex items-center text-black hover:underline">
              Shop Now <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



const HomePage = () => {

  const items = [
    {
      title: "Loveseat Sofa",
      image: LoveseatSofa,
      price: "$199.00",

    },
    {
      title: "Table Lamp",
      image: TableLamp,
      price: "$24.99"
    },
    {
      title: "Beige Table Lamp",
      image: BeigeTableLamp,
      price: "$30.00"
    },
    {
      title: "Bamboo Basket",
      image: BambooBasket,
      price: "$40.00"
    },
    {
      title: "Tosater",
      image: Toster,
      price: "$224.00"
    }
    
  ];

  return (
    <>
      <div className="w-[80%] mx-auto space-y-10">

		{/* section-1 */}
        <div className="">
          <Carousel />
        </div>

		{/* section-2 */}
        <div className="flex max-md:sr-only">
          <div className="text-7xl font-poppins font-medium">
            Simply Unique/ Simply Better.
          </div>
          <div className="my-auto text-neutral-500 text-base font-inter">
            <span className="text-neutral-700 font-semibold">3legant </span>is a
            gift & decorations store based in HCMC, Vietnam. Est since 2019.{" "}
          </div>
        </div>

        {/* section-3*/}
        <div className="flex gap-6 max-md:flex-col ">
          <div className="bg-gray-100 w-1/2  p-6 max-md:w-full">
            <div className="lg:text-3xl sm:text-xl font-poppins font-medium leading-loose ">
            Living Room
            <Link className="text-neutral-900 group underline underline-offset-4 max-sm:text-xs flex items-center text-base font-medium font-inter pt-4">
              <span className="pr-1 ">Shop Now</span>
                <ArrowRight className="size-4 cursor-pointer group-hover:translate-x-1 transition-transform duration-100" />
              </Link>
            </div>
            <img src={Chair2} alt="" className="w-[83%] aspect-square object-contain" />
          </div>



          <div className="flex-grow ">
            <div className="bg-gray-100 h-fit flex justify-between mb-6 p-6">
            <div className="lg:text-3xl sm:text-xl font-poppins font-medium leading-loose size-fit ">
            Bedroom
            <Link className="text-neutral-900 group underline underline-offset-4 max-sm:text-xs flex items-center text-base font-medium font-inter pt-4">
              <span className="pr-1 ">Shop Now</span>
                <ArrowRight className="size-4 cursor-pointer group-hover:translate-x-1 transition-transform duration-100" />
              </Link>
            </div>
            <img src={Table} alt="" className="w-[43%] aspect-square object-contain" />
            </div>
            
            <div className="bg-gray-100 flex justify-between p-9">
            <div className="lg:text-3xl  sm:text-xl font-poppins font-medium leading-loose size-fit ">
              Kitchen
              <Link className="text-neutral-900 group underline underline-offset-4 max-sm:text-xs flex items-center text-base font-medium font-inter pt-4">
              <span className="pr-1 ">Shop Now</span>
                <ArrowRight className="size-4 cursor-pointer group-hover:translate-x-1 transition-transform duration-100" />
              </Link>
            </div>
            <img src={Toster} alt="" className="w-[43%] aspect-square object-contain" />
            </div>
          </div>
        </div>

        <div className="">
          <div className=" flex justify-between mb-6">
            <span className="font-poppins font-medium lg:text-4xl">New Arrivals</span>
          <Link className="text-neutral-900 group underline underline-offset-4 flex items-center lg:text-base font-medium font-inter">
                <span className="pr-1 ">More Product</span>
                <ArrowRight className="size-4 cursor-pointer group-hover:translate-x-1 transition-transform duration-100" />
              </Link>
          </div>
          <div className="flex flex-row gap-8 overflow-auto custom-scrollbar ">

          {items.map((Item, index) =>(
            <ProductItemCarousal key={index} name={Item.title} img={ Item.image } price={Item.price} />
            
          ))}
          
          </div>
          
        </div>
        </div>



        
     

</>






		  );
};

export default HomePage;
