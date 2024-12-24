import React, { useState } from "react";
import NavLogo from "../../assets/Morent-logo.svg";
import SearchIcon from "../../assets/search-icon.svg";
import FilterIcon from "../../assets/filter-icon.svg";
import HeartIcon from "../../assets/heart-icon.svg";
import BellIcon from "../../assets/bell-icon.svg";
import SettingsIcon from "../../assets/settings-icon.svg";
import PersonLogo from "../../assets/person-logo.svg";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/counterSlice";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Navbar = () => {


  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const cartLength = useSelector((store) => store.cart?.length)

  return (
    <>
      <nav>
        <div className="container">
          <div className="nav__wrapper flex items-center justify-between py-10">
            <div className="nav__menu flex items-center  gap-16">
              <div className="nav__menu__img">
                <NavLink to= "/">
                <img src={NavLogo} alt="nav__logo" />
                </NavLink>
              </div>
              <div className="nav__menu__search-bar flex items-center gap-[235px] border border-solid border-[#C3D4E966] py-[20px] px-5 rounded-[70px]">
                <div className="icon flex gap-5">
                  <img src={SearchIcon} alt="Search Icon" />
                  <input type="text" placeholder="Search something here" />
                </div>
                <button className="filter-button">
                  <img src={FilterIcon} alt="Filter Icon" />
                </button>
              </div>
            </div>
            <div className="nav__personal flex items-center gap-5 ">
              <NavLink to="/admin" >
              <button className=" rounded bg-[#3563E9] py-[10px] px-5 text-white  text-base font-semibold">
                Add products
              </button>
              </NavLink>
              <NavLink to="/cart">
              <button className="relative py-[13px] px-3 rounded-[90px] border border-solid border-[#C3D4E966] opacity-80 ">
              <ShoppingCartIcon />
              <div className="absolute left-[35px] top-[30px] w-[25px] rounded-[30px] bg-[#F95959]">
              {cartLength}
              </div>
              </button>
              </NavLink>
              <button className=" py-[10px] px-3 rounded-[90px] border border-solid border-[#C3D4E966] opacity-80 ">
                <img src={BellIcon} alt="" />
              </button>
              <button className=" py-[13px] px-3 rounded-[90px] border border-solid border-[#C3D4E966] opacity-80 ">
                <img src={SettingsIcon} alt="" />
              </button>
              <button>
                <img src={PersonLogo} alt="" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
