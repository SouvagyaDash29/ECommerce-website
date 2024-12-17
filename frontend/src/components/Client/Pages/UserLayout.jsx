import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import {
  ArrowRight,
  CircleUser,
  Contact,
  House,
  Menu,
  Search,
  ShoppingBag,
  Store,
  TicketPercent,
  WalletCards,
  X,
} from "lucide-react";
import { NavLink } from "react-router";

const UserLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <div className="">
        <div className="w-full text-xs tracking-widest bg-gray-100 py-2 font-inter flex justify-center">
          <TicketPercent className="size-4" />
          30% off storewide — Limited time!
          <NavLink className="text-blue-500 flex">
            Shop Now
            <ArrowRight className="size-4 cursor-pointer" />
          </NavLink>
          <X className="absolute right-4 size-4 active:text-red-600 cursor-pointer" />
        </div>

        {/* Navigation bar */}

        <>
          {/* Navbar */}
          <nav className="w-4/5 mx-auto flex justify-between items-center py-4 ">
            {/* Logo */}
            <Link to="/">
              <h1 className="font-inter text-lg">Quick-Mart</h1>
            </Link>

            {/* Desktop NavLinks */}
            <div className="hidden md:flex gap-7 text-sm font-inter font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-neutral-900" : "text-neutral-500"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "text-neutral-900" : "text-neutral-500"
                }
              >
                Shop
              </NavLink>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive ? "text-neutral-900" : "text-neutral-500"
                }
              >
                Product
              </NavLink>
              <NavLink
                to="/Contact-us"
                className={({ isActive }) =>
                  isActive ? "text-neutral-900" : "text-neutral-500"
                }
              >
                Contact Us
              </NavLink>
            </div>

            {/* Icons */}
            <div className="hidden md:flex gap-3">
              <Search className="size-5" />
              <ShoppingBag className="size-5" />
              <CircleUser className="size-5" />
            </div>

            {/* Hamburger Menu */}
            <button
              className="block md:hidden"
              onClick={toggleSidebar}
              aria-label="Toggle Menu"
            >
              {/* {isSidebarOpen ? (
            <X className="text-2xl" />
          ) : ( */}
              <Menu className="text-2xl" />
              {/* )} */}
            </button>
          </nav>

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

            <div className="flex flex-col gap-2 mt-14 px-6 text-sm font-inter font-medium ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 rounded ${
                    isActive ? "bg-white text-neutral-900 hover:bg-white" : "text-neutral-500"
                  } hover:bg-gray-200 flex gap-3`
                }
                onClick={toggleSidebar}
              >
                <House className="size-5" /> Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `px-4 py-2 rounded ${
                    isActive ? "bg-white text-neutral-900 hover:bg-white" : "text-neutral-500"
                  } hover:bg-gray-200 flex gap-3`
                }
                onClick={toggleSidebar}
              >
                <Store className="size-5" />
                Shop
              </NavLink>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  `px-4 py-2 rounded ${
                    isActive ? "bg-white text-neutral-900 hover:bg-white" : "text-neutral-500"
                  } hover:bg-gray-200 flex gap-3`
                }
                onClick={toggleSidebar}
              >
                <WalletCards className="size-5" />
                Product
              </NavLink>
              <NavLink
                to="/Contact-us"
                className={({ isActive }) =>
                  `px-4 py-2 rounded ${
                    isActive ? "bg-white text-neutral-900 hover:bg-white" : "text-neutral-500"
                  } hover:bg-gray-200 flex gap-3`
                }
                onClick={toggleSidebar}
              >
                <Contact className="size-5" /> Contact Us
              </NavLink>
            </div>
          </div>
        </>
      </div>
      <Outlet />
    </div>
  );
};

export default UserLayout;
