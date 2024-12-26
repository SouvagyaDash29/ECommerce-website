import React from "react";

import Carousel from "../../../Common/Carousel";
import ProductItemCarousal from "../../../Common/ProductItemCarousal";
import { Link } from "react-router";

import { ArrowRight, LockKeyhole, Phone, Truck, Wallet2 } from "lucide-react";

import Home from "../../../Assets/Home.png";
import Chair2 from "../../../Assets/Chair2.png";
import Chair from "../../../Assets/chair.png";
import Table from "../../../Assets/table.png";
import Toster from "../../../Assets/toster.png";
import BambooBasket from "../../../Assets/Bamboo Basket.png";
import BeigeTableLamp from "../../../Assets/Beige Table Lamp.png";
import TableLamp from "../../../Assets/Table Lamp.jpg";
import LoveseatSofa from "../../../Assets/Loveseat Sofa.png";
import Sofaset from "../../../Assets/Sofa-set.png";

const features = [
  {
    Icon: <Truck className="lg:size-9" />,
    IconSize: "5",
    title: "Free Shipping",
    details: "Order above $200",
  },
  {
    Icon: <Wallet2 className="lg:size-9" />,
    title: "Free Shipping",
    details: "Order above $200",
  },
  {
    Icon: <LockKeyhole className="lg:size-9" />,
    title: "Free Shipping",
    details: "Order above $200",
  },
  {
    Icon: <Phone className="lg:size-9" />,
    title: "Free Shipping",
    details: "Order above $200",
  },
];

const items = [
  {
    title: "Loveseat Sofa",
    image: LoveseatSofa,
    price: "$199.00",
  },
  {
    title: "Table Lamp",
    image: TableLamp,
    price: "$24.99",
  },
  {
    title: "Beige Table Lamp",
    image: BeigeTableLamp,
    price: "$30.00",
  },
  {
    title: "Bamboo Basket",
    image: BambooBasket,
    price: "$40.00",
  },
  {
    title: "Tosater",
    image: Toster,
    price: "$224.00",
  },
  
];

const HomePage = () => {
  return (
    <>
      <div className="w-[80%] mx-auto space-y-10">
        {/* section-1 */}
        <Carousel img={Home} />

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

        {/* section-3 */}
        <div className=" grid lg:grid-cols-2 gap-4 grid-cols-1 ">
          <div className="bg-gray-100 p-10">
            <div className="lg:text-2xl sm:text-xl font-poppins font-medium leading-loose">
              Living Room
              <Link className="text-neutral-900 group underline underline-offset-4 max-sm:text-xs flex items-center text-base font-medium font-inter pt-4">
                <span className="pr-1 ">Shop Now</span>
                <ArrowRight className="size-4 cursor-pointer group-hover:translate-x-1 transition-transform duration-100" />
              </Link>
            </div>
            <img
              src={Chair2}
              alt=""
              className="w-[80%] aspect-square object-contain"
            />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="bg-gray-100 flex justify-between p-8">
              <div className="self-end lg:text-2xl sm:text-xl font-poppins font-medium leading-loose">
                Bedroom
                <Link className="text-neutral-900 group underline underline-offset-4 max-sm:text-xs flex items-center text-base font-medium font-inter pt-4">
                  <span className="pr-1 ">Shop Now</span>
                  <ArrowRight className="size-4 cursor-pointer group-hover:translate-x-1 transition-transform duration-100" />
                </Link>
              </div>
              <img
                src={Table}
                alt=""
                className="w-[35%] aspect-square object-contain"
              />
            </div>
            <div className="bg-gray-100 flex justify-between p-8">
              <div className="self-end lg:text-2xl sm:text-xl font-poppins font-medium leading-loose">
                Kitchen
                <Link className="text-neutral-900 group underline underline-offset-4 max-sm:text-xs flex items-center text-base font-medium font-inter pt-4">
                  <span className="pr-1 ">Shop Now</span>
                  <ArrowRight className="size-4 cursor-pointer group-hover:translate-x-1 transition-transform duration-100" />
                </Link>
              </div>
              <img
                src={Toster}
                alt=""
                className="w-[35%] aspect-square object-contain"
              />
            </div>
          </div>
        </div>

        {/* section-4 */}
        <div className="grid lg:grid-flow-col max-md:grid-cols-2  gap-4">
          {features.map((feature, i) => (
            <div className="flex flex-col bg-gray-100 p-10 space-y-2 rounded">
           {feature.Icon}
            <span className="font-medium font-poppins ">{feature.title}</span>
            <span className="text-xs font-extralight font-poppins">{feature.details}</span>
            </div>
          ))}
{/* 


          <div className="flex flex-col bg-gray-100 p-10 space-y-2">
          <Truck className="size-9" />
          <span className="font-medium font-poppins ">Free Shipping</span>
          <span className="text-xs font-extralight font-poppins">Order above $200</span>
          </div>

          <div className="flex flex-col bg-gray-100 p-10 space-y-2">
          <Truck className="size-9"  />
          <span className="font-medium font-poppins">Free Shipping</span>
          <span className="text-xs font-extralight font-poppins">Order above $200</span>
          </div>

          <div className="flex flex-col bg-gray-100 p-10 space-y-2">
          <Truck className="size-9"  />
          <span className="font-medium font-poppins">Free Shipping</span>
          <span className="text-xs font-extralight font-poppins">Order above $200</span>
          </div>

          <div className="flex flex-col bg-gray-100 p-10 space-y-2">
          <Truck className="size-10"  />
          <span className="font-medium font-poppins ">Free Shipping</span>
          <span className="text-xs font-extralight font-poppins">Order above $200</span>
          </div> */}

        </div>

        {/* section-5 */}
        <div className="">
          <div className="flex items-baseline justify-between mb-6">
            <h1 className="lg:text-4xl font-medium font-inter">New Arrivals</h1>
            <Link className="text-neutral-900 group underline underline-offset-4 max-sm:text-xs flex items-center text-base font-medium font-inter pt-4">
                <span className="pr-1 ">More Products</span>
                <ArrowRight className="size-4 cursor-pointer group-hover:translate-x-1 transition-transform duration-100" />
            </Link>
          </div>
          <div className="flex gap-4 overflow-auto">
            {items.map((Item, index) => (
              <ProductItemCarousal
                key={index}
                name={Item.title}
                img={Item.image}
                price={Item.price}
              />
            ))}</div>
        </div>

      </div>

        {/* section-6 */}
        <div className="grid grid-cols-2 mt-6 max-md:grid-cols-1">
        <img src={Sofaset} alt="" className="h-[100%] aspect-video object-fill" />
        <div className=" bg-gray-100 tracking-wide h-full px-20 max-md:py-10 max-md:px-6 space-y-3 flex flex-col justify-center">
            <span className="text-blue-500 font-inter font-bold">
              SALE UP TO 35% OFF
            </span>
            <div className="text-neutral-900 tracking-wider font-poppins font-medium text-3xl lg:text-5xl">
              HUNDREDS of New lower prices!
            </div>
            <p className="font-inter lg:text-lg">
              It’s more affordable than ever to give every room in your home a
              stylish makeover
            </p>
            <Link className="size-fit text-neutral-900 mt-3 group underline underline-offset-4 flex items-center lg:text-base font-medium font-inter">
              <span className="pr-1 ">More Product</span>
              <ArrowRight className="size-4 cursor-pointer group-hover:translate-x-1 transition-transform duration-100" />
            </Link>
          </div>
        </div>
      
      {/* Section-7 */}
      {/* <div className="grid grid-flow-col ">
        <div className="absolute">
          <img src={Table} alt=""  className="w-[100%]"/>
        </div>
        <form action="" className="w-[30%] mx-auto  ">
          <h1>Join Our Newsletter</h1>
          <span>Sign up for deals, new products and promotions</span>
          <input type="email" name="" id="" placeholder="Email address" />
        </form>
        <div className="">
          <img src={Chair} alt="" />
        </div>
      </div> */}

    </>
  );
};

export default HomePage;
