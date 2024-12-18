import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import ProductDetails from "../pages/ProductDetails";
import Admin from "../pages/Admin";
import Cart from "../pages/Cart";
// import  Router  from './router';

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/products-details/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default Router;
