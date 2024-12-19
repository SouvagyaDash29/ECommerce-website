import React from "react";

import Carousel from "../../../Common/Carousel";
import ProductItemCarousal from "../../../Common/ProductItemCarousal";

import { Link } from "react-router";
import { ArrowRight, DessertIcon, Facebook, Instagram, LockKeyhole, Mail, Phone, Truck, Wallet2, Youtube } from "lucide-react";

import Chair2 from "../../../Assets/Chair2.png";
import Table from "../../../Assets/table.png";
import Toster from "../../../Assets/toster.png";
import BambooBasket from "../../../Assets/Bamboo Basket.png";
import BeigeTableLamp from "../../../Assets/Beige Table Lamp.png";
import TableLamp from "../../../Assets/Table Lamp.jpg";
import LoveseatSofa from "../../../Assets/Loveseat Sofa.png";
import Sofaset from "../../../Assets/Sofa-set.png";
import Chair from "../../../Assets/chair.png";

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
const features = [
  {
    Icon: <Truck className="size-10" />,
    IconSize: "5",
    title: "Free Shipping",
    details:  "Order above $200"
  },
  {
    Icon: <Wallet2 className="size-10" />,
    title: "Free Shipping",
    details:  "Order above $200"
  },
  {
    Icon: <LockKeyhole className="size-10" />,
    title: "Free Shipping",
    details:  "Order above $200"
  },
  {
    Icon: <Phone className="size-10" />,
    title: "Free Shipping",
    details:  "Order above $200"
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
            <img
              src={Chair2}
              alt=""
              className="w-[83%] aspect-square object-contain"
            />
          </div>

          <div className="flex-grow ">
            <div className="bg-gray-100 h-fit flex justify-between mb-6 p-6">
              <div className="lg:text-3xl sm:text-xl place-self-end font-poppins font-medium leading-loose size-fit ">
                Bedroom
                <Link className="text-neutral-900 group underline underline-offset-4 max-sm:text-xs flex items-center text-base font-medium font-inter pt-4">
                  <span className="pr-1 ">Shop Now</span>
                  <ArrowRight className="size-4 cursor-pointer group-hover:translate-x-1 transition-transform duration-100" />
                </Link>
              </div>
              <img
                src={Table}
                alt=""
                className="w-[43%] aspect-square object-contain"
              />
            </div>

            <div className="bg-gray-100 flex justify-between p-9">
              <div className="lg:text-3xl place-self-end sm:text-xl font-poppins font-medium leading-loose size-fit ">
                Kitchen
                <Link className="text-neutral-900 group underline underline-offset-4 max-sm:text-xs flex items-center text-base font-medium font-inter pt-4">
                  <span className="pr-1 ">Shop Now</span>
                  <ArrowRight className="size-4 cursor-pointer group-hover:translate-x-1 transition-transform duration-100" />
                </Link>
              </div>
              <img
                src={Toster}
                alt=""
                className="w-[43%] aspect-square object-contain"
              />
            </div>
          </div>
        </div>

        {/* FeatureSection */}
        <div className="grid grid-cols-4 max-md:grid-cols-2 ">
            {features.map((feature,i) =>(
              <div key={i} className="bg-gray-100 w-fit flex-grow ">
                {feature.Icon}
                <div className="font-medium font-poppins text-base my-2">{feature.title}</div>
                <div className="text-xs font-thin font-poppins  ">{feature.details}</div>
              </div>
            ))}
          </div>


        {/* ProductItems-section */}
        <div className="">
          <div className=" flex justify-between mb-6">
            <span className="font-poppins font-medium lg:text-4xl">
              New Arrivals
            </span>
            <Link className="text-neutral-900 group underline underline-offset-4 flex items-center lg:text-base font-medium font-inter">
              <span className="pr-1 ">More Product</span>
              <ArrowRight className="size-4 cursor-pointer group-hover:translate-x-1 transition-transform duration-100" />
            </Link>
          </div>
          <div className="flex flex-row gap-8 overflow-auto custom-scrollbar ">
            {items.map((Item, index) => (
              <ProductItemCarousal
                key={index}
                name={Item.title}
                img={Item.image}
                price={Item.price}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section-4 */}
      <div className="flex mt-10">
        <div className="w-1/2">
          <img src={Sofaset} alt="" className="w-full" />
        </div>
        <div className="w-1/2">
          <div className="flex flex-col justify-center p-16 bg-gray-100 tracking-wide size-full">
            <span className="text-blue-500 font-inter text-base font-bold">
              SALE UP TO 35% OFF
            </span>
            <div className="mt-3 text-5xl font-poppins font-medium text-neutral-900">
              HUNDREDS of New lower prices!
            </div>
            <p className="font-inter text-lg mt-3">
              It’s more affordable than ever to give every room in your home a
              stylish makeover
            </p>
            <Link className="text-neutral-900 mt-3 group underline underline-offset-4 flex items-center lg:text-base font-medium font-inter">
              <span className="pr-1 ">More Product</span>
              <ArrowRight className="size-4 cursor-pointer group-hover:translate-x-1 transition-transform duration-100" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-neutral-900 text-white h-72 flex flex-col ">
        <div className="w-[80%] m-auto ">
          <div className="flex justify-between pb-10">
            <div className="flex ">
              <div className="border-r-[1px] b border-r-gray-200 pr-14">
                Quick-Mart
              </div>
              <div className="pl-10 text-gray-200 text-xs font-light">
                Gift & Decoration Store
              </div>
            </div>
            <nav className="flex gap-6">
              <Link className="">Home</Link>
              <Link className="">Shop</Link>
              <Link className="">Product</Link>
              <Link className="">Blog</Link>
              <Link className="">Contact Us</Link>
            </nav>
          </div>
          <div className="flex justify-between py-2 border-t-2 border-neutral-500">
            <div className="flex gap-9">
              <span className="font-poppins text-xs">Copyright © 2023 3legant. All rights reserved</span>
              <span className="font-poppins text-xs font-medium">Privacy Policy</span>
              <span className="font-poppins text-xs font-medium">Terms of Use</span>
            </div>
            <div className="flex gap-5">
              <Instagram />
              <Facebook />
              <Youtube />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
