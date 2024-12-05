import React from "react";

const Navbar = () => {
  return (
    <>
    <nav>
      <div className="container">
        <div className="nav__wrapper flex items-center justify-between py-10">
          <div className="nav__menu flex items-center  gap-16">
            <div className="nav__menu__img">
              <img src="src\assets\Morent-logo.svg" alt="nav__logo" />
            </div>
            <div class="nav__menu__search-bar flex items-center gap-[235px] border border-solid border-[#C3D4E966] py-[20px] px-5 rounded-[70px]">
              <div class="icon flex gap-5">
                <img src="src\assets\search-icon.svg" alt="Search Icon" />
                <input type="text" placeholder="Search something here" />
              </div>
              <button class="filter-button">
                <img src="src\assets\filter-icon.svg" alt="Filter Icon" />
              </button>
            </div>
          </div>
          <div className="nav__personal flex items-center gap-5 ">
            <button className=" py-[13px] px-3 rounded-[90px] border border-solid border-[#C3D4E966] opacity-80 ">
              <img src="src\assets\heart-icon.svg" alt="" />
            </button>
            <button className=" py-[10px] px-3 rounded-[90px] border border-solid border-[#C3D4E966] opacity-80 ">
              <img src="src\assets\bell-icon.svg" alt="" />
            </button>
            <button className=" py-[13px] px-3 rounded-[90px] border border-solid border-[#C3D4E966] opacity-80 ">
              <img src="src\assets\settings-icon.svg" alt="" />
            </button>
            <button>
              <img src="src\assets\person logo.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      </nav>
    </>
  );
};

export default Navbar;
