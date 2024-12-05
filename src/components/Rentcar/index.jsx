import React from "react";

const Rentcar = () => {
  return (
    <>
      <section className="rentcar">
        <div className="container">
          <div className="rentcar__wrapper flex  gap-11 items-center">
            <div className="rentcar__card flex w-[582px] bg-white gap-6 items-end rounded-[10px] py-6 px-12 mt-8">
              <div className=" flex flex-col gap-4 items-start ">
                <div className="flex gap-4">
                  <img src="src\assets\marked-icon.svg" alt="" />
                  <p className="font-semibold text-base text-[#1A202C]">
                    Pick - Up
                  </p>
                </div>
                <div className="flex flex-col items-center border-r pr-6  border-r-[#C3D4E966]">
                  <div>
                    <p className="font-bold text-[#1A202C]">Locations</p>
                    <select
                      className="text-[#90A3BF]"
                      name="cities"
                      id="cities"
                    >
                      <option className="" value="">
                        Select your city
                      </option>
                      <option value="">Alabama</option>
                      <option value="">Florida</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-4 items-start border-r pr-6 border-r-[#C3D4E966]">
                <div className="flex flex-col items-center">
                  <div>
                    <p className="font-bold text-[#1A202C]">Date</p>
                    <select
                      className="text-[#90A3BF]"
                      name="cities"
                      id="cities"
                    >
                      <option className="" value="">
                        Select your date
                      </option>
                      <option value="">Alabama</option>
                      <option value="">Florida</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-4 items-start ">
                <div className="flex flex-col items-center">
                  <div>
                    <p className="font-bold text-[#1A202C]">Time</p>
                    <select
                      className="text-[#90A3BF]"
                      name="cities"
                      id="cities"
                    >
                      <option className="" value="">
                        Select your Time
                      </option>
                      <option value="">Alabama</option>
                      <option value="">Florida</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <button className=" p-[18px] bg-[#3563E9] rounded-[10px]  ">
              <img src="src\assets\Swap.svg" alt="" />
            </button>

            <div className="rentcar__card flex w-[582px] bg-white gap-6 items-end rounded-[10px] py-6 px-12 mt-8">
              <div className=" flex flex-col gap-4 items-start ">
                <div className="flex gap-4">
                  <img src="src\assets\marked-icon.svg" alt="" />
                  <p className="font-semibold text-base text-[#1A202C]">
                  Drop - Off
                  </p>
                </div>
                <div className="flex flex-col items-center border-r pr-6  border-r-[#C3D4E966]">
                  <div>
                    <p className="font-bold text-[#1A202C]">Locations</p>
                    <select
                      className="text-[#90A3BF] "
                      name="cities"
                      id="cities"
                    >
                      <option className="" value="">
                        Select your city
                      </option>
                      <option value="">Alabama</option>
                      <option value="">Florida</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-4 items-start border-r pr-6 border-r-[#C3D4E966]">
                <div className="flex flex-col items-center">
                  <div>
                    <p className="font-bold text-[#1A202C]">Date</p>
                    <select
                      className="text-[#90A3BF]"
                      name="cities"
                      id="cities"
                    >
                      <option className="" value="">
                        Select your date
                      </option>
                      <option value="">Alabama</option>
                      <option value="">Florida</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-4 items-start ">
                <div className="flex flex-col items-center">
                  <div>
                    <p className="font-bold text-[#1A202C]">Time</p>
                    <select
                      className="text-[#90A3BF]"
                      name="cities"
                      id="cities"
                    >
                      <option className="" value="">
                        Select your Time
                      </option>
                      <option value="">Alabama</option>
                      <option value="">Florida</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rentcar;
