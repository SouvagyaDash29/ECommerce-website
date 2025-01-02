import React from "react";
import ShopImg from "../../../Assets/Image Placeholder header.png";
import Dropdown from "../../../Common/Dropdown";
import {
  ChevronDown,
  Grip,
  LayoutGrid,
  StretchHorizontal,
  StretchVertical,
} from "lucide-react";
import ProductItemCarousal from "../../../Common/ProductItemCarousal";

import Toster from "../../../Assets/toster.png";
import BambooBasket from "../../../Assets/Bamboo Basket.png";
import BeigeTableLamp from "../../../Assets/Beige Table Lamp.png";
import TableLamp from "../../../Assets/Table Lamp.jpg";
import LoveseatSofa from "../../../Assets/Loveseat Sofa.png";

const categoryItems = ["Living Room", "Drawing Room", "Kitchen"];
const priceRange = ["100-200", "200-300", "300-400"];

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

const Shop = () => {
  return (
    // section-1
    <div className="w-[80%] mx-auto space-y-8 ">
      <div class="bg-hero-pattern bg-no-repeat bg-cover bg-top  h-[25rem] flex flex-col gap-4 justify-center items-center">
        <span className="font-poppins">{`Home > Shop `}</span>
        <h1 className="font-poppins lg:text-5xl font-medium">Shop Page</h1>
        <span className="font-inter lg:text-xl">
          Let’s design the place you always imagined.
        </span>
      </div>

      {/* section-2 */}
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Dropdown
            items={categoryItems}
            tittle="CATEGORIES"
            placeholder="Select Room"
          />
          <Dropdown
            items={priceRange}
            tittle="PRICE"
            placeholder="Select Price Range"
          />
        </div>
        <div className="flex gap-7">
          <span className="flex items-end gap-2 font-inter font-semibold">
            Sort by <ChevronDown className="size-5" />
          </span>

          <div className="flex self-end gap-4">
            <Grip className="size-5 fill-gray-500 stroke-[4px] stroke-gray-500 " />
            <LayoutGrid className="size-5 fill-gray-500 stroke-gray-500 " />
            <StretchVertical className="size-5 fill-gray-500 stroke-gray-500 " />
            <StretchHorizontal className="size-5 fill-gray-500 stroke-gray-500 " />
          </div>
        </div>
      </div>

      {/* section-3 */}

      <div className="grid grid-cols-5">
        {items.map((Item, index) => (
          <ProductItemCarousal
            key={index}
            name={Item.title}
            img={Item.image}
            price={Item.price}
          />
        ))}
      </div>

      <div className="flex justify-center">

        <button type="button" className="border border-black rounded-full px-9 py-1 hover:bg-black hover:text-white font-inter font-medium">Show more</button>
      </div>


    </div>
  );
};

export default Shop;
