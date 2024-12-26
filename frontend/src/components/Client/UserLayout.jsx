import { ArrowRight, TicketPercent, X } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'
import Footer from './components/Footer'

const UserLayout = () => {
  return (
    <div>
      <div className="w-full text-xs tracking-widest bg-gray-100 py-2 font-inter flex justify-center">
          <TicketPercent className="size-4 mr-3" />
          30% off storewide — Limited time!
          <NavLink className="text-blue-500 flex">
            Shop Now
            <ArrowRight className="size-4 cursor-pointer" />
          </NavLink>
          <X className="absolute right-4 size-4 active:text-red-600 cursor-pointer" />
        </div>
        <div className="w-[80%] mx-auto">

        <Navbar />
        </div>
        <Outlet />
        <div className="">

        <Footer />
        </div>
    </div>
  )
}

export default UserLayout