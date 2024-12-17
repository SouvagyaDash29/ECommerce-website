import React from 'react';
import Chair from '../Assets/chair.png'
import { Outlet, Route, Routes } from 'react-router';
import Signup from './components/Signup';
import Signin from './components/Signin';

const AuthLayout = () => {
  return (
	<div className='flex'>
		 <div className="w-1/2 h-screen bg-gray-100 flex flex-col place-items-center justify-center max-md:hidden">
			  Quick-Mart
			  <img src={Chair} alt="" srcset="" className="w-[64%] object-contain"/>
			  </div>
				<Outlet />
			  {/* <Routes>
				<Route path="/Sign-up" element={<Signup />}/>
				<Route path="/Sign-in" element={<Signin />}/>
			  </Routes> */}
	</div>
  )
}

export default AuthLayout