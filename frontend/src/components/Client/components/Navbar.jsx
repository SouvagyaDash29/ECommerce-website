import { CircleUser, Search,  ShoppingBag } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { NavLink } from 'react-router'

const Navbar = () => {
	
	
  return (
	<nav className='flex justify-between py-3'>
		<div className="">
			<Link to='/'>Homedecore</Link>
		</div>
		<ul className="flex gap-14 text-sm font-SpaceGrotesk font-medium">
			<NavLink to="/" className={({ isActive }) => isActive ? "text-neutral-900" : "text-neutral-500"}>
				Home
			</NavLink>
			<NavLink to="/shop" className={({ isActive }) => isActive ? "text-neutral-900" : "text-neutral-500"}>
				Shop
			</NavLink>
			<NavLink to="/product" className={({ isActive }) => isActive ? "text-neutral-900" : "text-neutral-500"}>
				Product
			</NavLink>
			<NavLink to="/contact-us" className={({ isActive }) => isActive ? "text-neutral-900" : "text-neutral-500"}>
				Contact Us
			</NavLink>
			
		</ul>
		<div className="flex gap-5">
			<Search className='size-5' />
			<ShoppingBag className='size-5' />
			<CircleUser className='size-5' />
		</div>
	</nav>
  )
}

export default Navbar