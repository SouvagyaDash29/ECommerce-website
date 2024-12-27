import { CircleUser, Home, Menu, PhoneCall, Search,  ShoppingBag, Store, Wallet2, WalletCards, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router'
import { NavLink } from 'react-router'
import CartItem from './CartItem'

import Table from "../../../Assets/table.png";
import Chair2 from "../../../Assets/chair.png";
import Lamp from "../../../Assets/Table Lamp.jpg";
import Chair from "../../../Assets/Chair2.png";

const Navbar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	  };

	  const toggleCart = () => {
		setIsCartOpen(!isCartOpen);
	  };
	

	  const navPage = [
		{
			name: "Home",
			Link: "/",
			icon: <Home className='size-5 ' />
		},
		{
			name: "Shop",
			Link: "/shop",
			icon: <Store className='size-5' />
		},
		{
			name: "Product",
			Link: "/product",
			icon: <Wallet2 className='size-5' />
		},
		{
			name: "Contact Us",
			Link: "/contact-us",
			icon: <PhoneCall className='size-5' />
		},
	  ];

	  const cartItems = [
		{
		  image: Table,
		  ProductName: "Tray Table",
		  color: "Black",
		  Price: "$19.9",
		},
		{
		  image: Chair2,
		  ProductName: "Chair",
		  color: "Gray",
		  Price: "$299.9",
		},
		{
		  image: Lamp,
		  ProductName: "Tray Table",
		  color: "White",
		  Price: "$49.9",
		},
		{
		  image: Chair,
		  ProductName: "Sofa",
		  color: "Black",
		  Price: "$%00.9",
		},
		{
		  image: Table,
		  ProductName: "Tray Table",
		  color: "Black",
		  Price: "$19.9",
		},
		{
		  image: Chair2,
		  ProductName: "Chair",
		  color: "Gray",
		  Price: "$299.9",
		},
		{
		  image: Lamp,
		  ProductName: "Tray Table",
		  color: "White",
		  Price: "$49.9",
		},
		{
		  image: Chair,
		  ProductName: "Sofa",
		  color: "Black",
		  Price: "$%00.9",
		},
	  
	  ]
	
  return (
	<nav className='flex justify-between items-center py-3 w-[80%] mx-auto'>
		<div className="">
			<Link to='/'>Homedecore</Link>
		</div>
		<ul className="flex gap-x-6 text-sm font-SpaceGrotesk font-medium max-md:hidden">
			{navPage.map((nav, i) =>(
			<NavLink key={i} to={nav.Link} className={({ isActive }) => isActive ? "text-neutral-900" : "text-neutral-500"}>
				{nav.name}
			</NavLink>
			))
}
		</ul>
		<div className="flex gap-5 max-md:hidden">
			<Search className='size-5' />
			<ShoppingBag onClick={toggleCart} className='size-5 cursor-pointer' />
			<CircleUser className='size-5' />
		</div>


			{/* CartItems */}
		{
              <div
                className={`fixed top-0 right-0 h-full w-80 bg-gray-100 overflow-scroll shadow-lg transform ${
                  isCartOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300`}
              >
                <div className="flex sticky justify-between mt-10 px-5">
                <span className="font-poppins text-xl font-medium">Cart</span>
                <button
                  className="  text-2xl"
                  onClick={toggleCart}
                  aria-label="Close Cart"
                >
                  <X className=" stroke-white stroke-[3px] bg-black rounded-2xl size-7 p-1"/>
                </button>
                </div>

                  <div className="mt-10 divide-y divide-neutral-300 px-1 ">
                {cartItems.map((cartItem, i) => (
                  <CartItem img={cartItem.image} Title={cartItem.ProductName} price={cartItem.Price} color={cartItem.color}/>
                ))}
                  </div>
				 </div>
		}

		{/* Menu for sidebar */}
		<button className="block md:hidden"onClick={toggleSidebar}aria-label="Toggle Menu">
			<Menu />
		</button>
		{/* Sidebar */}
		<div
            className={`fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-lg transform ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 md:hidden`}
          >
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={toggleSidebar}
              aria-label="Close Menu"
            >
              <X />
            </button>

            <nav className="flex flex-col gap-2 mt-14 px-6 text-sm font-inter font-medium ">
				{navPage.map((nav, i) => (
              <NavLink
                to={nav.Link}
                className={({ isActive }) =>
                  `px-4 py-2  rounded ${
                    isActive ? "bg-white text-neutral-900 hover:bg-white" : "text-neutral-500"
                  } hover:bg-gray-200 flex gap-3`
                }
                onClick={toggleSidebar}
              >
                {nav.icon}
                {nav.name}
              </NavLink>
				))}
            </nav>
          </div>


	</nav>
  )
}

export default Navbar