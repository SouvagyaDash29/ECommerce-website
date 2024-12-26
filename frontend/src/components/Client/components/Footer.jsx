import { Book, Facebook, Home, Instagram, Package, PhoneCall, Store, Youtube } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
	<div className="bg-neutral-900 text-white font-inter">
	<div className="w-[80%] mx-auto max-md:flex">
	  <div className="w-full flex max-md:flex-col justify-between py-14 ">
		<div className="flex place-items-center gap-4 max-md:pb-6">
		  <div className="font-poppins font-medium">
			Quick-Mart
		  </div>
		  <hr className="w-4 rotate-90"/>
		  <div className=" text-gray-200 text-sm">
			Gift & Decoration Store
		  </div>
		</div>
		<nav className="flex max-md:flex-col lg:gap-7 gap-4">
		  <Link className="flex items-center gap-3"><Home className="size-4 lg:invisible" />Home</Link>
		  <Link className="flex items-center gap-3"><Store className="size-4 lg:invisible" />Shop</Link>
		  <Link className="flex items-center gap-3"><Package className="size-4 lg:invisible"/>Product</Link>
		  <Link className="flex items-center gap-3"><Book className="size-4 lg:invisible"/>Blog</Link>
		  <Link className="flex items-center gap-3"><PhoneCall className="size-4 lg:invisible"/>Contact Us</Link>
		</nav>
	  </div>
	  <hr className="max-md:invisible"/>
	  <div className=" border-neutral-500 flex max-md:flex-col justify-between lg:pb-8 lg:pt-4 py-14">
		<div className="flex max-md:flex-col gap-6">
		  <span className="font-poppins text-xs">Copyright © 2023 3legant. All rights reserved</span>
		  <span className="font-poppins text-xs font-medium">Privacy Policy</span>
		  <span className="font-poppins text-xs font-medium">Terms of Use</span>
		</div>
		<div className="flex gap-6">
		  <Instagram  />
		  <Facebook />
		  <Youtube />
		</div>
	  </div>
	</div>
	</div>
  );
};

export default Footer;
