import React from "react";
import NavLogo from "../../assets/Morent-logo.svg";


const Footer = () => {
  return (
    <>
      <section className="footer mt-16">
        <div className="container">
          <div className="footer__wrapper flex justify-between items-center px-[60px] py-20 ">
            <div className="flex flex-col gap-4">
              <img
                className="w-[148px]"
                src={NavLogo}
                alt=""
              />
              <p className="font-medium text-[#13131399]">
                Our vision is to provide convenience <br /> and help increase
                your sales business.
              </p>
            </div>
            <div className="flex items-center gap-[60px]">
              <ul className="flex flex-col text-[#1A202C]">
                <p className="font-semibold  text-xl">About</p>
                <li className=" text-base text-[#13131399] mt-6 font-medium">
                  <a href="#">How it works</a>
                </li>
                <li className=" text-base text-[#13131399] mt-6 font-medium">
                  <a href="#">Featured</a>
                </li>
                <li className=" text-base text-[#13131399] mt-6 font-medium">
                  <a href="#">Partnership</a>
                </li>
                <li className=" text-base text-[#13131399] mt-6 font-medium">
                  <a href="#">Bussiness Relation</a>
                </li>
              </ul>
              <ul className="flex flex-col text-[#1A202C]">
                <p className="font-semibold  text-xl">Community</p>
                <li className=" text-base text-[#13131399] mt-6 font-medium">
                  <a href="#">Events</a>
                </li>
                <li className=" text-base text-[#13131399] mt-6 font-medium">
                  <a href="#">Blog</a>
                </li>
                <li className=" text-base text-[#13131399] mt-6 font-medium">
                  <a href="#">Podcast</a>
                </li>
                <li className=" text-base text-[#13131399] mt-6 font-medium">
                  <a href="#">Invite a friend</a>
                </li>
              </ul>
              <ul className="flex flex-col text-[#1A202C]">
                <p className="font-semibold  text-xl">Socials</p>
                <li className=" text-base text-[#13131399] mt-6 font-medium">
                  <a href="#">Discord</a>
                </li>
                <li className=" text-base text-[#13131399] mt-6 font-medium">
                  <a href="#">Instagram</a>
                </li>
                <li className=" text-base text-[#13131399] mt-6 font-medium">
                  <a href="#">Twitter</a>
                </li>
                <li className=" text-base text-[#13131399] mt-6 font-medium">
                  <a href="#">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="px-[60px] pt-9 pb-[60px] flex justify-between items-center">
            <a href="#">
                <span>©2022 MORENT. All rights reserved</span>
            </a>
            <a href="#" className="flex gap-[60px] font-bold text-base text-[#1A202C]">
            <span>Privacy & Policy</span>
            <span>Terms & Condition</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
