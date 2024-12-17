import { Route, Router, Routes } from 'react-router';
import './App.css';
import AuthLayout from './Auth/AuthLayout';
import Signin from './Auth/components/Signin';
import Signup from './Auth/components/Signup';
import UserLayout from './components/Client/Pages/UserLayout';
import HomePage from './components/Client/Pages/HomePage';
import Shop from './components/Client/Pages/Shop';
import Product from './components/Client/Pages/Product';
import Contact from './components/Client/Pages/Contact';

function App() {
  return (
    <Routes>
  <Route element={<AuthLayout />}>
    <Route path="/sign-in" index element={<Signin />} />
    <Route path="/sign-up" element={<Signup />} />
  </Route>

  <Route element={<UserLayout />}>
    <Route path="/" index element={<HomePage />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/product" element={<Product />} />
    <Route path="/contact-us" element={<Contact />} />
  </Route>

  
</Routes>
  );
}

export default App;
